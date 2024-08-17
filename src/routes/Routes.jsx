import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Root from "../layout/Root";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import CreateProduct from "../pages/create-product/CreateProduct";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
    children: [
      {
        path: "/",
        element:<PrivateRoute><Home></Home></PrivateRoute>,
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
        element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>,
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
