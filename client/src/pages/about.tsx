import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { AboutSection } from "@/components/sections/about-section";

export default function About() {
  return (
    <>
      <Header />
      <HeroSection 
        title="About Us"
        subtitle="Discover the heritage and elegance of Coimbatore's premier Malayalam cultural club"
        buttonText=""
        height="h-[50vh]"
      />
      <main>
        <AboutSection />
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="font-playfair text-3xl text-primary mb-6">Our Community</h2>
                <p className="font-montserrat text-foreground mb-4">
                  The Kerala Club brings together a diverse community of Malayalam-speaking individuals from various fields. Our members include business leaders, professionals, academics, and cultural luminaries who contribute to preserving and celebrating the rich heritage of Kerala in Coimbatore.
                </p>
                <p className="font-montserrat text-foreground mb-4">
                  We foster an environment where meaningful connections are formed, ideas are exchanged, and lifelong friendships are cultivated. The club serves as a cultural nexus for networking, collaboration, and social engagement among Kerala natives and enthusiasts who value the Malayalam culture and traditions.
                </p>
              </div>
              <div>
                <h2 className="font-playfair text-3xl text-primary mb-6">Our Values</h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <i className="fas fa-trophy"></i>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-primary mb-1">Excellence</h3>
                      <p className="font-montserrat text-foreground text-sm">We uphold the highest standards in all aspects of our operations.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <i className="fas fa-handshake"></i>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-primary mb-1">Integrity</h3>
                      <p className="font-montserrat text-foreground text-sm">We conduct ourselves with honesty, transparency, and ethical principles.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <i className="fas fa-book"></i>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-primary mb-1">Tradition</h3>
                      <p className="font-montserrat text-foreground text-sm">We honor our heritage while embracing positive change and growth.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary">
                      <i className="fas fa-users"></i>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl text-primary mb-1">Fellowship</h3>
                      <p className="font-montserrat text-foreground text-sm">We celebrate camaraderie and cultivate meaningful relationships.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
