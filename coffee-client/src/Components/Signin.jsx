import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { FaCoffee } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const Signin = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        

        const user = result.user;
        axios.patch('https://coffee-store-server-mu-blush.vercel.app/users', {
          email: user.email,
          lastSignInTime: user.metadata.lastSignInTime,
        })
          .then(() => {
            console.log("User sign-in time updated successfully"); 
          })
          .catch((error) => {
            console.error("Error updating user sign-in time:", error);
          });
            

        Swal.fire({
          title: "Welcome Back!",
          text: "Your coffee is waiting...",
          icon: "success",
          background: "#f5e9dc",
          color: "#5a3921",
          confirmButtonColor: "#6f4e37",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        navigate(location.state || "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Brew Failed!",
          html: `<p>${error.message}</p><small class="text-coffee-700">Please try again</small>`,
          icon: "error",
          background: "#f5e9dc",
          confirmButtonColor: "#6f4e37",
          iconColor: "#d33",
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#f5e9dc] flex items-center justify-center p-4 relative overflow-hidden">
      <Helmet>
        <title>Espresso Emporium | Sign In</title>
      </Helmet>
      {/* Coffee bean decorations */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-[#6f4e37] rounded-full opacity-10"></div>
      <div className="absolute bottom-1/4 right-16 w-16 h-16 bg-[#8b5a2b] rounded-full opacity-10"></div>

      <div className="w-full max-w-md z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-[#e6d5c3] p-4 rounded-full shadow-inner">
            <FaCoffee className="text-[#6f4e37]" size={40} />
          </div>
          <h1 className="rancho text-4xl font-bold text-[#6f4e37] mt-4">
            Welcome Back
          </h1>
          <p className="text-[#8b5a2b] mt-2 italic">
            "Good coffee starts with great beans"
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-[#e6d5c3] overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSignIn}>
              <div className="mb-6">
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#6f4e37] hover:bg-[#5a3c2c] text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-md"
              >
                <FaCoffee /> Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#8b5a2b]">
                New to our coffee club?{" "}
                <Link
                  to="/signup"
                  className="text-[#6f4e37] hover:text-[#5a3c2c] font-medium underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
