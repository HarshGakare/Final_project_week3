import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

function Login() {
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axiosInstance
      .post("user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          setTimeout(() => {
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            window.location.href = from;
          }, 1000);
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
    <div>
      <div
        id="my_modal_3"
        className="w-full h-full  text-white pt-1"
      >
        <div className="w-full flex  justify-center items-center gap-10">
          <div className="">
            <h2 className="pt-2 text-[#80EA98] text-3xl font-bold pl-2">
              User Login
            </h2>
            <h4 className="pl-2">Welcome back! Please enter your details</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 pl-2 "
            >
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white text-black "
                  {...register("email", { required: true })}
                  autoComplete="off"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-xl"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 bg-white text-black "
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="py-2 px-8 bg-[#80ED99] text-black text-lg font-medium mt-4"
                >
                  Login
                </button>
                <p className="text-sm text-white mt-4">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
