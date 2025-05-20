import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Luxury boutique server is running' });
  });

  // Get the list of designs
  app.get('/api/designs', (req, res) => {
    const designs = [
      { id: 1, name: 'LUXE', description: 'Luxury Redefined' },
      { id: 2, name: 'ATELIER', description: 'Luxury Craftsmanship' },
      { id: 3, name: 'MAISON', description: 'Timeless Elegance' },
      { id: 4, name: 'OPULENT', description: 'Distinctive Luxury' }
    ];
    
    res.json(designs);
  });

  // Mock API to send a contact form
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email and message' 
      });
    }
    
    // In a real implementation, this would send an email or save to a database
    res.json({ 
      success: true, 
      message: 'Your message has been received. Our team will contact you shortly.' 
    });
  });

  // Mock API to subscribe to newsletter
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide an email address' 
      });
    }
    
    // In a real implementation, this would add to a newsletter service
    res.json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
