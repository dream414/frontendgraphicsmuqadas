import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const ads = [
  {
    id: "A1",
    title: "Luxury Fashion Ad",
    img: "/a1.png",
  },
  {
    id: "A2",
    title: "Creative Food Promo",
    img: "/a2.png",
  },
  {
    id: "A3",
    title: "Modern Brand Campaign",
    img: "/a3.png",
  },
  {
    id: "A4",
    title: "Social Media Ad",
    img: "/a4.png",
  },
  {
    id: "A5",
    title: "Premium Product Ad",
    img: "/a5.png",
  },
  {
    id: "A6",
    title: "Creative Marketing",
    img: "/a6.png",
  },
  {
    id: "A7",
    title: "Beauty Advertisement",
    img: "/a7.png",
  },
  {
    id: "A8",
    title: "Luxury Promotion",
    img: "/a8.png",
  },
  {
    id: "A9",
    title: "Creative Campaign",
    img: "/a9.png",
  },
  {
    id: "A10",
    title: "Professional Ad Design",
    img: "/a10.png",
  },
];

export default function Advertisement() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % ads.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + ads.length) % ads.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden py-20 px-4">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite]"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full"></div>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[120px] bg-white/10 rounded-full"
            initial={{
              y: -200,
              x: Math.random() * window.innerWidth,
            }}
            animate={{
              y: "120vh",
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-[1800px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

          <div className="flex justify-center mb-5">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center backdrop-blur-xl"
            >
              <Sparkles className="text-purple-300" size={30} />
            </motion.div>

          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white">
            Advertisement <span className="text-purple-400">Showcase</span>
          </h1>

          <p className="mt-5 text-gray-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Modern animated advertisement gallery with cinematic transitions ✨
          </p>

        </div>

        {/* MAIN SLIDER */}
        <div className="relative flex items-center justify-center w-full">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border border-purple-500/40 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 z-40 w-12 h-12 md:w-16 md:h-16 rounded-full border border-purple-500/40 bg-black/40 backdrop-blur-xl flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>

          {/* FULL WIDTH SLIDER */}
          <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                  rotate: -5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 5,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="absolute w-full flex justify-center"
              >

                {/* OUTER BORDER */}
                <div className="relative w-900vw max-w-[1000px] rounded-[40px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_80px_rgba(168,85,247,0.35)]">

                  {/* INNER BOX */}
                  <div className="relative rounded-[38px] overflow-hidden bg-black/70 backdrop-blur-xl">

                    {/* IMAGE */}
                    <img
                      src={ads[current].img}
                      alt={ads[current].title}
                      className="w-full h-[80vh] object-contain"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>

                    {/* TEXT */}
                    <motion.div
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 w-full p-8 md:p-14"
                    >

                      {/* <p className="text-purple-300 text-sm md:text-base tracking-[5px] uppercase">
                        {ads[current].id}
                      </p> */}

                      <h2 className="text-white text-3xl md:text-6xl font-black mt-3">
                        {ads[current].title}
                      </h2>

                      <p className="text-gray-300 text-sm md:text-lg mt-4 max-w-2xl leading-relaxed">
                        Premium animated advertisement presentation with modern cinematic motion effects.
                      </p>

                    </motion.div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

        {/* PREVIEW IMAGES */}
        <div className="flex justify-center flex-wrap gap-4 mt-14">

          {ads.map((item, index) => (

            <motion.button
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                current === index
                  ? "border-purple-500 scale-110 shadow-[0_0_25px_rgba(168,85,247,0.6)]"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-28 md:w-24 md:h-32 object-cover"
              />

            </motion.button>

          ))}

        </div>

      </div>

      {/* ANIMATION */}
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