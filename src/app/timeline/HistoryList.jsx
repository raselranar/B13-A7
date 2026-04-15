import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { LiaCommentDots } from "react-icons/lia";

const HistoryList = ({ timeLines, filterQuery }) => {
  const icon = {
    call: <FiPhoneCall />,
    text: <LiaCommentDots />,
    video: <HiOutlineVideoCamera />,
  };

  return timeLines
    .filter(({ type }) => (filterQuery ? type === filterQuery : true))
    .map(({ formattedDate, title, type, name }, i) => (
      <li key={i} className="list-row flex items-center shadow-sm bg-base-100">
        <div className="text-2xl">{icon[type]}</div>
        <div className="font-medium text-gray-500 text-xl">
          <div>
            <span className="text-success-content">{title}</span> with {name}
          </div>
          <div>{formattedDate}</div>
        </div>
      </li>
    ));
};
export default HistoryList;
