import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "../pages/Login";

const AuthRedirect = ({ children }) => {
  const token = Cookies.get("token");
  const location = useLocation();
  // Check if the user is logged in
  if (token) {
    if (location.pathname === "/") {
      return <Navigate to="/home" />;
    }
    return children;
  }
  // If there's no token and the user is not logged in, redirect to login page
  return <Login />;
};

export default AuthRedirect;
