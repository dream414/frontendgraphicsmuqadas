import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const designs = [
  { id: "SH1", image: "/sh1.png" },
  { id: "SH2", image: "/sh2.png" },
  { id: "SH3", image: "/sh3.png" },
  { id: "SH4", image: "/sh4.png" },
  { id: "SH5", image: "/sh5.png" },
  { id: "SH6", image: "/sh6.png" },
  { id: "SH7", image: "/sh7.png" },
  { id: "SH8", image: "/sh8.png" },
  { id: "SH9", image: "/sh9.png" },
  { id: "SH10", image: "/sh10.png" },
];

export default function Print() {

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % designs.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + designs.length) % designs.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden py-16 px-4 flex items-center justify-center">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite]" />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-pink-500/20 blur-[150px] rounded-full" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full"
            initial={{
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth,
              opacity: 0.2,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.2, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Print <span className="text-purple-400">Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm md:text-lg"
          >
            Premium animated T-Shirt print showcase ✨
          </motion.p>

        </div>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-10 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronLeft />
          </button>

          {/* MAIN AREA */}
          <div className="relative w-full max-w-[1100px] h-[580px] flex items-center justify-center perspective-[2500px]">

            {/* LEFT PREVIEW */}
            <motion.div
              animate={{
                x: -280,
                rotateY: 40,
                scale: 0.82,
                opacity: 0.25,
              }}
              transition={{ duration: 0.8 }}
              className="absolute hidden xl:block"
            >
              <div className="w-[260px] h-[400px] rounded-[28px] overflow-hidden border border-white/10">
                <img
                  src={
                    designs[
                      (current - 1 + designs.length) % designs.length
                    ].image
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT PREVIEW */}
            <motion.div
              animate={{
                x: 280,
                rotateY: -40,
                scale: 0.82,
                opacity: 0.25,
              }}
              transition={{ duration: 0.8 }}
              className="absolute hidden xl:block"
            >
              <div className="w-[260px] h-[400px] rounded-[28px] overflow-hidden border border-white/10">
                <img
                  src={
                    designs[
                      (current + 1) % designs.length
                    ].image
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* MAIN CARD */}
            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  rotateY: direction > 0 ? 90 : -90,
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotateY: direction > 0 ? -90 : 90,
                  opacity: 0,
                  scale: 0.85,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="absolute"
              >

                {/* BORDER */}
                <div className="relative rounded-[38px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_90px_rgba(168,85,247,0.45)]">

                  {/* INNER BOX */}
                  <div className="relative rounded-[35px] overflow-hidden bg-black/70 backdrop-blur-xl">

                    {/* IMAGE */}
                    <img
                      src={designs[current].image}
                      alt={designs[current].id}
                      className="
                      w-[380px]
                      sm:w-[500px]
                      md:w-[650px]
                      lg:w-[760px]

                      h-[420px]
                      md:h-[480px]
                      lg:h-[520px]

                      object-cover
                      "
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* SHINE EFFECT */}
                    <motion.div
                      animate={{
                        x: ["-120%", "220%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute top-0 left-0 w-[40%] h-full bg-white/10 blur-2xl rotate-12"
                    />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 w-full p-7 text-center">

                      {/* SH ID */}
                     

                      {/* FIXED TITLE */}
                      <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl text-purple-300 mt-3 font-semibold"
                      >
                        T-Shirt Print Design
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-300 mt-2 tracking-[4px] uppercase text-[10px] md:text-xs"
                      >
                        Premium Creative Collection
                      </motion.p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-10 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronRight />
          </button>

        </div>

        {/* THUMBNAILS */}
        <div className="flex justify-center flex-wrap gap-4 mt-12">

          {designs.map((item, index) => (

            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                current === index
                  ? "scale-110 border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                  : "opacity-60 hover:opacity-100 border border-white/10"
              }`}
            >

              <img
                src={item.image}
                alt={item.id}
                className="w-20 h-28 md:w-24 md:h-32 object-cover"
              />

            </button>

          ))}

        </div>

      </div>

      {/* CSS */}
      <style>{`

        @keyframes borderMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

      `}</style>

    </section>
  );
}