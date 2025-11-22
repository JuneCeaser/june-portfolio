import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Camera, Palette } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Modern and high-quality design made at a professional level.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Professional development of applications for iOS and Android.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "High-quality photos of any category at a professional level.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 bg-card border-border shadow-card">
            <p className="text-foreground/80 text-lg leading-relaxed">
              I'm a BSc (Hons) in Information Technology (Special) student at SLIIT, specializing in mobile application 
              development with hands-on experience in React Native and full-stack MERN development. As a Mobile Application 
              Developer Intern at Mainframe Pvt Ltd, I design and build cross-platform mobile apps that deliver smooth, 
              engaging user experiences. I work closely with teams to implement new features, debug issues, and optimize 
              app performance for both Android and iOS platforms. I'm passionate about crafting scalable, high-quality 
              mobile solutions and continuously improving my skills through real-world projects and problem-solving.
            </p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
