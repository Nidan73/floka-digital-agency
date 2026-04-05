import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft spring for that heavy, premium agency feel
  const springConfig = { damping: 15, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorText(target.getAttribute("data-cursor"));
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      /* PREMIUM TIP: 'hidden lg:flex' ensures the cursor is completely 
        removed on mobile/tablet and only renders on Desktop screens.
      */
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden lg:flex items-center justify-center rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: isHovering ? 60 : 40,
        height: isHovering ? 60 : 40,
        // Current light/transparent color strategy
        backgroundColor: isHovering ? "rgba(0, 0, 0, 0.05)" : "transparent",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", ...springConfig },
      }}
    >
      <AnimatePresence mode="wait">
        {!isHovering ? (
          /* 1. THE BLACK DOT: Visible only when NOT hovering */
          <motion.div
            key="dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="w-1.5 h-1.5 bg-black rounded-full"
          />
        ) : (
          /* 2. THE TEXT: Fades in only when hovering */
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-black font-funnel text-sm font-medium tracking-tight"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
