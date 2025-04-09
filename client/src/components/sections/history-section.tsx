import { SectionDivider } from "@/components/ui/section-divider";
import { historyTimeline } from "@/lib/constants";

export function HistorySection() {
  return (
    <section id="history" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Our Rich History</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            Walk through the storied past of Coimbatore Gentlemen's Club, from its founding days to its present glory.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/30"></div>
          
          {/* Timeline Items */}
          {historyTimeline.map((item, index) => (
            <div key={index} className={`mb-12 md:mb-0 relative ${index !== 0 ? 'md:mt-32' : ''}`}>
              <div className="flex flex-col md:flex-row items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-white p-6 rounded-lg shadow-md md:ml-auto md:mr-0 max-w-md">
                        <h3 className="font-playfair text-2xl text-primary mb-2">{item.year} - {item.title}</h3>
                        <p className="font-montserrat text-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                      <img 
                        src={item.image}
                        alt={`${item.title} Era`}
                        className="rounded-lg shadow-md md:ml-0 md:mr-auto max-w-md h-64 object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 order-2 md:order-1">
                      <img 
                        src={item.image}
                        alt={`${item.title} Era`}
                        className="rounded-lg shadow-md md:ml-auto md:mr-0 max-w-md h-64 object-cover"
                      />
                    </div>
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="md:w-1/2 md:pl-12 order-1 md:order-2 mb-6 md:mb-0">
                      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
                        <h3 className="font-playfair text-2xl text-primary mb-2">{item.year} - {item.title}</h3>
                        <p className="font-montserrat text-foreground">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
