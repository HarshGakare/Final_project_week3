import React from "react";

function Contact() {
  return (
    <section className="py-28">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-medium mb-4 text-white">Contact Us</h2>
          <p className="text-md text-white mb-8 ">
            We'd love to hear from you! Drop us a message below.
          </p>
        </div>

        <div className="bg-white p-8   bg-white">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-md font-semi text-black">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-200 text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-md font-semi text-black">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-200 text-black"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-md font-semi text-black">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 mt-2 border border-gray-300 bg-gray-200 text-black"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="">
              <button
                type="submit"
                className="text-white bg-[#005D52] px-6 py-2.5 font-medium hover:text-black hover:bg-[#80ED99] transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
