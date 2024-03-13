import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ToggleTheme } from "../../../context/ThemeContext";

const SideBar = ({ setActiveCategories }) => {
  const [categories, setCategories] = useState([]);
  const { theme } = useContext(ToggleTheme);
  const url = useLocation();
  useEffect(() => {
    fetch("https://upstudy-server.vercel.app/course-categories")
      .then((res) => res.json())
      .then((result) => setCategories(result));
  }, []);
  
  useEffect(() => {
    const path = url.pathname.split("/");
    const pathId = path[ path.length - 1 ];
    const selected = categories.find((item) => item.id === pathId);
    selected === undefined ? setActiveCategories("") : setActiveCategories(selected?.name);
  }, [url, categories, setActiveCategories]);



  return (
    <div className="flex flex-col h-screen w-72">
      <h2 className="text-3xl font-semibold mb-10 underline text-center">
        Categories
      </h2>
      {categories.map((item) => (
        <NavLink
          onClick={() => setActiveCategories(item.name)}
          to={`/courses/${item.id}`}
          key={item.id}
          className="mb-10 rounded-xl text-center text-slate-500 text-lg font-medium"
          style={({ isActive }) => {
            return {
              color: isActive ? (theme === "dark" ? "#fff" : "#000") : "",
            };
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default SideBar;