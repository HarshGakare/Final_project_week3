import React from "react";
import { useLocation } from "react-router-dom";

function ProductDisplay({ handleAddToCart }) {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="pt-1">
      <div className="my-28 bg-white mx-10 flex gap-4 p-4 text-black">
        <img
          src={`http://localhost:5015/${item.image}`}
          alt={item.name}
          className="w-92 h-[500px]"
        />
        <div className="flex flex-col gap-1 py-4">
          <h5 className="text-4xl font-medium">{item.name}</h5>
          <h2 className="text-xl font-medium">
            <span className="font-medium underline">Category</span>:{" "}
            {item.category}
          </h2>
          <h5 className="w-[500px] text-sm text-gray-600 font-medium mt-2">
            {item.des}
          </h5>
          <h5 className="text-xl font-medium mt-4">${item.Price}</h5>
          <button
            className="w-40 px-4 py-2 bg-[#80ED99] text-black text-md font-medium"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
