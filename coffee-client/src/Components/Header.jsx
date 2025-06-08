import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "../index.css";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    Swal.fire({
      title: 'Sign Out?',
      text: 'Are you sure you want to sign out?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#6f4e37',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, sign out',
      cancelButtonText: 'Cancel',
      background: '#f5e9dc',
      color: '#6f4e37',
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: 'Signed Out!',
              text: 'You have been successfully signed out.',
              icon: 'success',
              confirmButtonColor: '#6f4e37',
              timer: 2000,
              showConfirmButton: false
            });
            navigate('/signin');
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error',
              text: error.message || 'Sign out failed',
              icon: 'error',
              confirmButtonColor: '#d33'
            });
          });
      }
    });
  };

  return (
    <header 
      className="w-full py-4 px-6  backdrop-blur-sm bg-black/30"
      style={{
        backgroundImage: "url(15.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <img className="w-10 h-10" src="logo1.png" alt="Espresso Emporium" />
          <span className="text-2xl font-bold text-white rancho hidden md:block">
            Espresso Emporium
          </span>
        </Link>

        {/* Desktop Navigation - Horizontal with centered links */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-white/20 text-white border-b-2 border-amber-200" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>
          
          <NavLink
            to="/addCoffee"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-white/20 text-white border-b-2 border-amber-200" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
            Add Coffee
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-white/20 text-white border-b-2 border-amber-200" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
          Users
          </NavLink>

        </nav>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative group">
              <button className="flex items-center space-x-2 focus:outline-none">
                {user.photoURL ? (
                  <img
                    className="w-9 h-9 rounded-full border-2 border-white/30 hover:border-amber-200 transition-colors"
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                  />
                ) : (
                  <FaUserCircle className="text-white/90 hover:text-white text-3xl" />
                )}
                <span className="text-white text-sm font-medium hidden lg:inline">
                  {user.displayName || "Account"}
                </span>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                >
                  <IoSettingsOutline className="mr-2" />
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-800"
                >
                  <FiLogOut className="mr-2" />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-2">
              <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-white/20 text-white border-b-2 border-amber-200" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-white/20 text-white border-b-2 border-amber-200" 
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Vertical layout */}
      <div className="md:hidden mt-4 px-2 py-3 bg-white/10 backdrop-blur-md rounded-lg">
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-white font-medium ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addCoffee"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-white font-medium ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            Add Coffee
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-white/20 text-white border-b-2 border-amber-200" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`
            }
          >
          Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;