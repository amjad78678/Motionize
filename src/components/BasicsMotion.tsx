import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BasicsMotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.button
        whileHover={{ scale: 1.2 }}
        layout
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0, x: 0 }}
            animate={{ rotate: "360deg", scale: 1, x: [0, 100, 0, -100, 0] }}
            exit={{ rotate: "0deg", scale: 0, x: 0 }}
            transition={{
              duration: 5,
              ease: "backInOut",
            }}
            className="w-[10vw] h-[10vw] bg-red-500"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsMotion;
