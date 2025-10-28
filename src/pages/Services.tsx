import { Settings, Target, Wrench, Truck, TrendingUp, Users, Zap, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Precision Manufacturing",
      description: "Advanced manufacturing capabilities with state-of-the-art CNC machines, laser cutting systems, and automated production lines. Our facility is equipped to handle projects of any scale with exceptional precision."
    },
    {
      icon: Target,
      title: "Quality Control & Assurance",
      description: "Comprehensive quality management systems including ISO 9001 certification, rigorous testing protocols, and continuous improvement processes to ensure every product meets the highest standards."
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert engineering consultation services to optimize your manufacturing processes, reduce waste, and improve efficiency. Our consultants bring decades of industry experience to every project."
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions including vendor management, inventory optimization, logistics coordination, and just-in-time delivery systems to streamline your operations."
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Lean manufacturing implementation, Six Sigma methodologies, and continuous improvement programs designed to maximize productivity and minimize operational costs."
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored industrial solutions designed specifically for your unique business requirements. From concept to implementation, we work closely with you to achieve your goals."
    },
    {
      icon: Zap,
      title: "Automation Integration",
      description: "Smart factory solutions including robotics, IoT sensors, and AI-powered analytics to modernize your production facility and boost efficiency."
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Comprehensive preventive maintenance programs and 24/7 technical support to ensure your operations run smoothly with minimal downtime."
    }
  ];

  const processSteps = [
    { step: "1", title: "Consultation", description: "We analyze your needs and develop a customized strategy" },
    { step: "2", title: "Planning", description: "Detailed project planning with clear milestones and timelines" },
    { step: "3", title: "Implementation", description: "Expert execution with continuous quality monitoring" },
    { step: "4", title: "Support", description: "Ongoing support and optimization for long-term success" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive industrial solutions designed to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 text-center text-white shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Request a quote today and let's discuss how we can help your business thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/quote">Request a Quote</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
