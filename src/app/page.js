import Banner from "@/components/UI/Banner";
import FriendsSection from "./FriendsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <hr className="my-10 bg-gray-300 border-none h-px" />
      <FriendsSection />
    </>
  );
}
