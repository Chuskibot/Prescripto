import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12"> {/* Subtle light gray background */}
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Welcome to MedSupport Network! We connect patients with qualified doctors across various specialties, ensuring quality healthcare is just a click away.
        </p>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-4">
            To empower patients by providing comprehensive information about healthcare providers and facilitating easy appointment scheduling.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-4">
            To be the leading platform for healthcare accessibility, enabling patients to make informed decisions about their health.
          </p>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Integrity: Upholding the highest standards in all our actions.</li>
            <li>Compassion: Treating everyone with empathy and respect.</li>
            <li>Innovation: Embracing new technologies to improve healthcare experiences.</li>
            <li>Collaboration: Believing in teamwork for better outcomes.</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6 transition-transform duration-300 transform hover:shadow-xl hover:scale-105">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our dedicated team is here to support you every step of the way. With diverse backgrounds and expertise, we provide the best care possible.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center transition-transform duration-300 transform hover:shadow-lg hover:scale-105">
                <img src={member.image} alt={member.name} className="h-32 w-32 rounded-full mx-auto mb-4 border-4 border-blue-500" />
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'Dr. Alice Smith',
    role: 'Chief Medical Officer',
    image: 'path_to_image1.jpg',
  },
  {
    id: 2,
    name: 'Dr. John Doe',
    role: 'Medical Director',
    image: 'path_to_image2.jpg',
  },
  {
    id: 3,
    name: 'Nurse Sarah Johnson',
    role: 'Head Nurse',
    image: 'path_to_image3.jpg',
  },
];

export default About;
