import React from 'react';
import WhyUsImg from '../assets/why-us.png';
const WhyUs = () => {
  return (
    <section className=" text-[#020D36] font-sans bg-white">
      <div className="container mx-auto flex  px-5 py-2  md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-1/2 md:w-3/4 w-5/6 md:mb-0 md:ml-12 mb-6 ">
          <img
            className="object-cover object-center rounded spinner"
            alt="About Us"
            src={WhyUsImg}
            width="1000"
            height="1000"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl md:text-4xl mb-4 font-bold">
            Before they sold out&nbsp;
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-4 text-gray-700 text-lg text-justify mb-5 leading-[1.5rem] ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="lmBtnResp lmBtnStyles ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
