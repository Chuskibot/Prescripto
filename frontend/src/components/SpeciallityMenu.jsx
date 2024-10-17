import React from 'react';
import { specialityData } from '../assets/assets'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='py-10 bg-gray-50'>
      <h1 className='text-4xl font-bold text-center mb-4 text-primary'>Find by Speciality</h1>
      <p className='text-center text-gray-600 mb-8 text-lg'>Choose from a wide range of specialties to find the right doctor for you.</p>
      
      <div className='flex flex-wrap justify-center gap-6'>
        {specialityData.map((item, index) => (
          <Link 
          onClick={()=>scrollTo(0,0)}
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className='flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:scale-105'
          >
            <img 
              src={item.image} 
              alt={item.speciality} 
              className='w-28 h-28 md:w-36 md:h-36 object-cover transition-transform duration-300 transform hover:scale-110'
            />
            <p className='mt-4 text-lg font-semibold text-gray-800'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
