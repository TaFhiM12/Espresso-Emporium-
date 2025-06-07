import React from "react";

const FollowPage = () => {
  return (
    <div className="mt-30">
      <div className="text-center  relative">
        {/* Coffee bean decorations */}
        <div className="absolute -left-4 top-1/4 w-8 h-8 bg-[#6f4e37] rounded-full opacity-10"></div>
        <div className="absolute -right-4 bottom-1/4 w-8 h-8 bg-[#6f4e37] rounded-full opacity-10"></div>

        <div className="inline-block relative">
          <span className="block text-[#8b5a2b] text-sm font-medium tracking-widest mb-2">
            ~Follow us now~
          </span>
          <h1 className="rancho text-[#6f4e37] font-bold text-3xl sm:text-4xl md:text-5xl mb-6 relative">
            Follow on Instagram
            {/* Underline decoration */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#e6d5c3] rounded-full"></span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto mt-10">
        {Array.from({ length: 8 }, (_, i) => {
          const imageNumber = i + 9;
          const imageName = `Rectangle ${imageNumber}.png`;

          return (
            <div
              key={imageNumber}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`./${imageName}`}
                alt={`Instagram post ${imageNumber}`}
                className="w-full h- object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition duration-300">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
                  ></path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowPage;
