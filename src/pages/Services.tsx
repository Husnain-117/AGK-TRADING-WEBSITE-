import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Shield,
  Construction,
  Laptop,
  Package,
  Image as ImageIcon,
  Settings,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

// Shared product images from local public folders (AGK project photos)
const productImages = [
  // Engineering Services – general boiler plant
  "/Package Fire Tube Steam Boiler/2.jpeg.jpg",
  // After Sales Services – gas & oil boiler maintenance
  "/Gas & Oil Steam Boiler/4.jpeg.jpg",
  // Our Values – waste heat / efficiency themed image
  "/Waste Heat Steam Boiler/2.jpeg.jpg",
  // Extra images kept for potential future cards
  "/Water Tube Steam Boiler/3.jpeg.jpg",
  "/Thermal Oil Heater/4.jpeg.jpg",
];

const Services = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" aria-hidden="true" />,
      title: "Engineering Services",
      description:
        "Comprehensive industrial boiler solutions including steam and thermal systems, upgrades and a full range of spare parts and boiler peripherals.",
      image: productImages[0],
      features: [
        "Industrial steam boilers",
        "Thermal oil heaters",
        "Waste heat recovery boilers",
        "Fuel conversion for boilers & heaters",
        "System modifications & upgradation",
        "Complete overhauling services",
        "Auxiliary equipment & boiler spare parts",
        "Pressure vessels & storage tanks",
        "Condensate tanks & heat exchangers",
        "Valves, pumps, tubes, pipes & fittings",
      ],
      link: "/services/engineering",
    },
    {
      icon: <Construction className="w-12 h-12 text-green-600" aria-hidden="true" />,
      title: "After Sales Services",
      description:
        "24/7 service by qualified engineers for maintenance, spares, and rapid on-call support.",
      image: productImages[1],
      features: [
        "Operation & Maintenance",
        "Repairs & Replacements",
        "Equipment & Parts",
        "Optimization & Upgradation",
      ],
      link: "/contact",
    },
    {
      icon: <ImageIcon className="w-12 h-12 text-green-600" aria-hidden="true" />,
      title: "Our Values",
      description:
        "Guiding principles that ensure safety, reliability, efficiency, and customer success.",
      image: productImages[2],
      features: [
        "Mission: Lead with innovative boiler technology & alternative fuels",
        "Vision: Be the leading global boiler room solutions provider",
        "Commitment: Work hard and deliver cost‑effective technology",
        "Unity/Strength: Act as one seamless team for 100% customer satisfaction",
        "Performance: Honor commitments; collaborate and use data for better outcomes",
        "Integrity: Respect customers, employees, vendors & partners",
        "Responsiveness: Act with urgency and responsibility",
      ],
      link: "/services",
    },
  ];

  const additionalServices = [
    {
      icon: <Package className="w-8 h-8 text-stone-600" aria-hidden="true" />,
      title: "Auxiliary Equipment & Spares",
      description:
        "Comprehensive spares and auxiliary equipment for boilers & oil heaters.",
      link: "/contact",
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-stone-600" aria-hidden="true" />,
      title: "Pressure Vessels & Tanks",
      description:
        "ASME-grade pressure vessels, storage tanks, condensate tanks & heat exchangers.",
      link: "/contact",
    },
    {
      icon: <Laptop className="w-8 h-8 text-stone-600" aria-hidden="true" />,
      title: "Industrial Equipment & Fittings",
      description:
        "Valves, pumps, tubes, pipes, and fittings for all industrial needs.",
      link: "/contact",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Operation & Maintenance",
      description:
        "Hassle‑free O&M for safe, reliable and consistent boiler performance.",
      icon: <Shield className="w-8 h-8 text-green-500" aria-hidden="true" />,
    },
    {
      step: "02",
      title: "Repairs & Replacements",
      description:
        "Quick, correct fixes and planned replacement programs to reduce downtime.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" aria-hidden="true" />,
    },
    {
      step: "03",
      title: "Equipment & Parts",
      description:
        "Genuine parts supply ensuring reliability, uptime, and longevity.",
      icon: <Construction className="w-8 h-8 text-green-500" aria-hidden="true" />,
    },
    {
      step: "04",
      title: "Optimization & Upgradation",
      description:
        "Data‑driven upgrades for efficiency, safety and sustainability.",
      icon: <Award className="w-8 h-8 text-green-500" aria-hidden="true" />,
    },
  ];

  const serviceFeatures = [
    {
      icon: <Award className="w-6 h-6 text-green-600" aria-hidden="true" />,
      title: "Mission",
      description:
        "Lead with innovative boiler room technology powered by alternative fuels.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" aria-hidden="true" />,
      title: "Vision",
      description:
        "Become the leading provider of boiler room solutions worldwide.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" aria-hidden="true" />,
      title: "Commitment",
      description:
        "Work hard and help industry with cost‑effective, modern technology.",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" aria-hidden="true" />,
      title: "Responsiveness",
      description:
        "Act with intention, purpose, urgency and responsibility.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Consistent with Products/About */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Comprehensive Industrial Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Industrial boiler solutions: steam boilers, thermal oil heaters, waste heat recovery, and 24/7 after‑sales services.
          </p>
        </div>
      </section>

      {/* Service Features - Minimal Professional Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-2 block">
                — OUR CORE VALUES
              </span>
              <div className="h-1 w-16 bg-[#b8892e] mx-auto rounded-full" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceFeatures.map((feature) => (
              <div 
                key={feature.title} 
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1f5a45]/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon with brown/gold badge */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#1f5a45] flex items-center justify-center shadow-sm">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#b8892e] to-[#a57926] border-2 border-white shadow-sm"></div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] block">
                — OUR SERVICES
              </span>
              <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mt-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123326]">
              Comprehensive Solutions
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
              We provide comprehensive boiler room solutions including engineering services, upgrades, spare parts, and 24/7 after‑sales support tailored to your plant requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.link}
                className="group bg-white rounded-2xl border-2 border-[#e1e6e2] shadow-md hover:shadow-2xl hover:border-[#1f5a45]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1f5a45] to-[#2d7a5e] flex items-center justify-center shadow-lg text-white">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#b8892e]">
                      Core Service
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#123326] mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={`${service.title}-${feature}`} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-[#1f5a45]" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <Link to={service.link}>
                      <Button size="lg" className="w-full bg-[#1f5a45] hover:bg-[#184635] text-white shadow-lg px-6">
                        Read More
                        <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] block">
                — ADDITIONAL SERVICES
              </span>
              <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mt-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123326]">
              Specialized Solutions
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
              Expanding our expertise with specialized equipment and services to meet diverse industrial infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.link}
                className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1f5a45] via-[#b8892e] to-[#1f5a45] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                {/* Card Border */}
                <div className="border-2 border-[#e1e6e2] group-hover:border-[#1f5a45]/40 rounded-2xl transition-colors duration-300">
                  <div className="p-8">
                    {/* Icon Section with decorative elements */}
                    <div className="relative mb-6 flex items-center justify-center">
                      {/* Background decoration */}
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-[#1f5a45]/5 to-[#b8892e]/5 group-hover:scale-110 transition-transform duration-300"></div>
                      
                      {/* Icon container */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#1f5a45]/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-[#1f5a45] to-[#2d7a5e] rounded-2xl flex items-center justify-center transform rotate-0 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                          <div className="text-white transform group-hover:scale-110 transition-transform">{service.icon}</div>
                        </div>
                      </div>
                      
                      {/* Decorative badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#b8892e] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-white text-xs font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold text-[#8b6914] group-hover:text-[#b8892e] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed min-h-[3rem]">
                        {service.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Link to={service.link} className="block mt-6">
                      <Button className="w-full bg-gradient-to-r from-[#1f5a45] to-[#2d7a5e] hover:from-[#184635] hover:to-[#1f5a45] text-white shadow-md group-hover:shadow-lg transition-all">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#1f5a45]">
                    <circle cx="70" cy="70" r="30" fill="currentColor" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Brown/Gold Theme */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#faf8f3] to-[#f5f0e8] overflow-hidden">
        {/* Subtle background elements */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full border-2 border-[#b8892e]/5" />
          <div className="absolute -top-40 -right-40 w-[760px] h-[760px] rounded-full border-2 border-[#b8892e]/5" />
          <div className="absolute left-16 top-16 w-16 h-16 bg-[#b8892e]/5 rounded-lg" />
          <div className="absolute left-28 top-28 w-10 h-10 bg-[#b8892e]/5 rounded-lg" />
          <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-[#b8892e]/15 rounded-full blur-xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] block">
                — OUR PROCESS
              </span>
              <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mt-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123326]">
              Our Work Process
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
              Our systematic approach ensures quality delivery and customer satisfaction in every project through proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center group">
                {/* Icon with connecting line */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#1f5a45] flex items-center justify-center shadow-md">
                    <div className="text-white">{step.icon}</div>
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-br from-[#b8892e] to-[#a57926] text-white text-xs font-bold shadow-md border-2 border-white">
                      {step.step}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#123326]">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {/* Bottom accent line */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-transparent via-[#b8892e] to-transparent mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Gold Band Style */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#b8892e] via-[#c9a04a] to-[#b8892e]" aria-label="Call to action">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80 mb-2">
                — NEED ANY HELP
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Need Boiler Services?
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Button
                onClick={() => navigate("/contact")}
                size="lg"
                className="bg-white text-[#b8892e] hover:bg-white/90 shadow-lg font-semibold px-8"
              >
                Make Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
