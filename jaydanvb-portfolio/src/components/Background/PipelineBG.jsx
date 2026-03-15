import React, { useEffect, useRef } from "react";

const PipelineBackground = () => {
  const packetRefs = useRef([]);

  useEffect(() => {
    const path = document.getElementById("pipeline");
    if (!path) return;
    const packets = packetRefs.current;
    const length = path.getTotalLength();
    let progress = [0, 200, 400]; // starting positions for multiple packets

    const animate = () => {
      for (let i = 0; i < packets.length; i++) {
        progress[i] += 4; // speed
        if (progress[i] > length) progress[i] -= length;
        const point = path.getPointAtLength(progress[i]);
        packets[i].setAttribute("cx", point.x);
        packets[i].setAttribute("cy", point.y);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full -z-10"
      viewBox="0 0 1300 450"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pipeline path */}
      <path
        id="pipeline"
        d="M0 100 L780 100 Q800 100 800 120 L800 410 Q800 430 820 430 L1300 430"
        stroke="#Cb9531"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      {/* Moving packets */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          ref={(el) => (packetRefs.current[i] = el)}
          r="12"
          fill="#9c9c9f"
          style={{
            filter: "drop-shadow(0 0 10px #9c9c9f)", // glowing effect
          }}
        />
      ))}
    </svg>
  );
};

export default PipelineBackground;