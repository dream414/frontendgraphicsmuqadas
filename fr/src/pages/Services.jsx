import React from "react";
import {
  Palette,
  BadgeCheck,
  Package,
  FileText,
  Printer,
  Megaphone,
  PenTool,
  Type,
  Image,
  BarChart3,
  Layers,
  Share2,
} from "lucide-react";

export default function Services() {

  const services = [
    { title: "Branding & Identity", icon: <BadgeCheck size={34} />, color: "text-pink-500" },
    { title: "Logo Design", icon: <Palette size={34} />, color: "text-purple-400" },
    { title: "Packaging Design", icon: <Package size={34} />, color: "text-yellow-400" },
    { title: "Social Media Design", icon: <Share2 size={34} />, color: "text-blue-400" },
    { title: "Poster Design", icon: <FileText size={34} />, color: "text-green-400" },
    { title: "Flyer & Brochure Design", icon: <Layers size={34} />, color: "text-indigo-400" },
    { title: "Print Design", icon: <Printer size={34} />, color: "text-orange-400" },
    { title: "Advertising Design", icon: <Megaphone size={34} />, color: "text-red-400" },
    { title: "Illustration & Digital Art", icon: <PenTool size={34} />, color: "text-cyan-400" },
    { title: "Typography Design", icon: <Type size={34} />, color: "text-emerald-400" },
    { title: "Photo Manipulation", icon: <Image size={34} />, color: "text-fuchsia-400" },
    { title: "Infographics", icon: <BarChart3 size={34} />, color: "text-lime-400" },
  ];

  return (
    <section className="w-full bg-black text-white py-24 overflow-hidden">

      {/* HEADING */}
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          My <span className="text-purple-400">Graphic Design Services</span>
        </h1>

        <p className="text-gray-400 mt-5 text-lg md:text-xl">
          Modern, creative and professional graphic design solutions
          for brands and businesses.
        </p>
      </div>

      {/* SERVICE BOXES */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 px-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_200%] animate-[borderMove_5s_linear_infinite]"
          >

            {/* INNER BOX */}
            <div className="bg-[#0b0b0b] rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center border border-purple-900/40 backdrop-blur-lg hover:-translate-y-3 transition-all duration-500 animate-[fadeUp_1s_ease]">

              {/* ICON (FIXED COLOR SYSTEM) */}
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition duration-500">

                <span className={service.color}>
                  {service.icon}
                </span>

              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition duration-300">
                {service.title}
              </h2>

            </div>

          </div>
        ))}

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(80px);
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