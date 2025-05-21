// Boutique imagery data for the different designs
// Using freely available fashion images with proper licensing

export const fashionImages = {
  // Design 1 - Luxe - Modern, clean, luxury fashion
  design1: {
    hero: {
      main: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200",
      secondary: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800"
    },
    showcase: [
      {
        id: 1,
        title: "Summer Collection",
        image: "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800",
        description: "Elegant and sophisticated pieces for the modern woman."
      },
      {
        id: 2,
        title: "Autumn Essentials",
        image: "https://images.unsplash.com/photo-1548549557-dbe9946621da?auto=format&fit=crop&w=800",
        description: "Timeless designs crafted from premium materials."
      },
      {
        id: 3,
        title: "Evening Wear",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800",
        description: "Sophisticated silhouettes for special occasions."
      }
    ],
    about: {
      image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=800",
      signature: "https://i.imgur.com/JLY2Zvl.png"
    }
  },
  
  // Design 2 - Atelier - Artistic, bohemian, crafted fashion
  design2: {
    hero: {
      main: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200",
      secondary: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800"
    },
    showcase: [
      {
        id: 1,
        title: "Handcrafted Collection",
        image: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=800",
        description: "Artisanal pieces inspired by global cultures."
      },
      {
        id: 2,
        title: "Sustainable Series",
        image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800",
        description: "Eco-conscious fashion with artistic flair."
      },
      {
        id: 3,
        title: "Limited Editions",
        image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=800",
        description: "One-of-a-kind pieces for the discerning collector."
      }
    ],
    about: {
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800",
      signature: "https://i.imgur.com/JLY2Zvl.png"
    }
  },
  
  // Design 3 - Maison - Classic, elegant, high-end fashion
  design3: {
    hero: {
      main: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200",
      secondary: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800"
    },
    showcase: [
      {
        id: 1,
        title: "Heritage Collection",
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800",
        description: "Timeless pieces crafted with traditional techniques."
      },
      {
        id: 2,
        title: "Parisian Edit",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800",
        description: "Elegant silhouettes inspired by French couture."
      },
      {
        id: 3,
        title: "Seasonal Staples",
        image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800",
        description: "Essential pieces for the sophisticated wardrobe."
      }
    ],
    about: {
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800",
      signature: "https://i.imgur.com/JLY2Zvl.png"
    }
  },
  
  // Design 4 - Opulent - Bold, avant-garde, luxury fashion
  design4: {
    hero: {
      main: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=1200",
      secondary: "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=800"
    },
    showcase: [
      {
        id: 1,
        title: "Avant-Garde Series",
        image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800",
        description: "Boundary-pushing designs for the fashion forward."
      },
      {
        id: 2,
        title: "Statement Pieces",
        image: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&w=800",
        description: "Bold silhouettes that command attention."
      },
      {
        id: 3,
        title: "Couture Collection",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800", 
        description: "Exquisite pieces handcrafted with meticulous detail."
      }
    ],
    about: {
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800",
      signature: "https://i.imgur.com/JLY2Zvl.png"
    }
  }
};

// Shared imagery for all designs (fallback/common elements)
export const sharedImages = {
  logo: "https://i.imgur.com/JLY2Zvl.png",
  contact: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&w=800",
  footer: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200",
  team: [
    {
      id: 1,
      name: "Sophie Laurent",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Head Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400"
    },
    {
      id: 3,
      name: "Ava Williams",
      role: "Fashion Stylist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400"
    }
  ]
};