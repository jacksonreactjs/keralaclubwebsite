import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;  // 0-1 value for when animation should trigger
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 50,
  once = true,
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  // Set initial and animate values based on direction
  const getDirectionalValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: distance }, animate: { y: 0 } };
      case "down":
        return { initial: { y: -distance }, animate: { y: 0 } };
      case "left":
        return { initial: { x: distance }, animate: { x: 0 } };
      case "right":
        return { initial: { x: -distance }, animate: { x: 0 } };
      default:
        return { initial: { y: distance }, animate: { y: 0 } };
    }
  };

  const { initial, animate } = getDirectionalValues();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ ...initial, opacity: 0 }}
        animate={isInView ? { ...animate, opacity: 1 } : { ...initial, opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}