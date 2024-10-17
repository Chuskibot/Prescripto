import React from 'react';
import { assets } from '../assets/assets'; // Ensure assets is correctly imported

const Banner = () => {
    return (
        <div className="relative h-[400px] flex items-center justify-center bg-[#08b4ea]"> {/* Using primary color as background */}
            <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for better text visibility */}
            <div className="relative z-10 text-center text-white p-6">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    Welcome to Our <span className="text-blue-400">Healthcare</span>
                </h1>
                <p className="text-lg md:text-2xl mb-6 transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100">
                    Your health is our priority. Discover top doctors and premium services.
                </p>
                
                {/* Button to create an account */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Create Account
                </button>
            </div>

            {/* Add your custom image below */}
            <img src={assets.appointment_img} alt="Appointment" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg" />
        </div>
    );
};

export default Banner;
