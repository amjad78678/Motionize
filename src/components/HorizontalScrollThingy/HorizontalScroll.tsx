import React, { useRef } from "react";
import Cards from "./Cards";
import { useAnimation, useScroll, useTransform, motion } from "framer-motion";

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <div className="bg-black text-white">
      <div className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-8xl font-bold whitespace-nowrap">
          NOW YOU SEE AMJ WORLD
        </h1>
      </div>

      <div ref={targetRef} className="relative  h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="h-screen w-screen flex items-center justify-start gap-4 p-10"
          >
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
            <Cards {...{ header: "hello" }} />
          </motion.div>
        </div>
      </div>

      <div className="w-screen h-screen flex justify-center items-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
        reiciendis necessitatibus quidem quod aliquam! Vero odit labore,
        pariatur earum atque magnam tempore accusamus consequatur, commodi
        maiores voluptas consectetur, cupiditate numquam quae quia corrupti.
        Iure hic, molestias nobis dolore tenetur ipsum laborum nemo quibusdam
        explicabo aperiam numquam reprehenderit blanditiis earum! Corrupti neque
        debitis, eum totam recusandae nihil facilis sint vitae fuga inventore
        exercitationem architecto quam temporibus, magnam vel excepturi sapiente
        natus. Culpa officiis tempore, debitis sapiente rerum maiores reiciendis
        similique accusamus maxime molestias exercitationem eos possimus quam
        fugiat iste. Repellat, nihil voluptatibus optio expedita quos labore
        suscipit! Praesentium, est. Inventore aliquid voluptas ipsa eius
        excepturi, at reiciendis culpa quo laboriosam itaque mollitia doloremque
        necessitatibus saepe nesciunt architecto voluptates deleniti, labore
        blanditiis! Ab rerum et blanditiis sequi illo consectetur nulla ducimus,
        esse numquam est, doloribus sed quod possimus maxime sint reprehenderit
        id ipsa maiores! Rem in tempore nam nihil porro ratione, vitae,
        necessitatibus molestiae eum repellat consequatur repellendus ipsum ab
        cum sint ad assumenda, commodi incidunt ex. Nulla fugiat harum ad
        labore? Necessitatibus, amet animi fugit distinctio aliquid excepturi?
        Alias, consequuntur quibusdam tempora excepturi fugit a quidem fugiat
        voluptatem labore doloribus nihil similique delectus odio maxime sed.
        Quasi aut natus architecto! Nobis ab voluptatem doloremque obcaecati
        quod eos. Nisi libero repellendus dolorum alias, quae, animi sint, vitae
        consectetur illum molestias doloribus distinctio est pariatur ut aut.
        Facere facilis cum velit, odit eveniet sit illum quas eaque, dolor quasi
        magni ipsam ipsum accusantium quidem necessitatibus laborum tenetur
        voluptatum maiores blanditiis? Omnis eum rerum fugiat, quidem
        repudiandae odio. Illum, accusamus! Fugit facilis vero rerum id tenetur
        cumque enim esse, quisquam harum aspernatur voluptatibus sunt fugiat ad
        architecto maxime possimus temporibus repellat, illum ab eveniet culpa!
        Maiores quae eius nesciunt! Quis ullam in non possimus exercitationem
        fugit debitis repellendus laborum ab eligendi aliquid, illum aspernatur.
        Tempore expedita quis qui eum aperiam, nisi doloremque sit et corporis
        omnis accusamus tenetur dolorum debitis eaque, quod, vitae magni modi
        consectetur doloribus aspernatur voluptate ad. Nulla ad quas nesciunt
        quae dignissimos, labore, iste officiis sequi odio maxime fugit
        molestias animi facere asperiores ut reprehenderit? Consequuntur placeat
        eaque labore. Sint sunt, eligendi, sapiente et iure quisquam iusto autem
        saepe illo dolore quia ducimus ipsum dicta ut odit. Provident animi
        expedita deleniti, dolorum voluptatem atque nam corporis quam ut minus
        voluptatum vero voluptatibus quidem harum aliquam? Dolores perspiciatis
        in veniam repudiandae assumenda explicabo et animi laborum voluptas esse
        ipsa fuga nostrum maxime enim nam, porro tenetur officia unde quis.
        Magni dolores commodi enim quos? Laudantium alias tempora dignissimos.
        Ab quidem vel error quia. Suscipit eum unde obcaecati voluptate
        cupiditate quis corporis sequi aliquam perspiciatis totam rerum
        repellat, assumenda earum voluptatum fugit dolor rem recusandae voluptas
        tempore voluptates neque blanditiis dignissimos quidem magnam! Ullam est
        quas corrupti eligendi nisi? Quas dolorum est magnam! Maxime quae
        dolorem nihil ex, esse dolores architecto explicabo non quisquam minima
        eveniet reprehenderit quas quidem tenetur. Voluptates doloremque,
        accusamus atque, ducimus impedit dolorem eum quas laboriosam eos debitis
        quasi ab blanditiis voluptate optio officia explicabo hic minima nisi
        similique ex sit odio recusandae corporis quidem! Corrupti deserunt quod
        eveniet. Consequuntur nemo deleniti minima nostrum, numquam eum dicta
        quas ea blanditiis assumenda cupiditate, eaque inventore asperiores a
        omnis ullam, atque obcaecati iure maiores corporis at pariatur laborum.
        Deserunt quis soluta repudiandae. Voluptate sapiente error atque fuga
        suscipit iure ex corporis sequi illum aliquam asperiores quam similique
        fugiat temporibus deleniti labore vero magnam nam, voluptatibus aut
        incidunt corrupti vel architecto. Modi culpa dolore animi quidem eius
        asperiores fugit voluptatum cum eaque omnis labore, quibusdam deleniti
        voluptate tenetur nobis ducimus sapiente rerum quas repellendus
        perferendis? Quae, sint possimus fugiat rem dignissimos consectetur sunt
        necessitatibus commodi animi distinctio sed maiores eos at accusantium,
        earum modi? At provident cumque ex dignissimos, qui eveniet ullam
        exercitationem magnam repellat sit possimus dolore, praesentium eos ad
        ut officia. Magni nemo, harum, asperiores, tempora ratione
        exercitationem adipisci ullam praesentium laboriosam nisi optio
        excepturi quasi ex perferendis aliquid. Dolores quo repellendus hic
        officia impedit magni nam enim vero blanditiis sit aliquid provident,
        obcaecati illo! Impedit, blanditiis. Molestiae id voluptatum sapiente
        suscipit sit ullam? Aspernatur magnam ipsa iure totam quos hic
        consectetur officia, vel amet aperiam optio, aut, possimus repellat
        iste? Repellendus quibusdam explicabo aspernatur consectetur deleniti
        error ratione labore facilis, a reprehenderit sint et qui nulla porro
        fuga. Rem nisi nostrum sint repellendus quidem, itaque architecto
        accusamus! Nostrum ipsum odio mollitia explicabo rerum. Iusto quae
        laudantium assumenda quasi illo similique? Excepturi perferendis aliquam
        debitis vel recusandae quibusdam doloribus quo nam officiis reiciendis
        et quisquam dolorem illum iusto, molestiae voluptas voluptate,
        cupiditate dolore possimus minima ut labore assumenda corporis
        doloremque. Eveniet enim quas et quaerat, dolorum mollitia labore
        accusantium. Mollitia, accusantium labore exercitationem ea soluta natus
        at, repellendus unde error quas fuga dolore dicta ipsam beatae fugit
        voluptate? Eum assumenda dolore repellat corporis aperiam consequatur
        totam tempora error, voluptate fuga optio eos id quibusdam similique
        nulla doloremque. Cum enim eos cumque aspernatur repellendus expedita
        placeat dolor impedit rem consectetur alias aliquid quibusdam autem,
        recusandae, fugit repudiandae. Quibusdam aspernatur libero corrupti aut
        sequi nihil possimus odio? Facere temporibus, tempora eaque placeat
        blanditiis eos magni iure libero voluptatem provident reprehenderit
        vitae at autem praesentium dolor quaerat voluptatibus nulla ut beatae
        expedita quae necessitatibus recusandae error? Ipsum aut voluptatum
        excepturi harum quidem. Obcaecati non, numquam ab sequi similique maxime
        officiis, iusto ducimus eaque laudantium porro necessitatibus itaque ad.
        Iusto et dolor nisi, quo excepturi blanditiis voluptatum a! Molestiae
        facere ipsa, neque tenetur atque, veritatis cumque sapiente magni
        blanditiis deleniti nisi nulla repellendus! Eaque itaque maiores quia
        quam minus alias voluptates deserunt eius, quaerat corrupti asperiores
        illo, nesciunt tenetur, magni facilis dicta quas! Eos, cumque assumenda!
        Eveniet quasi nulla facere doloribus, sint sequi! Dolor, officiis
        accusamus modi hic beatae ratione voluptas necessitatibus doloremque
        quis? Voluptates voluptatum quaerat officia quam esse animi numquam
        nostrum ratione nobis fugit voluptas porro laborum ducimus odio illum
        provident dolore earum inventore at voluptatibus, aut iusto nihil sequi
        unde. Quaerat repudiandae esse possimus, recusandae tempore tenetur?
        Minus, natus fuga! Nemo itaque quas nulla rem doloremque animi aperiam
        maxime exercitationem.
      </div>
      <div className="w-screen h-screen"></div>
    </div>
  );
};

