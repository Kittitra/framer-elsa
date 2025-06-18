'use client';

import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion';
import * as React from 'react';

export const GradualSpacing =({
  scrollYProgress,
  highlight,
  textsize,
}: {
  highlight: string;
  scrollYProgress: MotionValue<number>;
  textsize: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down'>('down');
  const [showAnimation, setShowAnimation] = React.useState(false);

  const lastScrollY = React.useRef(0);

  // Detect scroll direction
  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');

      lastScrollY.current = currentY;
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger animation only when scrolling down into view
  React.useEffect(() => {
    if (isInView && scrollDirection === 'down') {
      setShowAnimation(true);
    }

  }, [isInView, scrollDirection]);

  const y = useTransform(scrollYProgress, [0, 0.7], [0, -150]);
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 25,
    mass: 0.3,
  });

  return (
    <div className="w-full flex flex-col space-x-1 justify-center" ref={ref}>
      
      <AnimatePresence>
        <motion.div className='flex'>
          {showAnimation &&
            highlight.split('').map((char, i) => (
              <motion.h2
                key={i}
                style={{ y: smoothY, fontSize: textsize }}
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: -140 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex text-gray-100 text-center leading-[4rem]"
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.h2>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

