import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { FacilitiesSection } from "@/components/sections/facilities-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { facilities } from "@/lib/constants";
import { Check } from "lucide-react";
import { useEffect } from "react";

export default function Facilities() {
  // Scroll to specific facility if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <HeroSection 
        title="Our Facilities"
        subtitle="Experience world-class amenities designed for comfort, leisure, and refined enjoyment"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <FacilitiesSection />
        
        {facilities.map((facility, index) => (
          <section 
            id={facility.title.toLowerCase().replace(/\s+/g, '-')} 
            key={index} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-muted'}`}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl text-primary mb-3">{facility.title}</h2>
                <SectionDivider className="mx-auto mb-8" />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'order-2' : ''}`}>
                  <img 
                    src={facility.image}
                    alt={facility.title}
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className={`md:w-1/2 ${index % 2 === 1 ? 'order-1' : ''}`}>
                  <p className="font-montserrat text-foreground mb-6">
                    {facility.description}
                  </p>
                  
                  <h3 className="font-playfair text-2xl text-primary mb-4">Features & Amenities</h3>
                  <ul className="font-montserrat text-foreground mb-6 space-y-2">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {facility.title === "Fitness Centre" && (
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-cormorant text-xl text-primary mb-3">Membership Options</h4>
                      <p className="font-montserrat text-foreground text-sm mb-2">
                        Our fitness center offers flexible usage options:
                      </p>
                      <ul className="font-montserrat text-foreground text-sm space-y-1">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-secondary mr-2" />
                          Included with full club membership
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-secondary mr-2" />
                          Personal trainer sessions available at additional cost
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-secondary mr-2" />
                          Guest passes for members' family and friends
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {facility.title === "Suite Rooms" && (
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-cormorant text-xl text-primary mb-3">Booking Information</h4>
                      <p className="font-montserrat text-foreground text-sm mb-2">
                        Room reservations can be made up to 3 months in advance.
                      </p>
                      <p className="font-montserrat text-foreground text-sm">
                        Contact the reception desk at +91 422 2223344 or email reservations@coimbatoregc.in for availability and rates.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
