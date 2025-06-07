import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url(13.jpg)",
      }}
      className=""
    >
      <div className="w-11/12 mx-auto">
        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <img src='./logo1.png' className="w-14" alt="" />
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-extrabold rancho mb-4">
                Espresso Emporium
              </h2>
              <p className="max-w-2xl mx-auto text-lg">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-2xl hover:text-[#e6d5c3] transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-[#e6d5c3] transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-[#e6d5c3] transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-[#e6d5c3] transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl rancho font-bold mb-6">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FaPhone className="mr-4 text-xl" />
                  <span>98 01533 333 333</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-4 text-xl" />
                  <span>info@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-4 text-xl" />
                  <span>72, Walt street, King Road, Dhaka</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="md:mt-20">
            <h3 className="text-2xl rancho font-bold mb-6">Connect with Us</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-[#f5e9dc] bg-opacity-10 border border-[#f5e9dc] border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-[#e6d5c3] placeholder-[#f5e9dc] placeholder-opacity-70"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#f5e9dc] bg-opacity-10 border border-[#f5e9dc] border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-[#e6d5c3] placeholder-[#f5e9dc] placeholder-opacity-70"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-[#f5e9dc] bg-opacity-10 border border-[#f5e9dc] border-opacity-30 rounded focus:outline-none focus:ring-2 focus:ring-[#e6d5c3] placeholder-[#f5e9dc] placeholder-opacity-70"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#f5e9dc] text-[#6f4e37] font-medium rounded hover:bg-[#e6d5c3] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
