import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          We're here to help! Fill out the form below or reach out to us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Email:</span> support@example.com
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Phone:</span> +1 (234) 567-890
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Address:</span> 123 Main St, Suite 100, Anytown, USA
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Instagram
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
