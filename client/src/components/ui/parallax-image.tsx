import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;  // Parallax speed factor (default: 0.5)
  direction?: "up" | "down";  // Direction of parallax effect
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.5,
  direction = "up"
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Determine the parallax movement range based on direction and speed
  const yRange = direction === "up" 
    ? [speed * 100, speed * -100] 
    : [speed * -100, speed * 100];
  
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}