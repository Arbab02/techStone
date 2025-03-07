import React, { useRef } from 'react';
import Cuboid from '../assets/cuboid.png';
import Cylinder from '../assets/cylinder.png';
import Pill from '../assets/pill.png';

const ServiceCard = ({ icon, title, description, bgColor, shadowColor }) => {
  const cardItemRef = useRef(null);

  return (
    <div className="rounded lg:mt-[12rem] lg:w-[31%] lg:h-[84%] xl:w-[31%] xl:h-[75%] text-center h-[50%] w-[85%] mt-20 p-5 mx-auto bg-gradient-to-tr from-[#0A0E21] via-[#110E3C] to-[#0A0E21] ">
      <div
        className={`mx-auto flex h-28 w-28 -translate-y-12 transform items-center justify-center rounded-full  ${bgColor}  ${shadowColor}`}
        ref={cardItemRef}
      >
        {icon}
      </div>
      <h1 className="text-white mb-3 text-3xl font-medium lg:px-14">{title}</h1>
      <p className="px-4 text-lg text-white">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: (
        <img src={Cuboid} alt="Tree and Shrub Pruning" className=" h-36 w-36" />
      ),
      title: 'TREE AND SHRUB PRUNING',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!',
      bgColor: 'transparent',
      shadowColor: '',
    },
    {
      icon: (
        <img
          src={Cylinder}
          alt="Irrigation & Drainage"
          className="h-[8rem] w-[8rem]"
        />
      ),
      title: 'IRRIGATION & DRAINAGE',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!',
      bgColor: 'bg-transparent',
      shadowColor: '',
    },
    {
      icon: (
        <img src={Pill} alt="Landscape Design" className="h-[7rem] w-[7rem]" />
      ),
      title: 'LANDSCAPE DESIGN',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet modi accusantium vero perspiciatis, incidunt dicta sed aspernatur!',
      bgColor: 'bg-transparent',
      shadowColor: '',
    },
  ];

  return (
    <div className="lg:h-[35rem] xl:py-8 py-8 bg-[#050816] lg:flex lg:justify-evenly xl:flex xl:justify-evenly text-center ">
      <h1 className="text-6xl text-white font-bold xl:absolute lg:absolute block py-10">
        Our <span className="text-indigo-500">Services</span>{' '}
      </h1>

      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          bgColor={service.bgColor}
          shadowColor={service.shadowColor}
        />
      ))}
    </div>
  );
};

export default Services;
