import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { useDesign } from "./contexts/DesignContext";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Design1 from "./pages/Design1";
import Design2 from "./pages/Design2";
import Design3 from "./pages/Design3";
import Design4 from "./pages/Design4";
import NotFound from "@/pages/not-found";
import { initSmoothScroll } from "./lib/smooth-scroll";

function App() {
  const { designNumber } = useDesign();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    // Initialize smooth scrolling
    const cleanup = initSmoothScroll();
    
    // Add body class based on current design
    document.body.classList.remove("design1", "design2", "design3", "design4");
    document.body.classList.add(`design${designNumber}`);
    
    console.log("Design updated to:", designNumber);
    
    return () => {
      cleanup();
    };
  }, [designNumber]);

  useEffect(() => {
    // Redirect to the current design homepage if at root
    if (location === "/") {
      console.log("Redirecting to design:", designNumber);
      setLocation(`/design${designNumber}`);
    }
  }, [location, designNumber, setLocation]);

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen">
        <Switch>
          <Route path="/design1" component={Design1} />
          <Route path="/design2" component={Design2} />
          <Route path="/design3" component={Design3} />
          <Route path="/design4" component={Design4} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
