import React, { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";

const PopularProducts = ({ coffeesData }) => {
  const [coffees, setCoffees] = useState(coffeesData);

  return (
    <div>
      <div>
        <div className="text-center mt-30 mb-16 relative">
          {/* Coffee bean decorations */}
          <div className="absolute -left-4 top-1/4 w-8 h-8 bg-[#6f4e37] rounded-full opacity-10"></div>
          <div className="absolute -right-4 bottom-1/4 w-8 h-8 bg-[#6f4e37] rounded-full opacity-10"></div>

          <div className="inline-block relative">
            <span className="block text-[#8b5a2b] text-sm font-medium tracking-widest mb-2">
              ~ Sip & Savor ~
            </span>
            <h1 className="rancho text-[#6f4e37] font-bold text-3xl sm:text-4xl md:text-5xl mb-6 relative">
              Our Popular Products
              {/* Underline decoration */}
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#e6d5c3] rounded-full"></span>
            </h1>

            <Link to="/addCoffee">
              <button className="btn bg-[#6f4e37] hover:bg-[#5a3c2c] text-white border-transparent px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add Coffee
              </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url('./4.png'), url('./5.png')", // two images
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "left top, right bottom",
            backgroundAttachment: "fixed, fixed",
            backgroundSize: "auto, auto", // optional
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto mt-10">
            {coffees.map((coffee) => (
              <CoffeeCard
                key={coffee._id}
                coffee={coffee}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
