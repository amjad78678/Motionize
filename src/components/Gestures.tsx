import React from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <MotionConfig transition={{ duration: 5 }}>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 2.1 }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8, rotate: 10 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click Me
        </motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 0.7 }}
          whileTap={{ scale: 0.8, rotate: 10 }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-6"
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
