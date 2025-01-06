import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
