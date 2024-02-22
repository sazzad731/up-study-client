import {createBrowserRouter} from "react-router-dom";
import Header from "../components/Header/Header";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>
  }
]);
