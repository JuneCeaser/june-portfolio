import { Github, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/70 text-sm">
            © 2025 June Ceaser. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://web.facebook.com/JuneCeaser05/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/JuneCeaser" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juneceaser-b0012b318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
