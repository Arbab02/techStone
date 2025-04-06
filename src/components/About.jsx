import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const About = () => {
  return (
    <section className="text-[#020D36] bg-white py-10">
      <div className="container px-4 sm:px-6 lg:px-10 mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">ABOUT US</h1>
          <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2"></div>
        </div>

        {/* Content */}
        <div className="font-sans flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 px-4 sm:px-6 lg:px-10 py-4">
            <p className="text-gray-700 text-lg text-justify mb-5 leading-[1.5rem] ">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit pariatur.
            </p>
            <p className="flex items-start gap-2 text-gray-700 text-lg">
              <IoCheckmarkDoneSharp className="text-blue-400 text-3xl sm:text-xl mt-[2px] sm:mt-1" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <p className="flex items-start gap-2 text-gray-700 text-lg ">
              <IoCheckmarkDoneSharp className="text-blue-400 text-3xl sm:text-xl mt-[2px] sm:mt-1" />
              Duis aute irure dolor in reprehenderit in voluptate velit
            </p>
            <p className="flex items-start gap-2 text-gray-700 text-lg ">
              <IoCheckmarkDoneSharp className="text-blue-400 text-3xl sm:text-xl mt-[2px] sm:mt-1" />
              Ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 px-4 sm:px-6 lg:px-10 py-4">
            <p className="text-gray-700  text-lg text-justify leading-[1.6rem] mt-2  ">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Duis aute irure dolor
              in reprehenderit. sunt in culpa qui officia deserunt mollit anim
              id est laborum.sunt in culpa qui.officia deserunt mollit anim.
            </p>

            <a className="inline-flex items-center" href="#">
              <button className="block mx-auto md:mx-0 rounded-full text-lg bg-transparent font-normal px-8 py-2 mt-4 text-blue-500 border border-blue-500 transition-all hover:scale-105">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
