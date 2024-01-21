/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
const devIcons = [  
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",






           
]

function ProjectBanner() {
    const sliderVariants = {
    initial: {
      opacity:0.8,
      x: 0,
    },
    animate: {
      x: "-80%",
      opacity:1,
      transition: {
        repeat: Infinity,
        delay:1,
        repeatType:"mirror",
        duration: 10,
      },
    },
  };

  return (
    <div id='projects' className='w-full h-auto text-white py-20 flex flex-col justify-center items-center gap-6 overflow-hidden'>
        <div className='h-[30%] w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0'>
            <div className=' w-[95%] md:w-1/2 h-full text-center  bg-green-500 z-50'>
                <h1 className='font-bold text-6xl md:text-9xl py-6'>PROJECTS</h1>
            </div>
            <div className='hidden md:flex border-[1px] border-green-500 bg-inherit md:w-1/2 h-full '>
                <motion.h2 className='font-bold md:text-9xl py-6 whitespace-nowrap text-green-500/50'
                    variants={sliderVariants}
                    initial='initial'
                    animate= 'animate'>
                    What's Keeping me busy so far
                </motion.h2>
            </div>
            <div className='md:hidden border-[1px] border-green-500 bg-inherit md:w-1/2 h-full '>
                <h2 className='font-bold text-4xl md:text-9xl text-center text-green-500/50'>
                    What's Keeping me busy so far
                </h2>
            </div>
        </div>
        <div className='p-3 bg-green-500 rounded-3xl font-bold'>
            LANGUAGES AND TOOLS I USE
        </div>
        <div className='w-[90%] md:w-[50%] h-auto flex justify-center items-center gap-4 flex-wrap pb-6'>
            {devIcons.map ((url, index) =>     
                <div key={index} className='h-12 w-12'>
                     <img src={url} alt='icon'/>
                </div>)}
        </div>

    </div>
  )
}

export default ProjectBanner