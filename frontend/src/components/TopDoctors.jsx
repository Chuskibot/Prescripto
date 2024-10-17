import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AppContext } from '../context/AppContext'; // Adjust the import based on your file structure

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext); // Access doctors from context

    // Function to handle card click
    const handleCardClick = (id) => {
        navigate(`/appointment/${id}`); // Navigate to the appointment page for the selected doctor
    };

    // Function to handle "More" button click
    const handleMoreClick = () => {
        navigate('/doctors'); // Navigate to the all doctors page
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Top Doctors</h2>

            {/* Flex Container for Horizontal Layout */}
            <div className="flex overflow-x-auto space-x-4 sm:space-x-6 scrollbar-hide">
                {doctors.slice(0, 10).map((doctor) => (
                    <div
                        key={doctor._id}
                        className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out border border-gray-200 min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] relative group"
                        onClick={() => handleCardClick(doctor._id)} // Add onClick to the card
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-32 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                            {doctor.isAvailable ? 'Available' : 'Not Available'}
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                            <p className="text-gray-600 text-sm">{doctor.speciality}</p>

                            {/* Show only part of the bio */}
                            <p className="mt-1 text-gray-700 text-xs">
                                {doctor.about.length > 70 ? `${doctor.about.substring(0, 70)}...` : doctor.about}
                            </p>

                            <p className="mt-2 text-md font-bold text-gray-800">Fees: ${doctor.fees}</p>
                            <p className="text-gray-500 text-xs">{doctor.address.line1}</p>
                            <p className="text-gray-500 text-xs">{doctor.address.line2}</p>
                        </div>
                        <div className="absolute inset-0 rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-br from-green-200 to-green-300 opacity-0 group-hover:opacity-30"></div>
                    </div>
                ))}
            </div>

            {/* More Button */}
            <div className="mt-6 text-center">
                <button
                    onClick={handleMoreClick} // Call the handleMoreClick function
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    More Doctors
                </button>
            </div>
        </div>
    );
};

export default TopDoctors;
