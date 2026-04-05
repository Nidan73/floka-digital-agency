import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import LiquidImage from "../components/Common/LiquidImage"; // Import the new component
import right_img from "../assets/download.png";
const FunFactsSection = () => {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const imageZoom = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section className="w-full pb-8">
      <div className="max-w-[95%] lg:max-w-[90%] mx-auto py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <LiquidImage
            src={right_img}
            alt="Team"
            containerClass="h-[500px] lg:h-[85vh] rounded-[2rem] sticky top-24"
          />

          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6">
              Fun Facts
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-funnel font-medium text-black tracking-tight">
              Consistently delivering impactful results through a perfect blend
              of design and functionality.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:mt-16">
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-4xl p-6 lg:p-8 flex justify-between items-center shadow-sm">
                  <p className="text-sm font-medium text-zinc-500 w-1/2 leading-snug">
                    Successful projects completed
                  </p>
                  <h3 className="text-4xl lg:text-5xl font-funnel font-medium text-black">
                    <CountUp end={2} enableScrollSpy scrollSpyOnce />
                    k+
                  </h3>
                </div>

                <div className="bg-[#0a0a0a] rounded-4xl p-6 lg:p-8 flex flex-col justify-between flex-grow min-h-[320px]">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative h-40 flex justify-center items-center"
                  >
                    <motion.img
                      variants={{
                        hidden: { x: 0, y: 0, rotate: 0 },
                        visible: { x: -45, y: 15, rotate: -15 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.8,
                      }}
                      src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&auto=format&fit=crop"
                      className="w-24 h-32 object-cover rounded-xl absolute shadow-xl z-10"
                    />
                    <motion.img
                      variants={{
                        hidden: { x: 0, y: 0, rotate: 0 },
                        visible: { x: 45, y: 15, rotate: 15 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.8,
                      }}
                      src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=200&auto=format&fit=crop"
                      className="w-24 h-32 object-cover rounded-xl absolute shadow-xl z-10"
                    />
                    <motion.img
                      variants={{
                        hidden: { scale: 0.8 },
                        visible: { scale: 1 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.8,
                      }}
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=200&auto=format&fit=crop"
                      className="w-24 h-32 object-cover rounded-xl absolute z-20 shadow-2xl"
                    />
                  </motion.div>
                  <p className="text-zinc-400 text-sm mt-8 leading-relaxed">
                    <span className="text-white font-medium">
                      More than 2k+ projects completed
                    </span>
                    —each crafted to deliver results.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-4xl p-6 lg:p-8 flex flex-col flex-grow shadow-sm">
                  <div className="flex text-[#ff7a00] text-xl gap-1">★★★★★</div>
                  <h3 className="text-6xl lg:text-7xl font-funnel font-medium text-black mt-2">
                    4.9/5
                  </h3>
                  <hr className="my-6 border-zinc-200" />
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                    We offer end-to-end creative solutions.
                  </p>
                  <button className="flex items-center gap-4 mt-auto group w-fit">
                    +{" "}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                      Hire us now
                    </span>
                  </button>
                </div>

                <div
                  ref={parallaxRef}
                  className="relative bg-zinc-900 rounded-4xl p-6 lg:p-8 overflow-hidden h-32 flex items-end justify-between"
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?q=80&w=600"
                    style={{ scale: imageZoom }}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                  />
                  <p className="relative z-10 text-white text-sm font-medium w-1/2">
                    Worldwide base
                  </p>
                  <h3 className="relative z-10 text-white text-4xl lg:text-5xl font-funnel font-medium">
                    <CountUp end={5} enableScrollSpy />+
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
