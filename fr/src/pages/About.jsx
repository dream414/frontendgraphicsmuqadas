import React from "react";

export default function About() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black text-white px-6">

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">

        {/* LEFT IMAGE */}
        <div className="flex-1 flex justify-center relative">

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] md:w-[380px] md:h-[380px] bg-purple-500 opacity-20 blur-3xl rounded-4xl animate-pulse"></div>

          {/* Animated Border */}
          <div className="relative rounded-4xl p-[5px] overflow-hidden">

            {/* Moving Border */}
            <div className="absolute inset-0 rounded-4xl bg-[conic-gradient(from_0deg,purple,white,purple)] animate-spin-slow"></div>

            {/* Inner Circle */}
            <div className="relative bg-black rounded-4xl p-2">

              <img
                src="/re.png"
                alt="about"
                className="w-[240px] md:w-[350px] rounded-4xl animate-[float_4s_ease-in-out_infinite]"
              />

            </div>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          <h2 className="text-4xl md:text-5xl font-bold">
            Who I Am <span className="text-purple-400">?</span>
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I am a professional and dedicated creative visual designer. I give my designs an attractive and modern look, and I work with honesty and professionalism for my clients. Just as I create designs for myself, I deliver the same high-level service to my clients. My work fully satisfies my clients, and I always focus on providing excellent service rather than just fees.
          </p>

          <p className="text-gray-400">
            I love turning ideas into creative visuals that communicate strong messages and build brand identity.
          </p>

          {/* NEW LINE ADDED */}
          <p className="text-purple-300 text-base md:text-lg">
            I have worked on more than 120+ creative projects, and in this website I have showcased 120 of my graphic design projects for you to explore.
          </p>

        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes spinSlow {
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spinSlow 6s linear infinite;
        }
      `}</style>

    </section>
  );
}