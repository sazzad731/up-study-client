import { FaStar, FaEye } from "react-icons/fa6";
const ItemCard = ({ item }) => {
  return (
    <div className="flex items-center mb-10 shadow-xl rounded-lg p-3 dark:bg-slate-900">
      <img
        className="w-52 rounded-lg me-5 h-52 object-cover"
        src={item.thumbnail_url}
        alt="thumbnail"
      />
      <div>
        <p className="text-xl font-semibold mb-2">{item.title}</p>
        <p className="font-medium">Created by: {item.author.name}</p>
        <p className="mb-5">{item.details.slice(0, 200)}...</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center mt-auto">
            <FaStar className=" text-yellow-500 me-1" /> {item.rating.number}
          </span>
          <span className="flex items-center">
            {item.total_view} <FaEye className="ms-2" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
