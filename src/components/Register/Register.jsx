import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../context/AuthCountext";

const Register = () => {
  const [ error, setError ] = useState();
  const { createAccountWithPassword, googleSignIn, gitHubSignIn } = useContext(UserAuthContext);
  
  const handleAccountWithPassword = (event) =>
  {
    event.preventDefault()
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    createAccountWithPassword(email, password)
      .then(result =>
      {
        console.log(result.user);
      })
      .catch(error =>
      {
        setError(error.message);
        console.error(error.message);
      })
    form.reset();
  }
  
  
  
  const handleGoogleSignIn = () =>
  {
    googleSignIn()
      .then(()=>{})
      .catch(error =>
      {
        console.log(error.message);
      })
  }

  const handleGitHubSignIn = () =>
  {
    gitHubSignIn()
      .then(result =>
      {
        console.log(result.user);
      })
      .catch(error =>
      {
        console.error(error.message);
      });
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className=" text-4xl font-semibold mb-10">Create Your Account</h2>
      <form
        onSubmit={handleAccountWithPassword}
        className="w-80 md:min-w-[35rem] bg-white px-5 py-10 shadow rounded-md dark:bg-slate-800"
      >
        <div className="mb-5">
          <label className="input input-bordered flex items-center gap-2 mb-5 dark:bg-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Name"
            />
          </label>
          <div className="mb-5">
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <p className="text-red-500">{error}</p>
          </div>
          <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
            />
          </label>
          <div className="flex items-center justify-end text-violet-700">
            <Link to="/Login">Already have an account?</Link>
          </div>
        </div>
        <div className="flex items-center justify-center mb-5">
          <button className="dark:bg-slate-900 bg-black text-white rounded-lg font-medium py-3 px-10">
            Sign Up
          </button>
        </div>
        <div className="flex items-center justify-between mb-5">
          <span className="w-full h-1 bg-black dark:bg-white"></span>
          <p className="text-center mx-5">Or</p>
          <span className="w-full h-1 bg-black dark:bg-white"></span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link
            onClick={handleGoogleSignIn}
            className="w-36 border-2 dark:border-slate-500 flex items-center gap-2 rounded-full p-1 font-medium dark:bg-slate-900 mb-5"
          >
            <FcGoogle className="w-10 h-10" />
            Login with
          </Link>
          <Link
            onClick={handleGitHubSignIn}
            className="w-36 border-2 dark:border-slate-500 flex items-center gap-2 rounded-full p-1 font-medium dark:bg-slate-900"
          >
            <FaGithub className="w-10 h-10" />
            Login with
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
