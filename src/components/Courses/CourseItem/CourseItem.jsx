import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard/ItemCard";

const CourseItem = () => {
  const categoryCourses = useLoaderData();
  const { allCourse, activeCategories } = useOutletContext();
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-20">
        {activeCategories === "" ? "All Courses" : activeCategories}
      </h1>
      {categoryCourses === undefined
        ? allCourse.map((item) => (
            <Link to={`/courses/detail/${item._id}`} key={item._id}>
              <ItemCard item={item} />
            </Link>
          ))
        : categoryCourses?.map((item) => (
            <Link to={`/courses/detail/${item._id}`} key={item._id}>
              <ItemCard item={item} />
            </Link>
          ))}
    </div>
  );
};

export default CourseItem;
