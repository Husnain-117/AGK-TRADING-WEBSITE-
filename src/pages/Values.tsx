import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, Shield, Award, Zap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aboutTeam from "@/assets/about-team.jpg";

const Values = () => {
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: "Lead with innovative boiler room technology powered by alternative fuels.",
      detail: "We strive to be at the forefront of industrial heating solutions, constantly innovating to provide sustainable and efficient systems."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      description: "Become the leading provider of boiler room solutions worldwide.",
      detail: "Our vision is to set the global standard for excellence in industrial boiler systems and thermal engineering."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commitment",
      description: "Work hard and help industry with cost-effective, modern technology.",
      detail: "We are dedicated to delivering value through cutting-edge solutions that optimize performance and reduce operational costs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Responsiveness",
      description: "Act with intention, purpose, urgency and responsibility.",
      detail: "We respond swiftly to our clients' needs, ensuring timely support and proactive problem-solving at every step."
    }
  ];

  const principles = [
    {
      icon: <Shield className="w-6 h-6 text-[#1f5a45]" />,
      title: "Safety First",
      description: "Uncompromising commitment to safety standards and compliance in every project."
    },
    {
      icon: <Award className="w-6 h-6 text-[#1f5a45]" />,
      title: "Quality Excellence",
      description: "Delivering superior products and services that exceed industry benchmarks."
    },
    {
      icon: <Users className="w-6 h-6 text-[#1f5a45]" />,
      title: "Customer Focus",
      description: "Building lasting partnerships through exceptional service and support."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#1f5a45]" />,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical business practices."
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Delivered" },
    { number: "100%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK Values"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            — WHO WE ARE
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Values
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Guided by principles that drive excellence, innovation, and unwavering commitment to our customers and industry.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-2 block">
                — OUR CORE VALUES
              </span>
              <div className="h-1 w-16 bg-[#b8892e] mx-auto rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mt-6 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our values are the foundation of everything we do, shaping our decisions and guiding our relationships with customers, partners, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group relative bg-gradient-to-br from-white to-[#f5f7f6] rounded-2xl p-8 border-2 border-[#e1e6e2] hover:border-[#1f5a45]/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#b8892e] to-[#a57926] flex items-center justify-center shadow-lg border-4 border-white">
                  <span className="text-white font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1f5a45] to-[#2d7a5e] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <div className="text-white">{value.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#123326] mb-3">
                  {value.title}
                </h3>
                <p className="text-lg font-semibold text-[#1f5a45] mb-3">
                  {value.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.detail}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#b8892e] to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-2 block">
                — OUR GUIDING PRINCIPLES
              </span>
              <div className="h-1 w-16 bg-[#b8892e] mx-auto rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mt-6">
              Built on Strong Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1f5a45]/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#f5f7f6] flex items-center justify-center">
                      {principle.icon}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#b8892e] to-[#a57926] border-2 border-white shadow-sm"></div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#1f5a45] to-[#2d7a5e] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-4 border-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-4 border-white"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#b8892e] mb-4 block">
              — OUR TRACK RECORD
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Excellence in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="text-center group"
              >
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                    {achievement.number}
                  </div>
                  <div className="h-1 w-16 bg-[#b8892e] mx-auto rounded-full"></div>
                </div>
                <p className="text-white/90 font-semibold text-sm md:text-base">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#faf8f3] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-4 block">
              — OUR PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">
              Completed Projects & Installations
            </h2>
            <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mb-6" />
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Proudly serving leading industrial clients across Pakistan with premium boiler installations, thermal systems, and engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Ghani Ghee Mills", img: "/Projects/Ghani Ghee-2017.jpeg.jpg" },
              { name: "Hi-Tech Oil Mills", img: "/Projects/Hi-Tech Oil.jpeg.jpg" },
              { name: "Kashmir Oil Mills", img: "/Projects/Kashmir Oil 01.jpeg.jpg" },
              { name: "Kashmir Oil Phase 2", img: "/Projects/Kashmir Oil 02.jpeg.jpg" },
              { name: "Kashmir Oil Phase 3", img: "/Projects/Kashmir Oil 03.jpeg.jpg" },
              { name: "M.K Sons Industries", img: "/Projects/M.K Sons.jpeg.jpg" },
              { name: "Manoo Textile Mills", img: "/Projects/Manoo Textile.jpeg.jpg" },
              { name: "Muslim Textile Mills", img: "/Projects/Muslim Textile.jpeg.jpg" },
              { name: "Nishat Apparel", img: "/Projects/Nishat Apparel.jpeg.jpg" },
              { name: "Nishat Bath Division", img: "/Projects/Nishat Bath.jpeg.jpg" },
              { name: "Nishat Dairy", img: "/Projects/Nishat Dairy.jpeg.jpg" },
              { name: "Nubahar Unit 1", img: "/Projects/Nubahar Unit #01.jpeg.jpg" },
              { name: "Nubahar Unit 2", img: "/Projects/Nubahar Unit #02.jpeg.jpg" },
              { name: "Pepsi Haidri", img: "/Projects/Pepsi Haidri.jpeg.jpg" },
              { name: "Punjab Oil Mills", img: "/Projects/Punjab Oil.jpeg.jpg" },
              { name: "Punjab Rice Mills", img: "/Projects/Punjab Rice.jpeg.jpg" },
              { name: "Ravi Rice Mills Phase 1", img: "/Projects/Ravi Rice 01.jpeg.jpg" },
              { name: "Ravi Rice Mills Phase 2", img: "/Projects/Ravi Rice 02.jpeg.jpg" },
              { name: "Ravi Rice Mills Phase 3", img: "/Projects/Ravi Rice 03.jpeg.jpg" },
              { name: "Rose Paper Mills", img: "/Projects/Rose Paper.jpeg.jpg" },
              { name: "Royal Feed Industries", img: "/Projects/Royal Feed.jpeg.jpg" },
              { name: "Sadiq Ghee Mills", img: "/Projects/Sadiq Ghee.jpeg.jpg" },
              { name: "Salva Ghee Industries", img: "/Projects/Salva Ghee.jpeg.jpg" },
              { name: "Shabbair Paper Mills", img: "/Projects/Shabbair Paper.jpeg.jpg" },
              { name: "Shahkam Industries Phase 1", img: "/Projects/Shahkam 01.jpeg.jpg" },
              { name: "Shahkam Industries Phase 2", img: "/Projects/Shahkam 02.jpeg.jpg" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-[#e1e6e2]"
              >
                <div className="relative h-56 overflow-hidden bg-[#f5f7f6]">
                  <img
                    src={project.img}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/80 via-[#123326]/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#b8892e] text-white text-xs font-semibold">
                      ✓ Completed
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#123326] group-hover:text-[#1f5a45] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Boiler Installation & Engineering
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-2 block">
                  — WHY CHOOSE AGK
                </span>
                <div className="h-1 w-16 bg-[#b8892e] mx-auto rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mt-6 mb-6">
                Your Trusted Partner in Industrial Solutions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-[#f5f7f6] to-white border-l-4 border-[#b8892e]">
                <CheckCircle className="w-6 h-6 text-[#b8892e] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#123326] mb-2">Proven Expertise</h4>
                  <p className="text-muted-foreground">Over 25 years of experience delivering cutting-edge industrial boiler solutions across diverse industries.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-[#f5f7f6] to-white border-l-4 border-[#1f5a45]">
                <CheckCircle className="w-6 h-6 text-[#1f5a45] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#123326] mb-2">Innovation Focused</h4>
                  <p className="text-muted-foreground">Constantly evolving our technology to meet the changing needs of modern industry with sustainable solutions.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-[#f5f7f6] to-white border-l-4 border-[#b8892e]">
                <CheckCircle className="w-6 h-6 text-[#b8892e] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#123326] mb-2">24/7 Support</h4>
                  <p className="text-muted-foreground">Round-the-clock technical support and maintenance services to ensure uninterrupted operations.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-r from-[#f5f7f6] to-white border-l-4 border-[#1f5a45]">
                <CheckCircle className="w-6 h-6 text-[#1f5a45] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-[#123326] mb-2">Customized Solutions</h4>
                  <p className="text-muted-foreground">Tailored engineering solutions designed to meet your specific operational requirements and budget.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gold Band Style */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#b8892e] via-[#c9a04a] to-[#b8892e]" aria-label="Call to action">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                — READY TO GET STARTED
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Let's Build Something Great Together
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white text-[#b8892e] hover:bg-white/90 shadow-lg font-semibold px-8"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
