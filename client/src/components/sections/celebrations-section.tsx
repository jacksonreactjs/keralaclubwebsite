import { SectionDivider } from "@/components/ui/section-divider";
import { celebrations } from "@/lib/constants";
import { Link } from "wouter";

export function CelebrationsSection() {
  // Filter featured celebrations for the main showcase
  const featuredCelebrations = celebrations.filter(cel => cel.featured);
  const otherCelebrations = celebrations.filter(cel => !cel.featured);

  return (
    <section id="celebrations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Celebrations</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            Discover the memorable events and celebrations hosted at the Coimbatore Gentlemen's Club.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCelebrations.length > 0 && (
            <div className="col-span-1 md:col-span-2 h-96 overflow-hidden rounded-lg shadow-lg relative group">
              <img 
                src={featuredCelebrations[0].image}
                alt={featuredCelebrations[0].title}
                className="w-full h-full object-cover gallery-img"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-6">
                  <h3 className="font-playfair text-2xl text-white mb-2">{featuredCelebrations[0].title}</h3>
                  <p className="font-montserrat text-white/80">{featuredCelebrations[0].description}</p>
                </div>
              </div>
            </div>
          )}
          
          {featuredCelebrations.length > 1 && (
            <div className="col-span-1 h-96 overflow-hidden rounded-lg shadow-lg relative group">
              <img 
                src={featuredCelebrations[1].image}
                alt={featuredCelebrations[1].title}
                className="w-full h-full object-cover gallery-img"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-6">
                  <h3 className="font-playfair text-2xl text-white mb-2">{featuredCelebrations[1].title}</h3>
                  <p className="font-montserrat text-white/80">{featuredCelebrations[1].description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCelebrations.map((celebration, index) => (
            <div key={index} className="col-span-1 h-72 overflow-hidden rounded-lg shadow-lg relative group">
              <img 
                src={celebration.image}
                alt={celebration.title}
                className="w-full h-full object-cover gallery-img"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center px-6">
                  <h3 className="font-playfair text-2xl text-white mb-2">{celebration.title}</h3>
                  <p className="font-montserrat text-white/80">{celebration.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/celebrations">
            <a className="inline-block bg-primary text-white font-montserrat font-semibold px-8 py-3 rounded border border-primary hover:bg-transparent hover:text-primary transition duration-300">
              View All Events
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
