import { useState } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Reviews() {

  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      name: " 💜 Sarah Ali 💜",
      role: "Brand Owner",
      image: "/public services.png",
      review:
        "OMG 😍 Your creativity is literally next level! The design looked so premium and elegant ✨. I truly loved every single detail 💕.",
    },
    {
      name: "Chitral Project 🚀",
      role: "Startup Founder",
      image: "/software.png",
      review:
        "Working with you was such an amazing experience 🤝💫. Communication was smooth and the final result looked super professional 🔥.",
    },
    {
      name: "Emily Watson 🌸",
      role: "Social Media Manager",
      image: "/education tech.png",
      review:
        "The designs were absolutely stunning 😭✨. Everything was delivered perfectly and honestly exceeded my expectations 💎.",
    },
    {
      name: "Danish 🎯",
      role: "Head of Institute",
      image: "/tech company.png",
      review:
        "Very talented designer 👏🔥. The animations, colors and overall branding style looked modern and premium 💜.",
    },
    {
      name: "Faiza 🌷",
      role: "BSCS Student",
      image: "/students.png",
      review:
        "Your hard work is truly inspiring 🥹💖. InshaAllah one day you will achieve huge success because your creativity is amazing 🌟.",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-10 md:px-6">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="relative w-full max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-8 animate-[fadeUp_1s_ease]">

          <h2 className="text-3xl md:text-5xl font-extrabold">
            Client <span className="text-purple-400">Reviews</span>
          </h2>

          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Beautiful words from amazing clients 💜✨
          </p>

        </div>

        {/* REVIEW CARD */}
        <div className="relative max-w-3xl mx-auto">

          {/* OUTER BORDER */}
          <div className="relative rounded-[30px] p-[2px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite] shadow-[0_0_40px_rgba(168,85,247,0.28)]">

            {/* INNER BOX */}
            <div className="relative rounded-[28px] bg-black/80 backdrop-blur-xl overflow-hidden px-4 md:px-8 py-6 md:py-8">

              {/* GLOW */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 blur-[90px] rounded-full"></div>

              {/* QUOTE ICON */}
              <div className="absolute top-5 right-5 opacity-10">
                <Quote size={55} />
              </div>

              {/* REVIEW CONTENT */}
              <div
                key={current}
                className="relative z-10 flex flex-col items-center text-center animate-[reviewAnim_0.7s_ease]"
              >

                {/* CHAT BUBBLE */}
                <div className="bg-gradient-to-r from-purple-600/20 to-white/5 border border-purple-500/20 rounded-[26px] px-4 py-4 md:px-5 md:py-5 max-w-2xl relative">

                  {/* CHAT TAIL */}
                  <div className="absolute -bottom-2 left-8 w-5 h-5 bg-purple-500/20 rotate-45 border-r border-b border-purple-500/20"></div>

                  {/* IMAGE */}
                  <div className="relative mb-4 flex justify-center">

                    <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40 animate-pulse"></div>

                    <div className="relative p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]">

                      <img
                        src={reviews[current].image}
                        alt={reviews[current].name}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-[3px] border-black"
                      />

                    </div>

                  </div>

                  {/* STARS */}
                  <div className="flex justify-center gap-1 mb-3">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400 animate-pulse"
                      />
                    ))}

                  </div>

                  {/* MESSAGE */}
                  <p className="text-sm md:text-lg text-gray-200 leading-relaxed font-light">
                    {reviews[current].review}
                  </p>

                </div>

                {/* NAME */}
                <h3 className="mt-6 text-xl md:text-2xl font-bold text-white">
                  {reviews[current].name}
                </h3>

                <span className="text-purple-400 text-sm mt-1">
                  {reviews[current].role}
                </span>

              </div>

            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-center gap-4 mt-6">

            <button
              onClick={prevSlide}
              className="group w-11 h-11 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
            >
              <ChevronLeft className="group-hover:scale-125 transition duration-300" />
            </button>

            <button
              onClick={nextSlide}
              className="group w-11 h-11 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-lg flex items-center justify-center hover:bg-purple-500 transition duration-500 hover:scale-110"
            >
              <ChevronRight className="group-hover:scale-125 transition duration-300" />
            </button>

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-5">

            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-500 rounded-full ${
                  current === index
                    ? "w-9 h-3 bg-purple-500"
                    : "w-3 h-3 bg-gray-500"
                }`}
              />
            ))}

          </div>

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

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes reviewAnim {
          from {
            opacity: 0;
            transform: scale(0.94) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

      `}</style>

    </section>
  );
}