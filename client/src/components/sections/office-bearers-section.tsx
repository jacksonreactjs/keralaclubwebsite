import { SectionDivider } from "@/components/ui/section-divider";
import { officeBearers } from "@/lib/constants";
import { Link } from "wouter";

export function OfficeBearersSection() {
  return (
    <section id="office-bearers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Office Bearers</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            Meet the distinguished individuals who lead the Coimbatore Gentlemen's Club with dedication and vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeBearers.map((bearer, index) => (
            <div key={index} className="bg-muted rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="h-72 overflow-hidden">
                <img 
                  src={bearer.image}
                  alt={bearer.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-primary mb-1">{bearer.name}</h3>
                <p className="font-cormorant text-secondary text-xl mb-3">{bearer.position}</p>
                <p className="font-montserrat text-foreground text-sm mb-4">{bearer.description}</p>
                <div className="flex justify-start space-x-3 text-primary">
                  <a href="#" className="hover:text-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="hover:text-secondary transition-colors">
                    <i className="far fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/office-bearers">
            <a className="inline-block bg-primary text-white font-montserrat font-semibold px-8 py-3 rounded border border-primary hover:bg-transparent hover:text-primary transition duration-300">
              View All Committee Members
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
