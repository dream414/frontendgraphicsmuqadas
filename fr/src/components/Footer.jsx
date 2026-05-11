import React from "react";
import { Link } from "react-router-dom";

const projectLinks = [
  { name: "Branding & Identity", path: "/projects/branding" },
  { name: "Logo Design", path: "/projects/logo" },
  { name: "Packaging Design", path: "/projects/packaging" },
  { name: "Social Media Design", path: "/projects/social" },
  { name: "Poster Design", path: "/projects/poster" },
  { name: "Flyer & Brochure", path: "/projects/flyer" },
  { name: "Print Design", path: "/projects/print" },
  { name: "Advertising Design", path: "/projects/advertising" },
  { name: "Illustration & Art", path: "/projects/illustration" },
  { name: "Typography Design", path: "/projects/typography" },
  { name: "Photo Manipulation", path: "/projects/photo" },
  { name: "Infographics", path: "/projects/infographics" },
];

export default function Footer() {
  return (
    <footer  id="footer" className="relative w-full bg-black text-white overflow-hidden">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]"></div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="space-y-4 animate-[slideLeft_1s_ease] text-center md:text-left flex flex-col items-center md:items-start">

          <div className="flex items-center justify-center md:justify-start">
            <div className="relative p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-white to-purple-500 animate-[borderMove_4s_linear_infinite]">
              <div className="bg-black rounded-full p-2">
                <img
                  src="/face.png"
                  alt="logo"
                  className="h-40 w-40 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-bold">
            MUQADAS{" "}
            <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
              MALIK
            </span>
          </h1>

          <p className="text-gray-400 text-sm hover:text-yellow-300 hover:font-bold">
            Creative Graphic Designer specializing in modern branding,
            visual identity and digital design solutions.
          </p>

      
        </div>

        {/* MIDDLE */}
        <div className="animate-[slideUp_1s_ease] text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-purple-400">
            Projects
          </h2>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            {projectLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="hover:text-yellow-300 hover:font-bold"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-4 text-center md:text-right animate-[slideRight_1s_ease]">

          <h2 className="text-lg font-semibold text-purple-400">
            Quick Links
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-300 items-center md:items-end">

            <Link to="/" className="hover:text-yellow-300 hover:font-bold">
              Home
            </Link>

            <Link to="/services" className="hover:text-yellow-300 hover:font-bold">
              Services
            </Link>

            <Link to="/about" className="hover:text-yellow-300 hover:font-bold">
              About
            </Link>

            <Link to="/achievements" className="hover:text-yellow-300 hover:font-bold">
              Achievements
            </Link>

            <Link to="/reviews" className="hover:text-yellow-300 hover:font-bold">
              Client Reviews
            </Link>

            <Link to="/contact" className="hover:text-yellow-300 hover:font-bold">
              Contact
            </Link>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="relative w-full">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-white to-purple-500 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]"></div>

        <div className="relative text-black text-center py-2 font-extrabold bg-gradient-to-r from-purple-600 via-white/10 to-purple-600 bg-[length:200%_100%] animate-[borderMove_4s_linear_infinite]">
          © {new Date().getFullYear()} MUQADAS MALIK DESIGNER. All Rights Reserved.
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>

    </footer>
  );
}