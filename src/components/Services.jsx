import React from "react";
import { FaLaptopCode, FaMobileAlt, FaServer, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaLaptopCode size={32} />,
    title: "Web Development",
    description:
      "Building responsive and dynamic websites using modern tech like React, Tailwind, and JavaScript.",
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: "Mobile-Friendly Design",
    description:
      "Crafting mobile-first interfaces to ensure seamless experiences across all screen sizes.",
  },
  {
    icon: <FaServer size={32} />,
    title: "Backend & APIs",
    description:
      "Secure and scalable server-side logic using Node.js, Express, Spring Boot & MongoDB.",
  },
  {
    icon: <FaPalette size={32} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces with attention to accessibility and user flow.",
  },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0d0d2b] to-[#1b0f2e] text-white py-20 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent">
          Services I Offer
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From frontend design to backend logic – I build full-stack digital solutions tailored to your goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#13132a] hover:bg-[#1c1c3b] transition-all duration-300 p-6 rounded-xl shadow-md border border-gray-800"
            >
              <div className="text-lime-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
