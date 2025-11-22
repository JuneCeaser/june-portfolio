import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const education = [
  {
    title: "Sri Lanka Institute Of Information Technology [SLIIT]",
    period: "2022 — Present",
    description: "BSc (Hons) in Information Technology Specializing in Information Technology",
  },
  {
    title: "C.W.W.Kannangara College Colombo 08",
    period: "G.C.E.Advanced Level - 2020",
    description: "G.C.E.A/L in Mathematics Stream",
  },
];

const experience = [
  {
    title: "Intern Mobile Application Developer",
    company: "Mainframe Pvt Ltd",
    period: "2025 — Present",
    description: "Designing, developing, and maintaining mobile applications. Collaborating with cross-functional teams to deliver high-quality, user-centric solutions. Troubleshooting, debugging, and optimizing applications for seamless performance across platforms.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                  <h4 className="text-xl font-semibold mb-2">{edu.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-foreground/70">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
