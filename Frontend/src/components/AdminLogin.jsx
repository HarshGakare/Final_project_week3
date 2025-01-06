import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const adminInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axiosInstance.post("user/adminlogin", adminInfo);
      if (res.data) {
        toast.success("Admin Logged in Successfully");
        setTimeout(() => {
          localStorage.setItem("Admin", JSON.stringify(res.data.admin));
          const email = encodeURIComponent(res.data.admin.email);
          window.location.href = `/adminprofile?email=${email}`;
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <div>
      <div
        id="my_modal_3"
        className="w-full text-white"
      >
        <div className="flex">
          <div className="">
            <h2 className="pt-2 text-[#80EA98] text-3xl font-bold pl-2">
              Admin Login
            </h2>
            <h4 className="pl-2">Welcome back! Please enter your details</h4>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 pl-2"
            >
              {/* Email Input */}
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
                  className="w-full px-4 py-2 bg-white text-black"
                  autoComplete="off"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Input */}
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
                  className="w-full px-4 py-2 bg-white text-black"
                  autoComplete="off"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Actions */}
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
                    to="/adminregister"
                    className="text-blue-500"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
