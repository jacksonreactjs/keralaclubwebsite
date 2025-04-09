import { SectionDivider } from "@/components/ui/section-divider";
import { facilities } from "@/lib/constants";
import { Link } from "wouter";
import { Check } from "lucide-react";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Our Facilities</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            Experience the finest amenities and services crafted for the distinguished gentleman.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl text-primary mb-3">{facility.title}</h3>
                <p className="font-montserrat text-foreground mb-4">{facility.description}</p>
                <ul className="font-montserrat text-foreground text-sm mb-4 space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/facilities#${facility.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <a className="inline-block text-primary font-montserrat font-semibold border-b-2 border-secondary hover:text-secondary transition-colors">
                    Learn more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
