import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Import the logo image
import keralaClubLogo from "@/assets/kerala-club-logo.png";

interface LogoDisplayProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showText?: boolean;
  textPosition?: "below" | "right";
  glowEffect?: boolean;
}

export function LogoDisplay({
  className,
  size = "md",
  animated = true,
  showText = true,
  textPosition = "below",
  glowEffect = false
}: LogoDisplayProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Size mappings
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  };

  // Animation effects based on scroll position
  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, animated ? 10 : 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div 
      ref={ref}
      className={cn(
        "flex items-center",
        textPosition === "below" ? "flex-col" : "flex-row gap-4",
        className
      )}
    >
      <motion.div
        className={cn(
          sizeClasses[size],
          "relative rounded-full overflow-hidden",
          glowEffect && "after:content-[''] after:absolute after:inset-0 after:bg-primary/20 after:rounded-full after:blur-md after:z-0"
        )}
        style={{
          rotate: rotateValue,
          scale: animated ? scaleValue : 1,
          opacity: animated ? opacity : 1
        }}
        whileHover={{ scale: 1.05, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <img 
          src={keralaClubLogo} 
          alt="The Kerala Club Logo" 
          className="w-full h-full object-contain z-10 relative"
        />
      </motion.div>

      {showText && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={cn(
              textPosition === "below" ? "mt-4 text-center" : "",
              className
            )}
          >
            <h3 className={cn(
              "font-playfair text-xl font-semibold",
              className?.includes("text-white") ? "text-white" : "text-primary"
            )}>
              The Kerala Club
            </h3>
            <p className={cn(
              "font-montserrat text-sm",
              className?.includes("text-white") ? "text-white/80" : "text-muted-foreground"
            )}>
              Established 1932
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}