const { default: FriendDetails } = require("./FriendDetails");

// metadata
export const metadata = {
  title: "Details | KeenKeeper",
  description: "Show more details about a Friend",
};

const page = async ({ params }) => {
  const { friendId } = await params;
  return <FriendDetails friendId={friendId} />;
};
export default page;
