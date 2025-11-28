import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

// Shared product images from Home page
const productImages = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1627807452369-a2cd0b5ca56f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1664087783968-0cd7deee8390?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
];

const Products = () => {
  const products = [
    {
      id: "gas-oil-boilers",
      name: "Gas & Oil Fired Boilers",
      slug: "gas-oil-fired-boilers",
      shortDescription:
        "High-efficiency package type and water tube steam boilers designed for faster steam production, superior heat transfer, and long-term industrial reliability.",
      highlights: [
        "Wet Back & Dry Back Fire Tube",
        "A-Type, D-Type & O-Type Water Tube",
        "Capacity: 03 TPH to 25 TPH",
        "Multi-fuel capability"
      ],
      image: productImages[0]
    },
    {
      id: "water-tube-boilers",
      name: "Water Tube Boilers",
      slug: "water-tube-boilers",
      shortDescription:
        "Advanced thermal engineering with high-efficiency fuel combustion for heavy industrial applications. Engineered for Pakistani coal, imported coal, and all major biomass fuels.",
      highlights: [
        "Double Drum & Single Drum",
        "Chain Grate & Fluidized Bed",
        "Capacity: 10 TPH to 30 TPH",
        "24/7 stable operation"
      ],
      image: productImages[1]
    },
    {
      id: "package-fire-tube",
      name: "Package Type Fire Tube Boilers",
      slug: "package-type-fire-tube-boilers",
      shortDescription:
        "Perfect balance of durability, ease of operation, and economical steam production. Built with robust shell-and-tube design for uniform heating and steady steam output.",
      highlights: [
        "Three-Pass Fire Tube Design",
        "Fixed Bed, Chain Grate & Fluidized Bed",
        "Capacity: 03 TPH to 25 TPH",
        "Coal & biomass compatible"
      ],
      image: productImages[2]
    },
    {
      id: "waste-heat-recovery",
      name: "Waste Heat Recovery Steam Boilers",
      slug: "waste-heat-recovery-boilers",
      shortDescription:
        "Complete solutions for waste heat recovery systems that convert waste heat from various processes into useful thermal energy and steam, dramatically improving efficiency.",
      highlights: [
        "Smoke Tube & Water Tube",
        "Capacity: 05 TPH to 10 TPH",
        "Reduced pollution & costs",
        "Maintenance-free operation"
      ],
      image: productImages[3]
    },
    {
      id: "thermal-oil-heater",
      name: "Thermal Oil Heater",
      slug: "thermal-oil-heater",
      shortDescription:
        "Highly efficient thermal oil heater with heat conduction oil circulation for safe, low-pressure (1.0 MPa) and high-temperature (350℃) operation across diverse industries.",
      highlights: [
        "Horizontal & Vertical Types",
        "Capacity: 05 to 14 MKCAL",
        "Multi-fuel capability",
        "Fully automatic operation"
      ],
      image: productImages[4]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src={productsImage}
            alt="AGK industrial boilers"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#123326]/90 via-[#1f5a45]/80 to-[#0b1f17]/90" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#fdf5e6] mb-4">
            Industrial Steam Solutions
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            High-efficiency boilers, thermal oil heaters, and waste heat recovery systems engineered for reliability, performance, and fuel economy.
          </p>
        </div>
      </section>

      {/* Products Section - Alternating Layout */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#f5f7f6] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123326]/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f5a45]/90 backdrop-blur-sm text-white text-xs font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        AGK Certified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#123326] mb-4">
                      {product.name}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-[#1f5a45] uppercase tracking-wide">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[#b8892e] flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="bg-[#1f5a45] hover:bg-[#184635] text-white shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <Link to={`/products/${product.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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
                Need a Custom Solution?
              </h2>
            </div>
            <div className="flex-shrink-0">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#b8892e] hover:bg-white/90 shadow-lg font-semibold px-8"
              >
                <Link to="/quote">
                  Request a Quote
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

export default Products;
