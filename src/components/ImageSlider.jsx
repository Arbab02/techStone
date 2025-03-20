import client1 from '../assets/clients/client-1.png';
import client2 from '../assets/clients/client-2.png';
import client3 from '../assets/clients/client-3.png';
import client4 from '../assets/clients/client-4.png';
import client5 from '../assets/clients/client-5.png';
import client6 from '../assets/clients/client-6.png';

const Clients = () => {
  return (
    <section
      id="clients"
      className="h-68  text-white bg-white border-t border-white text-center flex justify-evenly relative"
    >
     
      <img src={client1} alt="Web-Development" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
      <img src={client2} alt="Web-Development" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
      <img src={client3} alt="Python-Training" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
      <img src={client4} alt="Python-Training" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
      <img src={client5} alt="Python-Training" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
      <img src={client6} alt="Python-Training" className="w-[6%] h-[5vh] mt-8 grayscale hover:grayscale-0 hover:scale-110 transition-all" />
    </section>
  );
};

export default Clients;
