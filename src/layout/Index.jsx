import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const index = () => {
  return (
    <div className="overflow-hidden dark:bg-black">
      <header className="w-full drop-shadow-lg bg-white dark:bg-black dark:border-b-2 border-gray-800">
        <div className="xl:w-4/5 w-full mx-auto">
          <Header />
        </div>
      </header>
      <main className=" bg-slate-50 dark:bg-black pt-10">
        <section className="max-xl:w-full w-4/5 mx-auto dark:text-white px-3">
          <Outlet />
        </section>
      </main>
      <footer className="bg-slate-50 dark:bg-black">
        <Footer />
      </footer>
    </div>
  );
};

export default index;