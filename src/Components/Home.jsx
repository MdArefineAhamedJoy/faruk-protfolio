import React from "react";
import heroImage from "../assets/heroImage.png";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4  md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl  sm:text-7xl font-bold ">i'm a Full Stack Developer</h1>
          <p className="text-gray-500 py-4  max-w-md">
            i have 8 years of experience building and designing software .
            Currently , i love to work on web application using technologies
            like react , tailwind , next js and GraphOl.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-500 to to-blue-500 cursor-pointer  group  "> 
                Portfolio <span className="group-hover:rotate-90 duration-300 ">< FaArrowRight className="ms-2"/></span>
            </button>
          </div>
        </div>
        <div>
            <img className="rounded-2xl mx-auto w-2/3 md:w-full h-96" src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
