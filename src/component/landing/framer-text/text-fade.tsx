import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useSpring,
  useTransform,
} from 'framer-motion';
import React from "react";

export function TextFade({
  scrollYProgress,
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: {
  scrollYProgress: MotionValue<number>;
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    hidden: { opacity: 0, y: direction === 'down' ? -18 : 18 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

    const y = useTransform(scrollYProgress, [0, .1], [0, 10]);
    const smoothY = useSpring(y, {
      stiffness: 70,
      damping: 25,
      mass: 0.3,
    });


  return (
    <motion.div
      // ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.p
            style={{ y: smoothY }}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 10 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={FADE_DOWN}
            className='w-full text-white'
          >
              {child}
          </motion.p>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}