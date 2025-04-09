import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";
import { log } from "./vite";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using the Zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      // const message = { id: 1, ...validatedData };
      res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: message
      });
    } catch (error) {      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      } else {
        // Handle other errors
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your message"
        });
      }
    }
  });

  // API endpoint to get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while fetching messages"
      });
    }
  });
  
  // Download ZIP file endpoint
  app.get("/download-zip", (req, res) => {
    const zipPath = path.resolve("./kerala-club-website.zip");
    
    if (fs.existsSync(zipPath)) {
      res.setHeader('Content-Disposition', 'attachment; filename=kerala-club-website.zip');
      res.setHeader('Content-Type', 'application/zip');
      const fileStream = fs.createReadStream(zipPath);
      fileStream.pipe(res);
    } else {
      res.status(404).send('ZIP file not found');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
