
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Laptop } from 'lucide-react';

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Nextjs", "REST API"]
    },
    {
      title: "Tools & Platforms",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      skills: ["Git", "Postman", "AWS", "Supabase", "Vercel",   "cursor"]
    },
    {
      title: "Other Skills",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["Agile/Scrum", "UI/UX Design", "Testing", "Performance Optimization", "SEO", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="section-container bg-secondary/30">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-none bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
