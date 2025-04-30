import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaRegQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    icon: <FaRegQuestionCircle className="text-xl sm:mb-0 md:text-xl text-blue-400" />,
    question: `Non consectetur a erat nam at lectus urna duis?`,
    answer:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    icon: <FaRegQuestionCircle className="text-xl sm:mb-0 md:text-xl text-blue-400" />,
    question: 'Feugiat scelerisque varius morbi enim nunc?',
    answer: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
  },
  {
    icon: <FaRegQuestionCircle className="text-xl sm:mb-0 md:text-xl text-blue-400" />,
    question: 'Dolor sit amet consectetur adipiscing elit at lectus urna duis?',
    answer: 'Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
  },
  {
    icon: <FaRegQuestionCircle className="text-xl sm:mb-0 md:text-xl text-blue-400" />,
    question: 'Tempus quam pellentesque nec consequat?',
    answer: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.',
  },
  {
    icon: <FaRegQuestionCircle className="text-xl sm:mb-0 md:text-xl text-blue-400" />,
    question: 'Tempus quam pellentesque nec consequat??',
    answer: 'Fusce nec tellus sed augue semper porta. Mauris massa.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4 md:px-0 bg-gray-100 rounded-lg">
        <h2 className="text-3xl md:text-4xl text-blue-900 text-center font-extrabold title-font">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2 mb-6"></div>

        <p className="text-center leading-[1.5rem] font-normal font-sans text-[1.1rem] text-gray-700 mt-2 mb-6">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
        </p>

        <div className="space-y-4 font-sans">
          {faqs.map((faq, index) => (
            
            <div key={index} className="bg-white transition-all py-1 md:text-lg text-md text-[#37517e] rounded-sm">
              
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-600"
                aria-expanded={openIndex === index}
              >
               <span className="flex items-center gap-2  text-[#37517e] hover:text-blue-400 transition-all">
          <span className='  mb-5 sm:mb-0 md:0 '>
               {faq.icon}
               </span>
    {faq.question}
  
</span>


                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500 text-sm" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 font-normal md:text-lg text-md leading-[1.6rem] text-gray-700 overflow-hidden"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
