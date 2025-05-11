import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const navLinks = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Products", path: "/products" },
    { label: "Orders", path: "/orders" },
    { label: "Customers", path: "/users" },
    { label: "Categories & Collections", path: "/categories" },
    { label: "Inventory", path: "/inventory" },
    { label: "Coupons & Promotions", path: "/coupons" },
    { label: "Reviews", path: "/reviews" },
    { label: "Returns & Refunds", path: "/returns" },
    { label: "Shipping & Logistics", path: "/shipping" },
    { label: "Vendors", path: "/vendors" },
    { label: "CMS", path: "/cms" },
    { label: "Reports & Analytics", path: "/reports" },
    { label: "User Roles", path: "/roles" },
    { label: "Notifications", path: "/notifications" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex h-screen flex-col justify-between border-r border-gray-200 bg-white">
      <div className="px-4 py-6">
        <span className="flex h-10 w-full items-center justify-center rounded-lg bg-green-200/60 text-lg font-medium text-green-600">
          Retail Store
        </span>

        <ul className="mt-6 space-y-1 text-sm font-medium text-gray-600">
          {navLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={`block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800 ${
                    isActive ? "bg-gray-400/50 text-gray-900 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-200 bg-white">
        <a href="#" className="flex items-center gap-3 p-4 hover:bg-gray-50">
          <img
            alt="User avatar"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1770&q=80"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs">
              <strong className="block font-medium text-gray-800">
                Admin Name
              </strong>
              <span className="text-gray-600">admin@store.com</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
