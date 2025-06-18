import React, { useMemo, useState } from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./marquee.css";

// 2. Defining Variants


const Marquee = ({
  title,
  direction
} : {
  title: string;
  direction: "right" | "left";
}) => {
  const count = 12;  

  const marqueeVariants = useMemo(() => {
    if (direction === "left") {
      return {
        animate: {
          x: [0, -1035],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 14,
              ease: "linear",
            },
          },
        },
      };
    } else {
      return {
        animate: {
          x: [-1035, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        },
      };
    }
  }, [direction]);

  
  
  return (
    <div className="">
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(2)].flatMap(() =>
            Array.from({ length: count }).map((_, index) => (
              <span key={`${index}-${Math.random()}`} className="text-black text-xl">
                {title}
              </span>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;