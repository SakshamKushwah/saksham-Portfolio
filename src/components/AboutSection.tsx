
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg">
            Hi there! I'm a passionate Full-Stack developer  creating web applications that are both functional and beautiful.
          </p>
          <p className="text-muted-foreground">
            My journey in web development started back in 3rd sem of my engg when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS! Fast-forward to today, and I've had the privilege of working at a software agency, a start-up, and a large corporation.
          </p>
          <p className="text-muted-foreground">
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients. I'm constantly learning new technologies and approaches to create better user experiences.
          </p>
          <p className="text-muted-foreground">
            When I'm not at the computer, I'm usually rock climbing, reading sci-fi novels, or exploring new hiking trails.
          </p>
        </div>

        <Card className="bg-secondary border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Education </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="font-medium">Bachelor of Technology (B.Tech) in Information Technology  </h4>
                <p className="text-muted-foreground">Bundelkhand Institute of Engineering and Technology (BIET), Jhansi   <br /> 2022-2026</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="font-medium">Relevant coursework / Specialization </h4>
                <p className="text-muted-foreground"> •	Structures & Algorithms <br />
                                                      •	Operating Systems <br />
                                                      •	Computer Networks <br />
                                                      •	Database Management Systems (DBMS) <br />
                                                      •	Thorey of Automata <br /> 
                                                      •	Object-Oriented Programming (OOP)  <br />
                                                      •	Software Data Engineering <br />
                                                      •	Web Technologies <br />
                                                      •	Artificial Intelligence (Basics)
                    </p>
              </div>
              {/* <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="font-medium">Frontend Developer</h4>
                <p className="text-muted-foreground">StartupXYZ • 2020-2022</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-2">
                <h4 className="font-medium">Junior Developer</h4>
                <p className="text-muted-foreground">Web Agency • 2018-2020</p>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
