import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthRedirect from "../components/AuthRedirect";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
];

export default routes;
