import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const ProtectedRoute = ({ element }) => {
  if (!token) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
