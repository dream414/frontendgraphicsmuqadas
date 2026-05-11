import React, { useState } from "react";

export default function Achievements() {
  const achievements = [
    { img: "/01.png", title: "Certificate of Information Technology" },
    { img: "/02.png", title: "Certificate of Office Automation" },
    { img: "/03.png", title: "Certificate In Information" },
    { img: "/04.png", title: "Certificate of Diploma Information Technology" },
    { img: "/05.png", title: "Certificate of Fiverr" },
    { img: "/06.png", title: "Certificate of WordPress" },
    { img: "/07.png", title: "Certificate of Web Development" },
    { img: "/08.png", title: "Certificate of Frontend Internship" },
    { img: "/09.png", title: "Certificate of Graphic Design Internship" },
    { img: "/10.png", title: "Certificate of UX/UI Designing Internship" },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-24 px-6">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16 animate-[fadeUp_1s_ease]">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            My <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="mt-5 text-gray-300 max-w-2xl mx-auto text-lg">
            A collection of certificates, awards and milestones.
          </p>
        </div>

        {/* SLIDER CONTAINER */}
        <div className="relative overflow-hidden rounded-[40px] border-2 border-purple-500 bg-gradient-to-br from-purple-500/10 via-white/5 to-purple-500/10 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(168,85,247,0.3)]">

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 bg-purple-500/10 blur-3xl"></div>

          {/* MOVING CARDS */}
          <div className="flex gap-8 w-max animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused]">

            {[...achievements, ...achievements].map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(item)}
                className="cursor-pointer relative min-w-[320px] md:min-w-[430px] h-[360px] rounded-[32px] overflow-hidden group border-2 border-white/20 bg-gradient-to-b from-purple-500/10 to-black/70 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:border-purple-400 transition-all duration-500"
              >

                {/* ANIMATED BORDER */}
                <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-white/40 transition-all duration-500"></div>

                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* TITLE */}
                <div className="h-[80px] flex items-center justify-center bg-black/70 border-t border-purple-500/30 px-4">
                  <h3 className="text-white font-semibold text-center text-lg">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full"
          >

            <img
              src={selected.img}
              alt="preview"
              className="w-full max-h-[85vh] object-contain rounded-3xl border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.5)]"
            />

            <h2 className="text-center mt-5 text-2xl font-bold text-white">
              {selected.title}
            </h2>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full font-bold text-xl hover:bg-purple-500 hover:text-white transition"
            >
              ✕
            </button>

          </div>

        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

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
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}