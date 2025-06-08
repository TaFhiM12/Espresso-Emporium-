import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://coffee-store-server-mu-blush.vercel.app/coffees", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffeeData),
      });

      const data = await res.json();

      if (data.insertedId) {
        await Swal.fire({
          title: "Coffee Added!",
          text: "New blend added to our collection",
          icon: "success",
          position: "top-end",
          background: "#f5e9dc",
          confirmButtonColor: "#6f4e37",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
        form.reset();
      } else {
        throw new Error("Failed to add coffee.");
      }
    } catch (error) {
      Swal.fire({
        title: "Brewing Failed",
        html: `<p>${error.message}</p><small style="color: #6f4e37">Please try again</small>`,
        icon: "error",
        background: "#f5e9dc",
        confirmButtonColor: "#6f4e37",
        iconColor: "#d33",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e9dc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Coffee Beans Decoration */}
        <div className="relative ">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#6f4e37] rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-[#6f4e37] rounded-full opacity-20"></div>

          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#e6d5c3]">
            {/* Form Header with Coffee Stain Effect */}
            <div className="bg-[#6f4e37] px-8 py-6 text-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#8b5a2b] opacity-30"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-[#8b5a2b] opacity-30"></div>

              <h1 className="text-4xl font-bold text-[#f5e9dc] relative z-10">
                Add New Coffee
              </h1>
              <p className="mt-2 text-[#e6d5c3] relative z-10">
                Share your favorite coffee with the world. Every bean tells a
                story.
              </p>
            </div>

            {/* Form Content */}
            <form onSubmit={handleAddCoffee} className="px-8 py-10">
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
                    placeholder="e.g., Blue Bottle Coffee"
                    required
                  />
                </div>

                {/* Taste Field */}
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-[#6f4e37]">
                    Flavor
                  </label>
                  <input
                    type="text"
                    className="block w-full px-4 py-3 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] placeholder-[#c7b7a3]"
                    name="taste"
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
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Add Coffee
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Coffee Quote */}
        <div className="mt-12 text-center">
          <p className="text-[#6f4e37] italic">
            "Coffee is a language in itself." — Jackie Chan
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
