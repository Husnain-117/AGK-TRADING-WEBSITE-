import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
// import ProductCard from "@/components/ProductCard";
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
  TrendingUp,
  Flame,
  Recycle,
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
      title: "Advanced Manufacturing",
      description:
        "Steam Boilers, Waste Heat Boilers, Thermal Oil Heaters & Pressure Vessels / Storage Tanks.",
      link: "/products",
    },
    {
      icon: Flame,
      title: "Fuel Conversion Engineering",
      description:
        "Boilers & Oil Heaters fuel conversion systems for Solid Fuels (Coal, Biomass) and Liquid Fuels.",
      link: "/services?cat=fuel-conversion",
    },
    {
      icon: Recycle,
      title: "Waste Recovery System",
      description:
        "Waste heat boilers, heat recovery economizers, air pre-heaters, and heat exchangers.",
      link: "/products?type=waste-heat-steam-boiler",
    },
    {
      icon: Wrench,
      title: "Overhauling Services",
      description:
        "Boilers & oil heaters complete overhauling services.",
      link: "/services?cat=after-sales",
    },
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

  // Hero slides (royalty-free Unsplash sources)
  const slides = [
    {
      title: "Advanced Manufacturing",
      subtitle:
        "Steam Boilers, Waste Heat Boilers, Thermal Oil Heaters & Pressure Vessels / Storage Tanks",
      video:
        "https://media.istockphoto.com/id/1266745199/video/heating-equipment-in-a-boiler-room-of-the-large-enterprise.mp4?s=mp4-640x640-is&k=20&c=8vGOZ1Q962H3oymJR118_gOj7rs63HXairJor8Ypn6k=",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1920&auto=format&fit=crop",
    },
    {
      title: "Fuel Conversion Engineering",
      subtitle:
        "Boilers & Oil Heaters Fuel Conversions systems on Solid Fuels (Coal, Biomass) and Liquid Fuels",
      image:
        "https://cdn.pixabay.com/photo/2016/10/12/23/23/mining-excavator-1736293_1280.jpg",
    },
    {
      title: "Waste Recovery System",
      subtitle:
        "Waste heat boilers, heat recovery Economizers, Air Pre Heater and Heat Exchangers.",
      image:
        "https://cdn.pixabay.com/photo/2015/03/13/12/14/factory-671598_1280.jpg",
    },
    {
      title: "Overhauling Services",
      subtitle:
        "Boilers & Oil heater including complete overhauling services.",
      image:
        "https://cdn.pixabay.com/photo/2020/05/03/18/13/hall-5126125_1280.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Services showcase (for third section) with online images
  const servicesShowcase = [
    {
      title: "Advanced Manufacturing",
      description:
        "Steam Boilers, Waste Heat Boilers, Thermal Oil Heaters & Pressure Vessels / Storage Tanks.",
      image:
        "https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products",
    },
    {
      title: "Fuel Conversion Engineering",
      description:
        "Conversion systems for Solid Fuels (Coal, Biomass) and Liquid Fuels for boilers and heaters.",
      image:
        "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services?cat=fuel-conversion",
    },
    {
      title: "Waste Recovery System",
      description:
        "Waste heat boilers, heat recovery economizers, air pre-heaters and heat exchangers.",
      image:
        "https://images.unsplash.com/photo-1664087783968-0cd7deee8390?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products?type=waste-heat-steam-boiler",
    },
    {
      title: "Overhauling Services",
      description:
        "Complete overhauling services for boilers and thermal oil heaters.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services?cat=after-sales",
    },
    {
      title: "Engineering Services",
      description:
        "Spare parts for industrial boilers, oil heaters, chain grate and biomass fuel systems, supplied to your exact specifications.",
      image:
        "https://images.unsplash.com/photo-1653256322037-321089b8db61?q=80&w=1203&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services/engineering",
    },
    {
      title: "After Sales Support",
      description: "Commissioning, maintenance, and technical support by expert engineers.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/services?cat=after-sales",
    },
  ];

  const [servicesPage, setServicesPage] = useState(0);
  const servicesPageSize = 3;
  const servicesTotalPages = Math.ceil(servicesShowcase.length / servicesPageSize);
  const paginatedServices = servicesShowcase.slice(
    servicesPage * servicesPageSize,
    servicesPage * servicesPageSize + servicesPageSize,
  );

  // Testimonials data (brand-themed)
  const testimonials = [
    {
      name: "Muhammad Ali",
      company: "Century Textiles",
      text:
        "AK Traders delivered a highly efficient waste heat recovery solution. Fuel savings and plant uptime have both improved significantly.",
      avatar:
        "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sara Khan",
      company: "Prime Foods",
      text:
        "Professional team and excellent after-sales support. Their boiler overhauling service was on time and within budget.",
      avatar:
        "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c3NpbmVzcyUyMG93bmVyc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Usman Raza",
      company: "Haroon Oil Mills",
      text:
        "Fuel conversion engineering reduced our operating costs without compromising performance. Highly recommended.",
      avatar:
        "https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-104px)] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {slides[currentSlide]?.video ? (
            <video
              key={slides[currentSlide]?.video}
              src={slides[currentSlide]?.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          ) : (
            <img
              src={slides[currentSlide]?.image || heroImage}
              alt={slides[currentSlide]?.title || "Industrial Manufacturing"}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/65 via-black/65 to-secondary/35" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-widest uppercase">
                <span className="inline-block w-8 h-[2px] rounded bg-white" /> Manufacturing Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-5 leading-tight drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]">
                {slides[currentSlide].title}
              </h1>
              <div className="h-1 w-20 bg-primary rounded-full mb-6" />
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/quote">Get Started</Link>
                </Button>
                <Button asChild variant="secondary" size="xl">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/90 text-primary-foreground grid place-items-center shadow-lg ring-4 ring-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M1.5 4.5A3 3 0 014.5 1.5h1.886c.86 0 1.61.586 1.808 1.423l.548 2.292a2.25 2.25 0 01-.563 2.123L7.35 8.218a16.98 16.98 0 006.432 6.432l.88-0.828a2.25 2.25 0 012.123-.563l2.292.548A1.875 1.875 0 0122.5 15.614V17.5a3 3 0 01-3 3H18a16.5 16.5 0 01-16.5-16.5v0z"/></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-white/80">Phone Number</div>
                  <div className="text-xl font-bold text-white">Office: +92 300 8690691
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right-side slide selectors */}
        <div className="absolute inset-y-0 right-4 md:right-6 lg:right-8 hidden md:flex flex-col justify-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all border backdrop-blur-sm ${
                currentSlide === i
                  ? "bg-secondary text-white border-white/30 shadow"
                  : "bg-black/50 text-white border-white/20 hover:bg-black/60"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Textual pitch */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
                <span className="inline-block w-8 h-[2px] rounded bg-primary" /> Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                Reliable Boiler Solutions, Engineered for Performance
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                From advanced manufacturing to fuel conversions and complete overhauling, we deliver
                safe, efficient, and durable systems tailored to your industry needs.
              </p>

              {/* Left-divider bullet list */}
              <div className="mt-8">
                <div className="bg-card border border-border rounded-md p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 border-l-2 border-primary pl-6">
                    {[
                      "Proven expertise in steam & thermal oil systems",
                      "Energy-efficient fuel conversion engineering",
                      "Waste heat recovery for reduced operating cost",
                      "After-sales support and spare parts availability",
                      "Quality assurance with rigorous testing",
                      "Custom-built pressure vessels & storage tanks",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-foreground">
                        <svg className="h-4 w-4 text-primary mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l12-12-1.5-1.5z"/></svg>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/quote">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">About AK Traders</Link>
                </Button>
              </div>
            </div>

            {/* Visual panel (large image + overlapping small image) */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] ring-1 ring-border">
                <img
                  src="https://images.unsplash.com/photo-1705147219565-fe9f6f369d03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Industrial systems by AK Traders"
                  className="w-full h-[380px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* <div className="absolute -bottom-8 -left-8 w-40 sm:w-48 rounded-xl overflow-hidden ring-4 ring-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] bg-background">
                <img
                  src="https://media.istockphoto.com/id/838476004/photo/silhouette-of-engineer-and-construction-team-working-safely-work-load-concrete-on-scaffolding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xXLKeqSFDdox0mTueiK01FcN-GEQmycwYpIYhis0nBg="
                  alt="Expert engineering team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services (third section) styled like the shared template */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Awesome Services</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginatedServices.map((svc, idx) => (
              <div
                key={`${servicesPage}-${idx}`}
                className="relative group rounded-xl cursor-pointer"
                onClick={() => (window.location.href = svc.link)}
              >
                {/* Card body */}
                <div className="relative z-10 rounded-xl bg-card shadow-sm ring-1 ring-border overflow-hidden transition-all duration-300 group-hover:shadow-elegant">
                  <div className="p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-foreground">{svc.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">{svc.description}</p>
                    <Button asChild variant="link" className="mt-4 p-0 h-auto text-primary">
                      <Link to={svc.link}>
                        Read More
                        <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full border border-border">
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M10 17l5-5-5-5v10z"/></svg>
                        </span>
                      </Link>
                    </Button>
                  </div>
                  {/* Image bottom */}
                  <div className="relative border-t border-border overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Corner ribbon */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-secondary rounded-bl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-10 gap-6" role="navigation" aria-label="Services pagination">
            <button
              onClick={() => setServicesPage((p) => (p - 1 + servicesTotalPages) % servicesTotalPages)}
              className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous services"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15 18l-6-6 6-6v12z"/></svg>
            </button>
            <button
              onClick={() => setServicesPage((p) => (p + 1) % servicesTotalPages)}
              className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors"
              aria-label="Next services"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6l6 6-6 6V6z"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image / avatar */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-secondary/80 rounded-full" />
            <img
              src={testimonials[testimonialIndex].avatar}
              alt={testimonials[testimonialIndex].name}
              className="w-full max-w-md h-80 rounded-xl object-cover shadow-2xl ring-1 ring-border/40 bg-card"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              “{testimonials[testimonialIndex].text}”
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[testimonialIndex].avatar}
                alt={testimonials[testimonialIndex].name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <div className="font-semibold text-lg text-foreground">{testimonials[testimonialIndex].name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{testimonials[testimonialIndex].company}</div>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <button
                  onClick={() => setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow hover:bg-secondary/90 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M15 18l-6-6 6-6v12z"/></svg>
                </button>
                <button
                  onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow hover:bg-primary/90 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6l6 6-6 6V6z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin CTA strip (moved to just before footer) */}
      <section className="relative overflow-hidden" aria-label="Call to action">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                <span className="inline-block w-8 h-[2px] rounded bg-white" /> Need Any Help
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">Need Boiler Services</h3>
            </div>
            <div className="w-full md:w-auto md:shrink-0">
              <Button asChild variant="default" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link to="/contact" aria-label="Make an appointment">
                  Make Appointment
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor"><path d="M9 6l6 6-6 6V6z"/></svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      </div>
      );
      };

export default Home;
