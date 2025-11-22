import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      
      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up space-y-6">
          <div className="space-y-2">
            <p className="text-primary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              June Ceaser
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
              Mobile App Developer
            </h2>
          </div>
          
          <p className="text-foreground/80 text-lg leading-relaxed max-w-lg">
            BSc (Hons) IT student at SLIIT, specializing in React Native and full-stack MERN development. 
            Currently building cross-platform mobile experiences at Mainframe Pvt Ltd.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('public/cv.pdf', '_blank')}
            >
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/JuneCeaser" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/juneceaser-b0012b318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:jcdsoysa@gmail.com"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+94761149756"
              className="p-3 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-glow-pulse" />
            <img 
              src={profileImage} 
              alt="June Ceaser" 
              className="relative rounded-3xl shadow-card max-w-md w-full object-cover animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
