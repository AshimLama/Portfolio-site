import { FacebookIcon, InstagramIcon, MailIcon, MapPinHouseIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-black text-white w-full h-full py-20 px-6 lg:px-90"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Main contact and socials container */}
      <div className="flex flex-col lg:flex-row justify-between">
        
        {/* Contact Info */}
        <div className="flex flex-col">
          <h2 className="font-bold">Contact Me!</h2>

          <div className="flex items-center lg:gap-2 mt-7 text-sm">
            <MailIcon className="w-5 h-5" />
            <span className="font-semibold">ashimlama37@gmail.com</span>
          </div>

          <div className="flex items-center lg:gap-2 text-sm mt-3 font-semibold">
            <MapPinHouseIcon className="w-5 h-5" />
            <span>Gokarna, Kathmandu, Nepal</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col mt-6 lg:mt-0">
          <h2 className="font-bold">Socials</h2>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.facebook.com/aseem.lama.2025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-all duration-300 transform hover:scale-110 hover:text-blue-500"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-all duration-300 transform hover:scale-110 hover:text-pink-500"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="mt-10 text-center text-gray-300 text-sm border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Ashim Ghising. All rights reserved.
      </div>

    </motion.section>
  );
};

export default Contact;
