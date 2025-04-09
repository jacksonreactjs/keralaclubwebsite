import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { HistorySection } from "@/components/sections/history-section";
import { SectionDivider } from "@/components/ui/section-divider";

export default function History() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Our Rich History"
        subtitle="Tracing the legacy of Coimbatore Gentlemen's Club through the decades"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <HistorySection />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Notable Milestones</h2>
              <SectionDivider className="mx-auto mb-8" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-muted p-6 rounded-lg shadow-md text-center">
                <div className="font-playfair text-4xl text-secondary mb-2">1925</div>
                <h3 className="font-cormorant text-xl text-primary mb-4">Foundation</h3>
                <p className="font-montserrat text-foreground text-sm">Establishment of the club by prominent civil servants and businessmen of Coimbatore.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg shadow-md text-center">
                <div className="font-playfair text-4xl text-secondary mb-2">1935</div>
                <h3 className="font-cormorant text-xl text-primary mb-4">First Expansion</h3>
                <p className="font-montserrat text-foreground text-sm">Addition of sports facilities including tennis courts and a swimming pool.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg shadow-md text-center">
                <div className="font-playfair text-4xl text-secondary mb-2">1962</div>
                <h3 className="font-cormorant text-xl text-primary mb-4">New Building</h3>
                <p className="font-montserrat text-foreground text-sm">Construction of the current main building with enhanced amenities.</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg shadow-md text-center">
                <div className="font-playfair text-4xl text-secondary mb-2">2015</div>
                <h3 className="font-cormorant text-xl text-primary mb-4">Modernization</h3>
                <p className="font-montserrat text-foreground text-sm">Comprehensive renovation maintaining historical character while adding modern facilities.</p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-playfair text-2xl text-primary mb-4">Historical Significance</h3>
              <p className="font-montserrat text-foreground mb-4">
                Throughout its illustrious history, the Coimbatore Gentlemen's Club has been a witness to significant historical events and has hosted numerous distinguished personalities. From British officials during the colonial era to Indian freedom fighters and modern-day leaders, the club's guest book features signatures of individuals who have shaped the nation's history.
              </p>
              <p className="font-montserrat text-foreground">
                The club has maintained meticulous records, preserving photographs, documents, and artifacts that chronicle not only its own history but also reflect the social, cultural, and political evolution of Coimbatore and the broader Tamil Nadu region. These archives serve as a valuable resource for historians and researchers studying the region's development.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
