import client1 from '../assets/clients/client-1.png';
import client2 from '../assets/clients/client-2.png';
import client3 from '../assets/clients/client-3.png';
import client4 from '../assets/clients/client-4.png';
import client5 from '../assets/clients/client-5.png';
import client6 from '../assets/clients/client-6.png';

const Clients = () => {
  const clients = [client1, client2, client3, client4, client5, client6];

  return (
    <section id="clients" className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client}
              alt={`Client ${index + 1}`}
              className="w-16 sm:w-28 md:w-[6%] h-auto grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
