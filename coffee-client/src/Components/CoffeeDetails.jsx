import { useLoaderData } from 'react-router';
import { FaCoffee, FaUserTie, FaStore, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    
    return (
        <div className="min-h-screen bg-[#f5e9dc] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                {/* Coffee Image Header */}
                <div className="relative h-64 sm:h-80 md:h-96">
                    <div className='flex items-center justify-center h-full w-full'>
                        <img 
                        src={coffee.photo} 
                        alt={coffee.name} 
                        className="object-cover "
                    />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white rancho">
                            {coffee.name}
                        </h1>
                    </div>
                </div>

                {/* Coffee Details */}
                <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column - Details */}
                        <div className="space-y-6">
                            <DetailItem 
                                icon={<FaUserTie className="text-[#6f4e37]" />}
                                title="Chef"
                                value={coffee.chef}
                            />
                            <DetailItem 
                                icon={<FaStore className="text-[#6f4e37]" />}
                                title="Supplier"
                                value={coffee.supplier}
                            />
                            <DetailItem 
                                icon={<FaCoffee className="text-[#6f4e37]" />}
                                title="Taste"
                                value={coffee.taste}
                            />
                            <DetailItem 
                                icon={<FaMoneyBillWave className="text-[#6f4e37]" />}
                                title="Price"
                                value={`$${coffee.price}`}
                            />
                        </div>

                        {/* Right Column - Description */}
                        <div className="bg-[#f9f5f0] p-6 rounded-lg">
                            <h3 className="flex items-center text-xl font-semibold text-[#6f4e37] mb-4">
                                <FaInfoCircle className="mr-2" />
                                About This Coffee
                            </h3>
                            <p className="text-[#5a3921] leading-relaxed">
                                {coffee.details}
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-[#6f4e37] text-white rounded-lg hover:bg-[#8b5a2b] transition flex items-center">
                            <FaCoffee className="mr-2" />
                            Order Now
                        </button>
                        <button className="px-6 py-3 border border-[#6f4e37] text-[#6f4e37] rounded-lg hover:bg-[#f0e6d9] transition">
                            Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable detail component
const DetailItem = ({ icon, title, value }) => (
    <div className="flex items-start">
        <div className="mr-4 mt-1">{icon}</div>
        <div>
            <h3 className="text-sm font-medium text-[#8b5a2b]">{title}</h3>
            <p className="text-lg font-semibold text-[#5a3921]">{value}</p>
        </div>
    </div>
);

export default CoffeeDetails;