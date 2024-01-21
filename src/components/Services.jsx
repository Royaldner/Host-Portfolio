// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from 'framer-motion';

function Services() {
    const variants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        },
      };
      const barVariants = {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 2,
            delay:1.5,
          },
        },
      };

      const cardVariants = {
        initial: {
          y: 500,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.25,
          },
        },
      };

  return ( 
    <div id='services' className='w-full h-auto md:h-full py-2 flex flex-col justify-center items-center text-white overflow-hidden'>
        <motion.div className='hidden md:flex w-[80%] md:h-auto flex-col justify-center md:pb-0 bg-transparent'
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div className="text-4xl md:text-7xl tracking-widest font-extrabold " variants={variants}>
                SERVICES
            </motion.div>
            <motion.div className="pl-6 text-green-500 text-lg tracking-wide font-thin " variants={variants}>
                DISCOVER HOW I COULD HELP YOU
            </motion.div>
        </motion.div> 
        <div className='md:hidden w-[80%] md:h-auto  flex-col justify-center pt-10'>
            <div className="text-4xl md:text-7xl tracking-widest font-extrabold " >
                SERVICES
            </div>
            <div className="pl-6 text-green-500 text-lg tracking-wide font-thin ">
                DISCOVER HOW I COULD HELP YOU
            </div>
        </div> 
        <motion.div className='w-[80%] md:h-2/3 flex flex-col md:flex-row justify-center gap-5 items-center ' 
            variants={cardVariants}
            initial="initial"
            whileInView="animate">
          <div className='bg-transparent w-80 h-full'>
            <motion.div className='h-full w-full flex flex-col justify-evenly items-center'
              variants={cardVariants}>
              <motion.img className='w-[80%]'src='/icons8-frontend-100.png' alt='<a target="_blank" href="https://icons8.com/icon/2778/code">Frontend</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'/>
              <motion.div className='w-[95%]  text-white'
              >
               <h1 className='text-center text-xl text-lime-300 underline font-semibold pb-2'>FRONTEND</h1>
                <p className='text-center text-sm'>Boost Your Online Impact with Elite Frontend Services! I will transform your digital vision into a stunning, user-friendly website. Contact me for a sensational online makeover</p>
              </motion.div>
              <a href="#contactMe"><motion.button className=' w-[260px] h-14 rounded-md bg-lime-300 text-2xl mt-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{scale:0.95}}
                  >
                DISCOVER MORE
              </motion.button></a>
            </motion.div>
          </div>
          <motion.div className='bg-green-500 w-1 h-full rounded-sm' 
            variants={barVariants}
            initial="initial"
            whileInView="animate">
          </motion.div>
            <div className='bg-transparent-600 w-80 h-full'>
              <motion.div className='h-full w-full flex flex-col justify-evenly items-center'
                variants={cardVariants}>
                <motion.img className='w-[80%]'src='/icons8-backend-development-96.png' alt='<a target="_blank" href="https://icons8.com/icon/SBEjRDmczSCC/backend-development">Backend Development</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'/>
                <motion.div className='w-[95%]  text-white'
                >
                <h1 className='text-center text-xl text-lime-300 underline font-semibold pb-2'>BACKEND</h1>
                  <p className='text-center text-sm'>Power Up with Expert Backend Services! I specialize in secure, efficient server-side solutions, including database management and API integration. Contact me to supercharge your platform performance!</p>
                </motion.div>
                <a href="#contactMe"><motion.button className=' w-[260px] h-14 rounded-md bg-lime-300 text-2xl mt-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{scale:0.95}}
                  >
                DISCOVER MORE
              </motion.button></a>
              </motion.div> 
            </div>
            <motion.div className='bg-green-500 w-1 h-full rounded-sm' 
            variants={barVariants}
            initial="initial"
            whileInView="animate">
            </motion.div>
            <div className='bg-transparent w-80 h-full'>
              <motion.div className='h-full w-full flex flex-col justify-evenly items-center'
                variants={cardVariants}>
                <motion.img className='w-[90%]'src='/icons8-online-maintenance-portal-100.png' alt='<a target="_blank" href="https://icons8.com/icon/40989/online-maintenance-portal">Online Maintenance Portal</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>'/>
                <motion.div className='w-[95%]  text-white'
                >
                <h1 className='text-center text-xl text-lime-300 underline font-semibold pb-2'>MAINTENANCE</h1>
                  <p className='text-center text-sm'>Keep Your Digital Assets Running Smoothly with Maintenance Services! I offer comprehensive support for website upkeep, including updates, security, and performance optimization. Contact me for reliable, ongoing care of your online presence!</p>
                </motion.div>
                <a href="#contactMe"><motion.button className=' w-[260px] h-14 rounded-md bg-lime-300 text-2xl mt-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{scale:0.95}}
                  >
                DISCOVER MORE
              </motion.button></a>
              </motion.div> 
            </div>
            
        </motion.div>   
            
    </div>
  )
}

export default Services