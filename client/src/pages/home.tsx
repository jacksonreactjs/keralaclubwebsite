import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutSection } from "@/components/sections/about-section";
import { HistorySection } from "@/components/sections/history-section";
import { AnimatedWelcome } from "@/components/layout/animated-welcome";
import { useEffect } from "react";

export default function Home() {
  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <AnimatedWelcome />
        <div className="pt-10">
          <AboutSection />
          <HistorySection />
        </div>
      </main>
      <Footer />
    </>
  );
}
