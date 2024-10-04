import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRedirect = () => {
  const token = Cookies.get("token");
  return <Navigate to={token ? "/home" : "/login"} />;
};

export default AuthRedirect;
