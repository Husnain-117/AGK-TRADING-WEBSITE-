 import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import aboutTeam from "@/assets/about-team.jpg";
import { ArrowRight, CheckCircle, Package, Wrench, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SparePartsServices = () => {
  const navigate = useNavigate();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = [
    {
      title: "Boiler Spare Parts",
      description:
        "Essential boiler spares including furnace flue sections, expansion bellows, feed water & thermal oil pumps, mounting fittings and safety valves.",
      bullets: [
        "Mounting Fitting",
        "Safety Valve",
        "Stop Valve",
        "Blowdown Valve",
      ],
      images: [1, 2, 3, 4],
    },
    {
      title: "Feed Water Pump & Fitting",
      description:
        "Feed water and thermal oil pumps with associated valves and fittings for reliable circulation and control.",
      bullets: [
        "Feed Water & Thermal Oil Pump",
        "Strainer Valve",
        "Globe Valve",
        "Gate Valve",
      ],
      images: [5, 6, 7, 8],
    },
    {
      title: "Environment Protection Equipment",
      description:
        "Air pollution control equipment to help plants meet environmental and EPA-compliant emission standards.",
      bullets: [
        "Multi-cyclone dust collectors",
        "Wet scrubbers and gas washing units",
        "Bag filters and ESP systems",
        "Flue gas ducts and expansion joints",
      ],
      images: [9, 10, 11, 12],
    },
    {
      title: "Boiler House Accessories",
      description:
        "Key equipment installed around the boiler such as tanks, heat exchangers and steam headers.",
      bullets: [
        "Feed Water Tank",
        "Heat-Exchanger",
        "Super Heater",
        "Steam Header",
      ],
      images: [13, 14, 15, 16],
    },
    {
      title: "Chain Grate Spare Parts",
      description:
        "Specialized components and wearing parts for chain grate firing systems and their internal mechanisms.",
      bullets: [
        "Chain Grate",
        "CG Internal Parts",
        "Chain Grate Parts",
        "Feeding Damper",
      ],
      images: [17, 18, 19, 20],
    },
    {
      title: "Fuel Feeding & Ash Conveyor",
      description:
        "Fuel feeding and ash handling conveyors that ensure safe, continuous and clean boiler operation.",
      bullets: [
        "Feeding Belt Conveyor",
        "Feeding Elevator",
        "ASH Conveyor",
        "ASH Screw Worm",
      ],
      images: [21, 22, 23, 24],
    },
    {
      title: "Boiler Auxiliary Equipment",
      description:
        "Critical auxiliaries that support efficient heat recovery and air movement in the boiler plant.",
      bullets: [
        "Economizers",
        "Air Pre Heaters",
        "I-D Fan",
        "F-D Fan",
      ],
      images: [25, 26, 27, 28],
    },
    {
      title: "Instrumentation for Boiler",
      description:
        "Instrumentation and metering devices for monitoring flow, level and performance of boiler systems.",
      bullets: [
        "Steam Flow Meter",
        "Water Flow Meter",
        "Thermal Oil Meter",
        "Boiler Mobrey Water Level",
      ],
      images: [29, 30, 31, 32],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Consistent with other services */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK Spare Parts Services"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Boiler Components & Spare Parts
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Spare Parts Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Genuine industrial boiler components, house accessories and auxiliary equipment supplied and supported by
            AGK Trading Company Private Limited.
          </p>
        </div>
      </section>

      {/* Overview Section - inspired by reference spare parts copy */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f5f7f6] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-3 block">
                — SPARE PARTS OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">Industrial Boiler Components & Spare Parts</h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                We provide spare parts for every type of industrial boiler, oil heater, steam generator, chain grate and
                biomass fuel firing systems. In addition, we offer a bespoke parts service for a wide range of items
                manufactured and supplied to our customers&apos; exact specifications.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                AGK Industrial Services helps you address the challenge of short and medium-term parts supply by
                pre-determining a list of essential spare parts and recommended spares holding, tailored to each
                customer&apos;s operational and maintenance needs.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Process industries depend on the timely supply of spare parts to keep operations safe, reliable and
                profitable over the full lifetime of their equipment. A comprehensive stock of genuine spares minimizes
                downtime by ensuring the correct parts are readily available. AGK Industrial Services provides a complete
                line of boiler peripherals and auxiliary equipment to support this objective.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Complete Boiler Peripherals</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    One-stop source for boiler room peripherals, auxiliaries and replacement items from trusted
                    manufacturers.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Planned Spares Holding</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Support for defining critical spares lists so that maintenance teams always have required parts on
                    hand.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#1f5a45] flex items-center justify-center text-white flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#123326] mb-1">Genuine & Reliable</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Use of tested, reliable components to protect boiler integrity, safety and long-term efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spare Parts Categories - moved from Engineering Services, 4 images per category */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-4 block">
              — SPARE PARTS CATALOG
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-4">
              Categorized Boiler Components & Accessories
            </h2>
            <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full mb-6" />
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              Clearly structured categories to help you quickly identify the right spare parts, accessories and
              auxiliaries for your boiler plant.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.title} className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] gap-6 items-stretch">
                <div className="bg-[#f5f7f6] rounded-xl p-6 md:p-8 border border-[#e1e6e2] flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#123326] mb-3">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{cat.description}</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {cat.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-[#fafafa] rounded-xl p-4 border border-[#e1e6e2] flex items-center justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-xl">
                    {cat.images.map((num) => (
                      <div
                        key={num}
                        className="w-full h-24 rounded-lg overflow-hidden bg-[#f5f7f6] border border-[#e1e6e2] cursor-pointer group"
                        onClick={() => {
                          setActiveImage(`/Spare Parts/${num}.jpeg.jpg`);
                          setIsViewerOpen(true);
                        }}
                      >
                        <img
                          src={`/Spare Parts/${num}.jpeg.jpg`}
                          alt={`${cat.title} ${num}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              Request Parts Catalog
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Image Viewer Dialog */}
      <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
        <DialogContent className="max-w-4xl bg-[#0b1f17]/95 border-[#1f5a45]/40 p-0 overflow-hidden">
          {activeImage && (
            <div className="relative">
              <img
                src={activeImage}
                alt="Spare part detail"
                className="w-full max-h-[80vh] object-contain bg-black"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

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
                Need Boiler Spare Parts Support?
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

export default SparePartsServices;
