import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Landing from "../pages/Landing";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import UserLogin from "../pages/UserLogin";
import UserRegister from "../pages/UserRegister";
import Explore from "../pages/Explore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/explore", element: <Explore /> },
    ],
  },
  {
    path: "/user/login",
    element: <UserLogin />,
  },
  {
    path: "/user/register",
    element: <UserRegister />,
  },
]);
const AddRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AddRoutes;
