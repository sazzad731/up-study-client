import { useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogContent = useLoaderData();
  return (
    <div className="h-screen">
      {
        blogContent.map(item =>
        {
          return (
            <div
              key={item.id}
              className="collapse collapse-arrow border border-base-300 dark:border-slate-800 bg-base-200 dark:bg-zinc-900 mb-3"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {item.title}
              </div>
              <div className="collapse-content">{item.about}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Blog;