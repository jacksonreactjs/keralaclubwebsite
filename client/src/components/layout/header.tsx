import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { navigationLinks } from "@/lib/constants";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { LogoDisplay } from "@/components/ui/logo-display";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full ${scrolled ? "bg-white shadow-md" : "bg-white"} text-primary fixed top-0 left-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Kerala Club logo with LogoDisplay component */}
            <LogoDisplay 
              size="sm" 
              showText={true} 
              animated={false} 
              textPosition="right"
            />
          </Link>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-montserrat">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className={`nav-link ${location === link.href ? "text-primary font-semibold" : "text-primary/80 hover:text-primary"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-primary p-1 rounded-md hover:bg-primary/5 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`px-4 py-3 bg-white shadow-inner md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="font-montserrat space-y-4">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`block py-2 border-b border-primary/10 ${location === link.href ? "text-primary font-semibold" : "text-primary/80"}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
