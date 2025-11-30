import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aboutTeam from "@/assets/about-team.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      subject && `Subject: ${subject}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    const text = lines.length
      ? lines.join("%0A")
      : "Hello, I would like to know more about your services.";

    const url = `https://wa.me/923164044444?text=${text}`;
    window.open(url, "_blank");
  };
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input placeholder="Your company (optional)" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      placeholder="Your subject (e.g. Engineering Services Inquiry)"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Your message – tell us about your project or inquiry..."
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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

                {/* WhatsApp Contact */}
                <a
                  href="https://wa.me/923164044444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-2xl bg-[#128C7E] hover:bg-[#0e6f64] text-white px-5 py-4 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                      <span className="text-xl leading-none">☎</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold">WhatsApp</span>
                      <span className="text-xs text-white/80">Chat with us at +92 316 4044444</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Map */}
              <Card className="overflow-hidden border-2 border-[#e1e6e2] rounded-2xl bg-[#f5f7f6]">
                <div className="h-64">
                  <iframe
                    title="AGK Trading Company Location (Sidebar)"
                    src="https://www.google.com/maps?q=30.6061992645264,73.0946655273438&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
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

      {/* Google Location */}
      <section className="pb-16 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.18em] uppercase bg-[#1f5a45]/5 text-[#1f5a45]">
                Location
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#123326]">
                Our Location on Google Maps
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Head Office: Faisal Colony Street #01, Plot #01, Arifwala Road, Sahiwal
              </p>
            </div>

            <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] gap-6 items-stretch">
              <div className="h-full rounded-2xl border border-[#e1e6e2] bg-white shadow-sm p-6 flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-[#123326] mb-3">Visit Our Head Office</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You can find AGK Trading Company (Pvt) Limited on the main Arifwala Road in Sahiwal. Use the
                  Google Map to get directions or explore the surrounding area.
                </p>
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-[#123326]">Address</p>
                  <p className="text-muted-foreground">
                    Faisal Colony Street #01, Plot #01, Arifwala Road, Sahiwal
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-[#e1e6e2] shadow-md h-[320px] md:h-[420px] bg-white">
                <iframe
                  title="AGK Trading Company Location"
                  src="https://www.google.com/maps?q=30.6061992645264,73.0946655273438&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
