import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';

const testimonials = [
  {
    quote: "The results on my jawline and neck are unbelievable. Real structural tightening without surgery.",
    author: "Sarah Chen",
    role: "Flatiron Patient",
    company: "SKINNEY Flatiron",
  },
  {
    quote: "My skin feels incredibly firm and smooth. The progressive lift over 6 weeks is amazing.",
    author: "Marcus Webb, MD",
    role: "Clinical Advisor",
    company: "Dermatology Board",
  },
  {
    quote: "The most comfortable skin tightening session I've ever had, with instant visible lift.",
    author: "Elena Frost",
    role: "East 60th Street Patient",
    company: "SKINNEY East 60th Street",
  },
];

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Transform for parallax on the large number
  const numberX = useTransform(x, [-200, 200], [-20, 20]);
  const numberY = useTransform(y, [-200, 200], [-10, 10]);

  const handleMouseMove = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="pt-4 md:pt-6 pb-24 md:pb-32 bg-white overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-4 md:py-6" onMouseMove={handleMouseMove}>
          {/* Oversized index number - positioned to bleed off left edge */}
          <motion.div
            className="absolute -left-8 md:-left-16 top-1/2 -translate-y-1/2 text-[18rem] md:text-[28rem] font-bold text-[#2C2B29]/[0.025] select-none pointer-events-none leading-none tracking-tighter"
            style={{ x: numberX, y: numberY }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="block font-serif"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Main content - asymmetric layout */}
          <div className="relative flex">
            {/* Left column - vertical text */}
            <div className="flex flex-col items-center justify-center pr-8 md:pr-16 border-r border-gray-200">
              <motion.span
                className="text-xs font-mono text-gray-400 tracking-widest uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Reviews
              </motion.span>

              {/* Vertical progress line */}
              <div className="relative h-32 w-px bg-gray-200 mt-8">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-[#2C2B29] origin-top"
                  animate={{
                    height: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            {/* Center - main content */}
            <div className="flex-1 pl-8 md:pl-16 py-6 md:py-12">
              {/* Company badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-gray-505 border border-gray-200 rounded-full px-3 py-1 bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C2B29]" />
                    {current.company}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Quote with character reveal */}
              <div className="relative mb-12 min-h-[160px] md:min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.blockquote
                    key={activeIndex}
                    className="text-2xl sm:text-3xl md:text-5xl font-light text-[#2C2B29] leading-[1.2] tracking-tight font-serif"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {current.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block mr-[0.3em]"
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 90 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            transition: {
                              duration: 0.5,
                              delay: i * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                          exit: {
                            opacity: 0,
                            y: -10,
                            transition: { duration: 0.2, delay: i * 0.015 },
                          },
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Animated line before name */}
                    <motion.div
                      className="w-8 h-px bg-[#2C2B29]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      style={{ originX: 0 }}
                    />
                    <div>
                      <p className="text-base font-semibold text-[#2C2B29]">{current.author}</p>
                      <p className="text-sm text-gray-400 font-normal">{current.role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={goPrev}
                    aria-label="Previous Testimonial"
                    className="group relative w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden bg-white hover:border-[#2C2B29] hover:bg-[#2C2B29] text-[#2C2B29] hover:text-white transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 currentColor"
                    >
                      <path
                        d="M10 12L6 8L10 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>

                  <motion.button
                    onClick={goNext}
                    aria-label="Next Testimonial"
                    className="group relative w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden bg-white hover:border-[#2C2B29] hover:bg-[#2C2B29] text-[#2C2B29] hover:text-white transition-all duration-300"
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="relative z-10 currentColor"
                    >
                      <path
                        d="M6 4L10 8L6 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ticker - subtle repeating company names */}
          <div className="absolute -bottom-12 left-0 right-0 overflow-hidden opacity-[0.025] pointer-events-none">
            <motion.div
              className="flex whitespace-nowrap text-6xl font-bold tracking-tight text-[#2C2B29]"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 font-serif">
                  {testimonials.map((t) => t.company).join(" • ")} •
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
