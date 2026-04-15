"use client";
import Loading from "@/components/UI/Loading";
import TagsList from "@/components/UI/TagsList";
import { useFriendsData } from "@/context/FriendsProvider";
import Image from "next/image";
import { RiDeleteBinLine, RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchiveDuotone } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { LiaCommentDots } from "react-icons/lia";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { toast } from "react-toastify";

const FriendDetails = ({ friendId }) => {
  const { friendsData, loading, setTimeLines } = useFriendsData();
  if (loading) return <Loading />;
  const {
    name,
    picture,
    tags,
    days_since_contact,
    goal,
    next_due_date,
    status,
    bio,
    email,
  } = friendsData.find((friend) => String(friend.id) === friendId);

  let statusStyle = {
    "on-track": "bg-success-content",
    overdue: "bg-red-400",
    "almost due": "bg-yellow-500",
  };

  // handle click
  const handleCheckIn = (type, name) => {
    const action = type.charAt(0).toUpperCase() + type.slice(1);
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-Us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    toast.success(`${action} with ${name}`);
    setTimeLines((prev) => [
      ...prev,
      { formattedDate, title: action, type, name },
    ]);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* friend info card left column */}
      <div className="">
        <div className="card bg-base-100 shadow-sm py-4">
          <figure>
            <Image
              width={90}
              height={90}
              className="rounded-full"
              src={picture}
              alt={name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">{name}</h2>
            {/* status */}
            <div
              className={`${statusStyle[status.toLowerCase()]} mx-auto mt-2 badge text-white capitalize rounded-2xl`}>
              {status}
            </div>
            {/* tags */}
            <div className="flex uppercase flex-wrap gap-2 justify-center">
              <TagsList tags={tags} />
            </div>
            {/* bio */}
            <p className="text-gray-500 font-medium text-center">
              <em>{`"${bio}"`}</em>
            </p>
            {/* email */}
            <p className="text-gray-500 text-center">{email}</p>
          </div>
        </div>
        {/* action Buttons */}
        <div className="flex gap-2 flex-col mx-auto mt-2">
          <button className="btn btn-block bg-base-100 font-medium text-base">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
          <button className="btn btn-block bg-base-100 font-medium text-base">
            <PiArchiveDuotone /> Archive
          </button>
          <button className="btn btn-block bg-base-100 font-medium text-red-400 text-base">
            <RiDeleteBinLine /> Delete
          </button>
        </div>
      </div>
      {/* more info right column */}
      <div className="sm:col-span-2 space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-6 *:w-full *:h-full place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-sm p-8 text-center">
            <p className="text-success-content font-semibold text-3xl/relaxed">
              {days_since_contact}
            </p>
            <h3 className="text-gray-500 text-lg">Days Since Contact</h3>
          </div>
          <div className="card bg-base-100 shadow-sm p-8 text-center">
            <p className="text-success-content font-semibold text-3xl/relaxed">
              3
            </p>
            <h3 className="text-gray-500 text-lg">Goal (Days)</h3>
          </div>
          <div className="card bg-base-100 shadow-sm p-8 text-center">
            <p className="text-success-content font-semibold text-3xl/relaxed">
              {next_due_date}
            </p>
            <h3 className="text-gray-500 text-lg">Next Due</h3>
          </div>
        </div>
        {/* Relationship Goal Card */}
        <div className="card bg-base-100 shadow-sm">
          <div className="flex justify-between items-center p-4">
            <h4 className="font-medium text-xl/snug text-success-content">
              Relationship Goal
            </h4>
            <button className="btn rounded-xl">Edit</button>
          </div>
          <div className="p-4">
            <p className="text-lg">
              <span className="text-gray-400">Connect every</span>{" "}
              <b>30 days</b>
            </p>
          </div>
        </div>
        {/* Quick Check-In Card */}
        <div className="card bg-base-100 shadow-sm p-4">
          <h4 className="font-medium text-xl/snug text-success-content mb-4">
            Quick Check-In
          </h4>
          <div className="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-2">
            <button
              onClick={() => handleCheckIn("call", name)}
              className="shadow-sm btn flex-col btn-block gap-4 h-full p-8 ">
              <p className="text-3xl">
                <FiPhoneCall />
              </p>
              <h3 className="text-gray-500 text-lg">Call</h3>
            </button>
            <button
              onClick={() => handleCheckIn("text", name)}
              className="btn flex-col btn-block shadow-sm p-8 h-full gap-4">
              <p className="text-3xl">
                <LiaCommentDots />
              </p>
              <h3 className="text-gray-500 text-lg">Text</h3>
            </button>
            <button
              onClick={() => handleCheckIn("video", name)}
              className="btn flex-col btn-block h-full shadow-sm p-8 gap-4">
              <p className="text-3xl">
                <HiOutlineVideoCamera />
              </p>
              <h3 className="text-gray-500 text-lg">Video</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FriendDetails;
