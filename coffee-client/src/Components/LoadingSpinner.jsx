import React from "react";

const LoadingSpinner = () => {
  // Define steam animation keyframes
  const steamKeyframes = `
    @keyframes steam {
      0% { transform: translateY(0) scale(1); opacity: 0.7; }
      50% { transform: translateY(-50px) scale(1.5); opacity: 0.3; }
      100% { transform: translateY(-100px) scale(2); opacity: 0; }
    }
  `;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5e9dc] space-y-4">
      {/* Inject the keyframes */}
      <style>{steamKeyframes}</style>
      
      <div className="relative w-24 h-24">
        {/* Coffee cup base */}
        <div className="absolute bottom-0 w-full h-3/4 bg-[#6f4e37] rounded-b-full"></div>
        
        {/* Coffee liquid with steam animation */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#4a2c1a] rounded-t-full overflow-hidden">
          <div className="relative w-full h-full">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-[#f5e9dc] opacity-70"
                style={{
                  left: `${15 + i * 30}%`,
                  width: '8%',
                  height: '40%',
                  animation: `steam 2s infinite ease-out ${i * 0.3}s`,
                  borderRadius: '50%'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Cup handle */}
        <div className="absolute right-0 top-1/4 w-1/4 h-1/2 border-4 border-[#6f4e37] rounded-full border-l-transparent border-b-transparent"></div>
      </div>
      
      {/* Loading text with pulsing animation */}
      <p className="text-[#6f4e37] font-medium text-lg animate-pulse">
        Brewing your coffee...
      </p>
    </div>
  );
};

export default LoadingSpinner;