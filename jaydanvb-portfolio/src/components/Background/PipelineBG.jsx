import React, { useEffect, useRef, useState } from "react";

const PipelineBackground = () => {
  const packetRefs = useRef([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = dimensions.width < 768;

  // Animate packets
  useEffect(() => {
    const path = document.getElementById("pipeline");
    if (!path) return;

    const packets = packetRefs.current;
    const length = path.getTotalLength();
    let progress = [0, 200, 400];

    const animate = () => {
      for (let i = 0; i < packets.length; i++) {
        progress[i] += 4;
        if (progress[i] > length) progress[i] -= length;
        const point = path.getPointAtLength(progress[i]);
        packets[i].setAttribute("cx", point.x);
        packets[i].setAttribute("cy", point.y);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [dimensions, isMobile]);

  const { width, height } = dimensions;

  // Scale factors for desktop path
  const scaleX = width / 1300;
  const scaleY = height / 450;

  const packetRadius = isMobile ? 16 : Math.max(12 * scaleX, 12);
  const strokeWidth = isMobile ? 12 : Math.max(12 * scaleY, 12);

  return (
    <svg
      className="absolute top-0 left-0 -z-10"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {isMobile ? (
        <>
          {/* Mobile horizontal line */}
          <path
            id="pipeline"
            d={`M0 ${height / 2} L${width} ${height / 2}`}
            stroke="#Cb9531"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          {/* Desktop scaled path */}
          <path
            id="pipeline"
            d={`
              M${0 * scaleX} ${100 * scaleY} 
              L${780 * scaleX} ${100 * scaleY} 
              Q${800 * scaleX} ${100 * scaleY} ${800 * scaleX} ${120 * scaleY} 
              L${800 * scaleX} ${410 * scaleY} 
              Q${800 * scaleX} ${430 * scaleY} ${820 * scaleX} ${430 * scaleY} 
              L${1300 * scaleX} ${430 * scaleY}
            `}
            stroke="#Cb9531"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}

      {/* Moving packets */}
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          ref={(el) => (packetRefs.current[i] = el)}
          r={packetRadius}
          fill="#9c9c9f"
          style={{ filter: "drop-shadow(0 0 10px #9c9c9f)" }}
        />
      ))}
    </svg>
  );
};

export default PipelineBackground;