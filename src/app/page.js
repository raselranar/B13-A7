import Banner from "@/components/UI/Banner";
import FriendsSection from "./FriendsSection";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="divider my-15"></div>
      <FriendsSection />
    </>
  );
}
