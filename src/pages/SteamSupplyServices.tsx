import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { ArrowRight, CheckCircle, Flame, Factory, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const biomassProjects = [
  "Nishat Sutas Dairy Ltd., Faisalabad (Since 2024)",
  "Punjab Oil Mills (Canolive Oil), Islamabad (Since 2011)",
  "N.B.C Unit No. 01 (Pepsi Cola), Model Town Gujranwala (Since 2013)",
];

const SteamSupplyServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent with other services */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="Steam supply services by AGK"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Rental Steam Supply Services
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Steam Supply Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Biomass and conventional fuel based rental steam solutions for industrial plants, engineered and operated
            by AGK Trading Company Private Limited.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f5f7f6] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-3 block">
                — SERVICE OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">
                Reliable Steam Supply on Biomass & Conventional Fuels
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                AGK Trading Company Private Limited (Pvt.) Ltd. is a pioneer in rental steam supply services powered by
                biomass and conventional fuels. We design, install and operate complete steam generation systems at
                client sites, allowing industries to focus on their core operations while we take full responsibility
                for safe, efficient and environmentally compliant steam supply.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                From sizing and engineering of boiler plants to operation, maintenance and fuel management, AGK provides
                a turnkey steam solution with guaranteed performance, emission monitoring and continuous optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Turnkey Steam Plants</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete boiler house including biomass-fired units, fuel handling, water treatment and controls
                    engineered, installed and run by AGK.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Biomass Fuel Expertise</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Experience with a wide range of biomass fuels and blends, ensuring stable combustion, efficiency and
                    compliance with emission limits.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Environment & Compliance</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Continuous emission testing and reporting to help customers meet EPA-compliant environmental
                    standards and corporate sustainability targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biomass Steam Supply Showcase - adapted from About */}
      <section className="pb-16 md:pb-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Steam Supply on Biomass Fuel</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                AGK operates large-scale biomass steam systems across multiple industrial sites, delivering audited and
                documented steam supply with full safety, quality and environmental compliance.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full border border-[#b8892e]/40 bg-[#fdf5e6] px-4 py-2 text-xs font-semibold tracking-widest uppercase text-[#1f5a45] shadow-sm whitespace-nowrap">
              Proven Biomass Steam Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {biomassProjects.map((project, index) => (
              <div
                key={project}
                className="h-48 rounded-xl border-2 border-border bg-card shadow-md hover:shadow-xl hover:border-[#1f5a45] transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1f5a45] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground leading-tight line-clamp-2">
                      {project}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-px bg-border/50" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Biomass-based steam supply with full compliance to international audit and safety requirements.
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-auto pt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-muted-foreground">Active Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-3 block">
              — WHY STEAM SUPPLY WITH AGK
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-2">Key Benefits</h2>
            <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["No upfront boiler investment", "Performance-based commercial model", "24/7 operations & maintenance", "Fuel sourcing & handling by AGK", "Emission monitoring & reporting", "Scalable capacity for expansion"].map(
              (benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-[#e1e6e2] bg-[#f5f7f6] p-5 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#1f5a45] mt-0.5" />
                  <p className="text-sm text-[#123326] leading-relaxed">{benefit}</p>
                </div>
              )
            )}
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
                Discuss Your Steam Supply Requirements
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

export default SteamSupplyServices;
