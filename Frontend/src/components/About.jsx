import React from "react";

function About() {
  return (
    <section className="pt-28">
      <div className="mx-auto text-center text-white">
        <h2 className="text-4xl font-medium mb-4 ">About Us</h2>
        <p className=" text-md mb-8">
          Welcometo our Website, Explore our collection and discover the magic
          in every page.
        </p>

        <div className="bg-white p-8 max-w-xl mx-auto">
          <h3 className="text-2xl font-medium text-black mb-4">Our Story</h3>
          <p className="text-sm text-gray-500 mb-8">
            we are passionate about bringing you high-quality products at
            affordable prices. We are an online e-commerce platform designed to
            offer a wide variety of items that cater to every need and interest.
            From fashion and electronics to home essentials and beauty products,
            we have something for everyone!
          </p>

          <h3 className="text-2xl font-medium text-black mb-4">Our Mission</h3>
          <p className="text-sm text-gray-500">
            Our mission is to provide an exceptional shopping experience,
            combining a vast selection of top-notch products with unparalleled
            customer service. We pride ourselves on delivering excellent
            service, fast shipping, and a hassle-free return policy.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
