import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AddProduct from "../components/AddProduct";
import axiosInstance from "./axiosInstance";
import { useLocation } from "react-router-dom";

let ID = 0;
function AdminProfile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = decodeURIComponent(queryParams.get("email"));

  const [activeSection, setActiveSection] = useState("myAccount");
  const [adminInfo, setAdminInfo] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminRes = await axiosInstance.get(`user/getadmindata/${email}`);
        const admin = adminRes.data.admin;
        setAdminInfo(admin);

        if (admin.length > 0) {
          ID = admin[0].shopID || "Not available";
        }
        const productRes = await axiosInstance.get("admin/getadminProduct");
        const product = productRes.data.products;
        setFilteredProducts(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [email]);

  const removeProduct = async (productId) => {
    try {
      const response = await axiosInstance.post("/admin/removeproduct", {
        id: productId,
      });
      console.log("Product removed successfully:", response.data);
      setFilteredProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
      console.log("Product removed successfully:", response.data);
    } catch (error) {
      console.error(
        "Error removing product:",
        error.response?.data || error.message
      );
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "myAccount":
        return (
          <div className="text-black m-4 ">
            <div>
              {adminInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2"
                >
                  <div className="w-full  border-2 border-300 space-y-4 p-4">
                    <h3 className="text-2xl font-medium ">
                      Personal Information
                    </h3>
                    <div>
                      <h4 className="text-xl font-medium text-gray-500 ">
                        Name
                      </h4>
                      <h4 className="text-lg"> {item.adminname}</h4>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-gray-500 ">
                        Email
                      </h4>
                      <h4 className="text-lg"> {item.email}</h4>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-500">
                        contact
                      </h4>
                      <h4 className="text-lg">{item.contact}</h4>
                    </div>
                  </div>

                  <div className="w-full border-2 border-300 space-y-4 p-4">
                    <h3 className="text-2xl font-medium ">Shop Information</h3>
                    <div>
                      <h4 className="text-xl font-medium text-gray-500">
                        Shop ID
                      </h4>
                      <h4 className="text-lg">{item.shopID}</h4>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-500">
                        Shop Name
                      </h4>
                      <h4 className="text-lg">{item.shopName}</h4>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-500">
                        Address
                      </h4>
                      <h4 className="text-lg">{item.address}</h4>
                    </div>

                    <div>
                      <h4 className="text-xl font-medium text-gray-500">
                        Category
                      </h4>
                      <h4 className="text-lg">{item.category}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "Product":
        return (
          <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-4 py-10 pr-6">
              {filteredProducts
                .filter((product) => product.shopID == ID)
                .map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row gap-4 bg-white p-2 text-black border-2 border-gray-300"
                  >
                    <img
                      src={`http://localhost:5015/${product.image}`}
                      alt={product.name}
                      className="w-38 h-48 object-fit"
                    />
                    <div className=" flex flex-col gap-1 py-4">
                      <h5 className="text-xl font-medium">{product.name}</h5>
                      <h2 className="text-md font-medium">
                        <span className="font-medium ">Category</span>:{" "}
                        {product.category}
                      </h2>
                      <h5 className="text-sm text-gray-600 font-medium line-clamp-2">
                        {product.des}
                      </h5>
                      <h5 className="text-xl font-medium">₹{product.Price}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      case "Add Product":
        return (
          <div>
            <AddProduct />
          </div>
        );
      case "Remove Product":
        return (
          <div className="w-full h-full">
            <div className="grid grid-cols-2 gap-4 py-10 pr-6">
              {filteredProducts
                .filter((product) => product.shopID == ID)
                .map((product, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-row gap-4 bg-white p-2 text-black border-2 border-gray-300"
                  >
                    <img
                      src={`http://localhost:5015/${product.image}`}
                      alt={product.name}
                      className="w-38 h-48 object-fit"
                    />
                    <div className=" flex flex-col gap-1 py-4">
                      <h5 className="text-xl font-medium">{product.name}</h5>
                      <h2 className="text-md font-medium">
                        <span className="font-medium ">Category</span>:{" "}
                        {product.category}
                      </h2>
                      <h5 className="text-sm text-gray-600 font-medium line-clamp-2">
                        ${product.des}
                      </h5>
                      <h5 className="text-xl font-medium">₹{product.Price}</h5>
                      <button
                        className="w-28 px-4 py-2 bg-red-600 text-white text-md font-medium"
                        onClick={() => {
                          console.log("Product ID to remove:", product._id);
                          removeProduct(product._id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="h-screen bg-[#005D52] overflow-auto">
      <Navbar />

      {/* AdminSignup and Sections */}
      <section className=" pt-20 m-10 flex justify-center items-start  ">
        <div className="flex space-x-6 w-full bg-white ">
          {/* Sidebar */}
          <div className="w-1/4 h-screen border-2 p-6 rounded-md">
            <div className="text-center mb-8">
              <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-AdminSignup-picture-973460_960_720.png"
                alt="AdminSignup"
              />
              <h3 className="mt-4 text-xl font-bold text-black">Welcome!</h3>
            </div>
            <div className="space-y-4">
              <button
                onClick={() => setActiveSection("myAccount")}
                className={`w-full text-left px-4 py-2 ${
                  activeSection === "myAccount" ? "bg-blue-100" : ""
                } text-gray-700 rounded-lg hover:bg-gray-100`}
              >
                My Accounts
              </button>
              <button
                onClick={() => setActiveSection("Product")}
                className={`w-full text-left px-4 py-2 ${
                  activeSection === "Product" ? "bg-blue-100" : ""
                } text-gray-700 rounded-lg hover:bg-gray-100`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveSection("Add Product")}
                className={`w-full text-left px-4 py-2 ${
                  activeSection === "Add Product" ? "bg-blue-100" : ""
                } text-gray-700 rounded-lg hover:bg-gray-100`}
              >
                Add Product
              </button>
              <button
                onClick={() => setActiveSection("Remove Product")}
                className={`w-full text-left px-4 py-2 ${
                  activeSection === "Remove" ? "bg-blue-100" : ""
                } text-gray-700 rounded-lg hover:bg-gray-100`}
              >
                Remove Product
              </button>
            </div>
          </div>

          {/* Section Content */}
          <div className="w-3/4">{renderSection()}</div>
        </div>
      </section>
    </section>
  );
}

export default AdminProfile;
