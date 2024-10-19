import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    const fetchDocInfo = () => {
      const doc = doctors.find((doc) => doc._id === docId);
      setDocInfo(doc);
      if (doc) {
        setDocSlots(generateTimeSlots());
      }
    };
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docSlots.length > 0 && !selectedSlot) {
      setSelectedSlot(docSlots[0]);
    }
  }, [docSlots]);

  const getDateLimits = () => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 6);
    return {
      min: today.toISOString().split('T')[0],
      max: maxDate.toISOString().split('T')[0],
    };
  };

  const generateTimeSlots = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = currentHour >= 12 ? currentHour + 1 : 12;

    const slots = [];
    for (let i = startHour; i < startHour + 8; i++) {
      const hour = i % 24;
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      slots.push(`${displayHour}:00 ${ampm}`);
    }
    return slots;
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  if (!docInfo) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const { min, max } = getDateLimits();

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col md:flex-row gap-8 transition-transform duration-300 transform hover:scale-105">
        {/* Doctor's Image Section */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-full h-auto rounded-lg border border-gray-200 shadow-md"
          />
          <div
            className={`mt-4 text-sm font-semibold px-3 py-1 rounded-full text-center ${
              docInfo.isAvailable ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}
          >
            {docInfo.isAvailable ? 'Available' : 'Not Available'}
          </div>
        </div>

        {/* Doctor's Info Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            {docInfo.name}
            {docInfo.isVerified && <span className="ml-2 text-green-500 text-xl">✔️</span>}
          </h2>
          <p className="text-gray-600 text-lg mb-4">{docInfo.speciality}</p>

          {/* Degree Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Degree:</h3>
            <p className="text-gray-700">{docInfo.degree}</p>
          </div>

          {/* Experience Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Experience:</h3>
            <p className="text-gray-700">{docInfo.experience} years</p>
          </div>

          {/* About Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">About:</h3>
            <p className="text-gray-700">{docInfo.about}</p>
          </div>

          {/* Address Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-700">{docInfo.address.line1}</p>
            <p className="text-gray-700">{docInfo.address.line2}</p>
          </div>

          {/* Fees Section */}
          <div className="mt-6">
            <p className="text-xl font-bold text-gray-800">
              Consultation Fees: <span className="text-green-600">BDT {docInfo.fees}</span>
            </p>
          </div>

          {/* Date Picker Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Select Date:</h3>
            <input
              type="date"
              min={min}
              max={max}
              className="mt-2 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          {/* Time Slots Section */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Available Time Slots:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-2">
              {docSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center border rounded-lg p-3 transition-colors duration-200 shadow-lg ${
                    selectedSlot === slot
                      ? 'bg-blue-600 text-white transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-200 hover:shadow-xl'
                  }`}
                  onClick={() => handleSlotSelection(slot)}
                >
                  <span className="text-lg font-semibold">{slot}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Slot and Date Section */}
          {selectedSlot && selectedDate && (
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-800">
                Selected Date: <span className="text-blue-600">{selectedDate}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Selected Slot: <span className="text-blue-600">{selectedSlot}</span>
              </p>
            </div>
          )}
        </div>

        {/* Modern Book Appointment Button */}
        <div className="mt-6 md:mt-0">
          <button
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            onClick={() => alert(`Booking Appointment on ${selectedDate} at ${selectedSlot}`)} // Replace with your booking logic
          >
            <span className="mr-2">📅</span>
            Book Appointment
          </button>
        </div>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  );
};

export default Appointment;
