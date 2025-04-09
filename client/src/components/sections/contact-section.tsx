import { SectionDivider } from "@/components/ui/section-divider";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Printer } from "lucide-react";

// Extend the schema with validation rules
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-primary mb-3">Contact Us</h2>
          <SectionDivider className="mx-auto mb-8" />
          <p className="font-montserrat text-foreground max-w-4xl mx-auto">
            We welcome your inquiries and look forward to assisting you.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-muted p-8 rounded-lg shadow-lg h-full">
              <h3 className="font-playfair text-2xl text-primary mb-6">Get in Touch</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="Message subject" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary text-white font-montserrat font-semibold px-8 py-3 rounded border border-primary hover:bg-transparent hover:text-primary transition duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-primary p-8 rounded-lg shadow-lg text-white h-full">
              <h3 className="font-playfair text-2xl text-secondary mb-6">Club Information</h3>
              
              <div className="mb-8">
                <h4 className="font-cormorant text-xl mb-3">Address</h4>
                <p className="font-montserrat mb-1">42 Club Avenue, Race Course</p>
                <p className="font-montserrat mb-1">Coimbatore, Tamil Nadu 641018</p>
                <p className="font-montserrat">India</p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-cormorant text-xl mb-3">Contact Details</h4>
                <p className="font-montserrat mb-1 flex items-center">
                  <Phone className="text-secondary mr-3 h-4 w-4" /> +91 422 2223344
                </p>
                <p className="font-montserrat mb-1 flex items-center">
                  <Mail className="text-secondary mr-3 h-4 w-4" /> info@coimbatoregc.in
                </p>
                <p className="font-montserrat flex items-center">
                  <Printer className="text-secondary mr-3 h-4 w-4" /> +91 422 2223345
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="font-cormorant text-xl mb-3">Hours of Operation</h4>
                <p className="font-montserrat mb-1">
                  <span className="font-semibold">Club Facilities:</span> 6:00 AM - 10:00 PM, Daily
                </p>
                <p className="font-montserrat mb-1">
                  <span className="font-semibold">Administrative Office:</span> 9:00 AM - 6:00 PM, Mon-Sat
                </p>
                <p className="font-montserrat">
                  <span className="font-semibold">Restaurant:</span> 7:00 AM - 11:00 PM, Daily
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            <div className="mt-6 rounded-lg shadow-lg overflow-hidden h-64">
              {/* Google Maps iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.0102633342!2d76.90662786759316!3d11.011152788433307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1663662308271!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Club Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
