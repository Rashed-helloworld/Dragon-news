import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading} = use(AuthContext);
  // const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loading />;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/auth/login"} />;
};

export default PrivateRoute;
