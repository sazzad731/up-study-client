import { useContext } from "react";
import { ToggleTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(ToggleTheme);
  return (
    <div className="pb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-20">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-bold mb-10 text-5xl lg:text-7xl">
            <span className="text-red-500">Hands-On</span>
            <br /> Learning
          </h1>
          <p className="font-medium mb-16">
            Dive deep into the world's most popular It technologies
            <br /> through practical, hands-on tutorials that take you <br />
            step-by-step through the creative process.
          </p>
          <Link className="py-5 px-8 bg-black text-white dark:bg-white dark:text-black rounded-full">
            LEARN MORE
          </Link>
        </div>
        <div className="w-[40rem]">
          {/* hero image */}
          {theme === "dark" ? (
            <img
              className="w-1/2 sm:w-[30rem] mx-auto z-[1]"
              src="../../../src/assets/image/dark-hero-img.png"
              alt="hero image"
            />
          ) : (
            <img
              className="w-1/2 sm:w-[30rem] mx-auto z-[1]"
              src="../../../src/assets/image/ligh-hero-img.png"
              alt="hero image"
            />
          )}
        </div>
      </div>

      {/* cards */}
      <div>
        <h2 className="text-5xl font-semibold text-center mb-20">Top Courses</h2>
        <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 place-items-center dark:text-black">
          <div className="text-center w-80 pt-10 pb-14 px-5 bg-gradient-to-t from-rose-300 to-rose-100 rounded-3xl">
            <h5 className="text-2xl font-semibold mb-5">HTML</h5>
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-t from-rose-600 to-rose-400 rounded-full shadow-2xl shadow-red-600">
                <img
                  className="w-1/2"
                  src="../../../src/assets/image/html.png"
                  alt=""
                />
              </div>
            </div>
            <p className="mb-10 text-sm">
              HTML stands for Hypertext Markup Language. It's a scripting
              language used to create web pages.
            </p>
            <Link className="py-4 px-6 bg-white dark:text-black rounded-full">
              Learn more
            </Link>
          </div>

          <div className="text-center w-80 pt-10 pb-14 px-5 bg-gradient-to-t from-violet-200 to-pink-100 rounded-3xl">
            <h5 className="text-2xl font-semibold mb-5">css</h5>
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-t from-violet-800 to-rose-200 rounded-full shadow-2xl shadow-violet-700">
                <img
                  className="w-2/4"
                  src="../../../src/assets/image/css.png"
                  alt=""
                />
              </div>
            </div>
            <p className="mb-10 text-sm">
              HTML stands for Hypertext Markup Language. It's a scripting
              language used to create web pages.
            </p>
            <Link className="py-4 px-6 bg-white dark:text-black rounded-full">
              Learn more
            </Link>
          </div>

          <div className="text-center w-80 pt-10 pb-14 px-5 bg-gradient-to-t from-orange-200 to-yellow-100 rounded-3xl">
            <h5 className="text-2xl font-semibold mb-5">JavaScript</h5>
            <div className="flex items-center justify-center mb-5">
              <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full shadow-2xl shadow-orange-600">
                <img
                  className="w-1/2"
                  src="../../../src/assets/image/javaScript.png"
                  alt=""
                />
              </div>
            </div>
            <p className="mb-10 text-sm">
              JavaScript is a scripting or programming language that allows you
              to implement complex features on web pages
            </p>
            <Link className="py-4 px-6 bg-white dark:text-black rounded-full">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;