import { useContext } from "react";
import { ToggleTheme } from "../../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ToggleTheme);
  return (
    <div className="pb-10">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-bold mb-10 text-5xl lg:text-7xl">
            <span className="text-red-500">Hands-On</span>
            <br /> Learning
          </h1>
          <p className=" font-medium">
            Dive deep into the world's most popular It technologies
            <br /> through practical, hands-on tutorials that take you <br />
            step-by-step through the creative process.
          </p>
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
    </div>
  );
};

export default Home;