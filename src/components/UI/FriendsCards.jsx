"use client";
import { useFriendsData } from "@/context/FriendsProvider";
import Loading from "./Loading";
import Image from "next/image";
import TagsList from "./TagsList";
import Link from "next/link";

const Card = ({ friend }) => {
  const { name, picture, email, tags, days_since_contact, status, id } = friend;
  let statusStyle = {
    "on-track": "bg-success-content",
    overdue: "bg-red-400",
    "almost due": "bg-yellow-500",
  };

  // if (status.toLowerCase() === "on-track")
  //   statusStyleClass = "";
  return (
    <Link href={`/friend/${id}`}>
      <div className="card bg-base-100 h-full shadow-sm py-6">
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
          <p className="text-gray-500 text-center">{days_since_contact}d ago</p>
          {/* tags */}
          <div className="flex uppercase flex-wrap gap-2 justify-center">
            <TagsList tags={tags} />
          </div>
          {/* status */}
          <div
            className={`${statusStyle[status.toLowerCase()]} mx-auto mt-2 badge text-white capitalize rounded-2xl`}>
            {status}
          </div>
        </div>
      </div>
    </Link>
  );
};

const FriendsCards = () => {
  const { friendsData, loading } = useFriendsData();
  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {friendsData.map((friend) => (
        <Card key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default FriendsCards;
