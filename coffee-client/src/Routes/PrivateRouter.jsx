import React, { use } from "react";
import { AuthContext } from "./../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/signin" />;
  }
  return children;
};

export default PrivateRouter;
