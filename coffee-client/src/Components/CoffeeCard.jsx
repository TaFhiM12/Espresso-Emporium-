import React from "react";
import { Eye, Trash2, Edit } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, chef, price } = coffee;

  const confirmDelete = (_id) => {
    Swal.fire({
      title: "Delete This Coffee?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6f4e37",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
      background: "#f5e9dc",
      customClass: {
        title: 'text-[#6f4e37]',
        content: 'text-[#5a3c2c]'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-mu-blush.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "The coffee has been removed",
                icon: "success",
                background: "#f5e9dc",
                confirmButtonColor: "#6f4e37"
              });
              const remainingCoffee = coffees.filter(coffee => coffee._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden border border-[#e6d5c3] hover:shadow-lg transition duration-300 w-full">
      {/* Coffee bean decoration */}
      <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#6f4e37] rounded-full opacity-20"></div>
      
      <div className="flex flex-col md:flex-row">
        {/* Coffee Image */}
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden flex items-center justify-center">
          <img 
            src={photo} 
            alt={name} 
            className="object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Coffee Details */}
        <div className="p-6 md:w-2/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#6f4e37] mb-2">{name}</h2>
            <p className="text-[#8b5a2b] mb-1">
              <span className="font-semibold">Roasted by:</span> {chef}
            </p>
            <p className="text-[#8b5a2b] font-medium">
              <span className="font-semibold">Price:</span> ${price}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex space-x-3">
            <Link 
              to={`/coffees/${_id}`} 
              className="btn btn-sm bg-[#f5e9dc] hover:bg-[#e6d5c3] text-[#6f4e37] border-[#e6d5c3] flex items-center"
            >
              <Eye className="w-4 h-4 mr-1" />
              <span>View</span>
            </Link>
            
            <Link 
              to={`/updateCoffee/${_id}`}
              className="btn btn-sm bg-[#f5e9dc] hover:bg-[#e6d5c3] text-[#6f4e37] border-[#e6d5c3] flex items-center"
            >
              <Edit className="w-4 h-4 mr-1" />
              <span>Edit</span>
            </Link>
            
            <button 
              onClick={() => confirmDelete(_id)} 
              className="btn btn-sm bg-[#f5e9dc] hover:bg-red-100 text-red-600 border-red-200 flex items-center"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;