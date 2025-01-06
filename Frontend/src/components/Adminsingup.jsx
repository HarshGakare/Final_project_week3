import { React } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import logo_with_name from "../assets/images/logo_with_name.svg";
import axiosInstance from "./axiosInstance";

function AdminSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/loginScreen";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      adminname: data.adminname,
      email: data.email,
      password: data.password,
      shopID: data.shopID,
      shopName: data.shopName,
      contact: data.contact,
      category: data.category,
      address: data.address,
    };
    try {
      const res = await axiosInstance.post("user/adminsignup", userInfo, {
        "Content-Type": "application/json",
      });
      toast.success("Admin Signup Successful");
      localStorage.setItem("Admin", JSON.stringify(res.data.admin));
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="w-full h-screen bg-[#005D52] flex pb-10">
      <img
        className="absolute w-52 h-10 ml-4 mt-6"
        src={logo_with_name}
        alt="Logo"
      />
      <Link
        className="absolute w-10 h-10 right-6 top-6 text-white text-2xl font-medium"
        to={"/"}
      >
        X
      </Link>
      <div className="w-full ml-8 mt-16 text-white">
        <h2 className="pt-10 text-[#80EA98] text-3xl font-medium">Register</h2>
        <h4 className="pt-2">Please fill the details and create an account</h4>
        <form
          className="pt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex">
            <div className="w-full">
              {/* Username */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="adminname"
                >
                  Username
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="text"
                  id="adminname"
                  placeholder="Username"
                  autoComplete="off"
                  {...register("adminname", {
                    required: "Username is required",
                  })}
                />
                {errors.adminname && (
                  <p className="text-sm text-red-500">
                    {errors.adminname.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="email"
                >
                  Email
                </label>
                <br></br>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="contact"
                >
                  Contact Number
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="tel"
                  id="contact"
                  placeholder="Contact Number"
                  pattern="^\+?[1-9]\d{1,14}$"
                  autoComplete="off"
                  {...register("contact", {
                    required: "Contact number is required",
                  })}
                />
                {errors.contact && (
                  <p className="text-sm text-red-500">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>

            {/* Shop Details */}
            <div className="w-full">
              {/* Shop ID */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="shopID"
                >
                  Shop ID
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="Number"
                  id="shopID"
                  placeholder="Shop ID"
                  autoComplete="off"
                  {...register("shopID", { required: "Shop ID is required" })}
                />
                {errors.shopID && (
                  <p className="text-sm text-red-500">
                    {errors.shopID.message}
                  </p>
                )}
              </div>

              {/* Shop Name */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="shopName"
                >
                  Shop Name
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="text"
                  placeholder="Shop Name"
                  id="shopName"
                  autoComplete="off"
                  {...register("shopName", {
                    required: "Shop Name is required",
                  })}
                />
                {errors.shopName && (
                  <p className="text-sm text-red-500">
                    {errors.shopName.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black "
                  id="category"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="home_appliances">Home Appliances</option>
                  <option value="beauty">Beauty and PersonalCare</option>
                  <option value="sports">Sports</option>
                  <option value="books">Books</option>
                </select>
                {errors.category && (
                  <p className="text-sm text-red-500">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label
                  className="text-xl"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="w-11/12 h-12 px-4 mb-4 bg-white text-black"
                  type="text"
                  placeholder="Address"
                  id="address"
                  autoComplete="off"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-sm text-red-500">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="py-2 px-6  bg-[#80ED99] border-2 border-[#005D52] text-black font-medium  cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminSignup;
