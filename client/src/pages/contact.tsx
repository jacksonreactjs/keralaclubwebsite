import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SectionDivider } from "@/components/ui/section-divider";

export default function Contact() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Contact Us"
        subtitle="We welcome your inquiries and look forward to serving you"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <ContactSection />
        
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Frequently Asked Questions</h2>
              <SectionDivider className="mx-auto mb-8" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl text-primary mb-3">How can I become a member?</h3>
                <p className="font-montserrat text-foreground text-sm">
                  Membership to the Coimbatore Gentlemen's Club is by invitation only. Current members may nominate candidates, who then undergo a review process by the Membership Committee. For more information, please contact our Membership Office.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl text-primary mb-3">Are guests allowed at the club?</h3>
                <p className="font-montserrat text-foreground text-sm">
                  Members may bring guests to enjoy club facilities. Guests must be accompanied by their sponsoring member and adhere to club rules. There are limitations on how frequently the same guest may visit within a specified period.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl text-primary mb-3">What is the dress code?</h3>
                <p className="font-montserrat text-foreground text-sm">
                  The club maintains a smart casual dress code in most areas, with more formal attire required in the main dining room during evening hours. Detailed dress regulations are available in the member handbook or from reception.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl text-primary mb-3">Can I host private events at the club?</h3>
                <p className="font-montserrat text-foreground text-sm">
                  Yes, members can reserve spaces for private functions. Our events team will assist with planning and arrangements. Advance booking is recommended, especially for weekend dates or during peak seasons.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <button className="inline-block bg-secondary text-primary font-montserrat font-semibold px-8 py-3 rounded border border-secondary hover:bg-transparent hover:text-primary transition duration-300">
                View All FAQs
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
