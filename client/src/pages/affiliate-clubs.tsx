import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { AffiliateClubsSection } from "@/components/sections/affiliate-clubs-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { ExternalLink, MapPin } from "lucide-react";

// Additional affiliated clubs
const moreAffiliateClubs = [
  {
    name: "Royal Calcutta Golf Club",
    location: "Kolkata, India",
    description: "The oldest golf club outside Great Britain, founded in 1829.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    website: "#"
  },
  {
    name: "The Pacific Club",
    location: "Honolulu, Hawaii",
    description: "A prestigious club with panoramic ocean views and exceptional facilities.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    website: "#"
  },
  {
    name: "Tokyo American Club",
    location: "Tokyo, Japan",
    description: "A world-class private club offering diverse facilities in the heart of Tokyo.",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    website: "#"
  },
  {
    name: "The Hurlingham Club",
    location: "London, UK",
    description: "A green oasis of tradition and international renown offering a haven of peace.",
    image: "https://images.unsplash.com/photo-1572371990943-4b858700c25d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
    website: "#"
  }
];

export default function AffiliateClubs() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Affiliate Clubs"
        subtitle="Enjoy reciprocal privileges at prestigious clubs around the world"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <AffiliateClubsSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">More Partner Clubs</h2>
              <SectionDivider className="mx-auto mb-8" />
              <p className="font-montserrat text-foreground max-w-4xl mx-auto">
                Expand your travels with access to these additional prestigious clubs worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {moreAffiliateClubs.map((club, index) => (
                <div key={index} className="flex bg-muted rounded-lg shadow-lg overflow-hidden">
                  <div className="w-1/3 flex items-center justify-center p-6">
                    <img 
                      src={club.image}
                      alt={club.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="w-2/3 p-6">
                    <h3 className="font-playfair text-xl text-primary mb-1">{club.name}</h3>
                    <div className="flex items-center text-secondary mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <p className="font-montserrat text-sm">{club.location}</p>
                    </div>
                    <p className="font-montserrat text-foreground text-sm mb-4">{club.description}</p>
                    <a 
                      href={club.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary font-montserrat font-semibold border-b-2 border-secondary hover:text-secondary transition-colors"
                    >
                      Visit website <ExternalLink className="inline h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Reciprocity Benefits</h2>
              <SectionDivider className="mx-auto mb-8" />
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-playfair text-2xl text-primary mb-4">Membership Privileges</h3>
                  <p className="font-montserrat text-foreground mb-4">
                    As a member of Coimbatore Gentlemen's Club, you enjoy reciprocal privileges at our affiliated clubs worldwide. This exclusive benefit extends your club experience beyond borders, offering access to premier facilities during your travels.
                  </p>
                  <p className="font-montserrat text-foreground">
                    Whether you're traveling for business or leisure, these reciprocal arrangements provide familiar comforts and prestigious environments wherever you go.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-playfair text-2xl text-primary mb-4">Using Your Privileges</h3>
                  <ul className="space-y-3 font-montserrat text-foreground">
                    <li className="flex items-start">
                      <span className="bg-secondary text-primary rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                      <p>Contact our club secretary at least 14 days before your planned visit to request a letter of introduction.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary text-primary rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                      <p>Present your membership card and letter of introduction upon arrival at the affiliate club.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary text-primary rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                      <p>Respect the host club's dress code, rules, and regulations during your visit.</p>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-secondary text-primary rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5">4</span>
                      <p>Settle all bills directly with the affiliate club before departure.</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-cormorant text-xl text-primary mb-3">Important Notes</h4>
                <ul className="font-montserrat text-foreground text-sm space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-secondary mr-2 mt-1"></i>
                    <p>Usage frequency at each affiliate club may be limited to a certain number of visits per year.</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-secondary mr-2 mt-1"></i>
                    <p>Some clubs may have blackout dates or restricted access during special events or peak seasons.</p>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-info-circle text-secondary mr-2 mt-1"></i>
                    <p>Reciprocal privileges are subject to review and may change periodically.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="inline-block bg-primary text-white font-montserrat font-semibold px-8 py-3 rounded border border-primary hover:bg-transparent hover:text-primary transition duration-300">
                Download Affiliate Clubs Directory
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
