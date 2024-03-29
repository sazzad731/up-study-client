import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/Index";
import Courses from "../components/Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import CourseDetails from "../components/Courses/CourseDetails/CourseDetails";
import CourseItem from "../components/Courses/CourseItem/CourseItem";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../components/Checkout/Checkout";
import Error404 from "../components/Error404/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        loader: () => {
          return fetch("https://upstudy-server.vercel.app/category/0");
        },
        element: <Courses />,
        children: [
          {
            path: "/courses",
            element: <CourseItem />,
          },
          {
            path: "/courses/:id",
            loader: ({ params }) => {
              return fetch(
                `https://upstudy-server.vercel.app/category/${params.id}`
              );
            },
            element: <CourseItem />,
          },
        ],
      },
      {
        path: "/courses/detail/:id",
        loader: ({ params }) => {
          return fetch(`https://upstudy-server.vercel.app/course/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/courses/chackout/:id",
        loader: ({ params }) => {
          return fetch(`https://upstudy-server.vercel.app/course/${params.id}`);
        },
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/blog",
        loader: () =>
        {
          return fetch("https://upstudy-server.vercel.app/blog");
        },
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404/>
  }
]);
