import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData()
  console.log(course);
  return (
    <div className="h-screen flex items-center flex-col">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-5">{course.title}</h1>
      <img className="md:w-1/2 w-full mx-1 md:mx-0" src={course.thumbnail_url} alt="thumbnail" />
    </div>
  );
};

export default Checkout;