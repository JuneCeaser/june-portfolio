import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import finImage from "@/assets/fin.png";
import taskImage from "@/assets/task.png";
import portfolioImage from "@/assets/portfolio.png";

const projects = [
  {
    title: "Mobile Finance App",
    category: "Mobile Development",
    description: "Cross-platform finance tracking application built with React Native",
    image: finImage,
  },
  {
    title: "Task Management System",
    category: "Mobile Development",
    description: "Productivity app for iOS and Android with real-time sync",
    image: taskImage,
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    description: "Modern responsive portfolio with smooth animations",
    image: portfolioImage,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group cursor-pointer"
            >
              <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary hover:text-white">
                {project.category}
              </Badge>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/70">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
