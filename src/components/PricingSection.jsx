import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "Free Plan",
      price: "0",
      period: "per month",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: false },
        { text: "Massa ultricies mi quis hendrerit", available: false },
      ],
      buttonStyle: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
    {
      title: "Business Plan",
      price: "29",
      period: "per month",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
      buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
    },
    {
      title: "Developer Plan",
      price: "49",
      period: "per month",
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
      buttonStyle: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center bg-white px-6 py-16">
       <h2 className="text-3xl md:text-4xl text-blue-900 text-center font-extrabold title-font">
          PRICING
        </h2>
        <div className="bg-blue-400 h-[3px] w-[40px] mx-auto mt-2 mb-4"></div>
        <p className="text-center leading-[1.5rem] font-normal font-sans text-[1.1rem] text-gray-700  mt-2 mb-10 ">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full  ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-8 text-left  text-blue-900 ">
              <h2 className="text-2xl font-medium mb-4">{plan.title}</h2>
              <div className="text-5xl font-medium"><span className="text-4xl font-normal">$</span>{plan.price}</div>
              <div className="text-lg text-blue-400 mb-6">{plan.period}</div>

              <ul className="text-gray-700 font-sans mb-6 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center text-left  gap-2 ${
                      !feature.available ? "text-gray-400 line-through" : ""
                    }`}
                  >
                    {feature.available ? (
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button
                className={`px-6 py-2 rounded-full font-medium transition ${plan.buttonStyle}`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
