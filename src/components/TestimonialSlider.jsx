import React from 'react';
import Slider from 'react-slick';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Ashneer Grover',
    role: 'Co- Founder of BharatPe',
    feedback:
      'This company is simply the best. Excellent service and a dedicated team!',
    image:
      'https://worktheater.com/wp-content/uploads/2023/04/how-did-ashneer-grover-make-his-money-the-asheer-grover-story.jpeg',
  },
  {
    name: 'Haris Ali Khan',
    role: 'Founder of CodeWithHarry,',
    feedback:
      'Their solutions are top-notch! Highly recommended for web development and digital marketing.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjN3kznrKIXYxgMR8qEXFKLUCoXYzAXpe2gYiDrNOVyQ1qg1yGHt9MKr1T3Sj069LnTZY&usqp=CAU',
  },
  {
    name: 'Adian Hadjin',
    role: 'Founder of JavaScript Mastery',
    feedback:
      'They helped grow my business with amazing designs and marketing strategies.',
    image:
      'https://images.contactout.com/profiles/1fe8e1e897f8ffd61cb4026329402c9f',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 testimonials at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white text-[#000925] py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl text-center font-extrabold title-font mb-4">
          TESTIMONIALS
        </h2>
        <div className="bg-blue-400 h-[3px] w-[3.5%] mx-auto "></div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-gradient-to-tr from-[#000925] via-[#021246] to-[#000925]  p-6 rounded-lg shadow-lg text-center">
                <img
                  className="w-36 h-36 rounded-full mx-auto mb-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="text-3xl mt-4 text-center text-yellow-500">
                  <AiFillStar className="inline" />
                  <AiFillStar className="inline" />
                  <AiFillStar className="inline" />
                  <AiFillStar className="inline" />
                  <AiFillStar className="inline" />
                </div>

                <p className="mt-3 text-gray-300 text-xl leading-relaxed">
                  "{testimonial.feedback}"
                </p>

                <BiSolidQuoteAltLeft className="mx-auto my-4 text-5xl text-white" />
                <h3 className="text-3xl font-normal text-white">
                  {testimonial.name}
                </h3>
                <p className="text-lg text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
