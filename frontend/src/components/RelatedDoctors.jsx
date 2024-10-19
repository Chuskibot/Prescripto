import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const filteredDoctors = doctors.filter(
      (doctor) => doctor.speciality === speciality && doctor._id !== docId
    );
    setRelDoc(filteredDoctors);
  }, [doctors, speciality, docId]);

  const handleAppointmentClick = (doctorId) => {
    navigate(`/appointment/${doctorId}`);
    // Smooth scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Related Doctors</h2>
      {relDoc.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relDoc.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
                onClick={() => handleAppointmentClick(doctor._id)} // Add click handler for image
                style={{ cursor: 'pointer' }} // Change cursor to pointer for image
              />
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="text-gray-700">Experience: {doctor.experience} years</p>
              <p className="text-green-600 font-bold">BDT {doctor.fees}</p>
              <button
                className="mt-2 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => handleAppointmentClick(doctor._id)} // Use the same click handler
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No related doctors found.</p>
      )}
    </div>
  );
};

export default RelatedDoctors;
