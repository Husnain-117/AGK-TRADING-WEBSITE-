import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Download } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

type ProductDetailData = {
  name: string;
  slug: string;
  heroImage: string;
  description: string;
  capacity: string;
  keyFeatures: string[];
  conclusion: string;
  images: string[];
  boilerTypes?: string[];
  fuelTypes?: string[];
  coalTypes?: string[];
  biomassFuelTypes?: string[];
  firingSystem?: string[];
  oilHeaterTypes?: string[];
};

// Real product images organized by category
const gasOilBoilerImages = [
  "/Gas & Oil Steam Boiler/1.jpeg.jpg",
  "/Gas & Oil Steam Boiler/2.jpeg.jpg",
  "/Gas & Oil Steam Boiler/3.jpeg.jpg",
  "/Gas & Oil Steam Boiler/4.jpeg.jpg",
  "/Gas & Oil Steam Boiler/5.jpeg.jpg",
  "/Gas & Oil Steam Boiler/6.jpeg.jpg",
];

const waterTubeBoilerImages = [
  "/Water Tube Steam Boiler/1.jpeg.jpg",
  "/Water Tube Steam Boiler/2.jpeg.jpg",
  "/Water Tube Steam Boiler/3.jpeg.jpg",
  "/Water Tube Steam Boiler/4.jpeg.jpg",
  "/Water Tube Steam Boiler/5.jpeg.jpg",
  "/Water Tube Steam Boiler/6.jpeg.jpg",
  "/Water Tube Steam Boiler/7.jpeg.jpg",
  "/Water Tube Steam Boiler/8.jpeg.jpg",
];

const packageFireTubeImages = [
  "/Package Fire Tube Steam Boiler/1.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/2.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/3.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/4.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/5.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/6.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/7.jpeg.jpg",
  "/Package Fire Tube Steam Boiler/8.jpeg.jpg",
];

const wasteHeatBoilerImages = [
  "/Waste Heat Steam Boiler/1.jpeg.jpg",
  "/Waste Heat Steam Boiler/2.jpeg.jpg",
  "/Waste Heat Steam Boiler/3.jpeg.jpg",
  "/Waste Heat Steam Boiler/4.jpeg.jpg",
  "/Waste Heat Steam Boiler/5.jpeg.jpg",
];

const thermalOilHeaterImages = [
  "/Thermal Oil Heater/1.jpeg.jpg",
  "/Thermal Oil Heater/2.jpeg.jpg",
  "/Thermal Oil Heater/3.jpeg.jpg",
  "/Thermal Oil Heater/4.jpeg.jpg",
  "/Thermal Oil Heater/5.jpeg.jpg",
  "/Thermal Oil Heater/6.jpeg.jpg",
  "/Thermal Oil Heater/7.jpeg.jpg",
  "/Thermal Oil Heater/8.jpeg.jpg",
  "/Thermal Oil Heater/9.jpeg.jpg",
  "/Thermal Oil Heater/10.jpeg.jpg",
];

