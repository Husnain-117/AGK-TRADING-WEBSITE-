import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import { 
  Award, 
  Shield, 
  Clock, 
  Users, 
  Settings, 
  Wrench,
  Truck,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";
import productsImage from "@/assets/products-showcase.jpg";

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 20 years of experience delivering excellence in manufacturing and industrial solutions."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest standards in every project we undertake."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated customer service team available around the clock to assist your needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Continuous R&D investment keeps us at the forefront of industrial technology."
    }
  ];

  const services = [
    {
      icon: Settings,
      title: "Precision Manufacturing",
      description: "Advanced manufacturing capabilities with state-of-the-art equipment and skilled technicians."
    },
    {
      icon: Target,
      title: "Quality Control",
      description: "Rigorous testing and inspection protocols ensuring product excellence and reliability."
    },
    {
      icon: Wrench,
      title: "Technical Consulting",
      description: "Expert guidance to optimize your operations and improve efficiency across all processes."
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "End-to-end logistics solutions ensuring timely delivery and seamless operations."
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Lean manufacturing techniques to reduce waste and maximize productivity."
    },
    {
      icon: Users,
      title: "Custom Solutions",
      description: "Tailored industrial solutions designed to meet your specific business requirements."
    }
  ];

  const products = [
    {
      name: "Industrial Component A",
      category: "Manufacturing",
      description: "High-precision component designed for demanding industrial applications.",
      price: "$299"
    },
    {
      name: "Automation System B",
      category: "Automation",
      description: "Complete automation solution for streamlined production processes.",
      price: "$1,499"
    },
    {
      name: "Quality Sensor C",
      category: "Testing",
      description: "Advanced sensor technology for real-time quality monitoring.",
      price: "$599"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Industrial Manufacturing" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Industrial Excellence Meets{" "}
                <span className="text-primary">Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Trusted by leading manufacturers worldwide. We deliver cutting-edge solutions 
                that drive efficiency and excellence in industrial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/quote">Get Started</Link>
                </Button>
                <Button asChild variant="hero-outline" size="xl">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-in">
              <img 
                src={heroImage} 
                alt="Modern Industrial Facility" 
                className="rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose FBL Group?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine decades of experience with cutting-edge technology to deliver 
              exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive industrial solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="secondary" size="lg">
              <Link to="/services">View All Services →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Products Showcase */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest industrial products and solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} image={productsImage} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/products">Browse All Products →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 text-center text-white shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contact our team today for a consultation and discover how we can help 
              optimize your industrial processes.
            </p>
            <Button asChild size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
