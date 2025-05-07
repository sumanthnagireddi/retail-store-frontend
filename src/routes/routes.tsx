import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import User from "../pages/User";
import Roles from "../pages/Roles";

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block overflow-auto w-full lg:max-w-[20vw]">
        <Sidebar />
      </div>
      <div className="flex-1 pt-20  max-h-[97vh] overflow-y-auto px-6">
        <Outlet />
      </div>
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path:"users",
        element: <User />, 
      },
      {
        path:"roles",
        element: <Roles />, 
      },
    ],
  },
]);
