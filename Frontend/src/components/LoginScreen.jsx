import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import UserLogin from "./Login"; 
import logo from "../assets/images/logo_with_name.svg";
const LoginScreen = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#005D52]">
      <Link
        className="absolute w-10 h-10 right-6 top-6 text-white text-2xl font-medium"
        to={"/"}
      >
        X
      </Link>
      <div
        className="absolute top-10 left-10 w-[170px] h-10"
        style={{ background: `url(${logo})` }}
      ></div>
      <h1 className="text-4xl font-bold mb-10 text-white">Login Page</h1>
      <div className="flex space-x-4 mb-10">
        <button
          className="text-white  bg-[#005D52]  dark:text-white px-6 py-2.5  border-2 font-medium dark:border-white hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
          onClick={() => {
            setShowAdminLogin(true);
            setShowUserLogin(false);
          }}
        >
          Admin Login
        </button>
        <button
          className="text-white  bg-[#005D52]  dark:text-white px-6 py-2.5  border-2 font-medium dark:border-white hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
          onClick={() => {
            setShowAdminLogin(false);
            setShowUserLogin(true);
          }}
        >
          User Login
        </button>
      </div>

      {/* Conditional Rendering */}
      {showAdminLogin && <AdminLogin />}
      {showUserLogin && <UserLogin />}
    </div>
  );
};

export default LoginScreen;
