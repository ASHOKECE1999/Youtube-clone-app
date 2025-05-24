import React, { useRef } from "react";

const ScrollableRow = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 h-full px-2 bg-white/70 hover:bg-white shadow-md"
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap scrollbar-hide px-8 flex "
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 h-full px-2 bg-white/70 hover:bg-white shadow-md"
      >
        ▶
      </button>
    </div>
  );
};

export default ScrollableRow;
