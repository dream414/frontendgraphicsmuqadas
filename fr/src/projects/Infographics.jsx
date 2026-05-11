import { useEffect, useRef } from "react";
import gsap from "gsap";

const designs = [
  "/in1.png",
  "/in2.png",
  "/in3.png",
  "/in4.png",
  "/in5.png",
  "/in6.png",
  "/in7.png",
  "/in8.png",
  "/in9.png",
  "/in10.png",
];

export default function InfiniteCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(el, {
      y: "-50%",
      duration: 20,
      ease: "linear",
    });

    return () => tl.kill();
  }, []);

  return (
    <section className="w-full h-screen bg-black overflow-hidden flex items-center justify-center relative">

      {/* GLOW BACKGROUND */}
      <div className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      {/* TITLE */}
      <div className="absolute top-10 text-center z-10">
        <h1 className="text-white text-5xl md:text-6xl font-black">
          Infographic Carousel
        </h1>
        
      </div>

      {/* VIEWPORT */}
      <div className="h-[80vh] w-full max-w-6xl overflow-hidden relative mt-28">

        {/* TRACK */}
        <div ref={trackRef} className="flex flex-col gap-6">

          {[...designs, ...designs].map((img, i) => (
            <div
              key={i}
              className="h-[60vh] min-h-[60vh] rounded-[30px] overflow-hidden border border-white/10 bg-gradient-to-b from-purple-500/10 to-black shadow-[0_0_50px_rgba(168,85,247,0.25)] flex items-center justify-center"
            >
              <img
                src={img}
                className="h-full w-full object-contain p-6"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}