import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative industrial solutions that empower businesses to achieve operational excellence and sustainable growth through cutting-edge technology and expert guidance."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in industrial innovation, setting new standards for quality, efficiency, and customer satisfaction in manufacturing and B2B solutions."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, innovation, and excellence guide everything we do. We're committed to building lasting partnerships based on trust, transparency, and mutual success."
    }
  ];

  const team = [
    {
      name: "John Anderson",
      position: "CEO & Founder",
      bio: "20+ years in industrial manufacturing"
    },
    {
      name: "Sarah Martinez",
      position: "Chief Technology Officer",
      bio: "Expert in automation and process optimization"
    },
    {
      name: "Michael Chen",
      position: "Head of Operations",
      bio: "Specialized in supply chain management"
    },
    {
      name: "Emily Thompson",
      position: "Quality Assurance Director",
      bio: "ISO certification specialist"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About FBL Group</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building the future of industrial excellence, one innovation at a time
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={aboutTeamImage} 
                alt="FBL Group Team" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2003, FBL Group has grown from a small manufacturing consultancy 
                  into a global leader in industrial solutions. Our journey has been marked by 
                  continuous innovation, unwavering commitment to quality, and a deep understanding 
                  of our clients' evolving needs.
                </p>
                <p>
                  Today, we serve over 500 clients worldwide, from Fortune 500 companies to 
                  innovative startups, helping them optimize operations, reduce costs, and 
                  achieve sustainable growth. Our team of 50+ dedicated professionals brings 
                  together decades of combined experience in manufacturing, engineering, and 
                  business strategy.
                </p>
                <p>
                  What sets us apart is our holistic approach to industrial excellence. We don't 
                  just provide products or services—we become your strategic partner, invested in 
                  your long-term success. Our ISO-certified processes, cutting-edge technology, 
                  and customer-first philosophy ensure that every project exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                    <value.icon className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card text-center">
                <CardContent className="p-6">
                  <div className="mb-4 mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl opacity-90">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how FBL Group can help transform your industrial operations
            </p>
            <Button asChild variant="accent" size="xl">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
