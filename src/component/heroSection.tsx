import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

import ElsaHome from '../assets/img/elsaHome.png'


const HeroSection = () => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 300]);

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 35,
    mass: 0.8,
  });

  return (
    <div className='flex flex-row h-[100vh] overflow-hidden relative'>
        <div className='text-[6rem] px-[7rem] text-white w-full flex justify-start items-center gap-[50px] z-50'>
            <h1>The</h1>
            <h1>SnowQueen</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 1, delay: 0.3  }}
          style={{ y: smoothY }}
          className='absolute right-[-5rem] translate-x-[17rem] -translate-y-[10rem]' 
         >
          <img src={ElsaHome} className="w-[2500px] max-w-none max-h-none" alt='elsaHome' />
        </motion.div>
    </div>
  )
}

export default HeroSection
