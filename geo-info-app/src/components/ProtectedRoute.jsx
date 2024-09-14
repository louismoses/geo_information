import React from "react";
import { Navigate } from "react-router-dom";
import useUserStore from "../store/useUserStore";

const ProtectedRoute = ({ element }) => {
  const { token } = useUserStore();

  if (!token) {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
