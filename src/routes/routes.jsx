import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import User from "../pages/User";
import Roles from "../pages/Roles";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import { Header } from "../components/Navbar";

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  return (
    <div className="flex relative">
    {/* Sidebar */}
    <div className="hidden lg:block overflow-auto w-full lg:max-w-[20vw]">
      <Sidebar />
    </div>
  
    {/* Main content */}
    <div className="flex-1 max-h-[97vh] overflow-y-auto">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-white shadow-none">
        <Header />
      </div>
  
      {/* Page content */}
      <div className="px-6 py-4 space-y-6">
        <Outlet />
      </div>
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
      {
        path:"orders",
        element: <Orders />, 
      },
      {
        path:"products",
        element: <Products />, 
      },
    ],
  },
]);
