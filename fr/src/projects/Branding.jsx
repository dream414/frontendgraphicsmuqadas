import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BrandingShowcase() {

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

const brands = [
  {
    image: "/b1.png",
    name: "Minimal Luxury Branding",
  },
  {
    image: "/b2.png",
    name: "Modern Tech Branding",
  },
  {
    image: "/b3.png",
    name: "Fashion Brand Identity",
  },
  {
    image: "/b4.png",
    name: "Corporate Business Branding",
  },
  {
    image: "/b5.png",
    name: "Creative Agency Identity",
  },
  {
    image: "/b6.png",
    name: "Restaurant Brand Design",
  },
  {
    image: "/b7.png",
    name: "Luxury Real Estate Branding",
  },
  {
    image: "/b8.png",
    name: "Fitness Brand Identity",
  },
  {
    image: "/b9.png",
    name: "Beauty Cosmetic Branding",
  },
  {
    image: "/b10.png",
    name: "Personal Portfolio Branding",
  },
];

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + brands.length) % brands.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-16 px-4 md:px-6">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite]"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-180px] left-[-120px] w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-180px] right-[-120px] w-[350px] h-[350px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">

          <h1 className="text-3xl md:text-5xl font-extrabold">
            Brand <span className="text-purple-400">Designs</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Premium branding presentation with smooth animated transitions ✨
          </p>

        </div>

        {/* SLIDER AREA */}
        <div className="relative flex items-center justify-center">

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronLeft size={22} />
          </button>

          {/* CARD */}
          <div className="relative w-full max-w-[270px] sm:max-w-[300px] md:max-w-[340px] h-[470px] md:h-[520px] flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute w-[260px] h-[360px] bg-purple-500/30 blur-[90px] rounded-full"></div>

            <AnimatePresence mode="wait" custom={direction}>

              <motion.div
                key={current}
                custom={direction}
                initial={{
                  x: direction > 0 ? 250 : -250,
                  opacity: 0,
                  rotate: direction > 0 ? 8 : -8,
                  scale: 0.9,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  x: direction > 0 ? -250 : 250,
                  opacity: 0,
                  rotate: direction > 0 ? -8 : 8,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute"
              >

                {/* OUTER BORDER */}
                <div className="relative rounded-[28px] p-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_5s_linear_infinite] shadow-[0_0_60px_rgba(168,85,247,0.35)]">

                  {/* INNER BOX */}
                  <div className="relative rounded-[26px] overflow-hidden bg-black/70 backdrop-blur-xl">

                    {/* IMAGE */}
                    <img
                      src={brands[current].image}
                      alt={brands[current].name}
                      className="w-[260px] sm:w-[290px] md:w-[330px] h-[390px] md:h-[450px] object-cover"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

                    {/* NAME */}
                    <div className="absolute bottom-0 left-0 w-full p-5 text-center">

                      <h2 className="text-2xl md:text-3xl font-black tracking-widest text-white">
                        {brands[current].name}
                      </h2>

                      <p className="text-purple-300 mt-1 text-xs md:text-sm tracking-[3px] uppercase">
                        Brand Identity Design
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 z-30 w-11 h-11 md:w-14 md:h-14 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* PREVIEW IMAGES */}
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mt-12">

          {brands.map((item, index) => (

            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                current === index
                  ? "border-purple-500 scale-110 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                  : "border-white/10 opacity-70 hover:opacity-100"
              }`}
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-20 md:w-16 md:h-24 object-cover"
              />

            </button>

          ))}

        </div>

      </div>

      {/* ANIMATIONS */}
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