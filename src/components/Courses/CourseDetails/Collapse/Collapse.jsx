import { Link } from "react-router-dom";

const Collapse = ({detail}) => {
  const { topic_title, topic_details } = detail;
  // console.log(topic_details)
  return (
    <div className="collapse collapse-arrow border border-base-300 dark:border-slate-800 bg-base-200 dark:bg-zinc-900 mb-3">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{topic_title}</div>
      <div className="collapse-content">
        {
          topic_details.map((item, ind) =>
          {
            return (
              <Link key={ind} className="flex items-center mb-5 bg-white dark:bg-slate-800 p-2 rounded-md">
                <img className='w-20 me-5' src={item.lesson_thumbnail} alt="" />
                <p>{item.lesson_title}</p>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Collapse;