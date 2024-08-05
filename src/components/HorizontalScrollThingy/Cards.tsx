import React from "react";

const Cards = ({ header }) => {
  return (
    <div>
      <div className="w-[20vw] h-[20vw] bg-white">
        <div className="h-[20%]">
          <h1 className="text-black font-bold text-xl p-4 underline underline-offset-4">
            {header}
          </h1>
        </div>
        <div className="h-[60%]">
          <img
            className="w-[100%] h-[100%] object-cover"
            src="https://picsum.photos/200"
            alt=""
          />
        </div>
        <div className="h-[20%] grid grid-cols-2">
          <div className="flex justify-center items-center border-r-2">
            <h1 className="text-black font-semibold font-mono text-lg">
              Share
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="text-black font-semibold font-mono text-lg">
              See More
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

//   return (
//     <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
//       <div
//         style={{
//           backgroundImage: `url(https://picsum.photos/200)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {header}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Cards;
