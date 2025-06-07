import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "../index.css";
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user)
  const links = (
    <>
      {user ? (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Add Coffee
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addCoffee"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Add Coffee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-all duration-300 ${
                  isActive
                    ? "bg-[#f5e9dc] text-[#6f4e37] font-medium shadow-md"
                    : "text-[#f5e9dc] hover:bg-[#8b5a2b] hover:text-white"
                }`
              }
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
    title: 'Sign Out?',
    text: 'Are you sure you want to sign out?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#6f4e37',  // Coffee brown
    cancelButtonColor: '#d33',      // Red
    confirmButtonText: 'Yes, sign out',
    cancelButtonText: 'Cancel',
    background: '#f5e9dc',         // Cream background
    color: '#6f4e37',              // Brown text
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
    <div
      className="flex justify-center items-center px-4 p-4 gap-2"
      style={{
        backgroundImage: "url(15.jpg)",
      }}
    >
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sm sm:text-lg"
            >
              {links}
            </ul>
          </div>
          <Link className="flex justify-center items-center" to="/">
            <img className="w-12" src="logo1.png" alt="" />
            <div className="hidden md:inline" to="/">
              <h1 className="text-2xl rancho sm:text-3xl md:text-4xl lg:text-5xl text-white">
                Espresso Emporium
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-sm sm:text-lg space-x-2">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="text-sm sm:text-lg md:text-xl lg:text-xl py-6 px-8 cursor-pointer">
              <div className="dropdown dropdown-bottom dropdown-end text-white">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1 flex items-center justify-center"
                >
                  {user.photoURL ? (
                    <img
                      className="w-13 h-14 rounded-full"
                      src={user.photoURL}
                      alt="User"
                    />
                  ) : (
                    <FaUserCircle size={40} />
                  )}
                  <span className="ml-2">{user.displayName || "User"}</span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 text-black rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link to="/profile">My Profile</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>SignOut</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <FaUserCircle color="white" size={40} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
