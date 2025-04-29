import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">TechStone</h2>
          <p>A108 Adam Street<br />New York, NY 535022<br />United States</p>
          <p className="mt-4"><span className="font-semibold">Phone:</span> +1 5589 55488 55</p>
          <p><span className="font-semibold">Email:</span> info@example.com</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Useful Links</h3>
          <ul className="space-y-2 text-md">
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Home</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> About us</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Services</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Terms of service</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Privacy policy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Services</h3>
          <ul className="space-y-2 text-md">
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Web Design</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Web Development</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Product Management</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Marketing</li>
            <li className="flex items-center gap-2 hover:text-blue-400 cursor-pointer"><FaAngleRight /> Graphic Design</li>
          </ul>
        </div>

        {/* Social Networks */}
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Social Networks</h3>
          <p className="mb-4 text-md">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="flex items-center gap-2 text-lg">
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"><FaTwitter /></a>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"><FaFacebookF /></a>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"><FaInstagram /></a>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"><FaSkype /></a>
            <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white rounded-full p-2"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 text-center text-white py-4 text-sm md:text-base">
        © Copyright <span className="font-bold">TechStone</span>. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
