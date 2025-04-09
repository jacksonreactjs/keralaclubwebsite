import { Link } from "wouter";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  height?: string;
}

export function HeroSection({
  title = "The Kerala Club",
  subtitle = "Tradition, Excellence, and Distinguished Fellowship Since 1932",
  buttonText = "Discover Our Legacy",
  buttonLink = "/about",
  backgroundImage = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
  height = "h-[70vh]"
}: HeroSectionProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Club Exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4">{title}</h1>
        <p className="font-cormorant text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        {buttonText && (
          <Link href={buttonLink} className="inline-block bg-secondary text-primary font-montserrat font-semibold px-8 py-3 rounded border border-secondary hover:bg-transparent hover:text-secondary transition duration-300">
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
