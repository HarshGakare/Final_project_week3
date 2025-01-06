import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductDisplay from "./components/ProductDisplay";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Abouts from "./abouts/Abouts";
import Rolesection from "./components/Rolesection";
import AdminSingup from "./components/Adminsingup";
import AddProduct from "./components/AddProduct";
import LoginScreen from "./components/LoginScreen";
import AdminLogin from "./components/AdminLogin";
import AdminProfile from "./components/AdminProfile";
import Contact from "./components/Contact";

function App() {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const location = useLocation();
  return (
    <div className="bg-[#005D52]">
      {location.pathname !== "/signup" &&
        location.pathname !== "/adminregister" &&
        location.pathname !== "/role" &&
        location.pathname !== "/loginScreen" && (
          <Navbar cartCount={cart.length} />
        )}

      <Routes>
        <Route
          path="/"
          element={<Banner handleAddToCart={handleAddToCart} />}
        />
        <Route
          path="/loginScreen"
          element={<LoginScreen />}
        />
        <Route
          path="/productdisplay"
          element={<ProductDisplay handleAddToCart={handleAddToCart} />}
        />

        <Route
          path="/userlogin"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/about"
          element={<Abouts />}
        />
        <Route
          path="/role"
          element={<Rolesection />}
        />
        <Route
          path="/adminregister"
          element={<AdminSingup />}
        />
        <Route
          path="/addproduct"
          element={<AddProduct />}
        />
        <Route
          path="/adminlogin"
          element={<AdminLogin />}
        />
        <Route
          path="/adminprofile"
          element={<AdminProfile />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
