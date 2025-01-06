import React from "react";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

function Navbar({ cartCount }) {
  const { authUser, setAuthUser, authAdmin, setAuthAdmin } = useAuth();

  const navItems = (
    <>
      {!authAdmin && (
        <li>
          <a href="/">Home</a>
        </li>
      )}
      {!authAdmin ? (
        <li>
          <a href="/adminregister">Register</a>
        </li>
      ) : null}
      {!authAdmin && (
        <li>
          <a href="/contact">Contact</a>
        </li>
      )}
      {!authAdmin && (
        <li>
          <a href="/about">About</a>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    localStorage.removeItem("Users");
    localStorage.removeItem("Admin");
    setAuthUser(null);
    setAuthAdmin(null);
    window.location.href = "/";
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 pt-6 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50">
      <div className="navbar bg-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#005D52] rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <img
            className="w-12 h-12"
            src={logo}
            alt="Logo"
          />
        </div>
        <div className="navbar-end flex items-center gap-4">
          <div className="navbar-center hidden lg:flex md:pr-20">
            <ul className="flex gap-4 px-1 text-[#005D52] font-medium">
              {navItems}
            </ul>
          </div>

          {!authAdmin ? (
            <div className="relative">
              <Link
                to="/cart"
                className="text-[#005D52] flex  gap-2 mr-8"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l3.5-8H6.4M7 13l-2.293 2.293a1 1 0 001.414 1.414L7 13zM7 13l-.4-2H5"
                  />
                </svg>
                <span>
                  Cart{" "}
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </span>
              </Link>
            </div>
          ) : (
            <div></div>
          )}

          {/* Authentication Section */}
          {authUser || authAdmin ? (
            <button
              onClick={handleLogout}
              className="text-white bg-[#005D52] px-6 py-2.5 font-medium hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-row h-10 justify-center items-center gap-1">
              <a
                href="/loginScreen"
                className="py-2 px-6 border-2 border-[#005D52] text-[#005D52] text-medium font-semibold hover:text-white hover:bg-[#005D52] transition-all duration-300 cursor-pointer"
              >
                Login
              </a>
              <Link
                to="/role"
                className="text-white bg-[#005D52] dark:text-white px-6 py-2.5 border-2 font-medium dark:border-white hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
