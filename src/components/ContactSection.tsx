import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MessageSquare, Phone, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/services/contactService';
import { ContactFormData } from '@/types/contact';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitContactForm(data);
      if (response.success) {
        toast({ title: "Success!", description: response.message });
        reset();
      } else {
        toast({ title: "Error", description: response.message, variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Unexpected error occurred", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: <Mail className="h-6 w-6" />, title: "Email", value: "Saksham89091@gmail.com", link: "mailto:Saksham89091@gmail.com" },
    { icon: <Phone className="h-6 w-6" />, title: "Phone", value: "+91-7906594524", link: "tel:+917906594524" },
    { icon: <Linkedin className="h-6 w-6" />, title: "LinkedIn", value: "/saksham-kushwah", link: "https://www.linkedin.com/in/saksham-kushwah-b40123332" },
    { icon: <Github className="h-6 w-6" />, title: "GitHub", value: "@sakshamkushwah", link: "https://github.com/SakshamKushwah" }
  ];

  return (
    <section id="contact" className="section-container pb-32">
      <h2 className="section-title">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-lg">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <a key={index} href={method.link} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full border-none bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <CardContent className="flex flex-col items-center justify-center text-center p-6">
                    <div className="bg-primary/10 p-3 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">{method.icon}</div>
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 group-hover:text-primary transition-colors duration-300">{method.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <Card className="border-none bg-secondary">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className={`bg-background border-none ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name')}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className={`bg-background border-none ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email')}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className={`bg-background border-none min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                  {...register('message')}
                />
                {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
