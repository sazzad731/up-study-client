import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserLarge, FaXmark } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../../context/ThemeContext";
import { UserAuthContext } from "../../context/AuthCountext";
import toast from "react-hot-toast";

const Header = () => {
  const { theme, setTheme } = useContext(ToggleTheme);
  const [ navActive, setNavActive ] = useState(false);
  const { user, userSignOut } = useContext(UserAuthContext);
  useEffect(() =>
  {
    if (theme === "dark")
    {
      document.documentElement.classList.add("dark")
    } else
    {
      document.documentElement.classList.remove("dark");
    }
  }, [ theme ])
  
  const handleTheme = () =>
  {
    setTheme(theme === "dark"?"light":"dark")
  }

  const handleUserSignOut = () =>
  {
    userSignOut()
      .then(() =>
      {
      toast.success("Successful log out")
      })
      .catch(error =>
      {
        console.error(error.message);
    })
  }

  return (
    <div className="navbar bg-base-100 dark:bg-black py-3">
      <div className="flex-1">
        <Link to="/">
          {theme === "dark" ? (
            <img
              className="w-32 sm:w-44"
              src="../../../src/assets/image/logo/white-logo.png"
              alt="brand"
            />
          ) : (
            <img
              className="w-32 sm:w-44"
              src="../../../src/assets/image/logo/dark-logo.png"
              alt="brand logo"
            />
          )}
        </Link>
      </div>

      {/* Nav burger */}
      <div onClick={() => setNavActive(!navActive)} className="sm:hidden">
        {navActive ? (
          <FaXmark className="w-7 h-7 dark:text-white" />
        ) : (
          <FaBars className="w-7 h-7 dark:text-white" />
        )}
      </div>

      <div
        className={`flex sm:flex-row flex-col-reverse absolute transform top-16 ${
          navActive
            ? "right-0 translate-x-0"
            : "translate-x-full sm:translate-x-0"
        } transition sm:transition-none ease-in-out duration-500 bg-white dark:bg-black dark:text-white sm:static justify-between sm:items-center items-end w-full sm:px-0 px-3 sm-px-0 py-5 sm:py-0 sm:w-[450px] sm:gap-2 gap-5 dark:border-y-2 sm:border-none border-gray-800 z-10`}
      >
        <ul className="flex flex-col sm:flex-row justify-between items-end sm:items-center w-3/5 sm:me-10 sm:gap-0 gap-5">
          <li className="">
            <NavLink
              to="/courses"
              className="hover:border-b-2 border-black dark:border-white transition-colors font-bold"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive
                    ? theme === "dark"
                      ? "2px solid white"
                      : "2px solid black"
                    : "",
                };
              }}
            >
              Courses
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/faq"
              className="hover:border-b-2 border-black dark:border-white transition-colors font-bold"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive
                    ? theme === "dark"
                      ? "2px solid white"
                      : "2px solid black"
                    : "",
                };
              }}
            >
              FAQ
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/blog"
              className="hover:border-b-2 border-black dark:border-white transition-colors font-bold"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive
                    ? theme === "dark"
                      ? "2px solid white"
                      : "2px solid black"
                    : "",
                };
              }}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="sm:me-5 w-auto">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              onClick={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <FaUserLarge className="w-10 h-10" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box sm:w-52 dark:bg-slate-900"
            >
              <li>
                <a className="justify-between dark:hover:bg-slate-700">
                  {user.displayName}
                  <span className="badge">Profile</span>
                </a>
              </li>
              <li>
                <a className="dark:hover:bg-slate-700">Settings</a>
              </li>
              <li>
                <a
                  onClick={handleUserSignOut}
                  className="dark:hover:bg-slate-700"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-black text-white dark:bg-slate-800 font-medium py-2 px-4 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;