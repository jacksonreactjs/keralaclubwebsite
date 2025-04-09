import { SectionDivider } from "@/components/ui/section-divider";
import { ParallaxImage } from "@/components/ui/parallax-image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl text-primary mb-3">About Us</h2>
            <SectionDivider className="mx-auto mb-8" />
            <p className="font-montserrat text-foreground max-w-4xl mx-auto">
              Founded on principles of excellence and camaraderie, The Kerala Club stands as a beacon of refined leisure and distinguished fellowship in Coimbatore since 1932.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <ScrollReveal className="md:w-1/2" direction="left" delay={0.2}>
            <div className="overflow-hidden rounded-lg shadow-lg h-[400px]">
              <ParallaxImage 
                src="https://images.unsplash.com/photo-1567089694629-60d6dcb2c295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Club Lounge" 
                className="w-full h-full"
                speed={0.15}
              />
            </div>
          </ScrollReveal>
          
          <div className="md:w-1/2">
            <ScrollReveal direction="right" delay={0.3}>
              <h3 className="font-playfair text-2xl text-primary mb-4">A Legacy of Excellence</h3>
              <p className="font-montserrat text-foreground mb-6">
                The Kerala Club has been a cornerstone of social and cultural life in Coimbatore for nearly a century. Our establishment brings together distinguished individuals from business, politics, arts, and academia.
              </p>
              <p className="font-montserrat text-foreground mb-6">
                We pride ourselves on maintaining the highest standards of service, fostering meaningful connections among members, and preserving traditions while embracing modern sensibilities.
              </p>
            </ScrollReveal>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollReveal className="flex-1" direction="up" delay={0.4}>
                <div className="border-l-4 border-secondary pl-4 h-full">
                  <h4 className="font-cormorant text-xl text-primary">Our Vision</h4>
                  <p className="font-montserrat text-sm text-foreground">
                    To remain the premier club in South India, renowned for excellence and tradition.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal className="flex-1" direction="up" delay={0.5}>
                <div className="border-l-4 border-destructive pl-4 h-full">
                  <h4 className="font-cormorant text-xl text-primary">Our Mission</h4>
                  <p className="font-montserrat text-sm text-foreground">
                    To provide an exclusive sanctuary where members forge lasting connections and enjoy exceptional amenities.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
