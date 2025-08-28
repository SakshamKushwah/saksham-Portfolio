
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Saksham Kushwah
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
                I build things for the web.
              </h2>
            </div>

            <p className="text-muted-foreground max-w-lg text-lg">
              I'm a Full-Stack developer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button asChild size="lg">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a 
                href="https://github.com/SakshamKushwah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="www.linkedin.com/in/saksham-kushwah-b40123332 " 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

       <div className="lg:col-span-5 animate-fade-in-right">
  <div className="relative">
    {/* Animated RGB glow */}
   <div className="absolute -inset-0.5 rounded-lg blur-lg opacity-70 animate-rgb-glow 
  bg-gradient-to-r from-red-500 via-blue-500 to-green-500 bg-[length:200%_200%]">
</div>


    {/* Card container */}
    <div className="relative bg-card rounded-lg shadow-2xl overflow-hidden border border-white/10">
      <div className="p-6">
        <code className="block text-sm md:text-base font-mono whitespace-pre text-muted-foreground overflow-x-auto">
          <span className="text-blue-400">const</span>{" "}
          <span className="text-green-400">developer</span> = {"{"}
          <br />{"  "}name:{" "}
          <span className="text-yellow-300">'Saksham Kushwah'</span>,
          <br />{"  "}title:{" "}
          <span className="text-yellow-300">'Full-Stack Developer'</span>,
          <br />{"  "}skills: [
          <span className="text-yellow-300">'React'</span>,{" "}
          <span className="text-yellow-300">'Node.js'</span>,{" "}
          <span className="text-yellow-300">'Tailwind'</span>,{" "}
          <span className="text-yellow-300">'Next.js'</span>,{" "}
          <span className="text-yellow-300">'etc'</span>],
          <br />{"  "}loves:{" "}
          <span className="text-yellow-300">
            'Building beautiful web sites '
          </span>
          ,
          <br />{"  "}status:{" "}
          <span className="text-yellow-300">'Available for hire'</span>
          <br />
          {"}"}
        </code>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
