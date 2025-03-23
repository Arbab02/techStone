import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 font-sans body-font bg-white relative py-16 px-5 md:px-10 lg:px-32">
      <h1 className="text-3xl md:text-4xl text-[#020D36] text-center font-extrabold title-font mb-4">
        CONTACT US
      </h1>
      <div className="bg-blue-400 h-[3px] w-12 mx-auto mb-8"></div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
        {/* Map Section */}
        <div className="lg:w-1/2 w-full h-[50vh] md:h-[80vh] border-t-4 border-blue-400 rounded overflow-hidden shadow-lg relative flex flex-col items-center p-6">
          <div className="w-full mb-4">
            <h2 className="text-xl font-bold text-gray-700">Location:</h2>
            <p className="text-gray-500">123 Business Street, City, Country</p>
            <h2 className="text-xl font-bold text-gray-700 mt-3">Email:</h2>
            <a className="text-gray-500">info@example.com</a>
            <h2 className="text-xl font-bold text-gray-700 mt-3">Call:</h2>
            <p className="text-gray-500">123-456-7890</p>
          </div>
          <div className="w-[100%] h-2/3 mt-auto">
            <iframe
              className="w-full h-full "
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-2/3 w-full border-t-4 border-blue-400 bg-white text-gray-600 p-6 md:p-8 rounded shadow-xl mt-10 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-lg">Your Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Your Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none" />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="subject" className="block text-lg">Subject</label>
            <input type="text" id="subject" name="subject" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none" />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea id="message" name="message" className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none h-40 resize-none"></textarea>
          </div>
          <button className="block w-full md:w-auto mx-auto mt-6 rounded-full text-lg bg-blue-500 text-white px-8 py-3 transition-all hover:scale-105">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
