import React from 'react';
import WhyUsImg from '../assets/why-us.png';
const WhyUs = () => {
  return (
    <section className=" text-[#020D36] bg-white body-font">
      <div className="container mx-auto flex  px-5 py-8  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ">
          <img
            className="object-cover object-center rounded spinner"
            alt="About Us"
            src={WhyUsImg}
            width="1000"
            height="1000"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl md:text-5xl mb-4 font-bold">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-4 text-left leading-[1.5rem] text-gray-400 text-[1.3rem] ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="block mx-auto lg:mx-0  xl:mx-0 md:mx-0 rounded-full xl:text-xl lg:text-lg  bg-tranparent font-normal mt-4 px-10 py-2 text-blue-400 shadow border-rounded border-blue-500  transition-all hover:scale-110 ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
