import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const flyers = [
  { id: "F1", img: "/f1.png" },
  { id: "F2", img: "/f2.png" },
  { id: "F3", img: "/f3.png" },
  { id: "F4", img: "/f4.png" },
  { id: "F5", img: "/f5.png" },
  { id: "F6", img: "/f6.png" },
  { id: "F7", img: "/f7.png" },
  { id: "F8", img: "/f8.png" },
  { id: "F9", img: "/f9.png" },
  { id: "F10", img: "/f10.png" },
];

export default function Flyer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % flyers.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 py-10 overflow-hidden">

      {/* OUTER GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-black blur-[180px] rounded-full"></div>
        <div className="absolute left-[-150px] top-0 w-[350px] h-full bg-purple-500/10 blur-[130px]"></div>
        <div className="absolute right-[-150px] top-0 w-[350px] h-full bg-pink-500/10 blur-[130px]"></div>
      </div>

      {/* MAIN BOX */}
      <div className="relative w-full max-w-7xl h-[94vh] rounded-[40px] p-[2px] bg-gradient-to-r from-purple-600 via-purple-400 to-purple-700 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite] shadow-[0_0_90px_rgba(168,85,247,0.35)] overflow-hidden">

        {/* INNER BOX */}
        <div className="relative w-full h-full rounded-[38px] overflow-hidden flex flex-col items-center justify-center">

          {/* PURPLE ONLY BACKGROUND (NO SILVER) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 bg-[length:200%_100%] animate-[borderMove_8s_linear_infinite] opacity-20"></div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl"></div>

          {/* PARTICLES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(60)].map((_, i) => (
              <span
                key={i}
                className="absolute w-[4px] h-[4px] rounded-full bg-white/25"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>

          {/* HEADING */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center px-4">
            <h1 className="text-white text-2xl md:text-5xl font-black">
              Flyer & Brochure Gallery
            </h1>
          </div>

          {/* SLIDER */}
          <div className="relative w-full h-full flex items-center justify-center pt-32 overflow-hidden">

            <AnimatePresence mode="wait">

              <motion.div
                key={flyers[index].id}
                initial={{ y: -700, rotate: -10, opacity: 0, scale: 0.6 }}
                animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                exit={{ x: -1400, rotate: -18, opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute"
              >

                {/* CARD BORDER */}
                <div className="relative rounded-[35px] p-[3px] bg-gradient-to-r from-purple-500 via-purple-300 to-purple-700 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_100px_rgba(168,85,247,0.45)]">

                  {/* CARD */}
                  <div className="relative w-[240px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[80vh] rounded-[32px] overflow-hidden bg-black">

                    <motion.img
                      key={flyers[index].img}
                      src={flyers[index].img}
                      alt={flyers[index].id}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 3 }}
                      className="w-full h-full object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    {/* GLOW */}
                    <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[350px] h-[180px] bg-purple-500/30 blur-[120px] rounded-full"></div>

                    {/* TEXT */}
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center z-20">
                      <h2 className="text-white text-2xl md:text-4xl font-black mt-3">
                        Flyer Design
                      </h2>
                      <p className="text-gray-300 mt-3 text-sm md:text-base tracking-[2px] uppercase">
                        Flyer & Brochure
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.2; }
        }
      `}</style>

    </section>
  );
}