import React from "react";
import { motion, useInView } from "framer-motion";

const ViewBaseAnimations = () => {
  // const isInView = useInView(ref,{once:true})
  return (
    <div>
      <div className="h-screen"></div>

      <div className="flex justify-center items-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          whileInView={{ opacity: 1, scale: 2 }}
          transition={{ duration: 2 }}
          className="w-[20vw] h-[20vw] bg-black"
        ></motion.div>
      </div>
    </div>
  );
};

export default ViewBaseAnimations;
