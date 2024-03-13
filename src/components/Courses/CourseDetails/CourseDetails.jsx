import { useLoaderData } from "react-router-dom";
import Collapse from "./Collapse/Collapse";

const CourseDetails = () => {
  const selected = useLoaderData();
  const { title, details, topic } = selected;
  // console.log(selected)
  // console.log(topic)
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-center mb-10 text-center">
          {title}
        </h2>
        <p>{details}</p>
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