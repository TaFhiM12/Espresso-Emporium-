import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";
import { FaCoffee } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const { email, password, name, photo, ...rest } = Object.fromEntries(
      new FormData(form).entries()
    );

    createUser(email, password)
      .then((result) => {
        const userProfileData = {
          ...rest ,
          email , 
          photo,
          name,
          creationTime : result.user.metadata.creationTime,
          lastSignInTime : result.user.metadata.lastSignInTime,
        }
        
        // Save user profile data to the server
        axios.post("https://coffee-store-server-mu-blush.vercel.app/users", userProfileData)
          .then(() => {
            console.log("User data saved successfully");
          })
          .catch((error) => {
            console.error("Error saving user data:", error);
            Swal.fire({
              title: "Error",
              text: "Could not save user data. Please try again later.",
              icon: "error",
              background: "#f5e9dc",
              confirmButtonColor: "#6f4e37",
              iconColor: "#d33",
            });
          });
            


        const user = result.user;
        // Update user profile with display name and photo URL
        return updateUser({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photo,
          });
          Swal.fire({
            title: "Welcome to the Coffee Club!",
            html: '<p>Your first brew is on us!</p><small style="color: #6f4e37">Account created successfully</small>',
            icon: "success",
            background: "#f5e9dc",
            confirmButtonColor: "#6f4e37",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          navigate("/");
          form.reset();
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Signup Failed",
          html: `<p>${error.message}</p><small style="color: #6f4e37">Please check your details</small>`,
          icon: "error",
          background: "#f5e9dc",
          confirmButtonColor: "#6f4e37",
          iconColor: "#d33",
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#f5e9dc] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Coffee bean decorations */}
      <div className="absolute top-1/3 right-8 w-10 h-10 bg-[#8b5a2b] rounded-full opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-14 h-14 bg-[#6f4e37] rounded-full opacity-10"></div>

      <div className="w-full max-w-2xl z-10">
        <div className="bg-white rounded-xl shadow-lg border border-[#e6d5c3] overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-[#e6d5c3] p-4 rounded-full shadow-inner mx-auto">
                <FaCoffee className="text-[#6f4e37]" size={40} />
              </div>
              <h1 className="rancho text-4xl font-bold text-[#6f4e37] mt-4">
                Join Our Coffee Club
              </h1>
              <p className="text-[#8b5a2b] mt-2 italic">
                "First sip is the deepest"
              </p>
            </div>

            <form
              onSubmit={handleSignUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name Field */}
              <div>
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
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

              {/* Password Field */}
              <div>
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

              {/* Photo URL Field */}
              <div>
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="123 Coffee Bean St"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-[#6f4e37] text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg bg-[#f5e9dc] border border-[#e6d5c3] focus:outline-none focus:ring-2 focus:ring-[#6f4e37]"
                  placeholder="+1234567890"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#6f4e37] hover:bg-[#5a3c2c] text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 shadow-md"
                >
                  <FaCoffee /> Brew My Account
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#8b5a2b]">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-[#6f4e37] hover:text-[#5a3c2c] font-medium underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
