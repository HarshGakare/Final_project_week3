import React from "react";

function Cart({ cartItems, handleRemoveFromCart }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.Price), 0);
  };

  return (
    <section className="min-h-screen py-10 bg-[#005D52]">
      <div className="container mx-auto px-10">
        <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg font-medium">
            Your cart is empty. Start adding products!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="w-full flex flex-row gap-4 bg-white p-2 text-black"
              >
                <img
                  src={`http://localhost:5015/${item.image}`}
                  alt={item.name}
                  className="w-44 h-48 object-fit"
                />
                <div className="flex flex-col gap-1 py-4">
                  <h2 className="text-2xl font-medium">{item.name}</h2>
                  <p className="text-md font-medium">
                    <span className="font-medium">Category:</span>{" "}
                    {item.category}
                  </p>
                  <p className="text-sm text-gray-600 font-medium line-clamp-2">
                    {item.des}
                  </p>
                  <h3 className="text-lg font-semibold mt-4">₹{item.Price}</h3>
                  <button
                    className="w-28 px-4 py-2 bg-red-600 text-white text-md font-medium"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="mt-10 text-right">
            <h2 className="text-2xl font-medium ">
              Total: <span className="text-green-500">${calculateTotal()}</span>
            </h2>
            <button className=" px-4 py-2 bg-[#80ED99] text-black text-md font-medium">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
