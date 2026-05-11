import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    name: "Matcha Green Tea Packaging Design",
    img: "/pa1.png",
    desc: "Modern premium product packaging concept",
  },
  {
    name: "Instant porridge Packaging Design",
    img: "/pa2.png",
    desc: "Clean eco-friendly packaging presentation",
  },
  {
    name: "Coffee Brew Packaging Design",
    img: "/pa3.png",
    desc: "Elegant beauty product packaging style",
  },
  {
    name: "Fresh Juice Packaging Design",
    img: "/pa4.png",
    desc: "Creative colorful snack packaging artwork",
  },
  {
    name: "Choco chookies Packaging Design",
    img: "/pa5.png",
    desc: "Luxury perfume packaging showcase",
  },
  {
    name: "Natural TeaPackaging Design",
    img: "/pa6.png",
    desc: "Premium beverage packaging presentation",
  },
  {
    name: "Cassava Chips Packaging Design",
    img: "/pa7.png",
    desc: "Minimal stylish chocolate wrapper design",
  },
  {
    name: "Coffee Powder Packaging Design",
    img: "/pa8.png",
    desc: "High-end modern fashion packaging",
  },
  {
    name: "Instant Noodle Packaging Design",
    img: "/pa9.png",
    desc: "Professional healthcare packaging design",
  },
  {
    name: "Mountain Brew Coffee Powder ",
    img: "/pa10.png",
    desc: "Futuristic electronic product packaging",
  },
];

export default function ProductPackaging() {
  const [index, setIndex] = useState(0);

  // AUTO CHANGE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % packages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center px-4 py-8">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite]" />

      {/* BG GLOW */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute left-[-150px] top-0 w-[350px] h-full bg-purple-500/10 blur-[130px]"></div>

      <div className="absolute right-[-150px] top-0 w-[350px] h-full bg-pink-500/10 blur-[130px]"></div>

      {/* FLOAT PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[5px] h-[5px] rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                3 + Math.random() * 4
              }s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* MAIN BOX */}
      <div className="relative w-full max-w-7xl h-[92vh] rounded-[40px] p-[2px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_6s_linear_infinite] shadow-[0_0_90px_rgba(168,85,247,0.35)]">

        {/* INNER */}
        <div className="relative w-full h-full rounded-[38px] bg-black/70 backdrop-blur-2xl overflow-hidden">

          {/* TITLE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center px-4">

            <h1 className="text-white text-3xl md:text-6xl font-black ">
              Product Packaging Design ✨
            </h1>

            

          </div>

          {/* CONTENT AREA */}
          <div className="relative w-full h-full flex items-center justify-center pt-32">

            <AnimatePresence mode="wait">

              <motion.div
                key={packages[index].name}
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotateY: 90,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  rotateY: -90,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* OUTER BORDER */}
                <div className="relative rounded-[35px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-pink-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_100px_rgba(168,85,247,0.45)]">

                  {/* CARD */}
                  <div className="relative w-[340px] sm:w-[520px] md:w-[900px] lg:w-[1050px] h-[60vh] rounded-[32px] overflow-hidden bg-black/80 flex flex-col md:flex-row">

                    {/* LEFT SIDE */}
                    <div className="relative w-full md:w-[60%] h-[300px] md:h-full flex items-center justify-center overflow-hidden bg-black">

                      {/* PACKAGE OPEN EFFECT */}
                      <motion.div
                        initial={{ rotateX: 90, y: 120 }}
                        animate={{ rotateX: 0, y: 0 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="relative w-full h-full"
                      >

                        {/* IMAGE */}
                        <motion.img
                          src={packages[index].img}
                          alt={packages[index].name}
                          initial={{
                            scale: 0.7,
                            y: 120,
                            opacity: 0,
                          }}
                          animate={{
                            scale: 1,
                            y: 0,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeOut",
                          }}
                          className="w-full h-full object-contain"
                        />

                      </motion.div>

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/40"></div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative w-full md:w-[40%] flex flex-col justify-center p-6 md:p-10 bg-black/70">

                      <h2 className="text-white text-2xl md:text-5xl font-black leading-tight">
                      {packages[index].name}
                      </h2>

                      <p className="text-purple-200 mt-4 text-sm md:text-xl font-semibold">
                        Product Packaging Design
                      </p>

                    

                      <button className="mt-8 w-fit px-7 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:scale-105 transition duration-500">
                        View Packaging
                      </button>

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

        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }

          50% {
            transform: translateY(-20px);
            opacity: 1;
          }

          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
        }

      `}</style>

    </section>
  );
}