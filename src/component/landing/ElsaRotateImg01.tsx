import React from 'react'
import { useState, useRef, useCallback, useEffect } from "react";
import { MotionValue, useTransform, motion, useSpring } from "framer-motion";
import { GradualSpacing } from './framer-text/gradual-spacing';
import { TextFade } from './framer-text/text-fade';

const ElsaRotateImg01 = ({
    targetRef,
    scrollYProgress,
}: {
    targetRef: React.RefObject<HTMLDivElement | null>;
    scrollYProgress: MotionValue<number>;
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({
        targetX: 0,
        targetY: 0,
        targetWidth: 0,
        initialWidth: 0,
    });

    const calculatePosition = useCallback(() => {
        if (targetRef.current && contentRef.current) {
            const targetRect = targetRef.current.getBoundingClientRect();
            const contentRect = contentRef.current.getBoundingClientRect();

            setPosition({
                targetX: targetRect.left - contentRect.left,
                targetY: targetRect.top - contentRect.top,
                targetWidth: targetRect.width,
                initialWidth: contentRect.width,
            });
        }
    }, [targetRef]);

    useEffect(() => {
        calculatePosition();

        const handleResize = () => {
            calculatePosition();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, .8], [-90, 250]);
    const y = useTransform(scrollYProgress, [0, 3], [50, 250]);

    const width = useTransform(
        scrollYProgress,
        [0, .1],
        [250, 270]
    );

    const smoothY = useSpring(y, {
        stiffness: 70,
        damping: 25,
        mass: 0.3,
    });

    const padding = useTransform(scrollYProgress, [0, 0.9], [8, 0]);
    const rotate = useTransform(scrollYProgress, [0, 0.6], [-15, 0]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.9], [24, 16]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    const text = {
        highlight: 'Elsa',
        descript: '42:45 from FrozenII'
    }
    
  return (
    <motion.div
        style={{ x, y: smoothY, width, rotate, opacity}}
        ref={contentRef}
        className='w-full flex flex-col items-end'
    >
        <motion.div className='flex items-end'>
            <motion.img
                src='/src/assets/img/elsaRotate01.jpg'
                alt='elsaRotate01'
                style={{ padding, }}
            />

            <div className='w-full  ml-[-10rem]'>
                <GradualSpacing highlight={text.highlight} scrollYProgress={scrollYProgress} textsize='10rem' />
            </div>
        </motion.div>
        <motion.div className='ml-[-4rem]'>
            <TextFade direction='down' scrollYProgress={scrollYProgress}>
                <div className='w-full text-2xl '>
                    {text.descript}
                </div>
            </TextFade>
        </motion.div>
    </motion.div>
  )
}

export default ElsaRotateImg01

