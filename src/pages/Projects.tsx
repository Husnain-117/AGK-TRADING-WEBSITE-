import { useState } from "react";
import { Button } from "@/components/ui/button";
import aboutTeam from "@/assets/about-team.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ProjectItem {
  image: string;
  title: string;
  location: string;
}

const projects: ProjectItem[] = [
  {
    image: "/Projects/Ravi Rice 01.jpeg.jpg",
    title: "Supplied & Installed Chain Grate Boiler (20 TON/HOUR)",
    location: "Ravi Rice Mill, Okara",
  },
  {
    image: "/Projects/Ravi Rice 02.jpeg.jpg",
    title: "Supplied & Installed Chain Grate Boiler (20 TON/HOUR)",
    location: "Ravi Rice Mill, Okara",
  },
  {
    image: "/Projects/Ghani Ghee-2017.jpeg.jpg",
    title: "Supplied & Installed Boiler Project",
    location: "Ghani Ghee, (2017)",
  },
  {
    image: "/Projects/Sadiq Ghee.jpeg.jpg",
    title: "Supplied and Installed Fixed Bed Boilers and Steam Supply On Biomass Fuel (150 TON/DAY)",
    location: "Sitara Vegetable Oil Mill, Lahore.",
  },
  {
    image: "/Projects/Nishat Dairy.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (130 TON/DAY)",
    location: "Nishat Sutas Dairy Limited, Faisalabad",
  },
  {
    image: "/Projects/Nishat Apparel.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (210 TON/DAY)",
    location: "Nishat Mills Limited (Apparel Division), Lahore",
  },
  {
    image: "/Projects/Nishat Bath.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (260 TON/DAY)",
    location: "Nishat Mills Limited (Bath Division), Lahore",
  },
  {
    image: "/Projects/Pepsi Haidri.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (120 TON/DAY)",
    location: "Haidri Beverages Limited (Pepsi Cola), Islamabad",
  },
  {
    image: "/Projects/Punjab Oil.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (120 TON/DAY)",
    location: "Punjab Oil Mills (Canolive Oil), Islamabad",
  },
  {
    image: "/Projects/8.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (150 TON/DAY)",
    location: "Naubahar Bottling Company Unit #02 (Pepsi Cola), Gujranwala",
  },
  {
    image: "/Projects/9.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (150 TON/DAY)",
    location: "Naubahar Bottling Company Unit #01 (Pepsi Cola), Gujranwala",
  },
  {
    image: "/Projects/Kashmir Oil 01.jpeg.jpg",
    title: "Supplied & Installed Chain Grate & Fixed Bed Boilers & Steam Supply on Biomass Fuel (600 TON/DAY)",
    location: "United Industries (Kashmir Cooking Oil & Banaspati), Faisalabad",
  },
  {
    image: "/Projects/Shahkam 01.jpeg.jpg",
    title: "Supplied & Installed 02 Fixed Bed Boilers & Steam Supply on Biomass Fuel (480 TON/DAY)",
    location: "Shahkam Industries, Lahore",
  },
  {
    image: "/Projects/Manoo Textile.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler & Steam Supply on Biomass Fuel (170 TON/DAY)",
    location: "Manmo Textile Mills, Lahore",
  },
  {
    image: "/Projects/Salva Ghee.jpeg.jpg",
    title: "Supplied & Installed Water Tube Chain Grate Boiler (20 TON/HOUR)",
    location: "Salva Ghee Mill, Okara",
  },
  {
    image: "/Projects/Hi-Tech Oil.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler (22 TON/HOUR)",
    location: "Hi-Tech Edible Oil, Sahiwal",
  },
  {
    image: "/Projects/Muslim Textile.jpeg.jpg",
    title: "Supplied & Installed Chain Grate Boiler (20 TON/HOUR)",
    location: "Muslim Textile Mills, Faisalabad",
  },
  {
    image: "/Projects/Royal Feed.jpeg.jpg",
    title: "Supplied & Installed Fixed Bed Boiler (6 TON/HOUR)",
    location: "Royal Feed Mills, Sahiwal",
  },
  {
    image: "/Projects/M.K Sons.jpeg.jpg",
    title: "Delivered Fire Tube Boiler (25 TON/HOUR)",
    location: "M.K Sons (Pvt) Ltd, Faisalabad",
  },
  {
    image: "/Projects/Punjab Rice.jpeg.jpg",
    title: "Delivered Fire Tube Boiler (08 TON/HOUR)",
    location: "Punjab Rice Mill, Kasur",
  },
  {
    image: "/Projects/Shabbair Paper.jpeg.jpg",
    title: "Delivered Fire Tube Boiler (20 TON/HOUR)",
    location: "Shabbir Paper Mill, Jamber",
  },
  {
    image: "/Projects/Rose Paper.jpeg.jpg",
    title: "Delivered Fire Tube Boiler (10 TON/HOUR)",
    location: "Rose Paper Mill, Sahiwal",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={aboutTeam}
            alt="AGK project installations"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Project References
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Selected installations and deliveries of biomass and conventional fuel boilers across Pakistan.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#f5f7f6] to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1f5a45] mb-3 block">
              — PROJECT PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#123326] mb-2">AGK Trading Company (Pvt) Limited Project List</h2>
            <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, idx) => (
              <button
                key={p.image}
                type="button"
                className="group text-left bg-white rounded-2xl border-2 border-[#e1e6e2] shadow-md hover:shadow-2xl hover:border-[#1f5a45]/40 transition-all duration-300 overflow-hidden flex flex-col"
                onClick={() => setActiveProject(p)}
              >
                <div className="relative h-60 overflow-hidden bg-[#f5f7f6]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/60 via-transparent to-transparent" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Viewer Dialog with details */}
      <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
        <DialogContent className="max-w-5xl bg-[#0b1f17]/95 border-[#1f5a45]/40 p-0 overflow-hidden">
          {activeProject && (
            <div className="relative bg-black">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="px-6 py-4 bg-[#0b1f17] text-white border-t border-white/10">
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#b8892e] mb-1">
                  Installed / Delivered
                </p>
                <p className="text-sm md:text-base font-semibold text-white leading-relaxed">
                  {activeProject.title}
                </p>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed mt-1">
                  {activeProject.location}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
