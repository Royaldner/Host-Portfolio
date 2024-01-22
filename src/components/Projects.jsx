/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects(props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -550]);

  return (
    <div
      ref={ref}
      className="w-screen md:pl-40 h-auto md:h-screen flex flex-col md:flex-row justify-center items-center gap-2 md:overflow-hidden text-white py-4"
    >
      <div className="w-[90%] m-auto md:w-1/3 h-full flex flex-col justify-center items-center md:items-end gap-8">
        <motion.h1 className="font-bold text-5xl text-green-500">
          {props.title}
        </motion.h1>
        <motion.h2 className="text-xl font-thin">{props.description}</motion.h2>
        <div className="text-lime-300 font-semibold"> {props.languages}</div>
        <motion.a href={props.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
          <motion.button
            className=" w-48 h-14 rounded-md bg-lime-300 text-2xl z-[99]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
              DEMO1
          </motion.button>
        </motion.a>
      </div>
      <div className="md:relative hidden md:block w-[90%] md:w-2/3 h-auto md:h-full  md:mt-40">
        <motion.div
          className="absolute left-4 md:left-10 top-4 md:top-20 h-[70%] w-[70%] z-20 rounded-2xl
            bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          style={{ y: sm }}
        ></motion.div>
        <motion.div
          className="absolute -left-40 bottom-10 z-30 h-[60%] w-[80%]"
          style={{ y: md }}
        >
          <img
            className="w-full h-full object-cover"
            src={props.desktopImage}
            alt="desktop image"
          />
        </motion.div>
        <motion.div
          className="absolute right-56 bottom-5 z-40 h-[40%] w-[16%]"
          style={{ y: lg }}
        >
          <img
            className="w-full h-full object-fill"
            src={props.mobileImage}
            alt="mobile image"
          />
        </motion.div>
      </div>
      <div className="relative w-[80%] min-h-[50vh] block mb-4 md:hidden">
        <div className="absolute -left-6 top-0 z-30 h-64 w-96">
          <img
            className="w-full h-full object-cover"
            src={props.desktopImage}
            alt="desktop image"
          />
        </div>
        <div className="absolute right-0 top-4 z-40 h-64">
          <img
            className="w-full h-full object-cover"
            src={props.mobileImage}
            alt="mobile image"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
