import React, { useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const flipControl = useAnimationControls();

  const handleClick = () => {
    flipControl.start("flip");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-8"
      >
        Flip It!
      </button>
      <motion.div
        variants={{
          flip: {
            rotate: 180,
            scale: 0.8,
          },
        }}
        whileTap="flip"
        animate={flipControl}
        className="w-[20vw] h-[20vw] bg-black"
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
