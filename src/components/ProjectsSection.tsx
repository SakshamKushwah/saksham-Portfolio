
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Grocery Delivery Platform",
      description: "A fully-featured Grocery Delivery Platform with product listings, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://greencart-sk06.vercel.app/",
      repoLink: "https://github.com/SakshamKushwah/greencart"
    },

    // hangman game
    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    //   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    //   tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    //   liveLink: "https://project2.com",
    //   repoLink: "https://github.com/username/project2"
    // },
    {
      title: " AI-Powered Finance Tracke ",
      description: "Developed a full-stack web platform enabling users to track multiple bank account incomes and expenses, harnessing AI (Gemini) for enhanced financial insights",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["React", "Next.js", "Tailwind CSS, ", "Shadcn UI" ,"Inngest " ,"Arcjet"],
      liveLink: "https://welth-9edp.vercel.app/",
      repoLink: "https://github.com/SakshamKushwah/greencart"
    },

    // -----rozarpay clone
    // {
    //   title: "Social Media Platform",
    //   description: "A social networking platform with user profiles, posts, comments, and real-time notifications.",
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    //   tags: ["React", "GraphQL", "Node.js", "Socket.io"],
    //   liveLink: "https://project4.com",
    //   repoLink: "https://github.com/username/project4"
    // }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">My Projects</h2>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Here are some of my recent projects. Each one was built to solve a specific problem and showcases different skills and technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-none bg-card hover:shadow-xl transition-all duration-300 group">
            <div className="h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <CardHeader>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button asChild variant="outline" size="sm">
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button asChild size="sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com/SakshamKushwah" target="_blank" rel="noopener noreferrer">
            View More Projects <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
