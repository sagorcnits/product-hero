import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CreateProduct from "../pages/create-product/CreateProduct";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/create-product",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
