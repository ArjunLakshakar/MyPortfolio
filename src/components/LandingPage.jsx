import React from "react";
import { FaDiscord, FaDownload,  FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import LinkedIn from "./animation/LinkedIn";

const LandingPage = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-[#0d0d2b] to-[#1b0f2e] text-white flex flex-col items-center justify-center px-4 xss:px-6 pt-32 pb-12"
    >
      <div className="max-w-[95%] w-full flex flex-col lg:flex-row gap-12 items-center justify-between lg:py-0 pb-12">
        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[40%] flex justify-center"
        >
          <iframe
            className="w-[280px] h-[200px] xss:w-[340px]  xs:w-[400px] md:w-[460px] sm:h-[280px] rounded-xl  "
            src="https://lottie.host/embed/7d80cbba-5f83-4f1b-b260-7f2eb4d7845f/0l6HoK0mYM.json"
            title="Animation"
          ></iframe>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[60%] text-center lg:text-left space-y-6 px-2 sm:px-6"
        >

          <h1 className="text-2xl font-semibold xs:font-normal xs:text-4xl md:text-6xl font-[Outfit] leading-tight bg-gradient-to-b from-white via-[#a5a5a5] to-[#5c5c5c] bg-clip-text text-transparent flex flex-col gap-4">
            <span>
              I am a&nbsp;
              <span className="inline-block">
                <Typewriter
                  words={[
                    "Full-Stack Developer",
                    "React.js Expert",
                    "API Builder...",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </span>
            <span>UI enthusiast, and builder</span>
            <span>of modern web products.</span>
          </h1>

          <p className="text-gray-300 text-sm xss:text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Hi, I'm  &nbsp;  <span className="text-blue-400 text-4xl" style={{ fontFamily: "Passions Conflict" }} >Arjun</span> — a passionate developer who creates interactive
            websites and apps with React, Tailwind, and Node.js.
          </p>

          <div className="flex flex-col xss:flex-row gap-4 items-center justify-center lg:justify-start">
            {/* <a
              href="/assets/Arjun_CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-lime-400  text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:shadow-[0_0_10px_#a3e635] "
            >
              Download CV <FaDownload className="text-lg" />
            </a> */}
            {/* <MediaBtn/> */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col xss:flex-row gap-8 items-center justify-center lg:justify-start">
                {/* Download CV Button */}
                <a
                  href="/assets/Arjun_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold xs:py-3 py-2 xs:px-6 px-4 rounded-full shadow-lg transition-all"
                >
                  Download CV <FaDownload className="text-lg" />
                </a>

                <LinkedIn />
                
              </div>

            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll Down Animation */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 text-sm">Scroll down to explore</p>
        <div className="text-white text-2xl mt-2 animate-bounce">↓</div>
      </motion.div> */}
    </section>
  );
};

export default LandingPage;
