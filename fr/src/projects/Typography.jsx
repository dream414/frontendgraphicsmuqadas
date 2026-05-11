import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const designs = [
  { id: "T1", name: "Typography One", img: "/t1.png" },
  { id: "T2", name: "Modern Type", img: "/t2.png" },
  { id: "T3", name: "Bold Style", img: "/t3.png" },
  { id: "T4", name: "Creative Font", img: "/t4.png" },
  { id: "T5", name: "Luxury Type", img: "/t5.png" },
  { id: "T6", name: "Minimal Type", img: "/t6.png" },
  { id: "T7", name: "Neon Style", img: "/t7.png" },
  { id: "T8", name: "Brand Type", img: "/t8.png" },
  { id: "T9", name: "Elegant Type", img: "/t9.png" },
  { id: "T10", name: "Premium Font", img: "/t10.png" },
];

export default function Typography() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % designs.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-16">

      {/* 🌧️ RAIN BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[80px] bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4,
              animation: `fall ${2 + Math.random() * 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      {/* MAIN WRAPPER */}
      <div className="relative w-full max-w-6xl h-[85vh] flex items-center justify-center">

        {/* BORDER */}
        <div className="relative w-full h-full rounded-3xl p-[2px] bg-gradient-to-r from-purple-500 via-white/20 to-purple-500">

          {/* INNER BOX */}
          <div className="relative w-full h-full rounded-3xl bg-black/70 backdrop-blur-xl overflow-hidden flex items-center justify-center">

            {/* TITLE */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-20">
              <h1 className="text-white text-2xl md:text-4xl font-bold">
                Typography Design Gallery ✨
              </h1>
            </div>

            {/* SIDE GLOW */}
            <div className="absolute left-0 top-0 w-40 h-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute right-0 top-0 w-40 h-full bg-pink-500/10 blur-3xl"></div>

            {/* SLIDER STACK */}
            {designs.map((item, i) => {
              const offset = (i - index + designs.length) % designs.length;

              return (
                <motion.div
                  key={item.id}
                  className="absolute"
                  animate={{
                    scale: offset === 0 ? 1 : 0.75,
                    opacity: offset === 0 ? 1 : 0.2,
                    y: offset === 0 ? 40 : 80,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    zIndex: designs.length - offset,
                  }}
                >
                  {/* CARD */}
                  <div
                    className="relative rounded-2xl overflow-hidden border border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.25)]"
                    style={{
                      width: offset === 0 ? "340px" : "240px",
                      height: offset === 0 ? "440px" : "340px",
                      filter: offset === 0 ? "none" : "blur(1px)",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                      alt={item.id}
                    />

                    {/* LABEL */}
                    <div className="absolute bottom-0 left-0 w-full p-4 text-center bg-black/60">
                      <h2 className="text-white text-lg md:text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-purple-300  font-bold text-xs md:text-sm tracking-[3px] uppercase mt-1">
                        Typography Design
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>

      {/* RAIN ANIMATION */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100vh); }
        }
      `}</style>

    </section>
  );
}