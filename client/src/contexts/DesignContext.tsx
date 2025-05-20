import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";

// Define the context type
type DesignContextType = {
  designNumber: number;
  setDesignNumber: (number: number) => void;
  brandName: string;
};

// Set default values for the context
const defaultContext: DesignContextType = {
  designNumber: 1,
  setDesignNumber: () => {},
  brandName: "LUXE"
};

// Create the context with default values
const DesignContext = createContext<DesignContextType>(defaultContext);

const designBrandNames = {
  1: "LUXE",
  2: "ATELIER",
  3: "MAISON",
  4: "OPULENT"
};

type DesignProviderProps = {
  children: ReactNode;
};

export const DesignProvider = ({ children }: DesignProviderProps) => {
  const [designNumber, setDesignNumber] = useState(1);
  const [, setLocation] = useLocation();

  // Extract brand name based on design number
  const brandName = designBrandNames[designNumber as keyof typeof designBrandNames];

  useEffect(() => {
    // Update URL when design changes
    setLocation(`/design${designNumber}`);
  }, [designNumber, setLocation]);

  // Create the value object with the current state
  const value = {
    designNumber,
    setDesignNumber,
    brandName
  };

  return (
    <DesignContext.Provider value={value}>
      {children}
    </DesignContext.Provider>
  );
};

// Hook to use the design context
export const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  return context;
};
