/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { GrProjects } from 'react-icons/gr';
import { motion } from 'framer-motion';

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute text-white top-4 right-4 z-[9999] md:hidden cursor-pointer hover:scale-105 ease-in duration-200" 
      />
      <div className="absolute text-white top-4 left-4 z-[9999] md:hidden cursor-pointer hover:scale-105 ease-in duration-200">
          <a href="#main" className="w-full h-full object-cover">royaldner.com</a>
        </div>
      {
        nav ? (
          <div className="fixed w-full h-screen bg-slate-500/90 flex flex-col justify-center items-center z-[999]">
              <div className="flex justify-between items-center gap-4 pb-16">
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://www.linkedin.com/in/royaldnerlabado/" target="blank"  className="w-8 h-8"><img src="/icons8-linkedin.svg" alt="linkedin icon" /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://www.facebook.com" target="blank" className="w-8 h-8"><img src="/icons8-facebook.svg" alt="facebook icon" /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://github.com/Royaldner/Royaldner" target="blank" className="w-8 h-8"><img src="/icons8-github.svg" alt="github icon" /></motion.a>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="mailto:royaldner@gmail.com" className="w-8 h-8"><img src="/icons8-gmail.svg" alt="gmail icon" /></motion.a>
              </div>
              <a href="#main" className="w-[75%] bg-gray-300 flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
                onClick={handleNav}>
                <AiOutlineHome size={20}/>
                <span className="pl-4">Home</span>
              </a>
              <a href="#services" className="w-[75%] bg-gray-300 flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
                onClick={handleNav}>
                <GrProjects size={18}/>
                <span className="pl-4">Services</span>
              </a>
              <a href="#projects" className="w-[75%] bg-gray-300 flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
                onClick={handleNav}>
                <AiOutlineProject size={20}/>
                <span className="pl-4">Projects</span>
              </a>
              <a href="#contactMe" className="w-[75%] bg-gray-300 flex justify-center items-center rounded-full shadow-lg m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
                onClick={handleNav}>
                <AiOutlineMail size={20}/>
                <span className="pl-4">Contact Me</span>
              </a>
          </div>
          
        ) :
        (
         ''
        )
      }
      <div className="hidden md:flex px-8 py-2 font-sans text-white justify-between w-full h-12 z-[99]">
        <motion.div className=" items-center  text-base font-normal h-12 w-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>
          <a href="#main"><img src="/myLogo.png" alt="logo" /></a>
        </motion.div>
        <div className="flex justify-between items-center gap-2 pr-16 z-[99]">
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://www.linkedin.com/in/royaldnerlabado/" target="blank"  className="w-8 h-8"><img src="/icons8-linkedin.svg" alt="linkedin icon" /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://www.facebook.com" target="blank" className="w-8 h-8"><img src="/icons8-facebook.svg" alt="facebook icon" /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="https://github.com/Royaldner/Royaldner" target="blank" className="w-8 h-8"><img src="/icons8-github.svg" alt="github icon" /></motion.a>
          <motion.a whileHover={{ scale: 1.1 }} whileTap={{scale:0.95}} href="mailto:royaldner@gmail.com" className="w-8 h-8"><img src="/icons8-gmail.svg" alt="gmail icon" /></motion.a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
