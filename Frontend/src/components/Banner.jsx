import React, { useEffect, useState } from "react";
import filter from "../assets/images/filter.svg";
import axiosInstance from "./axiosInstance";
import { useNavigate } from "react-router-dom";

function Banner({ handleAddToCart }) {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axiosInstance.get("admin/products");
        setProduct(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);

  const handleProductClick = (item) => {
    navigate("/productdisplay", { state: { item: item } });
  };

  return (
    <section className="bg-[#005D52]">
      <section className="Home_Page pt-16 px-10">
        <div className="flex pt-10 pb-2 justify-between items-center text-white border-b-2">
          <h5 className="text-xl">{product.length} items found</h5>
          <div className="flex gap-2">
            {/* <h5 className="text-xl">Filter</h5>
            <img
              src={filter}
              alt=""
            /> */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 py-10">
          {product.map((item, index) => (
            <div
              key={index}
              className="w-full flex flex-row gap-4 bg-white p-2 text-black "
              onClick={() => handleProductClick(item)}
            >
              <img
                src={`http://localhost:5015/${item.image}`}
                alt={item.name}
                className="w-40 h-52 object-fit shadow-md"
              />
              <div>
                <div className="flex flex-col gap-1 py-2">
                  <h5 className="text-2xl font-medium">{item.name}</h5>
                  <h2 className="text-md font-medium">
                    <span className="font-medium">Category</span>:{" "}
                    {item.category}
                  </h2>
                  <h5 className="text-sm text-gray-600 font-medium line-clamp-2">
                    {item.des}
                  </h5>
                  <h5 className="text-xl font-medium mt-4">₹{item.Price}</h5>
                </div>
                <button
                  className="w-40 px-4 py-2 bg-[#80ED99] text-black text-md font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Banner;
