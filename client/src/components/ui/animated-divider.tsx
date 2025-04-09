import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedDividerProps {
  className?: string;
  color?: "primary" | "secondary" | "accent";
  pattern?: "wave" | "curve" | "zigzag";
  inverted?: boolean;
  height?: string;
}

export function AnimatedDivider({
  className = "",
  color = "primary",
  pattern = "wave",
  inverted = false,
  height = "h-24" // default height
}: AnimatedDividerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform the scroll progress to horizontal movement
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  // Get the SVG pattern based on the selected pattern
  const getPattern = () => {
    const flip = inverted ? "scale(1, -1)" : "scale(1, 1)";
    const colorClass = `text-${color}`;
    
    switch (pattern) {
      case "wave":
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`${colorClass} w-full h-full`}
            style={{ transform: flip }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="currentColor"
            />
          </svg>
        );
      case "curve":
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`${colorClass} w-full h-full`}
            style={{ transform: flip }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="currentColor"
            />
          </svg>
        );
      case "zigzag":
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`${colorClass} w-full h-full`}
            style={{ transform: flip }}
          >
            <path 
              d="M1200 0L0 0 598.97 114.72 1200 0z" 
              fill="currentColor"
            />
          </svg>
        );
      default:
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`${colorClass} w-full h-full`}
            style={{ transform: flip }}
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="currentColor"
            />
          </svg>
        );
    }
  };
  
  return (
    <div 
      ref={ref}
      className={`relative w-full ${height} ${className}`}
    >
      {/* Left-moving layer */}
      <motion.div 
        className="absolute inset-0 z-10"
        style={{ x: xLeft, opacity }}
      >
        {getPattern()}
      </motion.div>
      
      {/* Right-moving layer with reduced opacity */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-50"
        style={{ x: xRight, opacity }}
      >
        {getPattern()}
      </motion.div>
    </div>
  );
}