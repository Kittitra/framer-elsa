import React from 'react'
import { useState, useRef, useCallback, useEffect } from "react";
import { MotionValue, useTransform, motion, useSpring } from "framer-motion";
import { GradualSpacing } from './framer-text/gradual-spacing';
import { TextFade } from './framer-text/text-fade';

const ElsaRotateImg03 = ({
    targetRef,
    scrollYProgress,
}: {
    targetRef: React.RefObject<HTMLDivElement | null>;
    scrollYProgress: MotionValue<number>;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    

    const x = useTransform(scrollYProgress, [0, 1], [-1500, -950]);
    const y = useTransform(scrollYProgress, [0, .4], [700, 1100]);

    const width = useTransform(
        scrollYProgress,
        [0, .1],
        [250, 300]
    );

    const smoothY = useSpring(y, {
        stiffness: 70,
        damping: 25,
        mass: 0.3,
    });

    const padding = useTransform(scrollYProgress, [0, 0.3], [8, 0]);
    const rotate = useTransform(scrollYProgress, [0, .5], [-25, 0]);
    const opacity = useTransform(scrollYProgress, [0, .7], [0, 1]);

    const text = {
        highlight: 'Snow Queen',
        descript: '89:04 from Frozen'
    }
    
  return (
    <motion.div
        style={{ x, y: smoothY, width, rotate, opacity}}
        ref={contentRef}
        className='w-full flex flex-col items-end'
    >
        <motion.div className='flex items-end'>
            <motion.img
                src='/src/assets/img/elsaRotate03.jpg'
                alt='elsaRotate03'
                style={{ padding, width}}
                className='mr-[-15rem]'
            />

            <div className='w-full mr-[-17rem]'>
                <GradualSpacing highlight={text.highlight} scrollYProgress={scrollYProgress} textsize='7rem' />
            </div>
        </motion.div>
        <motion.div>
            <TextFade direction='down' scrollYProgress={scrollYProgress}>
                <div className='w-full text-2xl '>
                    {text.descript}
                </div>
            </TextFade>
        </motion.div>
    </motion.div>
  )
}

export default ElsaRotateImg03

