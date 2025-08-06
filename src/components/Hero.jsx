import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, MapPin, Linkedin, Github } from "lucide-react"; 
import profile from "../assets/profile4.jpeg";
const Hero = () => {
  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 lg:px-12 lg:py-8">
        <div className="text-2xl font-bold text-black">AshimGhising</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ name, target }) => (
            <Link
              key={name}
              to={target}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-black font-semibold"
              className="cursor-pointer text-gray-700 hover:text-black transition-colors duration-200 font-bold"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map(({ name, target }) => (
              <Link
                key={name}
                to={target}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-black font-semibold"
                className="cursor-ponter text-2xl text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Main section */}
      <div
      id="home"
      className="px-6 lg:px-90 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        {/* Title */}
        <h1 className="text-2xl lg:text-5xl font-bold mb-6 text-black leading-tight">
          Front-End React Developer <span className="inline-block">👋</span>
        </h1>

        {/* Description */}
        <p className="text-lg lg:text-xl text-gray-600 mb-4">
          Hi, I'm Ashim Ghising. A passionate Front-end React Developer based in Kathmandu, Nepal
          <MapPin className="inline ml-2 text-red-500" size={20} />
        </p>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start space-x-4 my-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-lg hover:shadow-sm"
          >
            <Linkedin className="text-blue-600" size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border rounded-lg hover:shadow-sm"
          >
            <Github className="text-gray-800" size={24} />
          </a>
        </div>

        {/* Tech Stack content */}
        <div className="mt-10">
          <div className="flex items-center w-full max-w-md mb-6 mx-auto lg:mx-0">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-500 font-medium mx-4">Tech Stack</span>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="w-12 h-12 flex items-center justify-center border rounded-lg hover:shadow-sm cursor-pointer"
                title={tech.name}
              >
                <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="w-72 h-72 lg:w-86 lg:h-86 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
          <img
            src={profile}
            alt="Ashim Ghising"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
