import { Link } from "react-router-dom";

const MenuCard = ({ items }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4 flex flex-col">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="text-gray-600 hover:text-black my-4 text-xl font-bold flex justify-start gap-3 hover:cursor-pointer"
        >
          <span className={`material-icons-outlined float-left`}>
            {item.icon}
          </span>
          {item.label}
        </Link>
      ))}
    </div>
  );
};
export default MenuCard;
