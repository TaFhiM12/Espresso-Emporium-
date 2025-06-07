import { useNavigate } from "react-router";

const ErrorBoundary = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5e9dc] text-[#6f4e37] p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <div className="flex gap-4">
        <button 
          onClick={() => navigate("/")} 
          className="px-4 py-2 bg-[#6f4e37] text-[#f5e9dc] rounded hover:bg-[#8b5a2b] transition flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" 
            />
          </svg>
          Go Home
        </button>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-[#8b5a2b] text-[#f5e9dc] rounded hover:bg-[#6f4e37] transition flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" 
              clipRule="evenodd" 
            />
          </svg>
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ErrorBoundary;