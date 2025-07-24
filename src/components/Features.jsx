import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaHeadset, FaLock } from "react-icons/fa";

const featuresData = [
  {
    icon: <FaShippingFast />,
    title: "Free Shipping",
    subtitle: "Free Shipping On All Orders",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Money Guarantee",
    subtitle: "30 Day Money Back",
  },
  {
    icon: <FaHeadset />,
    title: "Online Support 24/7",
    subtitle: "Technical Support 24/7",
  },
  {
    icon: <FaLock />,
    title: "Secure Payment",
    subtitle: "All Cards Accepted",
  },
];

const Features = () => {
  return (
    <div className="w-full py-10 px-2 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 p-4 bg-white shadow-md rounded-xl transition hover:scale-105 duration-300"
          >
            <div className="text-4xl text-orange-500">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
