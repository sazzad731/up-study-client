import { Link, useLoaderData } from "react-router-dom";
import Collapse from "./Collapse/Collapse";

const CourseDetails = () => {
  const selected = useLoaderData();
  const { title, details, topic } = selected;
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-center mb-10">{title}</h2>
        <p className="mb-10 text-justify">{details}</p>
        <div className="text-center">
          <Link to="/checkout" className="bg-black dark:bg-slate-800 text-white text-lg font-medium py-5 px-7 rounded-full">
            Get premium access
          </Link>
        </div>
      </div>
      <div>
        <p className=" text-xl font-medium mb-5">Courses</p>
        {topic.map((detail, ind) => (
          <Collapse detail={detail} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;