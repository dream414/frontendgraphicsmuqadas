import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const designs = [
  {
    id: "S1",
    name: "Instagram Business Post",
    img: "/s1.png",
  },
  {
    id: "S2",
    name: "Product Promotion Banner",
    img: "/s2.png",
  },
  {
    id: "S3",
    name: "Sale Discount Design",
    img: "/s3.png",
  },
  {
    id: "S4",
    name: "Fitness Motivation Post",
    img: "/s4.png",
  },
  {
    id: "S5",
    name: "Real Estate Ad Creative",
    img: "/s5.png",
  },
  {
    id: "S6",
    name: "Food Promotion Design",
    img: "/s6.png",
  },
  {
    id: "S7",
    name: "Tech App Launch Post",
    img: "/s7.png",
  },
  {
    id: "S8",
    name: "Fashion Sale Carousel",
    img: "/s8.png",
  },
  {
    id: "S9",
    name: "Corporate Announcement",
    img: "/s9.png",
  },
  {
    id: "S10",
    name: "Typography Quote Design",
    img: "/s10.png",
  },
];

export default function Social() {

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // AUTO SWITCH WITH PAUSE (3 sec)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(index % 2 === 0 ? 1 : -1);
      setIndex((prev) => (prev + 1) % designs.length);
    }, 3000); // ⬅️ PAUSE TIME (3 sec)

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden relative">

      {/* MAIN BOX */}
      <div className="relative w-full max-w-6xl h-[85vh] border border-white/10 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl flex items-center justify-center">

        {/* GLOW */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/30 blur-[140px] rounded-full"></div>

        {/* TITLE */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-xl md:text-3xl font-bold z-20">
          Social Media Designs View ✨
        </div>

        {/* SLIDER */}
        <div className="relative w-full flex items-center justify-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={designs[index].id}
              initial={{
                y: direction === 1 ? 200 : -200,
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                y: direction === 1 ? -200 : 200,
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative"
            >

              {/* DESIGN BOX */}
              <div className="w-[200px] md:w-[260px] h-[320px] md:h-[380px] rounded-2xl overflow-hidden border relative rounded-[28px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_60px_rgba(168,85,247,0.35)] shadow-[0_0_35px_rgba(168,85,247,0.25)]">

                <img
                  src={designs[index].img}
                  alt={designs[index].id}
                  className="w-full h-100vh object-cover"
                />

                {/* LABEL */}
                <div className="absolute font-extrabold  bottom-0 w-full text-center py-2 bg-gradient-to-t from-black/90 to-transparent text-white ">
                  {designs[index].name}
                   <p className="text-purple-300 mt-1 text-2xl md:text-xl font-extra-bold tracking-[3px] uppercase">
                       Social Media Designs
                      </p>
                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* SIDE LIGHTS */}
        <div className="absolute left-0 top-0 w-40 h-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-pink-500/10 blur-3xl"></div>

      </div>

    </section>
  );
}