export default HorizontalScroll;

// import { useRef } from "react";

// const HorizontalScroll = () => {
//   return (
//     <div className="bg-black text-white">
//       <div className="h-screen w-screen flex justify-center items-center">
//         <h1 className="text-8xl font-bold whitespace-nowrap">
//           NOW YOU SEE AMJ WORLD
//         </h1>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// };

// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-black">
//       <div className="sticky top-0 flex items-center overflow-hidden h-screen ">
//         <motion.div style={{ x }} className="flex gap-4">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div
//       key={card.id}
//       className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
//     >
//       <div
//         style={{
//           backgroundImage: `url(${card.url})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
//       ></div>
//       <div className="absolute inset-0 z-10 grid place-content-center">
//         <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HorizontalScroll;

// const cards = [
//   {
//     url: "/imgs/abstract/1.jpg",
//     title: "Title 1",
//     id: 1,
//   },
//   {
//     url: "/imgs/abstract/2.jpg",
//     title: "Title 2",
//     id: 2,
//   },
//   {
//     url: "/imgs/abstract/3.jpg",
//     title: "Title 3",
//     id: 3,
//   },
//   {
//     url: "/imgs/abstract/4.jpg",
//     title: "Title 4",
//     id: 4,
//   },
//   {
//     url: "/imgs/abstract/5.jpg",
//     title: "Title 5",
//     id: 5,
//   },
//   {
//     url: "/imgs/abstract/6.jpg",
//     title: "Title 6",
//     id: 6,
//   },
//   {
//     url: "/imgs/abstract/7.jpg",
//     title: "Title 7",
//     id: 7,
//   },
// ];
