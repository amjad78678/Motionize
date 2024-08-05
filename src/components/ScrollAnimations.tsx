import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();
  const springScrollY = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(180, 194, 0)", "rgb(255, 9, 255)"]
  );

  return (
    <div>
      <motion.div
        style={{
          //   scaleX: scrollYProgress,
          scaleX: springScrollY,
          transformOrigin: "left",
          background: background,
        }}
        className="w-full h-[5vw] fixed"
      ></motion.div>
      <div className="p-5">
        <p>
          cupiditate animi deleniti? Enim dolorum fuga consequatur optio cum,
          soluta distinctio molestiae explicabo vel praesentium ipsam aut
          possimus magnam corrupti quam illum impedit perferendis saepe natus
          quidem? Fugit ab quod iure nemo consequuntur, omnis magni architecto
          porro sit nobis alias recusandae odit, odio animi, atque laborum rerum
          qui. Dolorum aut nostrum vitae quod hic rem, velit cum quasi
          voluptatibus eaque fuga! Deleniti sed velit cum ullam esse laborum
          natus sequi labore aut sapiente, alias ipsam magnam odio commodi quia
          nostrum. Aliquid numquam vel at? Natus, qui ut sunt maiores reiciendis
          quo atque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius, debitis non? Autem necessitatibus odio aliquam dolorum
          consequuntur! Eveniet accusamus delectus harum omnis, assumenda fuga,
          possimus, dicta recusandae magnam aspernatur esse unde veniam natus
          veritatis laborum? Necessitatibus fuga, nostrum deserunt voluptatum
          reprehenderit dignissimos tempore et in consequatur officiis sed
          expedita repellat quibusdam beatae iusto impedit hic debitis
          cupiditate. Quaerat hic totam non velit. Totam accusantium quis
          veritatis quas beatae provident expedita nisi sit cum? Sunt ab
          inventore officiis? Consequatur voluptates distinctio laudantium,
          doloribus repellat rerum recusandae magni beatae, porro dolores saepe
          tempore iusto voluptate magnam asperiores facilis reprehenderit nemo
          aperiam? Animi!
        </p>
        <p>
          cupiditate animi deleniti? Enim dolorum fuga consequatur optio cum,
          soluta distinctio molestiae explicabo vel praesentium ipsam aut
          possimus magnam corrupti quam illum impedit perferendis saepe natus
          quidem? Fugit ab quod iure nemo consequuntur, omnis magni architecto
          porro sit nobis alias recusandae odit, odio animi, atque laborum rerum
          qui. Dolorum aut nostrum vitae quod hic rem, velit cum quasi
          voluptatibus eaque fuga! Deleniti sed velit cum ullam esse laborum
          natus sequi labore aut sapiente, alias ipsam magnam odio commodi quia
          nostrum. Aliquid numquam vel at? Natus, qui ut sunt maiores reiciendis
          quo atque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius, debitis non? Autem necessitatibus odio aliquam dolorum
          consequuntur! Eveniet accusamus delectus harum omnis, assumenda fuga,
          possimus, dicta recusandae magnam aspernatur esse unde veniam natus
          veritatis laborum? Necessitatibus fuga, nostrum deserunt voluptatum
          reprehenderit dignissimos tempore et in consequatur officiis sed
          expedita repellat quibusdam beatae iusto impedit hic debitis
          cupiditate. Quaerat hic totam non velit. Totam accusantium quis
          veritatis quas beatae provident expedita nisi sit cum? Sunt ab
          inventore officiis? Consequatur voluptates distinctio laudantium,
          doloribus repellat rerum recusandae magni beatae, porro dolores saepe
          tempore iusto voluptate magnam asperiores facilis reprehenderit nemo
          aperiam? Animi!
        </p>
        <p>
          cupiditate animi deleniti? Enim dolorum fuga consequatur optio cum,
          soluta distinctio molestiae explicabo vel praesentium ipsam aut
          possimus magnam corrupti quam illum impedit perferendis saepe natus
          quidem? Fugit ab quod iure nemo consequuntur, omnis magni architecto
          porro sit nobis alias recusandae odit, odio animi, atque laborum rerum
          qui. Dolorum aut nostrum vitae quod hic rem, velit cum quasi
          voluptatibus eaque fuga! Deleniti sed velit cum ullam esse laborum
          natus sequi labore aut sapiente, alias ipsam magnam odio commodi quia
          nostrum. Aliquid numquam vel at? Natus, qui ut sunt maiores reiciendis
          quo atque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius, debitis non? Autem necessitatibus odio aliquam dolorum
          consequuntur! Eveniet accusamus delectus harum omnis, assumenda fuga,
          possimus, dicta recusandae magnam aspernatur esse unde veniam natus
          veritatis laborum? Necessitatibus fuga, nostrum deserunt voluptatum
          reprehenderit dignissimos tempore et in consequatur officiis sed
          expedita repellat quibusdam beatae iusto impedit hic debitis
          cupiditate. Quaerat hic totam non velit. Totam accusantium quis
          veritatis quas beatae provident expedita nisi sit cum? Sunt ab
          inventore officiis? Consequatur voluptates distinctio laudantium,
          doloribus repellat rerum recusandae magni beatae, porro dolores saepe
          tempore iusto voluptate magnam asperiores facilis reprehenderit nemo
          aperiam? Animi!
        </p>
        <p>
          cupiditate animi deleniti? Enim dolorum fuga consequatur optio cum,
          soluta distinctio molestiae explicabo vel praesentium ipsam aut
          possimus magnam corrupti quam illum impedit perferendis saepe natus
          quidem? Fugit ab quod iure nemo consequuntur, omnis magni architecto
          porro sit nobis alias recusandae odit, odio animi, atque laborum rerum
          qui. Dolorum aut nostrum vitae quod hic rem, velit cum quasi
          voluptatibus eaque fuga! Deleniti sed velit cum ullam esse laborum
          natus sequi labore aut sapiente, alias ipsam magnam odio commodi quia
          nostrum. Aliquid numquam vel at? Natus, qui ut sunt maiores reiciendis
          quo atque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Eius, debitis non? Autem necessitatibus odio aliquam dolorum
          consequuntur! Eveniet accusamus delectus harum omnis, assumenda fuga,
          possimus, dicta recusandae magnam aspernatur esse unde veniam natus
          veritatis laborum? Necessitatibus fuga, nostrum deserunt voluptatum
          reprehenderit dignissimos tempore et in consequatur officiis sed
          expedita repellat quibusdam beatae iusto impedit hic debitis
          cupiditate. Quaerat hic totam non velit. Totam accusantium quis
          veritatis quas beatae provident expedita nisi sit cum? Sunt ab
          inventore officiis? Consequatur voluptates distinctio laudantium,
          doloribus repellat rerum recusandae magni beatae, porro dolores saepe
          tempore iusto voluptate magnam asperiores facilis reprehenderit nemo
          aperiam? Animi!
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
