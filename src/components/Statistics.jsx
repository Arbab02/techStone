"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaLaptopCode, FaAward, FaBusinessTime } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-7xl text-blue-500" />,
    value: 1200,
    label: "Happy Clients",
  },
  {
    icon: <FaLaptopCode className="text-7xl text-blue-500" />, // New icon
    value: 350,
    label: "Projects Completed",
  },
  {
    icon: <FaAward className="text-7xl text-blue-500" />,
    value: 25,
    label: "Awards Won",
  },
  {
    icon: <FaBusinessTime className="text-7xl text-blue-500" />, // New icon
    value: 10,
    label: "Years Experience",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Statistics = () => {
  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl text-blue-900 text-center font-extrabold title-font">
          OUR STATISTICS
        </h2>
        <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2 mb-6"></div>

        <p className="text-center leading-[1.5rem] font-normal font-sans text-[1.1rem] text-gray-700 mt-2 mb-14">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6 transition-shadow"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-blue-900">
                <CountUp end={stat.value} duration={2} />
                {stat.label === "Years Experience" ? "+" : ""}
              </h3>
              <p className="text-xl text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
