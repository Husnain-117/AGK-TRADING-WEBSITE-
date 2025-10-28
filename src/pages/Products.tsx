import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import productsImage from "@/assets/products-showcase.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      name: "Precision CNC Component",
      category: "Manufacturing",
      description: "High-precision machined component for aerospace and automotive applications. Meets ISO 9001 standards.",
      price: "$299",
      image: productsImage
    },
    {
      name: "Industrial Automation System",
      category: "Automation",
      description: "Complete PLC-based automation solution with touchscreen HMI and remote monitoring capabilities.",
      price: "$4,999",
      image: productsImage
    },
    {
      name: "Quality Control Sensor",
      category: "Testing",
      description: "Advanced laser-based measurement sensor with sub-micron accuracy for quality assurance.",
      price: "$1,299",
      image: productsImage
    },
    {
      name: "Hydraulic Press System",
      category: "Manufacturing",
      description: "Heavy-duty hydraulic press with programmable force control and safety interlocks.",
      price: "$12,999",
      image: productsImage
    },
    {
      name: "Conveyor Belt Assembly",
      category: "Logistics",
      description: "Modular conveyor system with variable speed control and customizable configurations.",
      price: "$3,499",
      image: productsImage
    },
    {
      name: "Robotic Welding Arm",
      category: "Automation",
      description: "6-axis industrial robot for precision welding applications with vision guidance system.",
      price: "$24,999",
      image: productsImage
    },
    {
      name: "Material Testing Kit",
      category: "Testing",
      description: "Comprehensive material testing equipment including hardness testers and microscopes.",
      price: "$2,799",
      image: productsImage
    },
    {
      name: "Industrial 3D Printer",
      category: "Manufacturing",
      description: "Large-format metal 3D printer for rapid prototyping and small-batch production.",
      price: "$49,999",
      image: productsImage
    },
    {
      name: "Smart Inventory System",
      category: "Logistics",
      description: "RFID-based inventory tracking system with real-time data analytics and cloud integration.",
      price: "$6,999",
      image: productsImage
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium industrial products engineered for excellence and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
              <div className="text-center mt-8 text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
