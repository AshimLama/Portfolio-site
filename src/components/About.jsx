import React from "react";
import aboutpicture from "../assets/aboutpic1.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about"
      className="min-h-screen px-6 lg:px-90 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 bg-white text-gray-900"
      initial={{opacity: 0, y: 50 }}
      whileInView={{opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      
      <div className="flex-shrink-0 ">
          <div className="w-full h-full lg:w-85 lg:h-70 rounded-2xl overflow-hidden border-4 border-gray-100 shadow-lg">
            <img
              src={aboutpicture}
              alt="Ashim Ghising"
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          </div>
      </div>

      <div className="max-w-2xl text-center lg:text-left ">
        <h2 className="font-bold text-blue-600">ABOUT ME</h2>
        <h2 className="lg:text-xl font-bold mb-2 ">A passionate Front-end Developer based in Nepal.</h2>
        <p className="text-gray-500 text-sm">
          As an aspiring Front-End Developer, I bring strong enthusiasm for
          crafting clean and responsive web interfaces using modern technologies
          like HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy building
          sleek user experiences that are both functional and visually engaging.
          My journey began with a strong curiosity for the web and has grown
          into a focused pursuit of frontend excellence. I take pride in writing
          clean, reusable code and constantly improving my skills through
          hands-on projects. I'm also a collaborative team player who values
          communication and creativity in the development process.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
