import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "React Native",
    issuer: "Coursera",
    date: "Jan 25, 2025",
    grade: "88.31%",
    category: "Framework",
    link: "https://coursera.org/share/71135949eb213bc2b69d901376ce14de",
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary hover:text-white">
                  {cert.category}
                </Badge>
                
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-foreground/70 mb-2">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground mb-2">{cert.date}</p>
                <p className="text-primary font-medium">Grade: {cert.grade}</p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
