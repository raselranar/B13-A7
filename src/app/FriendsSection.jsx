import FriendsCards from "@/components/UI/FriendsCards";
const FriendsSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl/normal font-semibold mb-8">Your Friends</h2>
      {/* all cards */}
      <FriendsCards />
    </section>
  );
};
export default FriendsSection;
