import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_with_name from "../assets/images/logo_with_name.svg";
import Res_bg from "../assets/images/userlogin.png";

import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axiosInstance
      .post("user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate("/", { state: { user: res.data.user } });
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <section className="w-full h-screen bg-[#005D52] flex">
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
      <div className="w-1/2 flex justify-center items-center">
        <img
          className="w-[600px] "
          src={Res_bg}
          alt="Background"
        />
      </div>
      <div className="w-1/2 py-10 text-white">
        <div>
          <h2 className="pt-16 text-[#80EA98] text-3xl font-bold">Sign Up</h2>
          <h4 className="pt-2">
            Please fill the details and create an account
          </h4>
          <form
            className="text-2xl text-white font-medium pt-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="text-xl"
              htmlFor="username"
            >
              Username
            </label>
            <br />
            <input
              className="w-11/12 h-12 text-sm font-thin px-4 mb-4 text-black bg-white"
              type="text"
              placeholder="Username"
              autoComplete="off"
              {...register("fullname", { required: true })}
            />{" "}
            {errors.fullname && (
              <p className="text-sm text-red-500 mt-1">
                This field is required
              </p>
            )}
            <br />
            <label
              className="text-xl"
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              className="w-11/12 h-12 text-sm font-thin px-4 mb-4 text-black bg-white"
              type="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                This field is required
              </p>
            )}
            <br />
            <label
              className="text-xl"
              htmlFor="password"
            >
              Password
            </label>
            <br />
            <input
              className="w-11/12 h-12 text-sm font-thin px-4 mb-4 text-black bg-white"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                This field is required
              </p>
            )}
            <br />
            <button
              className="py-2 px-8 bg-[#80ED99] text-black text-lg font-medium mt-4 "
              type="submit"
            >
              SignUp
            </button>
          </form>

          <p className=" mt-4">
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

export default Signup;
