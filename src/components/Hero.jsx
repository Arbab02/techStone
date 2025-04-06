import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../assets/hero-img.png';
// import Image from "next/image";
// import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
      },
    },
  };

  return (
    // from-[#000000] via-[#00071E] to-blue-950
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="  pt-[7rem] bgGradient"
    >
      <div className="container mx-auto flex  xl:px-20 px-12 py-1 md:flex-row flex-col items-center">
        {/* mb-16 property was here below */}
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24   md:pr-16 flex flex-col md:items-start md:text-left mb-6  md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl text-5xl  mb-4 text-white font-bold"
            variants={childVariants}
          >
            Best Solutions For Your&nbsp;
            {/* <br className="hidden lg:inline-block" /> */}
            <span className="text-blue-500  font-bold">Business!</span>
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed xl:text-3xl lg:text-2xl md:text-xl text-2xl text-center md:text-justify font-light text-gray-300"
            variants={childVariants}
          >
            We are team of talented designers making websites with ReactJS &
            TailwindCSS
            <button className="iconGradient text-white font-normal mt-4 mx-auto md:mx-0 px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 text-sm md:text-xl">
  <span className="w-5 h-5 bg-white rounded-full"></span>
  GET STARTED
</button>

            {/* <a href="/addTopic">
              <button className="block  text-base font-light text-center text-white  mx-auto md:mx-0 xl:text-2xl lg:text-lg  xl:mx-0 md:mx-0  xl:px-7 xl:py-3 lg:px-6 lg:py-2 px-6 py-2 rounded-full   bg-gradient-to-tr from-[#071241] via-[#071241] to-[#2149EC] mt-4  transition-all hover:scale-110 ">
              GET STARTED
              
              </button>
            </a> */}
          </motion.p>
          {/* <motion.div
            className="flex justify-center"
            variants={childVariants}
          ></motion.div> */}
        </motion.div>
        {/* pl-8 property was here below */}
        <motion.div
          className="lg:max-w-lg  lg:w-1/2 md:w-3/4 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            className="object-cover object-center  rounded spinner w-full h-auto"
            alt="hero"
            src={HeroImg}
            width="1000"
            height="1000"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
