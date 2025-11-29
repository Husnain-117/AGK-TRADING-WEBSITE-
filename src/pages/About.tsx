import { useEffect, useState } from "react";
import { Target, Eye, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'profile';
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

  const timeline = [
    {
      year: "2002",
      title: "Foundations",
      description:
        "Foundations of Amir Ali Trading Company were laid by founder Mr. Haji Abdul Ghafoor, starting with a small supply business and a vision to become a global manufacturer and supplier."
    },
    {
      year: "2004",
      title: "Workshop Facility",
      description:
        "AATC expanded from supply into services and manufacturing by establishing a modern local workshop facility with state-of-the-art equipment."
    },
    {
      year: "2006",
      title: "First Boiler Order",
      description:
        "AATC supplied and installed a high-efficiency biomass-fuel fixed-bed steam boiler at Oil Trade Mill, Faisalabad."
    },
    {
      year: "2007",
      title: "First Steam Contract",
      description:
        "AATC signed its first biomass-fuel steam supply contract with Oil Trade Mill, Faisalabad."
    },
    {
      year: "2016",
      title: "First 20 TPH Fire-Tube Chain Grate Boiler",
      description:
        "AATC supplied and installed a 20 TPH coal- and biomass-fired chain grate steam boiler at Muslim Textile Mill, Faisalabad."
    },
    {
      year: "2017",
      title: "First 20 TPH Water-Tube Boiler",
      description:
        "AATC installed its first 20 TPH coal- and biomass-fired water-tube chain grate boiler at Nemat Ghee Mill, Okara."
    },
    {
      year: "2021",
      title: "300 Projects Completed",
      description:
        "By 2021, AATC had completed more than 300 projects, including coal and biomass boilers, thermal oil heaters, and major upgrade and maintenance works."
    },
    {
      year: "2022",
      title: "Company Name Change",
      description:
        "Amir Ali Trading Company was officially renamed AGK Trading Company Private Limited Company (Pvt.) Ltd."
    },
    {
      year: "2024",
      title: "Biomass Steam Contracts",
      description:
        "AGK began biomass-fuel steam supply at Nishat Mills Limited, Lahore, and at Nishat Sutas Dairy Limited, Faisalabad."
    },
    {
      year: "2025",
      title: "AGK Steam Boiler & Steam Supply",
      description:
        "AGK supplied and installed a 25 TPH coal- and biomass-fired boiler at Ravi Rice Mill, Okara, and commenced biomass-fuel steam supply of 1,300 tons per day."
    }
  ];

  const team = [
    {
      name: "Mr. Amir Saeed",
      position: "CEO & Founder",
      bio: "20+ years in industrial manufacturing",
      photo: "/team/ceo&Founder.jpg"
    },
    {
      name: "Mr. Mian Ammar Usama",
      position: "Director",
      bio: "Expert in automation and process optimization",
      photo: "/team/Drirector.jpg"
    },
    {
      name: "Chief Technology Officer",
      position: "CTO",
      bio: "Specialized in supply chain management",
      photo: "/team/CTO.jpg"
    }
  ];

  const biomassProjects = [
    "Punjab Oil Mills (Canolive Oil), Islamabad (Since 2011)",
    "N.B.C Unit No. 01 (Pepsi Cola), Model Town Gujranwala (Since 2013)",
    "Sitara Vegetable Ghee Mills, Gajjumatta Lahore (Since 2014)",
    "N.B.C Unit No. 02 (Pepsi Cola), Attawa Gujranwala (Since 2014)",
    "Haidri Beverages Ltd. (Pepsi Cola), Islamabad (Since 2016)",
    "Nishat Textile Mills, Gajjumatta Lahore (Since 2018)",
    "Nishat Sutas Dairy Ltd., Faisalabad (Since 2024)",
  ];

  const biomassVisible = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % biomassProjects.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  // Get 3 consecutive cards with circular wrapping
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < biomassVisible; i++) {
      const index = (currentIndex + i) % biomassProjects.length;
      visible.push({ project: biomassProjects[index], displayNumber: index + 1 });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1705147219565-fe9f6f369d03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-800/30 to-emerald-700/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" aria-hidden="true" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in py-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-4">About AK Traders</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building the future of industrial excellence, one innovation at a time
            </p>
            {/* Tab Navigation */}
            <nav aria-label="About navigation" className="mt-8">
              <ul role="tablist" className="flex justify-center gap-4">
                <li>
                  <Link
                    to="/about?tab=profile"
                    role="tab"
                    aria-selected={currentTab === 'profile'}
                    aria-controls="about-profile-panel"
                    className={`px-6 py-2 rounded-full text-sm font-medium border shadow-sm transition-colors motion-safe:transition-shadow motion-safe:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      currentTab === 'profile'
                        ? 'bg-[#1f5a45] border-[#1f5a45] text-white hover:bg-[#184635]'
                        : 'bg-white/90 border-[#b8892e]/70 text-[#1f5a45] hover:bg-[#fdf5e6] hover:border-[#b8892e]'
                    }`}
                  >
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about?tab=timeline"
                    role="tab"
                    aria-selected={currentTab === 'timeline'}
                    aria-controls="about-timeline-panel"
                    className={`px-6 py-2 rounded-full text-sm font-medium border shadow-sm transition-colors motion-safe:transition-shadow motion-safe:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      currentTab === 'timeline'
                        ? 'bg-[#1f5a45] border-[#1f5a45] text-white hover:bg-[#184635]'
                        : 'bg-white/90 border-[#b8892e]/70 text-[#1f5a45] hover:bg-[#fdf5e6] hover:border-[#b8892e]'
                    }`}
                  >
                    Company Timeline
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* Conditional Content Based on Tab */}
      {currentTab === 'profile' ? (
        <div id="about-profile-panel" role="tabpanel" aria-label="Company profile">
      {/* Company Story */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12">
          {/* Intro heading and simple text */}
          <div className="text-center max-w-3xl mx-auto animate-fade-in space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AGK Trading Company Private Limited Company (Pvt.) Ltd. is a second-generation engineering firm specializing in alternative-fuel
              boilers and industrial steam generation systems. Established in 2002 by Haji Abdul Ghafoor (late) as Amir
              Ali Trading Company, the business was renamed AGK Trading Company Private Limited Company (Pvt.) Ltd. in 2022.
            </p>
          </div>

          {/* Image banner */}
          <div className="animate-fade-in">
            <img
              src={aboutTeamImage}
              alt="AGK Trading Company Private Limited engineering team"
              loading="lazy"
              decoding="async"
              className="w-full max-w-5xl mx-auto rounded-xl shadow-elegant object-cover"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="rounded-lg border border-border bg-card/80 p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">300+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Boiler Projects</div>
            </div>
            <div className="rounded-lg border border-border bg-card/80 p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">25+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Biomass Steam Sites</div>
            </div>
            <div className="rounded-lg border border-border bg-card/80 p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">23+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="rounded-lg border border-border bg-card/80 p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">98%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Detailed text + key points */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5 max-w-xl">
              <p className="text-muted-foreground leading-relaxed">
                Since inception, AGK has delivered energy-efficient, cost-effective and sustainable steam solutions to a
                broad range of industrial sectors, including food processing, rice mills, feed mills, oil mills and
                textile processing. With more than 23 years of experience and over 300 successfully executed projects,
                AGK is recognized for its reliability, innovation and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of skilled engineers, technicians and managers is committed to quality, safety and on-time
                delivery. We believe our success lies in long-term partnerships that support both local and international
                industries, powered by systems engineered to operate efficiently on a wide variety of fuelsincluding
                coal, corn cube, mustard straw, rice husk, wheat straw, wood chips and other renewable or conventional
                fuels.
              </p>
            </div>
            <div className="mt-2 lg:mt-0">
              <div className="rounded-xl border border-border bg-card/80 shadow-sm p-6 md:p-7 h-full">
                <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">Key Highlights</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>300+ coal- and biomass-fired steam boiler projects executed</li>
                      <li>25+ biomass-based steam supply projects completed</li>
                      <li>23+ years of engineering and industrial experience</li>
                      <li>Strong focus on energy efficiency and sustainability</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-foreground">What We Stand For</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Values- and ethics-driven professional culture</li>
                      <li>End-to-end engineering, manufacturing and services</li>
                      <li>Compliance with international safety and audit standards</li>
                      <li>Continuous improvement and environmental responsibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biomass Steam Supply Showcase - Professional Carousel */}
      <section className="pb-16 md:pb-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Steam Supply on Biomass Fuel</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                AGK Trading Company Private Limited Company (Pvt.) Ltd. is a pioneer in rental steam supply services powered by biomass fuel,
                operating large-scale biomass steam systems across multiple industrial sites while maintaining
                EPA-compliant environmental standards and continuous emission testing.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-[#b8892e]/40 bg-[#fdf5e6] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#1f5a45] shadow-sm whitespace-nowrap">
              Proven Biomass Steam Projects
            </span>
          </div>

          <div className="relative" role="region" aria-label="Biomass steam supply projects">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-live="polite">
                {getVisibleProjects().map(({ project, displayNumber }, idx) => (
                  <div 
                    key={`${currentIndex}-${idx}`} 
                    className="flex-1 min-w-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div 
                      className="h-48 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-xl hover:border-[#1f5a45] transition-all duration-300 p-6 flex flex-col justify-between group"
                    >
                      {/* Project Number Badge */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1f5a45] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                          {displayNumber}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-foreground leading-tight line-clamp-2 group-hover:text-[#1f5a45] transition-colors">
                            {project}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="space-y-3">
                        <div className="h-px bg-border/50"></div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Biomass-based steam supply with full compliance to international audit and safety requirements.
                        </p>
                      </div>
                      
                      {/* Status Indicator */}
                      <div className="flex items-center gap-2 mt-auto pt-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-medium text-muted-foreground">Active Project</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 flex items-center justify-between">
              {/* Progress Dots */}
              <div className="flex items-center gap-2">
                {biomassProjects.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-8 bg-[#1f5a45]' 
                        : 'w-2 bg-border hover:bg-[#1f5a45]/50'
                    }`}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
              
              {/* Arrow Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentIndex((p) => (p - 1 + biomassProjects.length) % biomassProjects.length)}
                  className="w-10 h-10 rounded-full border-2 border-border bg-background text-foreground flex items-center justify-center hover:bg-[#1f5a45] hover:text-white hover:border-[#1f5a45] transition-all duration-300 shadow-sm"
                  aria-label="Previous biomass projects"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 18l-6-6 6-6v12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentIndex((p) => (p + 1) % biomassProjects.length)}
                  className="w-10 h-10 rounded-full bg-[#1f5a45] text-white flex items-center justify-center shadow-md hover:bg-[#184635] hover:shadow-lg transition-all duration-300"
                  aria-label="Next biomass projects"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 6l6 6-6 6V6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us - Redesigned */}
      <section
        className="py-16 md:py-24 bg-gradient-to-b from-[#fdf5e6]/70 via-white to-[#f3f7f5]"
        aria-labelledby="drives-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#1f5a45]/70 uppercase mb-3">
              Our Guiding Principles
            </p>
            <h2
              id="drives-heading"
              className="text-3xl md:text-4xl font-bold text-[#123326] tracking-tight mb-4"
            >
              What Drives Us
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Mission, vision and values that shape every project we deliver for our industrial partners.
            </p>
            <div className="mt-6 h-1 w-28 bg-gradient-to-r from-transparent via-[#b8892e] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {values.map((item) => (
              <div
                key={item.title}
                className="group bg-white/95 backdrop-blur-sm border border-[#e1e6e2] rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#1f5a45]/50 transition-all duration-300 flex flex-col items-center text-center px-8 py-10"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#e7f0ea] flex items-center justify-center mx-auto shadow-inner">
                    <item.icon className="h-10 w-10 text-[#1f5a45]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-[#1f5a45] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-6 h-1 w-10 rounded-full bg-[#b8892e]/60 group-hover:w-16 group-hover:bg-[#1f5a45] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Professional Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#f5f7f6] to-[#eef3f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-3">
              Meet Our Leadership Team
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.slice(0, 3).map((member, index) => (
              <Card
                key={index}
                className="group h-full flex flex-col overflow-hidden rounded-2xl border-2 border-[#e1e6e2] bg-white shadow-md hover:shadow-2xl hover:border-[#1f5a45]/60 transition-all duration-300"
              >
                {/* Photo area - taller to show full face */}
                <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-[#f0f4f2] to-[#e4ebe7]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/40 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>

                <CardContent className="flex-1 pt-6 pb-7 px-6 flex flex-col items-center text-center">
                  <h3 className="text-lg md:text-xl font-bold text-[#123326] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#b8892e] mb-4">
                    {member.position}
                  </p>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#1f5a45]/40 to-transparent mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
      ) : (
        <div id="about-timeline-panel" role="tabpanel" aria-label="Company timeline">
          {/* Company Timeline - Professional Vertical Layout */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-[#fdf5e6]/60 via-white to-[#f3f7f5]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#1f5a45]/70 uppercase mb-3">
                  Our Journey
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">
                  Company Timeline
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                  Key milestones that have shaped our growth as a trusted engineering and industrial solutions partner.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                {/* Center line */}
                <div
                  className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#b8892e] via-[#d7e0da] to-[#1f5a45]/80"
                  aria-hidden="true"
                />

                <div className="space-y-10">
                  {timeline.map((item, index) => (
                    <div key={item.year} className="relative pl-16">
                      {/* Year marker */}
                      <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-2 border-[#1f5a45] flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold tracking-wide text-[#1f5a45]">
                          {item.year}
                        </span>
                      </div>

                      {/* Milestone card */}
                      <div className="rounded-2xl border border-[#e1e6e2] bg-white/95 shadow-sm hover:shadow-md hover:border-[#1f5a45]/60 transition-all duration-300 px-6 py-5">
                        <h3 className="text-base md:text-lg font-semibold text-[#123326] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default About;
