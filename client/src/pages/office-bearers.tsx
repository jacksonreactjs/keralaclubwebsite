import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { OfficeBearersSection } from "@/components/sections/office-bearers-section";
import { SectionDivider } from "@/components/ui/section-divider";

// Additional committee members
const committeeMembers = [
  {
    name: "Mr. Anand Krishnan",
    position: "Treasurer",
    description: "A respected financial consultant with expertise in club management and fiscal responsibility.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Lakshmi Narayan",
    position: "Cultural Secretary",
    description: "A dedicated advocate for Tamil cultural heritage and performing arts within the club.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Mr. Saravanan Pillai",
    position: "Sports Committee Head",
    description: "A former state-level athlete who oversees all sporting activities and tournaments.",
    image: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Mrs. Deepa Kumar",
    position: "Event Coordinator",
    description: "An experienced event planner who manages the club's calendar of social and cultural events.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Mr. Thomas Mathew",
    position: "Membership Director",
    description: "Responsible for reviewing applications and maintaining the club's exclusive membership standards.",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dr. Sanjay Mehta",
    position: "Committee Member",
    description: "Brings extensive experience in public relations and community outreach initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  }
];

export default function OfficeBearers() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Office Bearers"
        subtitle="The distinguished individuals who lead our club with vision and dedication"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <OfficeBearersSection />
        
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Committee Members</h2>
              <SectionDivider className="mx-auto mb-8" />
              <p className="font-montserrat text-foreground max-w-4xl mx-auto">
                Our dedicated committee members work tirelessly to maintain the high standards and smooth operation of the club.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {committeeMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl text-primary mb-1">{member.name}</h3>
                    <p className="font-cormorant text-secondary text-xl mb-3">{member.position}</p>
                    <p className="font-montserrat text-foreground text-sm mb-4">{member.description}</p>
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
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Club Governance</h2>
              <SectionDivider className="mx-auto mb-8" />
            </div>
            
            <div className="bg-muted p-8 rounded-lg shadow-lg">
              <p className="font-montserrat text-foreground mb-6">
                The Coimbatore Gentlemen's Club is governed by a structured system that ensures effective management, transparency, and member representation. Office bearers and committee members are elected biennially by the club's general membership.
              </p>
              
              <h3 className="font-playfair text-2xl text-primary mb-4">Governance Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-cormorant text-xl text-primary mb-2">Executive Committee</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Comprised of the President, Vice President, Secretary, and Treasurer, this committee oversees day-to-day operations and strategic decisions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-cormorant text-xl text-primary mb-2">General Committee</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Includes all office bearers and elected committee members who manage specific aspects of club administration.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-cormorant text-xl text-primary mb-2">Sub-Committees</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Specialized groups responsible for areas such as membership, sports, cultural events, and facilities maintenance.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-cormorant text-xl text-primary mb-2">General Body</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    All club members participate in annual general meetings and have voting rights for electing the governing committees.
                  </p>
                </div>
              </div>
              
              <p className="font-montserrat text-foreground">
                This structured approach to governance ensures that the club maintains its prestigious standards while adapting to evolving member needs and contemporary challenges. The balance of continuity and renewal in leadership has been a key factor in the club's enduring success.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
