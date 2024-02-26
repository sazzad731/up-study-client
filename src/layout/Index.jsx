import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const index = () => {
  return (
    <div className="overflow-hidden dark:bg-black">
      <header className="w-full drop-shadow-lg bg-white dark:bg-black dark:border-b-2 border-gray-800 mb-10">
        <div className="xl:w-4/5 w-full mx-auto">
          <Header />
        </div>
      </header>
      <main>
        <section className="max-xl:w-full w-4/5 mx-auto dark:text-white px-3">
          <Outlet />
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default index;