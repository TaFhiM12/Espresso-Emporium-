import { Coffee } from "lucide-react";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, details, photo, price } =
    useLoaderData();
  const navigate = useNavigate();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Recipe Updated!",
            text: "Your coffee blend has been perfected",
            background: "#f5e9dc",
            confirmButtonColor: "#6f4e37",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          setTimeout(() => {
            navigate("/");
          }, 1600);
        }
        form.reset();
      })
      .catch((error) => {
        Swal.fire({
          title: "Update Failed",
          html: `<p>${error.message}</p><small style="color: #6f4e37">Please try again</small>`,
          icon: "error",
          background: "#f5e9dc",
          confirmButtonColor: "#6f4e37",
          iconColor: "#d33",
        });
      });
  };

  return (
    <div className="min-h-screen bg-[#f5e9dc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#e6d5c3]">
          {/* Form Header */}
          <div className="bg-[#6f4e37] px-8 py-6 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#8b5a2b] opacity-30"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#8b5a2b] opacity-30"></div>

            <h1 className="text-4xl font-bold text-[#f5e9dc] relative z-10 flex items-center justify-center gap-3">
              <Coffee className="w-8 h-8" />
              Update Coffee
            </h1>
          </div>

          {/* Form Content */}
          <form onSubmit={handleUpdateCoffee} className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Coffee Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                  name="name"
                  defaultValue={name}
                  placeholder="e.g., Ethiopian Yirgacheffe"
                  required
                />
              </div>

              {/* Chef Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Roaster/Chef
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                  name="chef"
                  defaultValue={chef}
                  placeholder="e.g., James Hoffmann"
                  required
                />
              </div>

              {/* Supplier Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Supplier
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="e.g., Blue Bottle Coffee"
                  required
                />
              </div>

              {/* Taste Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Flavor Profile
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                  name="taste"
                  defaultValue={taste}
                  placeholder="e.g., Fruity, Chocolatey, Nutty"
                  required
                />
              </div>

              {/* Price Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-[#6f4e37]">
                    $
                  </span>
                  <input
                    type="number"
                    className="block w-full pl-8 px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                    name="price"
                    defaultValue={price}
                    placeholder="15.00"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Details Field */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-[#6f4e37]">
                  Brew Notes
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                  name="details"
                  defaultValue={details}
                  placeholder="e.g., Best as pour over"
                  required
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="mt-6 space-y-1">
              <label className="block text-sm font-medium text-[#6f4e37]">
                Coffee Image URL
              </label>
              <input
                type="url"
                className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                name="photo"
                defaultValue={photo}
                placeholder="https://example.com/coffee-image.jpg"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#6f4e37] hover:bg-[#5a3c2c] text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                </svg>
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
