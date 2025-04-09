import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import About from "@/pages/about";
import OfficeBearers from "@/pages/office-bearers";
import Facilities from "@/pages/facilities";
import Celebrations from "@/pages/celebrations";
import AffiliateClubs from "@/pages/affiliate-clubs";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useEffect } from "react";

// Add FontAwesome CSS
function FontAwesomeScript() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/office-bearers" component={OfficeBearers} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/celebrations" component={Celebrations} />
      <Route path="/affiliate-clubs" component={AffiliateClubs} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <FontAwesomeScript />
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
