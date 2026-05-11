import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const illustrations = [
  {
    id: "IA1",
    title: "Fantasy World",
    img: "/ia1.png",
  },
  {
    id: "IA2",
    title: "Creative Character",
    img: "/ia2.png",
  },
  {
    id: "IA3",
    title: "Digital Painting",
    img: "/ia3.png",
  },
  {
    id: "IA4",
    title: "Modern Vector",
    img: "/ia4.png",
  },
  {
    id: "IA5",
    title: "Cyber Illustration",
    img: "/ia5.png",
  },
  {
    id: "IA6",
    title: "Luxury Artwork",
    img: "/ia6.png",
  },
  {
    id: "IA7",
    title: "Sci-Fi Art",
    img: "/ia7.png",
  },
  {
    id: "IA8",
    title: "3D Cartoon",
    img: "/ia8.png",
  },
  {
    id: "IA9",
    title: "Creative Scene",
    img: "/ia9.png",
  },
  {
    id: "IA10",
    title: "Premium Art",
    img: "/ia10.png",
  },
];

export default function IllustrationArt() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % illustrations.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-10">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-400 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite]" />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-150px] w-[450px] h-[450px] bg-purple-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-150px] w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

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

      {/* MAIN BOX */}
      <div className="relative w-full max-w-7xl h-[92vh] rounded-[38px] p-[2px] bg-gradient-to-r from-purple-400 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite] shadow-[0_0_90px_rgba(34,211,238,0.30)]">

        {/* INNER */}
        <div className="relative w-full h-full rounded-[36px] overflow-hidden flex items-center justify-center bg-black">

          {/* INNER BACKGROUND GLOW */}
          <div className="absolute top-[-180px] left-[-120px] w-[400px] h-[400px] bg-purple-500/25 blur-[140px] rounded-full z-0" />

          <div className="absolute bottom-[-180px] right-[-120px] w-[400px] h-[400px] bg-cyan-500/25 blur-[140px] rounded-full z-0" />

          {/* INNER PARTICLES */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[3px] h-[3px] bg-white rounded-full"
                initial={{
                  y: Math.random() * window.innerHeight,
                  x: Math.random() * window.innerWidth,
                  opacity: 0.2,
                }}
                animate={{
                  y: [null, -120],
                  opacity: [0.2, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

          </div>

          {/* TITLE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-30">

            <h1 className="text-white text-3xl md:text-4xl font-black">
              Illustration Art Gallery ✨
            </h1>

          </div>

          {/* SLIDER */}
          <div className="relative w-full h-full flex items-center justify-center pt-24 overflow-hidden z-20">

            <AnimatePresence mode="wait">

              <motion.div
                key={illustrations[index].id}
                initial={{
                  y: -500,
                  rotate: -10,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  y: 800,
                  rotate: 8,
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 1,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="absolute"
              >

                {/* BORDER */}
                <div className="relative rounded-[35px] p-[3px] bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_110px_rgba(34,211,238,0.35)]">

                  {/* CARD */}
                  <div className="relative w-[340px] sm:w-[520px] md:w-[850px] lg:w-[1050px] h-[75vh] rounded-[32px] overflow-hidden bg-black">

                    {/* IMAGE */}
                    <motion.img
                      key={illustrations[index].img}
                      src={illustrations[index].img}
                      alt={illustrations[index].title}
                      initial={{
                        scale: 1.15,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        duration: 3,
                      }}
                      className="w-full h-full object-contain"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

                    {/* GLOW */}
                    <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[500px] h-[180px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20">

                      <h2 className="text-white text-2xl md:text-5xl font-black mt-3">
                        Illustration Art
                      </h2>

                      <p className="text-purple-300 mt-3 text-sm md:text-2xl font-semibold tracking-wide">
                        {illustrations[index].title}
                      </p>

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
      `}</style>

    </section>
  );
}