// Product database with full details
const productDatabase: Record<string, ProductDetailData> = {
  "gas-oil-fired-boilers": {
    name: "Gas & Oil Water Tube & Package Type Steam Boiler",
    slug: "gas-oil-fired-boilers",
    heroImage: "/Gas & Oil Steam Boiler/3.jpeg.jpg",
    description:
      "AGK offering high-quality package type and water tube steam boilers designed for faster steam production, high heat transfer efficiency, and long-term industrial reliability. Package boilers utilize a compact, internally fired shell-type furnace that delivers high heat release rates and quick evaporation, while water tube boilers provide superior performance through water circulation inside tubes and flue gases passing over them, ensuring higher pressure capability, rapid load response, and improved thermal efficiency. Both boiler designs offer excellent fuel economy, compact engineering space requirements, and easy, inexpensive maintenance, making them suitable for a wide range of industrial steam applications.",
    boilerTypes: [
      "Wet Back Fire Tube",
      "Dry Back Fire Tube",
      "A-Type Water Tube",
      "D-Type Water Tube",
      "O-Type Water Tube"
    ],
    capacity: "03 TPH UP TO 25 TPH",
    fuelTypes: ["Natural Gas", "Light Oil", "Heavy Oil", "Multi Fuels"],
    keyFeatures: [
      "Highly Efficient",
      "Inexpensive Maintenance",
      "Easy Installation",
      "Less Operational Manpower",
      "Compact Design"
    ],
    conclusion:
      "AGK gas and oil-fired boilers are engineered to ensure maximum fuel efficiency, reduced operating costs, and reliable steam output, making them the ideal choice for industries that prioritize performance, energy savings, and long-term operational reliability.",
    images: gasOilBoilerImages
  },
  "water-tube-boilers": {
    name: "Water Tube Boilers",
    slug: "water-tube-boilers",
    heroImage: "/Water Tube Steam Boiler/1.jpeg.jpg",
    description:
      "AGK Water Tube Boilers combine advanced thermal engineering with high-efficiency fuel combustion to deliver powerful performance for heavy industrial applications. Designed with a large radiant furnace, optimized water circulation, and low-velocity flue gas flow, these boilers ensure rapid steam generation and exceptional heat transfer. The use of wear-resistant water walls and advanced abrasion-proof tube technology significantly reduces erosion, extending boiler lifespan even under harsh operating conditions. Engineered to operate seamlessly on Pakistani coal, imported coal, and all major biomass fuels—including wood chips, rice husk, bagasse, and pellets—these boilers deliver consistent high combustion efficiency with reduced emissions. Their stable 24/7 operation, high steam purity, and strong load-handling capability make them ideal for textile, chemical, refinery, pharmaceutical, paper & board, and other high-pressure industrial sectors seeking reliability, efficiency, and long-term fuel savings.",
    boilerTypes: ["Water Tube (Double Drum)", "Water Tube (Single Drum)"],
    firingSystem: ["Chain Grate", "Fluidized Bed"],
    capacity: "10 TPH UP TO 30 TPH",
    coalTypes: [
      "Imported & Local",
      "Indonesian Coal",
      "South African Coal",
      "Afghanistan Coal",
      "Baluchistan Coal",
      "Coal Size: 0 to 50 mm",
      "Best Size: 10 to 25 mm"
    ],
    biomassFuelTypes: [
      "Rice Husk",
      "Corn Cob",
      "Mustard Waste",
      "Sesame Waste",
      "Sugarcane",
      "Wheat Straw",
      "Cotton Stacks",
      "Wood Chips"
    ],
    keyFeatures: [
      "High steam capacity with rapid steam generation",
      "Excellent heat transfer and fuel efficiency",
      "Stable performance at high pressure",
      "Strong, durable, and corrosion-resistant design",
      "Advanced combustion system for coal and biomass",
      "Low maintenance with long operational life",
      "Reliable and consistent steam supply for continuous processes"
    ],
    conclusion:
      "AGK water tube boilers are engineered to provide maximum fuel utilization, lower operating costs, and dependable steam, making them an ideal choice for industries focused on performance and efficiency.",
    images: waterTubeBoilerImages
  },
  "package-type-fire-tube-boilers": {
    name: "Package Type Fire Tube Boilers",
    slug: "package-type-fire-tube-boilers",
    heroImage: "/Package Fire Tube Steam Boiler/1.jpeg.jpg",
    description:
      "AGK Fire Tube Boilers are engineered to provide a perfect balance of durability, ease of operation, and economical steam production. Built with a robust shell-and-tube design, these boilers ensure uniform heating and steady steam output while keeping maintenance simple and cost-efficient. The fire-tube configuration maximizes heat retention, resulting in improved thermal efficiency and reduced fuel consumption. Designed for multi-fuel flexibility, these boilers perform efficiently on coal and biomass fuels such as wood logs, wood chips, pellets, rice husk, and bagasse. Their strong construction, stable combustion system, and user-friendly operation make them a preferred choice for textile, food processing, dyeing, beverage, feed mills, and paper industries. With reliable operation, fast steam response, and low operating costs, AGK Fire Tube Boilers offer an ideal solution for medium-pressure industrial steam requirements.",
    boilerTypes: ["Package Type Fire Tube Three Pass"],
    firingSystem: ["Fixed Bed", "Chain Grate", "Fluidized Bed"],
    capacity: "03 TPH UP TO 25 TPH",
    coalTypes: [
      "Imported & Local",
      "Indonesian Coal",
      "South African Coal",
      "Afghanistan Coal",
      "Baluchistan Coal",
      "Coal Size: 0 to 50 mm",
      "Best Size: 10 to 25 mm"
    ],
    biomassFuelTypes: [
      "Rice Husk",
      "Corn Cob",
      "Mustard Waste",
      "Sesame Waste",
      "Sugarcane",
      "Wheat Straw",
      "Cotton Stacks",
      "Wood Chips"
    ],
    keyFeatures: [
      "High thermal efficiency with three-pass heat exchange",
      "Fast steam production and stable operation",
      "Compact, user-friendly design",
      "Lower fuel consumption with improved heat absorption",
      "Strong, durable, corrosion-resistant construction",
      "Compatible with coal and multiple biomass fuels",
      "Low maintenance and long operating life"
    ],
    conclusion:
      "AGK fire tube boilers deliver reliable steam, lower operating costs, and uninterrupted performance, making them a trusted choice for diverse industrial applications.",
    images: packageFireTubeImages
  },
  "waste-heat-recovery-boilers": {
    name: "Waste Heat Recovery Steam Boilers",
    slug: "waste-heat-recovery-boilers",
    heroImage: "/Waste Heat Steam Boiler/1.jpeg.jpg",
    description:
      "AGK offers complete solutions for Waste Heat Recovery Boilers, Waste Heat Recovery Boiler is a system which recovers various kinds of waste heat generated from the different Processes, and convert such recovered heat into useful and effective thermal energy/Steam. Waste Heat Recovery Boiler is contributing to industrial society in terms of improvement of thermal efficiency, energy saving, environmental protection etc. The waste heat recovery process will add to the efficiency of the process, the efficiency is increased and thus the costs of fuel and energy consumption needed for that process is decreased. On the other hand, air pollution will dramatically decrease because less flue gases of high temperature are emitted from the plant to the atmosphere. AGK Provided Waste Heat Recovery Boilers (WHRB) are fully packaged industrial boilers equipped with advanced instrumentation to deliver maximum possible heat recovery.",
    boilerTypes: ["Smoke Tube Steam Boiler", "Water Tube Steam Boiler"],
    capacity: "05 TPH UP TO 10 TPH",
    fuelTypes: [
      "Thermal Oil Heater Waste Flue Gasses",
      "Engines Waste Flue Gasses",
      "Boilers Waste Flue Gasses",
      "Turbines Waste Flue Gasses"
    ],
    keyFeatures: [
      "Reduced Pollution",
      "Waste Reduction",
      "Highly Efficient",
      "Increased Plant Efficiency",
      "Reduced Production Cost",
      "Resource Conservation",
      "Maintenance Free"
    ],
    conclusion:
      "AGK Waste Heat Recovery Boilers deliver maximum energy savings, enhanced plant efficiency, and long-term operational reliability, making them a smart choice for industries aiming for sustainable growth.",
    images: wasteHeatBoilerImages
  },
  "thermal-oil-heater": {
    name: "Thermal Oil Heater",
    slug: "thermal-oil-heater",
    heroImage: "/Thermal Oil Heater/6.jpeg.jpg",
    description:
      "AGK highly efficient Thermal Oil Heater is the heat carrier with heat conduction oil, the circulating pump force heat transfer medium circulating in liquid phase, and transfer heat to heat user equipment, then return to the heating furnace for reheating. It is safe and low energy consumption boiler with working characteristics of low pressure (1.0 MPa) and high temperature (350℃). The boiler medium is working under liquid state, so it is safe and reliable. Thermal oil boiler is opted instead of steam boiler for industrial production, to improve productivity. AGK provided thermal oil boilers are widely used for textile printing and dyeing industry, petroleum chemical industry, Oleochemical industry, Synthetic fiber industry, plastic and rubber industry etc.",
    oilHeaterTypes: ["Horizontal Oil Heaters", "Vertical Oil Heaters", "Oil & Gas Fired Type"],
    capacity: "05 MKCAL UPTO 14 MKCAL",
    fuelTypes: [
      "Coal Imported & Local",
      "Biomass",
      "Natural Gas",
      "Light Oil",
      "Heavy Oil",
      "Multi Fuels"
    ],
    keyFeatures: [
      "Highly Efficient",
      "Installation Flexibility",
      "Minimal Maintenance",
      "Lower Operational Costs",
      "Less Operational Manpower",
      "Compact Design",
      "Fully Automatic"
    ],
    conclusion:
      "AGK Thermal Oil Heaters provide energy savings, process optimization, and reliable heating solutions, making them an ideal choice for industries seeking efficiency, safety, and sustainability.",
    images: thermalOilHeaterImages
  }
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productDatabase[slug as keyof typeof productDatabase] : null;
  const [currentSpecCard, setCurrentSpecCard] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  // Build specification cards array dynamically
  const specCards = [];
  if (product.boilerTypes) {
    specCards.push({
      title: "Boiler Types",
      items: product.boilerTypes
    });
  }
  if (product.fuelTypes) {
    specCards.push({
      title: "Fuel Types",
      items: product.fuelTypes
    });
  }
  if (product.coalTypes) {
    specCards.push({
      title: "Coal Types",
      items: product.coalTypes
    });
  }
  if (product.biomassFuelTypes) {
    specCards.push({
      title: "Biomass Fuel Types",
      items: product.biomassFuelTypes
    });
  }
  if (product.firingSystem) {
    specCards.push({
      title: "Firing System",
      items: product.firingSystem
    });
  }
  if (product.oilHeaterTypes) {
    specCards.push({
      title: "Oil Heater Types",
      items: product.oilHeaterTypes
    });
  }

  const nextCard = () => {
    setCurrentSpecCard((prev) => (prev + 1) % specCards.length);
  };

  const prevCard = () => {
    setCurrentSpecCard((prev) => (prev - 1 + specCards.length) % specCards.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Product Image */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/95 via-[#1f5a45]/85 to-[#0b1f17]/95" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            asChild
            variant="ghost"
            className="mb-6 text-white/80 hover:text-white hover:bg-white/10"
          >
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#b8892e]/20 backdrop-blur-sm border border-[#b8892e]/40 text-[#fdf5e6] text-sm font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            AGK Certified Industrial Equipment
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Description */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#123326]">Product Overview</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications Carousel - One card at a time */}
            <div className="relative">
              {/* Capacity Card - Always visible */}
              <div className="rounded-2xl border-2 border-[#e1e6e2] bg-white p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow mb-8">
                <h3 className="text-lg font-bold text-[#1f5a45] mb-4">Capacity Range</h3>
                <p className="text-3xl font-bold text-[#123326]">{product.capacity}</p>
              </div>

              {/* Carousel for other spec cards */}
              {specCards.length > 0 && (
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${currentSpecCard * 100}%)` }}
                    >
                      {specCards.map((card, idx) => (
                        <div key={idx} className="w-full flex-shrink-0">
                          <div className="rounded-2xl border-2 border-[#1f5a45]/30 bg-gradient-to-br from-white to-[#f9fafb] p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 min-h-[280px]">
                            <h3 className="text-xl font-bold text-[#1f5a45] mb-6">{card.title}</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {card.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="w-5 h-5 text-[#b8892e] flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  {specCards.length > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <button
                        onClick={prevCard}
                        className="p-3 rounded-full bg-[#1f5a45] text-white hover:bg-[#184635] shadow-md hover:shadow-lg transition-all duration-300"
                        aria-label="Previous specification"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div className="flex gap-2">
                        {specCards.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSpecCard(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentSpecCard
                                ? "w-8 bg-[#1f5a45]"
                                : "w-2 bg-[#e1e6e2] hover:bg-[#b8892e]"
                            }`}
                            aria-label={`Go to specification ${idx + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextCard}
                        className="p-3 rounded-full bg-[#1f5a45] text-white hover:bg-[#184635] shadow-md hover:shadow-lg transition-all duration-300"
                        aria-label="Next specification"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Key Features */}
            <div className="rounded-2xl border-2 border-[#1f5a45]/20 bg-gradient-to-br from-[#f0f4f2] to-white p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#123326] mb-6">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {product.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-[#1f5a45] flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Gallery - Professional Card Layout */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#123326]">Product Gallery</h2>
                <div className="h-1 w-20 bg-[#b8892e] mx-auto rounded-full" />
                <p className="text-sm md:text-base text-muted-foreground mt-4">
                  Browse through our comprehensive collection showcasing quality workmanship and professional excellence.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-[#e1e6e2] cursor-pointer"
                    onClick={() => {
                      setActiveImage(img);
                      setIsViewerOpen(true);
                    }}
                  >
                    <div className="relative h-56 overflow-hidden bg-[#f5f7f6]">
                      <img
                        src={img}
                        alt={`${product.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/60 via-transparent to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
              <Dialog open={isViewerOpen} onOpenChange={setIsViewerOpen}>
                <DialogContent className="max-w-4xl bg-[#0b1f17]/95 border-[#1f5a45]/40 p-0 overflow-hidden">
                  {activeImage && (
                    <div className="relative">
                      <img
                        src={activeImage}
                        alt={product.name}
                        className="w-full max-h-[80vh] object-contain bg-black"
                      />
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </div>

            {/* Conclusion */}
            <div className="rounded-2xl bg-[#1f5a45] text-white p-8 md:p-10">
              <p className="text-base md:text-lg leading-relaxed">{product.conclusion}</p>
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
                — NEED ANY HELP
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Need Boiler Services?
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#b8892e] hover:bg-white/90 shadow-lg font-semibold px-8"
              >
                <Link to="/quote">
                  Make Appointment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
