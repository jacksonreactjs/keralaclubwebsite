import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/layout/hero-section";
import { CelebrationsSection } from "@/components/sections/celebrations-section";
import { SectionDivider } from "@/components/ui/section-divider";
import { celebrations } from "@/lib/constants";
import { Calendar } from "lucide-react";

// Additional upcoming events
const upcomingEvents = [
  {
    title: "Diwali Celebration",
    date: "November 12, 2023",
    description: "Annual festival of lights celebration with traditional décor, music, and cuisine.",
    image: "https://images.unsplash.com/photo-1574241298650-7b5be982c70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Christmas Ball",
    date: "December 24, 2023",
    description: "Elegant evening featuring a gourmet dinner, live music, and dancing.",
    image: "https://images.unsplash.com/photo-1543934638-bd2e138516f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "New Year's Eve Gala",
    date: "December 31, 2023",
    description: "Ring in the new year with an unforgettable night of celebration and entertainment.",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Celebrations() {
  return (
    <>
      <Header />
      <HeroSection 
        title="Celebrations & Events"
        subtitle="Experience the club's vibrant social calendar and memorable gatherings"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
        height="h-[50vh]"
      />
      <main>
        <CelebrationsSection />
        
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Upcoming Events</h2>
              <SectionDivider className="mx-auto mb-8" />
              <p className="font-montserrat text-foreground max-w-4xl mx-auto">
                Mark your calendars for these special upcoming celebrations at the club.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-secondary mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <p className="font-cormorant">{event.date}</p>
                    </div>
                    <h3 className="font-playfair text-2xl text-primary mb-2">{event.title}</h3>
                    <p className="font-montserrat text-foreground text-sm mb-4">{event.description}</p>
                    <button className="text-primary font-montserrat font-semibold border-b-2 border-secondary hover:text-secondary transition-colors">
                      More details <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl text-primary mb-3">Annual Traditions</h2>
              <SectionDivider className="mx-auto mb-8" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-muted p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-2xl text-primary mb-4">Club Day Celebrations</h3>
                <p className="font-montserrat text-foreground mb-4">
                  Held each year on April 15th to commemorate the founding of the club, this day features special programming including historical exhibitions, members' recognition, and a formal dinner. Past presidents are honored and new initiatives for the club are announced.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Club Day"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-2xl text-primary mb-4">Charity Gala</h3>
                <p className="font-montserrat text-foreground mb-4">
                  Our annual black-tie fundraising event supports local community initiatives. This prestigious evening includes auctions, performances by renowned artists, and networking opportunities with distinguished guests from across the region.
                </p>
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="Charity Gala"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-muted p-6 rounded-lg shadow-md">
              <h3 className="font-playfair text-2xl text-primary mb-4">Hosting Private Events</h3>
              <p className="font-montserrat text-foreground mb-6">
                Members can reserve club facilities for private celebrations, business functions, and special occasions. Our event coordination team provides comprehensive support to ensure memorable experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-cormorant text-xl text-primary mb-2">Weddings</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Our elegant venues and gardens provide a distinguished setting for wedding ceremonies and receptions.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-cormorant text-xl text-primary mb-2">Corporate Events</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Well-equipped meeting spaces, catering, and technical support for business functions.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-cormorant text-xl text-primary mb-2">Personal Milestones</h4>
                  <p className="font-montserrat text-foreground text-sm">
                    Birthdays, anniversaries, and retirement celebrations with customized arrangements.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="inline-block bg-secondary text-primary font-montserrat font-semibold px-8 py-3 rounded border border-secondary hover:bg-transparent hover:text-primary transition duration-300">
                  Enquire About Event Hosting
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
