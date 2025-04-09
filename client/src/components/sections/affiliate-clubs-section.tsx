import { SectionDivider } from "@/components/ui/section-divider";
import { affiliateClubs } from "@/lib/constants";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function AffiliateClubsSection() {
  return (
    <section id="affiliate-clubs" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Affiliate Clubs</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            Our members enjoy reciprocal privileges at these distinguished clubs around the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {affiliateClubs.map((club, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl">
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img 
                  src={club.image}
                  alt={club.name}
                  className="max-w-full max-h-full"
                />
              </div>
              <h3 className="font-playfair text-xl text-primary mb-2">{club.name}</h3>
              <p className="font-montserrat text-foreground text-sm mb-4">{club.location}</p>
              <a 
                href={club.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-auto inline-block text-primary font-montserrat font-semibold border-b-2 border-secondary hover:text-secondary transition-colors"
              >
                Visit website <ExternalLink className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/affiliate-clubs">
            <a className="inline-block bg-primary text-white font-montserrat font-semibold px-8 py-3 rounded border border-primary hover:bg-transparent hover:text-primary transition duration-300">
              View All Affiliates
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
