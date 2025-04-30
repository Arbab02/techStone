
import { motion } from 'framer-motion';
import { FaBullhorn, FaPencilRuler, FaSearch, FaGlobe, FaPaintBrush, FaFileAlt, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe size={40} className="text-blue-500" />,
    title: 'Software Development',
    description: `We are your trusted partner for Software development services. At TechStone, we focus on creating visually stunning and highly functional websites that leave a lasting impact. Our mission is to build websites that not only look great but also perform exceptionally in today’s competitive digital landscape.`
  },
  {
    icon: <FaBullhorn size={40} className="text-blue-500" />,
    title: 'Digital Marketing',
    description: `In order to improve your online presence and generate results, we provide a full range of digital marketing services. Our knowledgeable team has expertise in content creation, social media marketing, PPC advertising, SEO, and more. We customize our services to your unique needs, assisting you in productivity.`
  },
  {
    icon: <FaSearch size={40} className="text-blue-500" />,
    title: 'SEO',
    description: `To help your company move up the search engine results pages and increase organic website traffic, TechStone offers professional SEO services. We conduct in-depth keyword research, optimize on-page content, improve website structure, and create high-quality backlinks, ensuring your website's ranking.`
  },
  {
    icon: <FaFileAlt size={40} className="text-blue-500" />,
    title: 'Content Writing',
    description: `TechStone provides exceptional content writing services that are adapted to your unique requirements. Our talented team of writers produces high-quality, compelling, and SEO-optimized content for websites, blogs, social media, and more. Whether you need engaging articles, persuasive copy for product descriptions, or captivating storytelling for your brand, our content got you covered.`
  },
  {
    icon: <FaPaintBrush size={40} className="text-blue-500" />,
    title: 'Graphic Designing',
    description: `TechStone offers innovative graphic design solutions that elevate your brand's visual identity. Our creative team specializes in animated logos, brochure designs, and marketing materials that truly make your company stand out. Whether it's a fresh logo design or an animated version of your existing one, we ensure your brand resonates with your target audience through captivating visuals.`
  },
  {
    icon: <FaPencilRuler size={40} className="text-blue-500" />,
    title: 'Animation',
    description: `At TechStone, our mission is to create highly effective and tailored animation plans that align with your business goals. Our expertise lies in producing captivating 2D and 3D animations that leave a lasting impression on your audience. From animating existing logos to crafting entirely new ones, our creative solutions ensure your brand stands out in a competitive marketplace.`
  },
];

const Services = () => {
  return (
    <div className="  py-14 lg:px-16 px-3 bg-white text-gray-400">
      <h2 className="text-3xl md:text-4xl text-blue-900 text-center font-extrabold title-font">
        OUR SERVICES
      </h2>
      <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2 mb-6"></div>

      <p className="text-center leading-[1.5rem] font-normal font-sans text-[1.1rem] text-gray-700 mt-2 mb-6">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg duration-300 hover:cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            whileHover={{ scale: 1.06 }}
          >
            <div className="flex justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-blue-900 text-2xl lg:text-3xl font-bold mb-3 text-center">
              {service.title}
            </h3>
            <div className="bg-blue-900 h-[1px] w-[100%] mx-auto my-4"></div>

            <p className="text-gray-800 font-sans text-base  text-justify">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
