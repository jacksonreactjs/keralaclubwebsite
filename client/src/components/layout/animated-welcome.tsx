import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Link } from "wouter";
import { LogoDisplay } from "@/components/ui/logo-display";

interface AnimatedWelcomeProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function AnimatedWelcome({
  title = "The Kerala Club",
  subtitle = "Tradition, Excellence, and Distinguished Fellowship Since 1932",
  buttonText = "Discover Our Legacy",
  buttonLink = "/about",
}: AnimatedWelcomeProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  // Handle scroll effect for subtle animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // We don't need to do anything here as framer-motion handles the animations
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Parallax Layers */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        {/* Base gradient */}
        <div className="w-full h-full bg-gradient-to-b from-primary/90 to-primary/60"></div>
        
        {/* Main background image - moves slightly slower */}
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-70"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
        />
        
        {/* Decorative pattern overlay - moves faster */}
        <motion.div 
          className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/62f1af8a880c36509fa15c8d/630fea20358e6ff5dde0ead1_bg-pattern-light.webp')] bg-repeat opacity-10"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.1])
          }}
        />
        
        {/* Color overlay */}
        <div className="absolute inset-0 bg-primary/50"></div>
        
        {/* Radial gradient for vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/40"></div>
      </motion.div>

      {/* Central Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white"
        style={{ y: textY, opacity }}
      >
        {/* Animated Logo */}
        <motion.div
          style={{ scale: logoScale }}
          className="mb-6 relative"
        >
          <LogoDisplay 
            size="xl" 
            animated={false} 
            showText={false} 
            glowEffect={true} 
            className="text-white"
          />
        </motion.div>

        {/* Title with animation */}
        <motion.h1 
          className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle with animation */}
        <motion.p 
          className="font-cormorant text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* Button with animation */}
        {buttonText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href={buttonLink} 
              className="inline-block bg-white text-primary font-montserrat font-semibold px-8 py-3 rounded-lg border border-white hover:bg-transparent hover:text-white transition duration-300"
            >
              {buttonText}
            </Link>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm font-montserrat mb-2">Scroll Down</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}