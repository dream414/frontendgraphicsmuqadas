import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ✅ PROJECT CATEGORIES
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const projectRef = useRef(null);

  // ✅ CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (projectRef.current && !projectRef.current.contains(e.target)) {
        setProjectOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="w-full  sticky top-0 left-0 bg-black backdrop-blur-xl z-50 border-b border-white shadow-[0_0_25px_6px_rgba(255,255,255,0.3)] ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* ✅ LOGO */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <span className="text-white flex items-center gap-2">
                MUQADAS
                <img
                  src="/lo.png"
                  alt="logo"
                  className="h-8 w-auto object-contain"
                />
              </span>

              <span className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
                DESIGNER
              </span>
            </h1>
          </div>

          {/* ✅ DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
               <Link to="/services" className="hover:text-yellow-300">Services</Link>


            {/* ✅ PROJECT DROPDOWN */}
            <div className="relative" ref={projectRef}>
              <button
                onClick={() => setProjectOpen(!projectOpen)}
                className="hover:text-yellow-300"
              >
                Projects ▾
              </button>

              {projectOpen && (
                <div className="absolute top-10 left-0 bg-black border border-white rounded-lg p-4 w-[420px] shadow-[0_0_20px_rgba(245,245,220,0.3)]">
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    {projectLinks.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="hover:text-yellow-300"
                        onClick={() => setProjectOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/reviews" className="hover:text-yellow-300">Client Reviews</Link>
                        <Link to="/achievements" className="hover:text-yellow-300">Achievements</Link>
          

            {/* ✅ HIRE BUTTON */}
            <a href="/d.map.pdf" target="_blank" rel="noopener noreferrer">
              <button className="relative px-5 py-2 bg-black text-white rounded-lg overflow-hidden border border-purple-500">
                <span className="relative z-10">
                  <Link to="/contact">Hire me</Link>
                </span>

                <span className="absolute inset-0 rounded-lg pointer-events-none">
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(90deg, #a855f7, transparent, #a855f7)",
                      backgroundSize: "200% 100%",
                      animation: "moveColor 2s linear infinite",
                    }}
                  ></span>
                </span>
              </button>
            </a>
          </div>

          {/* ✅ MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        {open && (
          <ul className="md:hidden flex flex-col bg-black text-white py-4 space-y-4 text-center">
            <li><Link to="/">Home</Link></li> 
             <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
          
      

            <li>
              <button onClick={() => setProjectOpen(!projectOpen)}>
                Projects ▾
              </button>

              {projectOpen && (
                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                  {projectLinks.map((item, index) => (
                    <Link key={index} to={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li><Link to="/reviews">Client Reviews</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
          </ul>
        )}
      </nav>

      {/* ✅ ANIMATIONS */}
      <style>{`
        @keyframes moveColor {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </>
  );
} 