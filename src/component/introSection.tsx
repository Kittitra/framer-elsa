

import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import ElsaRotateImg02 from './landing/ElsaRotateImg02';
import ElsaRotateImg01 from './landing/ElsaRotateImg01';
import HomeUI from './HomeUI';
import ElsaRotateImg03 from './landing/ElsaRotateImg03';

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const elsa01TargetRef = useRef<HTMLDivElement>(null);
  const elsa02TargetRef = useRef<HTMLDivElement>(null);
  const elsa03TargetRef = useRef<HTMLDivElement>(null);

  return (
    <div className='' ref = {ref}>
      <h1 className='text-7xl text-white text-right absolute right-30 p-10 pt-[13rem]'>
        Timestamp:
      </h1>
      <motion.div 
        className='w-full h-[120rem] flex flex-col'
      >

        <div className='w-full h-full flex flex-col overflow-hidden relative'>
          <motion.div
            className='w-full absolute left-0 '
          >
              {elsa01TargetRef && (
                <ElsaRotateImg01
                  scrollYProgress = {scrollYProgress}
                  targetRef = {elsa01TargetRef}
                />
              )}
          </motion.div>

          <motion.div
            className=' absolute right-0'
          >
              {elsa02TargetRef && (
                <ElsaRotateImg02
                  scrollYProgress = {scrollYProgress}
                  targetRef = {elsa02TargetRef}
                />
              )}
          </motion.div>

          <motion.div
            className=' absolute right-0'
          >
              {elsa03TargetRef && (
                <ElsaRotateImg03
                  scrollYProgress = {scrollYProgress}
                  targetRef = {elsa03TargetRef}
                />
              )}
          </motion.div>
        </div>

          <HomeUI
            content = {
              <div className='flex flex-col w-full '>
                <div ref = {elsa01TargetRef} className='w-full max-w-[400px] h-auto absolute left-[5rem]'/>
    
                <div ref = {elsa02TargetRef} className='w-full max-w-[400px] h-auto absolute right-[5rem]'/>

                <div ref = {elsa03TargetRef} className='w-full max-w-[400px] h-auto absolute right-[5rem]'/>
                
              </div>
            }
          />

        </motion.div>
        
    </div>
  )
}

export default IntroSection

