import { createBrowserRouter, Link } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Login from "../components/authLayout/Login";
import Register from "../components/authLayout/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading />
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      },
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails/>
    </PrivateRoute> ,
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading />
  },
  {
    path: "/*",
    element: <div className="text-5xl font-bold text-center mt-[30%] text-red-500">Error 404 <br /> Page Not Found <br /> <Link to={'/'} className="btn btn-primary mt-20 text-xl">Back to Home</Link></div>,
  },
]);

export default router;
