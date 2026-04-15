const TagsList = ({ tags }) => {
  return tags.map((tag, i) => (
    <div
      key={i}
      className="badge bg-green-100 rounded-2xl text-success-content">
      {tag}
    </div>
  ));
};
export default TagsList;
