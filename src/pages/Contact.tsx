import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Industrial Avenue, Manufacturing District, City, State 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (234) 567-8900"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@fblgroup.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM"
    }
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including aerospace, automotive, electronics, pharmaceuticals, and general manufacturing. Our solutions are adaptable to meet the unique needs of any industrial sector."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple consulting projects may take 2-4 weeks, while comprehensive manufacturing solutions can range from 3-6 months. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you offer international services?",
      answer: "Yes, we have experience working with clients globally. We offer remote consulting, on-site visits, and comprehensive support for international projects."
    },
    {
      question: "What certifications do you hold?",
      answer: "FBL Group is ISO 9001:2015 certified for quality management. We also maintain compliance with industry-specific standards including AS9100 for aerospace and IATF 16949 for automotive sectors."
    },
    {
      question: "Can you customize products to our specifications?",
      answer: "Absolutely! Custom solutions are one of our core strengths. We work closely with clients to design, engineer, and manufacture products that meet exact specifications and requirements."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer comprehensive post-implementation support including 24/7 technical assistance, preventive maintenance programs, training for your team, and continuous optimization services."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input type="tel" placeholder="+1 (234) 567-8900" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input placeholder="Your Company" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="service">Service Request</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button variant="accent" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <Card className="overflow-hidden border-border">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map Integration Area</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
