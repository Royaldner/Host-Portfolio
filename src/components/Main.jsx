/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { CgChevronDoubleDownR } from "react-icons/cg";

function Main() {
  const Variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 1.5,
        delay: 3,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      opacity: 0.4,
      x: 0,
    },
    animate: {
      x: "-240%",
      opacity: 1,
      transition: {
        repeat: Infinity,
        delay: 1,
        repeatType: "mirror",
        duration: 10,
      },
    },
  };

  return (
    <div
      id="main"
      className=" bg-slate-50relative h-screen w-screen bg-transparent overflow-hidden"
    >
      <div className="w-full m-auto h-full text-white">
        <motion.div
          className="w-full md:w-[50%] mt-24 md:mt-0 ml-3 md:ml-40 md:h-full flex flex-col justify-center text-center md:text-left gap-4 md:gap-8"
          variants={Variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-lg font-semibold text-green-700 tracking-[10px]"
            variants={Variants}
          >
            ROY ALDNER LABADO
          </motion.h2>
          <motion.h1 className="text-4xl md:text-7xl " variants={Variants}>
            <span className="text-lime-300">Software</span> Developer <br />
            <span className="text-lime-300">UI/UX</span> Designer
          </motion.h1>
          <div className="pb-8 z-[99]">
            <a href="#projects">
              <motion.button
                className="p-3 border-solid border-2 border-lime-300 rounded-md bg-transparent m-2 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={Variants}
              >
                Recent Projects 2345678
              </motion.button>
            </a>
            <a href="#services">
              <motion.button
                className="p-3 border-solid border-2 border-lime-300 rounded-md bg-transparent m-2 text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={Variants}
              >
                Work With Me
              </motion.button>
            </a>
          </div>
          <motion.div
            className="hidden md:flex self-end pr-60"
            variants={Variants}
            animate="scrollButton"
          >
            <CgChevronDoubleDownR size={50} />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="hidden md:block text-gray-500/40 absolute text-[30vh] font-semibold -bottom-10 whitespace-nowrap md:w-[50%]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        DESIGN CREATE COLLAB
      </motion.div>
      <div className="h-[60%] gap-5 mx-auto md:h-full absolute bottom-0 right-0 md:right-0">
        <img className="w-full h-full object-cover" src="/me.png" alt="me" />
      </div>
    </div>
  );
}

export default Main;
