import team1 from '../assets/team/team-1.jpg';
import team3 from '../assets/team/team-3.jpg';


import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Walter White',
    title: 'Chief Executive Officer',
    image: team1,
    desc: 'Explicabo voluptatem mollitia et repellat qui dolorem quasi',
  },
  {
    name: 'Sarah Jhonson',
    title: 'Product Manager',
    image: team3,
    desc: 'Aut maiores voluptates amet et quis praesentium qui senda para',
  },
  {
    name: 'William Anderson',
    title: 'CTO',
    image: team1,
    desc: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
  },
  {
    name: 'Amanda Jepson',
    title: 'Accountant',
    image: team3,
    desc: 'Dolorum tempora officiis odit laborum officiis et accusamus',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16  bg-gray-100 text-center">
      <div className="max-w-6xl px-2 mx-auto">
      <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">TEAM</h1>
          <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2"></div>
        </div>
        <p className="text-lg font-sans text-gray-600 mb-12  mx-auto">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. 
          Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="grid gap-6 md:grid-cols-2 font-sans">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex items-center p-6 bg-white hover:md: cursor-pointer rounded-md shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="md:w-36 md:h-36 w-16 h-16 mb-24 sm:mb-0 object-cover rounded-full mr-6"
              />
              <div className="text-left">
                <h3 className="text-blue-900 text-xl font-bold mb-1">{member.name}</h3>
                <p className=" text-gray-700 text-[15px] mb-1 ">{member.title}</p>
                <p className=" text-gray-700 text-[15px] md:pr-16 mb-3 ">{member.desc}</p>
                <div className="flex space-x-2 text-blue-900 text-md">
                  <span className='flex w-9 h-9 bg-gray-200 hover:bg-blue-400 cursor-pointer transition-all hover:text-white items-center justify-center rounded-full'>
                  <FaTwitter  />
                  </span>
                  <span className='flex w-9 h-9 bg-gray-200 hover:bg-blue-400 cursor-pointer transition-all hover:text-white items-center justify-center rounded-full'>
                  <FaFacebookF />
                  </span>
                  <span className='flex w-9 h-9 bg-gray-200 hover:bg-blue-400 cursor-pointer transition-all hover:text-white items-center justify-center rounded-full'>
                  <FaInstagram />
                  </span>
                  <span className='flex w-9 h-9 bg-gray-200 hover:bg-blue-400 cursor-pointer transition-all hover:text-white items-center justify-center rounded-full'>
                  <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
