import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { LiaCommentDots } from "react-icons/lia";

const HistoryList = ({ data, filterQuery }) => {
  const icon = {
    call: <FiPhoneCall />,
    text: <LiaCommentDots />,
    video: <HiOutlineVideoCamera />,
  };

  // filter timeline
  const filteredTimeline = data.filter(({ type }) =>
    filterQuery ? type === filterQuery : true,
  );

  // show empty if timeline not found
  if (filteredTimeline.length === 0) {
    return (
      <div className="flex justify-center flex-1 items-center text-2xl mt-4 sm:text-5xl text-gray-500 min-h-20">
        There is no Timeline
      </div>
    );
  }

  return filteredTimeline.map(({ formattedDate, title, type, name }, i) => (
    <li key={i} className="list-row flex items-center shadow-sm bg-base-100">
      <div className="text-2xl">{icon[type]}</div>
      <div className="font-medium text-gray-500 text-base sm:text-xl">
        <div>
          <span className="text-success-content">{title}</span> with {name}
        </div>
        <div>{formattedDate}</div>
      </div>
    </li>
  ));
};
export default HistoryList;
