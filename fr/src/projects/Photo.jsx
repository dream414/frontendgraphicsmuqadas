import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const designs = [
  {
    id: "PX1",
    name: "Cyber Neon Manipulation",
    img: "/ph1.png",
    desc: "Creative futuristic photo manipulation artwork",
  },
  {
    id: "PX2",
    name: "Luxury Fashion Edit",
    img: "/ph2.png",
    desc: "Premium modern fashion campaign design",
  },
  {
    id: "PX3",
    name: "Dark Cinematic Poster",
    img: "/ph3.png",
    desc: "High-end cinematic visual composition",
  },
  {
    id: "PX4",
    name: "Street Glow Artwork",
    img: "/ph4.png",
    desc: "Urban creative glowing manipulation style",
  },
  {
    id: "PX5",
    name: "Fantasy Dream Edit",
    img: "/ph5.png",
    desc: "Magical fantasy inspired visual artwork",
  },
  {
    id: "PX6",
    name: "Luxury Gold Effect",
    img: "/ph6.png",
    desc: "Elegant premium gold photo editing design",
  },
  {
    id: "PX7",
    name: "Gaming Poster Design",
    img: "/ph7.png",
    desc: "Powerful gaming inspired poster concept",
  },
  {
    id: "PX8",
    name: "Creative Fire Effect",
    img: "/ph8.png",
    desc: "Modern fire visual manipulation effect",
  },
  {
    id: "PX9",
    name: "Sci-Fi Creative Edit",
    img: "/ph9.png",
    desc: "Science fiction futuristic composition",
  },
  {
    id: "PX10",
    name: "Royal Premium Artwork",
    img: "/ph10.png",
    desc: "Luxury royal style photo manipulation",
  },
];

export default function PhotoManipulation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(index % 2 === 0 ? 1 : -1);

      setIndex((prev) => (prev + 1) % designs.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-8">

      {/* TOP ANIMATED BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite]" />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute left-[-150px] top-0 w-[350px] h-full bg-purple-500/10 blur-[130px]"></div>

      <div className="absolute right-[-150px] top-0 w-[350px] h-full bg-pink-500/10 blur-[130px]"></div>

      {/* RAIN EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(45)].map((_, i) => (
          <span
            key={i}
            className="absolute block w-[1px] h-[100px] bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -100}%`,
              opacity: Math.random() * 0.5,
              animation: `rainFall ${
                2 + Math.random() * 3
              }s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-7xl h-[95vh] rounded-[35px] p-[2px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite] shadow-[0_0_80px_rgba(168,85,247,0.35)]">

        {/* INNER BOX */}
        <div className="relative w-full h-full rounded-[33px] bg-black/70 backdrop-blur-2xl overflow-hidden">

          {/* HEADER */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center px-4">

            <h1 className="text-white text-3xl md:text-4xl font-black">
              Photo Manipulation Gallery ✨
            </h1>

           

          </div>

          {/* SLIDER */}
          <div className="relative w-full h-full flex items-center justify-center pt-28 md:pt-36 px-4">

            <AnimatePresence mode="wait">

              <motion.div
                key={designs[index].id}
                initial={{
                  x: direction === 1 ? 300 : -300,
                  opacity: 0,
                  scale: 0.85,
                  rotateY: direction === 1 ? 25 : -25,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                }}
                exit={{
                  x: direction === 1 ? -300 : 300,
                  opacity: 0,
                  scale: 0.85,
                  rotateY: direction === 1 ? -25 : 25,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="w-full flex items-center justify-center"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* OUTER BORDER */}
                <div className="relative w-full max-w-6xl rounded-[34px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_90px_rgba(168,85,247,0.45)]">

                  {/* CARD */}
                  <div className="relative w-full min-h-[70vh] rounded-[32px] overflow-hidden bg-black/90">

                    {/* FLEX LAYOUT */}
                    <div className="flex flex-col lg:flex-row w-full h-full">

                      {/* LEFT TEXT SIDE */}
                      <div className="w-full lg:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-black/70 relative z-20">

                       

                        {/* TITLE */}
                        <h2 className="text-white text-3xl md:text-5xl font-black mt-5 leading-tight">
                          {designs[index].name}
                        </h2>

                        {/* TYPE */}
                        <p className="text-purple-200 mt-5 text-base md:text-2xl font-semibold tracking-wide">
                          Photo Manipulation Design
                        </p>

                        {/* DESCRIPTION */}
                        <p className="text-gray-300 mt-6 text-sm md:text-lg leading-relaxed">
                          {designs[index].desc}
                        </p>

                        {/* EXTRA CONTENT */}
                        <div className="mt-8 space-y-4">

                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-purple-500"></div>

                            <p className="text-gray-300 text-sm md:text-base">
                              High Quality Visual Composition
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-pink-500"></div>

                            <p className="text-gray-300 text-sm md:text-base">
                              Professional Photo Editing Style
                            </p>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-white"></div>

                            <p className="text-gray-300 text-sm md:text-base">
                              Modern Creative Digital Artwork
                            </p>
                          </div>

                        </div>

                      </div>

                      {/* RIGHT IMAGE SIDE */}
                      <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-[70vh] overflow-hidden">

                        {/* IMAGE */}
                        <img
                          src={designs[index].img}
                          alt={designs[index].name}
                          className="w-full h-full object-contain"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40"></div>

                        {/* GLOW */}
                        <div className="absolute bottom-[60px] right-[-60px] w-[250px] h-[250px] bg-purple-500/30 blur-[120px] rounded-full"></div>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

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

        @keyframes rainFall {

          0% {
            transform: translateY(-120px);
          }

          100% {
            transform: translateY(120vh);
          }

        }

      `}</style>

    </section>
  );
}