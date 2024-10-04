import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthRedirect from "../components/AuthRedirect";

const routes = [
  {
    path: "/",
    element: <AuthRedirect />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
