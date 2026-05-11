import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { id: "NovaBrand", img: "/l1.png" },
  { id: "PixelForge", img: "/l2.png" },
  { id: "Brandora", img: "/l3.png" },
  { id: "Luxoria", img: "/l4.png" },
  { id: "DesignX", img: "/l5.png" },
  { id: "Creovate", img: "/l6.png" },
  { id: "VisualNest", img: "/l7.png" },
  { id: "Boldify", img: "/l8.png" },
  { id: "Artique", img: "/l9.png" },
  { id: "MetaLogo", img: "/l10.png" },
];


export default function LogoDesign() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % logos.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]" />

      <div className="relative w-full max-w-5xl">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white">
            Logo <span className="text-purple-400">Designs</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Premium animated logo showcase ✨
          </p>
        </div>

        {/* SLIDER BOX */}
        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-0 z-30 w-12 h-12 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition"
          >
            <ChevronLeft />
          </button>

          {/* MAIN CARD */}
          <div className="relative w-[320px] md:w-[420px] h-[320px] md:h-[420px] flex items-center justify-center">

            {/* ANIMATED BORDER */}
            <div className="absolute inset-0 rounded-[35px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite] shadow-[0_0_70px_rgba(168,85,247,0.4)]" />

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  x: direction > 0 ? 200 : -200,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  x: direction > 0 ? -200 : 200,
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full h-full rounded-[32px] bg-black/70 flex items-center justify-center overflow-hidden"
              >

                {/* LOGO IMAGE */}
                <img
                  src={logos[current].img}
                  alt={logos[current].id}
                  className="w-full h-full object-cover"
                />

                {/* ID LABEL */}
                <div className="absolute bottom-0 w-full text-center py-3 bg-black/60">
                  <p className="text-white font-bold text-xl">
                    {logos[current].id}
                  </p>
                  <p className="text-purple-300 text-xs tracking-[3px] uppercase">
                    Logo Design
                  </p>
                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-0 z-30 w-12 h-12 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition"
          >
            <ChevronRight />
          </button>

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