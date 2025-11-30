import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aboutTeam from "@/assets/about-team.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      content: "Faisal Colony Street #01, Plot #01, Arifwala Road, Sahiwal",
    },
    {
      icon: Phone,
      title: "Engineering Works",
      content: "06 km Sahiwal Arifwala Road, Sahiwal",
    },
    {
      icon: Mail,
      title: "Contact Details",
      content:
        "C.E.O: Mr. Amir Saeed – +92 300 8690691\nDirector: Mr. Mian Ammar Usama – +92 300 4493333, +92 316 4044444\nEmail: agktrading365@gmail.com",
    },
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
      question: "Can you customize products to our specifications?",
      answer: "Absolutely! Custom solutions are one of our core strengths. We work closely with clients to design, engineer, and manufacture products that meet exact specifications and requirements."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer comprehensive post-implementation support including 24/7 technical assistance, preventive maintenance programs, training for your team, and continuous optimization services."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="Contact AGK Industrial Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            Reach out to AGK Industrial Services for engineering services, after sales support, or project
            consultations.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-[#e1e6e2] rounded-2xl shadow-lg bg-white">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[#123326] mb-6">Send us a Message</h2>
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
                      <Input type="tel" placeholder="+92 300 8690691" />
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
                        <SelectItem value="engineering">Engineering Services</SelectItem>
                        <SelectItem value="after-sales">After Sales Support</SelectItem>
                        <SelectItem value="spares">Boiler Spares & Parts</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
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

                  <Button
                    size="lg"
                    className="w-full bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#123326] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#e1e6e2] shadow-sm"
                    >
                      <div className="p-3 rounded-full bg-[#1f5a45]/10">
                        <info.icon className="h-6 w-6 text-[#1f5a45]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#123326] mb-1">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <Card className="overflow-hidden border-2 border-[#e1e6e2] rounded-2xl bg-[#f5f7f6]">
                <div className="h-64 flex items-center justify-center px-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Map integration coming soon. Use the above head office and engineering works addresses to
                    locate AGK Industrial Services.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-[#faf8f3] to-[#f5f0e8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-8 text-center">
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
