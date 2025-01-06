import React, { useState } from "react";
import axiosInstance from "./axiosInstance";

function AddProduct() {
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [des, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [shopID, setShopID] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData();
    formData.append("shopID", shopID);
    formData.append("name", name);
    formData.append("Price", Price);
    formData.append("category", category);
    formData.append("des", des);
    formData.append("image", image);

    try {
      await axiosInstance.post("admin/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Product added successfully!");
      setShopID("");
      setName("");
      setPrice("");
      setCategory("");
      setDescription("");
      setImage(null);

      window.location.reload();
    } catch (error) {
      setMessage("Error adding product. Please try again.");
      console.error("Error adding product:", error);
    }
  };

  return (
    <section className="bg-[#005D52]">
      {/* <Navbar /> */}
      <div className="bg-white p-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="w-full flex">
            <div className="w-1/2 p-4 border border-2 border-[#E0E0E0] space-y-4">
              <h2 className="text-xl font-medium text-black mb-4">
                Product Information
              </h2>

              <div>
                <label className="block text-lg text-gray-400">Shop ID</label>
                <input
                  type="number"
                  value={shopID}
                  onChange={(e) => setShopID(e.target.value)}
                  className="w-full p-3 bg-[#ECECEC] border border-[#C2C2C2] focus:ring-2 focus:ring-green-400 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-lg text-gray-400">
                  Product Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 bg-[#ECECEC] border border-[#C2C2C2] focus:ring-2 focus:ring-green-400 text-gray-900"
                  required
                />
              </div>

              <div>
                <label className="block text-lg text-gray-400">Price</label>
                <input
                  type="number"
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full p-3 bg-[#ECECEC] border border-[#C2C2C2] focus:ring-2 focus:ring-green-400 text-gray-900"
                  required
                  min="0"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-400">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-[#ECECEC] border border-[#C2C2C2] focus:ring-2 focus:ring-green-400 text-gray-900"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="home_appliances">Home Appliances</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="sports">Sports</option>
                  <option value="books">Books</option>
                </select>
              </div>

              <div>
                <label className="block text-lg text-gray-400">
                  Description
                </label>
                <textarea
                  value={des}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 bg-[#ECECEC] border border-[#C2C2C2] focus:ring-2 focus:ring-green-400 text-gray-900"
                  required
                />
              </div>
            </div>

            <div className="w-1/2 ml-4 p-4 border border-2 border-[#E0E0E0]">
              <h2 className="text-2xl font-medium text-black mb-6">
                Product Media
              </h2>
              <div className="relative h-90">
                <label className="block text-lg text-gray-400">
                  Product Image
                </label>
                <div
                  onClick={() => document.getElementById("fileInput").click()}
                  className="w-full h-full flex flex-col justify-center items-center p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Product"
                      className="w-80 h-80 object-cover mb-10 z-1"
                    />
                  ) : (
                    <span className="text-gray-400">No image selected</span>
                  )}
                  <input
                    id="fileInput"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                  />
                  <label
                    htmlFor="fileInput"
                    className="text-lg text-green-800 bg-[#B2FFC3] px-4 py-2 border-2 border-green-800 font-medium hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer z-10"
                  >
                    Add Image
                  </label>
                </div>
              </div>
            </div>
          </div>

          {message && <p className="text-center text-lg">{message}</p>}
          <button
            type="submit"
            className="text-white bg-[#005D52] px-6 py-2.5 border-2 font-medium hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProduct;
