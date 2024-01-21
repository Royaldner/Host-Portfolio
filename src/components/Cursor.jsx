/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div className='hidden md:block md:fixed w-14 h-14 rounded-full border-lime-300 border-solid border-2  md:z-[999] '
        animate={{ x: position.x+10, y: position.y+10 }}>
    </motion.div>
  )
}

export default Cursor