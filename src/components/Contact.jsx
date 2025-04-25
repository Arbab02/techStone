import React from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineMailOutline } from 'react-icons/md';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { FaUser, FaEnvelope, FaTag, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="text-gray-600  body-font bg-white relative py-16 px-5 md:px-28">
      <h1 className="text-3xl md:text-4xl text-[#020D36] text-center tracking-tight font-extrabold title-font mb-4">
        CONTACT US
      </h1>
      <div className="bg-blue-400  h-[3px] w-10 mx-auto mb-8"></div>
      <div className="container font-sans mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
        {/* Map Section */}
        <div className="lg:w-[47%] w-full  border-t-4 border-b-4 border-blue-400 bg-white text-gray-600 p-6 md:px-8 md:py-10 rounded shadow-xl ">
          <div className="w-full mb-4">
            <div className="flex flex-col absolute md:mt-1 mt-2 items-center  justify-center  text-center  w-[3rem] h-[3rem] text-blue-400 bg-blue-100  rounded-full">
              <SlLocationPin className="text-2xl" />
            </div>
            <h2 className="text-[1.4rem] ml-16 inline font-bold text-[#37517e]">
              Location:
            </h2>
            <p className="text-gray-500 ml-16">
              A108 Adam Street, New York, NY 535022
            </p>
            <div className="flex flex-col absolute md:mt-5 sm:mt-4 mt-4 items-center justify-center  text-center  w-[3rem] h-[3rem] text-blue-400 bg-blue-100  rounded-full">
              <MdOutlineMailOutline className="text-2xl " />
            </div>
            <h2 className="text-[1.4rem] font-bold text-[#37517e] mt-4  ml-16">
              Email:
            </h2>

            <a className="text-gray-500  ml-16">info@example.com</a>
            <div className="flex flex-col absolute sm:mt-4 lg:mt-5 mt-4  items-center justify-center  text-center  w-[3rem] h-[3rem] text-blue-400 bg-blue-100  rounded-full">
              <MdOutlinePhoneAndroid className="text-2xl" />
            </div>
            <h2 className="text-[1.4rem] font-bold text-[#37517e] mt-4 ml-16">
              Call:
            </h2>
            <p className="text-gray-500 ml-16">+1 5589 55488 55</p>
          </div>
          <div className="w-[100%] h-64 mt-auto">
            <iframe
              className="w-full h-full "
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>

       

{/* Contact Form Section */}
<form className="lg:w-2/3 w-full border-t-4 border-b-4 border-blue-400 bg-white text-gray-600 p-6 md:p-8 rounded shadow-2xl mt-10 lg:mt-0">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block text-lg flex items-center gap-2">
        <FaUser className="text-blue-500" /> Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-lg flex items-center gap-2">
        <FaEnvelope className="text-blue-500" /> Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>
  </div>
  <div className="mt-4">
    <label htmlFor="subject" className="block text-lg flex items-center gap-2">
      <FaTag className="text-blue-500" /> Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none"
    />
  </div>
  <div className="mt-4">
    <label htmlFor="message" className="block text-lg flex items-center gap-2">
      <FaCommentDots className="text-blue-500" /> Message
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 mt-1 focus:ring-1 focus:ring-blue-500 outline-none h-52 resize-none"
    ></textarea>
  </div>
  <button className="block mx-auto rounded-full lg:text-lg text-base bg-blue-500 font-normal mt-[22px] text-white px-4 py-2 xl:px-4 xl:py-2 lg:px-6 lg:py-2 transition-all hover:scale-110 flex items-center gap-2">
    <FaPaperPlane className="text-white" /> Send Message
  </button>
</form>

      </div>
    </section>
  );
};

export default Contact;
