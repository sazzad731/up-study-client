import { Outlet, useLoaderData } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useState } from "react";

const Courses = () => {
  const allCourse = useLoaderData()
  const [ activeCategories, setActiveCategories ] = useState("");
  return (
    <div className="flex gap-10">
      <div>
        <SideBar setActiveCategories={setActiveCategories} />
      </div>
      <div>
        <Outlet context={{ allCourse, activeCategories }} />
      </div>
    </div>
  );
};

export default Courses;