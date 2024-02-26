import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/Index";
import Courses from "../components/ Courses/Courses";
import FAQ from "../components/FAQ/FAQ";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/courses',
        element: <Courses/>,
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/blog",
        element: <Blog/>
      }
    ]
  }
]);
