import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between border-r border-gray-200 bg-white">
      {/* Logo Section */}
      <div className="px-4 py-6">
        <span className="flex h-10 w-full items-center justify-center rounded-lg bg-green-200/60 text-lg font-medium text-green-600">
          Retail Store
        </span>

        {/* Navigation Links */}
        <ul className="mt-6 space-y-1 text-sm font-medium text-gray-600">
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Orders
            </a>
          </li>
          <li>
            <Link to={"users"}>
              <span className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800">
                Customers
              </span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Categories & Collections
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Inventory
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Coupons & Promotions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Returns & Refunds
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Shipping & Logistics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Vendors
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              CMS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Reports & Analytics
            </a>
          </li>
          <li>
          <Link to={"roles"}>
              <span className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800">
               User Roles
              </span>
            </Link>
           
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100 hover:text-gray-800"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* User Profile Section */}
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
