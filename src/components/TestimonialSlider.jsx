import React from 'react';
import Slider from 'react-slick';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Ashneer Grover',
    role: 'Co-Founder of BharatPe',
    feedback:
      'This company is simply the best. Excellent service and a dedicated team!',
    image:
      'https://worktheater.com/wp-content/uploads/2023/04/how-did-ashneer-grover-make-his-money-the-asheer-grover-story.jpeg',
  },
  {
    name: 'Haris Ali Khan',
    role: 'Founder of CodeWithHarry',
    feedback:
      'This company is simply the best. Excellent service and a dedicated team!',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjN3kznrKIXYxgMR8qEXFKLUCoXYzAXpe2gYiDrNOVyQ1qg1yGHt9MKr1T3Sj069LnTZY&usqp=CAU',
  },
  {
    name: 'Adian Hadjin',
    role: 'Founder of JavaScript Mastery',
    feedback:
      'This company is simply the best. Excellent service and a dedicated team!',
    image:
      'https://images.contactout.com/profiles/1fe8e1e897f8ffd61cb4026329402c9f',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, // Mobiles
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-gray-100 text-[#000925] py-10">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl text-center font-extrabold title-font mb-4">
          TESTIMONIALS
        </h2>
        <div className="bg-blue-400 h-[3px] w-12 mx-auto mb-6"></div>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white font-sans p-8 rounded-md shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                {/* Profile Image */}
                <img
                  className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                {/* Star Ratings */}
                <div className="text-3xl mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="inline" />
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="mt-3 text-gray-600 text-lg md:text-xl leading-relaxed italic">
                  "{testimonial.feedback}"
                </p>

                {/* Quote Icon */}
                <BiSolidQuoteAltLeft className="mx-auto my-4 text-5xl text-gray-600" />

                {/* Name & Role */}
                <h3 className="text-2xl font-semibold text-gray-500">
                  {testimonial.name}
                </h3>
                <p className="text-lg text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
