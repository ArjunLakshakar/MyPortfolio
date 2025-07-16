import React from "react";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMongodb, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";
import Button from "./animation/Button";

const Skills = () => {
    const skills = [
        { icon: <FaReact size={40} color="#61DAFB" />, name: "React.js" },
        { icon: <SiRedux size={40} color="#764ABC" />, name: "Redux" },
        { icon: <FaNodeJs size={40} color="#68A063" />, name: "Node.js" },
        { icon: <SiTailwindcss size={40} color="#38bdf8" />, name: "Tailwind CSS" },
        { icon: <SiMongodb size={40} color="#47A248" />, name: "MongoDB" },
        { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML5" },
        { icon: <FaCss3Alt size={40} color="#264de4" />, name: "CSS3" },
        { icon: <FaJava size={40} color="#f89820" />, name: "Java" },
        { icon: <SiSpringboot size={40} color="#6DB33F" />, name: "Spring Boot" },
        { icon: <FaDatabase size={40} color="#4DB33D" />, name: "SQL" },
    ];

    return (
        <section className="bg-gradient-to-r from-black via-[#0b0b27] to-[#180d29] text-white py-20 px-4 md:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-4 text-center md:text-left" style={{ fontFamily: "Caveat" }}>
                    Tech Stack & Tools
                </h2>
                <p className="text-gray-400 text-center md:text-left text-lg mb-10 max-w-3xl">
                    Here are the technologies I’ve worked with while building real-world applications – from elegant frontend interfaces to powerful backend systems.
                </p>

                <div className="grid grid-cols-2 xss:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="flex flex-col items-center text-center group transition-all duration-300 hover:scale-105"
                        >
                            <Button icon={skill.icon} />
                            <p className="mt-3 text-sm text-gray-300 group-hover:text-white font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
