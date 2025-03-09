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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="  py-[7rem] bg-white  body-font bg-gradient-to-tr from-[#000000] via-[#00071E] to-blue-950"
    >
      <div className="container mx-auto flex  px-8 py-2 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="title-font sm:text-4xl lg:text-6xl text-4xl md:text-5xl mb-4 text-white font-bold"
            variants={childVariants}
          >
            Better Solutions For Your&nbsp;
            {/* <br className="hidden lg:inline-block" /> */}
            <span className="text-blue-500  font-bold">Business!</span>
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed lg:text-2xl md:text-2xl text-xl text-center md:text-justify text-white"
            variants={childVariants}
          >
            We are team of talented designers making websites with ReactJS &
            TailwindCSS
            <a href="/addTopic">
              <button className="block mx-auto lg:mx-0  xl:mx-0 md:mx-0 rounded-full text-xl bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 font-normal mt-4 text-white px-6 py-2 shadow-lg hover:from-purple-600 hover:via-pink-600 hover:to-pink-600 transition duration-300">
                Join Our Courses
              </button>
            </a>
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={childVariants}
          ></motion.div>
        </motion.div>
        {/* pl-8 property was here below */}
        <motion.div
          className="lg:max-w-2xl  lg:w-1/2 md:w-3/4 w-full"
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
