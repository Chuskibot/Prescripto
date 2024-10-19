import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate(); // Initialize useNavigate
  const [filterDoc, setFilterDoc] = useState([]);

  useEffect(() => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) =>
          doctor.speciality.toLowerCase().includes(speciality.toLowerCase())
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  }, [speciality, doctors]);

  // Function to handle doctor card click
  const handleCardClick = (id) => {
    navigate(`/appointment/${id}`); // Navigate to the doctor's appointment page
  };

  return (
    <div className="flex flex-col lg:flex-row container mx-auto p-4 lg:py-10">
      {/* Left-side Menu */}
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-0 lg:block">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Specialities</h3>
          <ul className="space-y-3">
            {[
              "General Physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist",
            ].map((specialty) => (
              <li
                key={specialty}
                className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors duration-300 bg-gray-100 rounded-lg px-4 py-2 hover:bg-blue-100"
                onClick={() =>
                  setFilterDoc(doctors.filter((doc) => doc.speciality === specialty))
                }
              >
                {specialty}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right-side Doctors Cards */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.length > 0 ? (
            filterDoc.map((doctor) => (
              <div
                key={doctor._id}
                className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out border border-gray-200"
                onClick={() => handleCardClick(doctor._id)} // Add onClick to the card
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-32 object-cover rounded-t-lg"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                  <p className="mt-1 text-gray-700 text-xs">
                    {doctor.about.length > 70 ? `${doctor.about.substring(0, 70)}...` : doctor.about}
                  </p>
                  <p className="mt-2 text-md font-bold text-gray-800">Fees: ${doctor.fees}</p>
                  <p className="text-gray-500 text-xs">{doctor.address.line1}</p>
                  <p className="text-gray-500 text-xs">{doctor.address.line2}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No doctors found for the selected specialty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
