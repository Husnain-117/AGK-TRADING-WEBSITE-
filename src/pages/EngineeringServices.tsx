import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Wrench,
  GaugeCircle as Gauge,
  Factory,
  Flame,
  Package,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { useNavigate } from "react-router-dom";

// Shared product images from Home page
const productImages = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=800&auto=format&fit=crop",
];

const EngineeringServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Industrial Steam Boilers",
      description:
        "High‑efficiency steam boiler systems engineered for safety and performance.",
      features: ["Fire/Water Tube", "Controls & Safety", "High Efficiency", "Custom Fabrication"],
      icon: <Factory className="w-8 h-8 text-white" aria-hidden="true" />,
      image: productImages[0],
    },
    {
      title: "Thermal Oil Heaters",
      description:
        "Precise temperature control for process heating applications with robust safety systems.",
      features: ["High Temp Stability", "Energy Efficient", "Low Maintenance", "Skid Mounted"],
      icon: <Flame className="w-8 h-8 text-white" aria-hidden="true" />,
      image: productImages[1],
    },
    {
      title: "Waste Heat Recovery Boilers",
      description:
        "Capture and utilize exhaust heat to improve overall plant efficiency and reduce costs.",
      features: ["Custom Design", "Heat Exchangers", "Economizers", "Air Pre‑heaters"],
      icon: <Gauge className="w-8 h-8 text-white" aria-hidden="true" />,
      image: productImages[2],
    },
  ];

  const valueBullets = [
    {
      icon: <Shield className="w-6 h-6 text-green-700" aria-hidden="true" />,
      title: "Mission",
      description:
        "Lead with innovative boiler room technology powered by alternative fuels.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-700" aria-hidden="true" />,
      title: "Vision",
      description: "Be the leading global provider of boiler room solutions.",
    },
    {
      icon: <Wrench className="w-6 h-6 text-green-700" aria-hidden="true" />,
      title: "Commitment",
      description: "Work hard and deliver cost‑effective modern technology to industry.",
    },
    {
      icon: <Package className="w-6 h-6 text-green-700" aria-hidden="true" />,
      title: "Responsiveness",
      description: "Act with intention, urgency and responsibility.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Fuel Conversion",
      description: "Conversion solutions for boilers & heaters (solid fuels, biomass, liquid).",
      icon: <Flame className="w-8 h-8 text-green-600" aria-hidden="true" />,
    },
    {
      step: "02",
      title: "Modifications & Upgradation",
      description: "System improvements for safety, efficiency and performance.",
      icon: <Wrench className="w-8 h-8 text-green-600" aria-hidden="true" />,
    },
    {
      step: "03",
      title: "Overhauling",
      description: "Complete overhauling services with expert supervision.",
      icon: <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />,
    },
    {
      step: "04",
      title: "Auxiliary & Spares",
      description: "Pressure vessels, tanks, heat exchangers, valves, pumps, tubes & fittings.",
      icon: <Package className="w-8 h-8 text-green-600" aria-hidden="true" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Consistent with Products/About */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK Engineering Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Complete Industrial Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Engineering Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Industrial steam boilers, thermal oil heaters, waste heat recovery, upgrades and spares.
          </p>
        </div>
      </section>

      {/* Values - Minimal Professional Cards */}
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
            {valueBullets.map((v) => (
              <div 
                key={v.title} 
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1f5a45]/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#1f5a45] flex items-center justify-center shadow-sm">
                      <div className="text-white">{v.icon}</div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#b8892e] to-[#a57926] border-2 border-white shadow-sm"></div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Professional Design */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f5f7f6] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] block">
                — WHAT WE OFFER
              </span>
              <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mt-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123326]">Our Services</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              End‑to‑end engineering services: design, fabrication, upgrades and reliable after‑sales support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl border-2 border-[#e1e6e2] shadow-lg hover:shadow-2xl hover:border-[#1f5a45]/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-56 overflow-hidden bg-[#f5f7f6]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1f5a45] to-[#2d7a5e] flex items-center justify-center shadow-lg">
                      {s.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#123326] mb-3">{s.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
                  <Button className="w-full bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Brown/Gold Theme */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#faf8f3] to-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] block">
                — OUR PROCESS
              </span>
              <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mt-2" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#123326]">How We Work</h2>
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

      {/* Spare Parts Overview - now handled by dedicated Spare Parts Services page */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-3 block">
              — SPARE PARTS SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">Boiler Components & Spare Parts</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              AGK provides a complete range of boiler components and spare parts through a dedicated service line.
              Explore categorized spare parts, boiler house accessories, environment protection equipment and auxiliary
              equipment on our Spare Parts Services page.
            </p>
            <Button
              onClick={() => navigate("/services/spare-parts")}
              size="lg"
              className="bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md px-8"
            >
              View Spare Parts Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
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
                — NEED ANY HELP
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Need Engineering Services?
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

export default EngineeringServices;
