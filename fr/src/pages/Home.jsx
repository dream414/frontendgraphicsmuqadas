import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-black to-purple-900 text-white px-6 overflow-hidden">

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 text-center md:text-left">

        {/* LEFT SIDE TEXT */}
        <div className="flex-1 space-y-5 flex flex-col items-center md:items-start animate-[slideLeft_1.2s_ease]">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi 👋 Guys Meet{" "}
            <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
              Muqadas Malik
            </span>
            <br />

            <span className="text-white text-2xl md:text-4xl block">
              Not Only Developer But Also a
              <span className="text-purple-400">
                {" "}
                Creative Graphic Designer
              </span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-xl">
            With{" "}
            <span className="text-purple-300 font-semibold">
              3+ years of experience
            </span>
            in graphic design, branding and visual storytelling.
            <br />
            I create modern, clean and impactful visual designs
            that help brands stand out in the digital world.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg transition hover:scale-105">
            <a href="#footer" > View Work</a>
            </button>

            <button className="px-6 py-3 border border-purple-400 rounded-lg hover:bg-purple-800 transition hover:scale-105">
              <Link to="/contact">Contact Me</Link> 
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center items-center animate-[slideRight_1.2s_ease] mt-8 md:mt-0">

          <div className="relative p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-white to-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]">

            <div className="bg-black rounded-full p-1">
              <img
                src="/re.png"
                alt="hero"
                className="w-[220px] sm:w-[260px] md:w-[350px] rounded-full"
              />
            </div>

          </div>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>

    </section>
  );
}