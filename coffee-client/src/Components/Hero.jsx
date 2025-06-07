import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[600px]"
      style={{
        backgroundImage:
          "url(3.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-left">
        <div className="text-center">
          <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-[#6f4e37] hover:bg-[#5a3c2c] text-white border-transparent px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center mx-auto">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
