import React from "react";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="text-gray-500 bg-gray-100 body-font">
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
        <h1 className="text-3xl md:text-4xl text-[#020D36] font-extrabold">OUR STATISTICS</h1>
          <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2"></div>
          
        </div>
        <div className="flex flex-wrap -m-4 font-sans text-center">
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white text-left shadow-sm px-8 py-8 cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-blue-400 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="font-medium text-2xl text-[#37517e] mb-3">2.7K Downloads</h2>
              <p className="text-gray-700 text-base leading-[1.5rem]">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </motion.div>
       
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white text-left shadow-sm px-8 py-8  cursor-pointer">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="font-medium text-2xl text-[#37517e] mb-3">1.7K Users</h2>
              <p className="text-gray-700 text-base leading-[1.5rem]">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </motion.div>
          {/* Repeat this motion.div for other statistics items */}
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white text-left shadow-sm px-8 py-8  cursor-pointer">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="font-medium text-2xl  text-[#37517e] mb-3">78 Files</h2>
              <p className="text-gray-700 text-base leading-[1.5rem]">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </motion.div>
          {/* Repeat this motion.div for other statistics items */}
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white text-left shadow-sm px-8 py-8 cursor-pointer">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="font-medium text-2xl text-[#37517e] mb-3">46 Places</h2>
              <p className="text-gray-700 text-base leading-[1.5rem]">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </motion.div>
          {/* Repeat this motion.div for other statistics items */}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
