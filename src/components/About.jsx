const About = () => {
  return (
    <section className="  text-[white] bg-gradient-to-tr from-[#000000] via-[#000828] to-[#000000]">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full ">
          <h1 className="text-4xl font-extrabold title-font mb-4 ">ABOUT US</h1>
        </div>
        <div className="bg-blue-400 h-[3.8px] w-[3.5%] mx-auto "></div>
        <div className="flex flex-wrap  item-center justify-center">
          {['Shooting Stars', 'The Catalyzer'].map((title, index) => (
            <div key={index} className="xl:w-1/2 lg:w-1/2 md:w-full px-10 py-6">
              {/* <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                {title}
              </h2> */}
              <p className="text-left leading-[1.5rem] text-gray-400 text-[1.3rem] mb-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a className="text-indigo-400 inline-flex items-center" href="#">
                <button className="block mx-auto lg:mx-0  xl:mx-0 md:mx-0 rounded-full xl:text-xl lg:text-lg text-base  bg-gradient-to-tr from-blue-600 via-[#000828] to-blue-600 font-normal mt-4 text-white px-10 py-2  transition-all hover:scale-110">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
