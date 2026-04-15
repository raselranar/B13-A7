const { default: FriendDetails } = require("./FriendDetails");

const page = async ({ params }) => {
  const { friendId } = await params;
  return <FriendDetails friendId={friendId} />;
};
export default page;
