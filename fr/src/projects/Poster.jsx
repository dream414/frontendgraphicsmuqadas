import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posters = [
  { id: "P-Alpha", name: "Creative Poster", img: "/p1.png" },
  { id: "P-Beta", name: "Modern Art Poster", img: "/p2.png" },
  { id: "P-Gamma", name: "Brand Promo Poster", img: "/p3.png" },
  { id: "P-Delta", name: "Typography Poster", img: "/p4.png" },
  { id: "P-Echo", name: "Event Poster", img: "/p5.png" },
  { id: "P-Zen", name: "Minimal Poster", img: "/p6.png" },
  { id: "P-Nova", name: "Luxury Poster", img: "/p7.png" },
  { id: "P-Orbit", name: "Neon Poster", img: "/p8.png" },
  { id: "P-Vibe", name: "Social Media Poster", img: "/p9.png" },
  { id: "P-Lux", name: "Premium Poster", img: "/p10.png" },
];

export default function Poster() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % posters.length);
  const prev = () =>
    setIndex((p) => (p - 1 + posters.length) % posters.length);

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      {/* ✅ SAFE HEADING (NO OVERLAP FIX) */}
      <div className="relative z-20 mb-10 text-center mt-10 md:mt-0">
        <h1 className="text-white text-3xl md:text-5xl font-bold">
          Poster Design Gallery ✨
        </h1>
        <p className="text-purple-300 text-sm mt-2 tracking-[3px] uppercase">
          Premium 3D Carousel Showcase
        </p>
      </div>

      {/* BORDER WRAPPER */}
      <div className="relative w-[92%] max-w-6xl h-[75vh] md:h-[80vh] p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite]">

        <div className="relative w-full h-full bg-black/80 backdrop-blur-xl rounded-3xl flex items-center justify-center overflow-hidden">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-3 md:left-6 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-purple-500/40 flex items-center justify-center hover:bg-purple-500 transition"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-3 md:right-6 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/10 border border-purple-500/40 flex items-center justify-center hover:bg-purple-500 transition"
          >
            <ChevronRight />
          </button>

          {/* 3D CAROUSEL */}
          <div className="relative flex items-center justify-center w-full h-full perspective-1000">

            <AnimatePresence mode="wait">

              {posters.map((item, i) => {
                const position = (i - index + posters.length) % posters.length;

                let scale = 0.6;
                let rotateY = 0;
                let x = 0;
                let opacity = 0;

                if (position === 0) {
                  scale = 1;
                  rotateY = 0;
                  x = 0;
                  opacity = 1;
                } else if (position === 1) {
                  scale = 0.8;
                  rotateY = -35;
                  x = 260;
                  opacity = 0.7;
                } else if (position === posters.length - 1) {
                  scale = 0.8;
                  rotateY = 35;
                  x = -260;
                  opacity = 0.7;
                }

                return (
                  <motion.div
                    key={item.id}
                    className="absolute"
                    animate={{ x, scale, rotateY, opacity }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* CARD */}
                    <div className="relative w-[250px] md:w-[320px] h-[380px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)] bg-black">

                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                      <div className="absolute bottom-0 w-full text-center p-4">

                        <p className="text-purple-300 text-xs tracking-[3px] uppercase">
                          {item.id}
                        </p>

                        <h2 className="text-white text-lg md:text-xl font-bold">
                          {item.name}
                        </h2>

                      </div>

                    </div>
                  </motion.div>
                );
              })}

            </AnimatePresence>

          </div>

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

    </section>
  );
}