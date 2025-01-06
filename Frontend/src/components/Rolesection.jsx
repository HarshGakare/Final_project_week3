import React from "react";

import { Link } from "react-router-dom";
import logo_with_name from "../assets/images/logo_with_name.svg";

function Rolesection() {
  return (
    <section className="relative w-full h-screen bg-[#005D52] flex">
      <img
        className="absolute w-52 h-10 ml-10 mt-10"
        src={logo_with_name}
        alt=""
      />
      <Link
        className="absolute w-10 h-10 right-6 top-6 text-white text-2xl font-medium"
        to={"/"}
      >
        X
      </Link>
      <div className="w-1/2 border-r-2 ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h6 className="bg-white text-green-600 px-4 py-1 rounded-lg mb-4">
            Business
          </h6>
          <h2 className=" text-[#80EA98] text-3xl font-medium mb-8">
            For Shopkepper
          </h2>
          <p className="w-2/4 test-sm text-center text-white mb-4">
            {" "}
            atque dolorem quibusdam placeat? Magnam doloribus consequuntur
            molestiae beatae alias sed eligendi ducimus at explicabo, minus
            neque libero!
          </p>
          <p className="py-2 px-10 bg-[#80ED99] rounded-sm  text-black text-lg  font-medium  my-8">
            <Link to="/adminregister">Signup</Link>
          </p>
          <p className="text-center text-white text-sm">
            Already have an account?{" "}
            <Link
              to="/loginscreen"
              className="text-blue-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h6 className="bg-white text-green-600 px-4 py-1 rounded-lg mb-4">
            Costumer
          </h6>
          <h2 className=" text-[#80EA98] text-3xl font-medium mb-8">
            For User
          </h2>
          <p className="w-2/4 test-sm text-center text-white mb-4">
            {" "}
            atque dolorem quibusdam placeat? Magnam doloribus consequuntur
            molestiae beatae alias sed eligendi ducimus at explicabo, minus
            neque libero!
          </p>
          <p className="py-2 px-10 bg-[#80ED99] rounded-sm  text-black text-lg  font-medium  my-8">
            <Link to="/signup">Signup</Link>
          </p>
          <p className="text-center text-white  text-sm ">
            Already have an account?{" "}
            <Link
              to="/loginScreen"
              className="text-blue-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Rolesection;
