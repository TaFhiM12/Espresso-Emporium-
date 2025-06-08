import Swal from 'sweetalert2';
import { FaUserEdit, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCamera } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import { use, useState } from 'react';
import { AuthContext} from '../contexts/AuthContext';

const UpdateUser = () => {
  const { user } = use(AuthContext);;
  const [loading, setLoading] = useState(false);
  const { _id, address: initialAddress, phone: initialPhone, email: initialEmail, photo: initialPhoto } = useLoaderData();
  
  // State for form data
  const [formData, setFormData] = useState({
    address: initialAddress,
    phone: initialPhone,
    email: initialEmail,
    photo: initialPhoto
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = {
      ...formData,
      lastSignInTime: user.metadata.lastSignInTime
    };

    try {
      const response = await axios.put(`https://coffee-store-server-mu-blush.vercel.app/users/${_id}`, updatedData);
      
      if (response.data.modifiedCount) {
        Swal.fire({
          title: 'Profile Updated!',
          text: 'Your profile has been successfully updated.',
          icon: 'success',
          position: 'top-end',
          background: '#f5e9dc',
          confirmButtonColor: '#6f4e37',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      } else {
        Swal.fire({
          title: 'No Changes Made',
          text: 'Your profile data is already up to date.',
          icon: 'info',
          background: '#f5e9dc',
          confirmButtonColor: '#6f4e37',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Update Failed',
        text: error.message || 'Could not update profile',
        icon: 'error',
        background: '#f5e9dc',
        confirmButtonColor: '#6f4e37',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e9dc] py-12 px-4 sm:px-6 lg:px-8">
        <Helmet>
        <title>Espresso Emporium | Update User</title>
      </Helmet>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-[#e6d5c3]">
        <div className="bg-[#6f4e37] px-8 py-6 text-center">
          <h2 className="text-2xl font-bold text-[#f5e9dc] flex items-center justify-center gap-2">
            <FaUserEdit className="text-2xl" />
            Update Profile
          </h2>
        </div>

        <form onSubmit={handleUpdateProfile} className="px-8 py-6">
          {/* Profile Photo Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <img 
                src={formData.photo} 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover border-4 border-[#e6d5c3]"
              />
              <label className="absolute bottom-0 right-0 bg-[#6f4e37] p-2 rounded-full cursor-pointer">
                <FaCamera className="text-white" />
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData(prev => ({ ...prev, photo: reader.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
            <p className="text-sm text-gray-500">Click camera icon to change photo</p>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#6f4e37] mb-1 flex items-center">
              <FaEnvelope className="mr-2" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              readOnly
              className="w-full px-4 py-2 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37] bg-gray-100"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#6f4e37] mb-1 items-center">
              <FaPhone className="mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g., +1234567890"
              className="w-full px-4 py-2 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37]"
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#6f4e37] mb-1 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Address
            </label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-[#e6d5c3] focus:border-[#6f4e37] focus:ring-[#6f4e37]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#6f4e37] hover:bg-[#5a3c2c] text-white font-bold py-3 px-4 rounded-lg transition duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;