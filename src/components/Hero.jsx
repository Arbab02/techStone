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
      className="  pt-[7rem] bgGradient"
    >
      <div className="container mx-auto flex heroResp md:flex-row flex-col items-center">
      
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center"
          variants={containerVariants}
        >
          <motion.h1
            className="heroHeadingResp mb-4 text-white font-bold"
            variants={childVariants}
          >
            Best Solutions For Your&nbsp;
         
            <span className="text-blue-500  font-bold">Business!</span>
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed heroParaResp text-center md:text-justify font-light text-gray-300"
            variants={childVariants}
          >
            We are team of talented designers making websites with ReactJS &
            TailwindCSS
            <button className="iconGradient heroBtnResp heroBtnStyles">
              <span className="md:w-5 md:h-5 w-4 h-4 bg-white rounded-full"></span>
              GET STARTED
            </button>


          </motion.p>

        </motion.div>
     
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
