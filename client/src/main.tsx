import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { DesignProvider } from "./contexts/DesignContext";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DesignProvider>
        <App />
        <Toaster />
      </DesignProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
