import { Link } from "wouter";
import { navigationLinks } from "@/lib/constants";
import { LogoDisplay } from "@/components/ui/logo-display";
import { Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            {/* Kerala Club logo */}
            <div className="bg-white/90 inline-block p-3 rounded-lg">
              <LogoDisplay 
                size="sm" 
                showText={false} 
                animated={false}
              />
            </div>
            <div className="mt-4">
              <h3 className="font-playfair text-xl mb-2">The Kerala Club</h3>
              <p className="font-montserrat text-sm text-white/80">Established 1932</p>
              <p className="font-montserrat text-sm text-white/80 mt-2">
                Race Course<br />
                Coimbatore - 641018<br />
                Tamil Nadu, India
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-cormorant text-white text-xl mb-4 border-b border-white/20 pb-2">Quick Links</h4>
            <ul className="font-montserrat space-y-2">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-cormorant text-white text-xl mb-4 border-b border-white/20 pb-2">More Information</h4>
            <ul className="font-montserrat space-y-2">
              {navigationLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="#"
                  className="hover:text-white/80 transition-colors"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-cormorant text-white text-xl mb-4 border-b border-white/20 pb-2">Newsletter</h4>
            <p className="font-montserrat text-sm text-white/80 mb-4">Subscribe to our newsletter for updates on club events and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white transition"
              />
              <button 
                type="submit" 
                className="bg-white text-primary px-4 rounded-r hover:bg-white/90 transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="h-px bg-white/20 w-full my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-montserrat text-sm text-white/80 mb-4 md:mb-0">
            &copy; {currentYear} The Kerala Club, Coimbatore. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
