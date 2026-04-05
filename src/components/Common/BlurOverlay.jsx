import React from "react";

const BlurOverlay = () => {
  return (
    <div
      // pointer-events-none ensures you can still click buttons 'behind' the blur
      className="fixed bottom-0 left-0 w-full h-24 lg:h-32 z-70 pointer-events-none backdrop-blur-md"
      style={{
        // The mask makes the blur 100% visible at the bottom and 0% at the top
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
  );
};

export default BlurOverlay;
