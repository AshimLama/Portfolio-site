import {
  CodeIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  GithubIcon,
} from "lucide-react";
import React from "react";
import freshpic from "../assets/freshmart.png";
import Moviepic from "../assets/movie2.png";
import spotify from "../assets/spotify.png";

const Projects = () => {
  return (
    <section className="min-h-screen px-6 lg:px-90 py-12 lg:py-20  bg-white ">
      <h2 className="font-bold text-blue-600">PROJECTS</h2>
      <p className="font-bold text-xl mt-3">
        Each project is a one-of-a-kind development, built with unique goals and
        ideas in mind.
      </p>
      <div className="flex flex-col lg:flex-row gap-6 mt-16">
        <div className=" flex-2 w-full max-w-[500px] h-[300px] rounded-lg shadow-lg overflow-hidden ">
          <img 
            className="w-full h-full rounded-lg" 
            src={freshpic} 
            alt="freshmart" />
        </div>
        <div className="text-center lg:text-center flex-1 flex flex-col items-center">
          <h3 className="font-bold m-5">Grocery Store Website ☘️</h3>
          <p className="text-gray-500 text-sm">
            A modern grocery e-commerce platform with cart management, instant
            search, and smart filters for effortless shopping. Browse fresh
            produce, add items seamlessly, and checkout securely—all in one
            intuitive interface.
          </p>
          <div className="flex gap-5 mt-3 font-bold">
            <span className="px-5 py-1 bg-green-200 rounded-full text-sm">
              React
            </span>
            <span className="px-2 py-1 bg-green-200 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
          <div className="flex lg:gap-6 mt-7 text-xs">
            <a
              href="https://github.com/AshimLama/Grocery-Store-Website.git"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 font-bold"
            >
              Code <GithubIcon />
            </a>
            <a
              href="https://grocery-store-website7.netlify.app/"
              target="_blank"
              rel="noopener"
              className="flex items-center  gap-1 font-bold"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-6 mt-30">
        
        <div className="text-center lg:text-center flex-1 flex flex-col items-center">
          <h3 className="font-bold m-5">Movie Website 🍿</h3>
          <p className="text-gray-500 text-sm">
            A dynamic movie discovery website using the API fetcged from TMDB API, featuring thousands of films with instant search functionality where you can find movies on a user-friendly and visually appealing interface.
          </p>
          <div className="flex gap-5 mt-3 font-bold">
            <span className="px-5 py-1 bg-green-200 rounded-full text-sm">
              React
            </span>
            <span className="px-2 py-1 bg-green-200 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
          <div className="flex lg:gap-6 mt-7 text-xs">
            <a
              href="https://github.com/AshimLama/Movie-app.git"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 font-bold"
            >
              Code <GithubIcon />
            </a>
            <a
              href="https://movie-website7.netlify.app/"
              target="_blank"
              rel="noopener"
              className="flex items-center  gap-1 font-bold"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <div className=" flex-2 w-full max-w-[500px] h-[300px] rounded-lg shadow-lg overflow-hidden ">
          <img 
            className="w-full h-full rounded-lg" 
            src={Moviepic} 
            alt="freshmart" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mt-30">
        <div className=" flex-2 w-full max-w-[500px] h-[300px] rounded-lg shadow-lg overflow-hidden ">
          <img 
            className="w-full h-full rounded-lg" 
            src={spotify} 
            alt="freshmart" />
        </div>
        <div className="text-center lg:text-center flex-1 flex flex-col items-center">
          <h3 className="font-bold m-5">Spotify Clone 🎵</h3>
          <p className="text-gray-500 text-sm">
            This website is a spotify clone where you can find collections of songs in different categories and play songs with a landing interface that mimics the Spotify experience. It features a sleek design and smooth navigation, allowing users to explore music effortlessly.
          </p>
          <div className="flex gap-5 mt-3 font-bold">
            <span className="px-5 py-1 bg-green-200 rounded-full text-sm">
              React
            </span>
            <span className="px-2 py-1 bg-green-200 rounded-full text-sm">
              Tailwind CSS
            </span>
          </div>
          <div className="flex lg:gap-6 mt-7 text-xs">
            <a
              href="https://github.com/AshimLama/Spotify-clone.git"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-1 font-bold"
            >
              Code <GithubIcon />
            </a>
            <a
              href="https://spotify-interface-clone.netlify.app/"
              target="_blank"
              rel="noopener"
              className="flex items-center  gap-1 font-bold"
            >
              Live Demo <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Projects;
