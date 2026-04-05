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

  // 1. Mouse Position Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Premium Spring Physics (High damping for a smooth, heavy feel)
  const springConfig = { damping: 28, stiffness: 150 };
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
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        // Cursor grows significantly on hover
        width: isHovering ? 60 : 40,
        height: isHovering ? 60 : 40,
        // Transparent light color as requested
        backgroundColor: isHovering ? "rgba(0, 0, 0, 0.08)" : "transparent",
        border: "1px solid rgba(0, 0, 0, 0.15)",
      }}
    >
      <AnimatePresence mode="wait">
        {!isHovering ? (
          /* THE BLACK DOT (Disappears on hover) */
          <motion.div
            key="dot"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="w-1.5 h-1.5 bg-black rounded-full"
          />
        ) : (
          /* THE HOVER TEXT (Appears when dot is gone) */
          <motion.span
            key="text"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-black font-medium text-sm uppercase tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CustomCursor;
