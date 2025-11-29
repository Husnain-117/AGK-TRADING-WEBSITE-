import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="AGK Traders Logo" className="h-9 w-9 rounded-full object-contain ring-1 ring-border" />
            <div className="text-lg sm:text-xl font-bold text-foreground hidden sm:block">AGK Trading Company Private Limited</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    to="/"
                    className="px-3 py-2 text-sm font-semibold text-gray-900 rounded-md border-b-2 border-transparent hover:text-[#1f5a45] hover:border-[#b8892e] hover:bg-[#1f5a45]/5 transition-colors"
                  >
                    Home
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent border-b-2 border-transparent hover:text-[#1f5a45] hover:border-[#b8892e] hover:bg-[#1f5a45]/5 transition-colors data-[state=open]:text-[#1f5a45] data-[state=open]:border-[#b8892e] data-[state=open]:bg-[#b8892e]/10">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-2 w-[220px]">
                      <Link
                        to="/about?tab=profile"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Company Profile
                      </Link>
                      <Link
                        to="/about?tab=timeline"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Company Timeline
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent border-b-2 border-transparent hover:text-[#1f5a45] hover:border-[#b8892e] hover:bg-[#1f5a45]/5 transition-colors data-[state=open]:text-[#1f5a45] data-[state=open]:border-[#b8892e] data-[state=open]:bg-[#b8892e]/10">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-2 w-[280px]">
                      <Link
                        to="/products"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors font-semibold"
                      >
                        All Products
                      </Link>
                      <Link
                        to="/products/gas-oil-fired-boilers"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Gas & Oil Fired Boilers
                      </Link>
                      <Link
                        to="/products/water-tube-boilers"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Water Tube Boilers
                      </Link>
                      <Link
                        to="/products/package-type-fire-tube-boilers"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Package Fire Tube Boilers
                      </Link>
                      <Link
                        to="/products/waste-heat-recovery-boilers"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Waste Heat Recovery Boilers
                      </Link>
                      <Link
                        to="/products/thermal-oil-heater"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Thermal Oil Heater
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent border-b-2 border-transparent hover:text-[#1f5a45] hover:border-[#b8892e] hover:bg-[#1f5a45]/5 transition-colors data-[state=open]:text-[#1f5a45] data-[state=open]:border-[#b8892e] data-[state=open]:bg-[#b8892e]/10">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-2 w-[240px]">
                      <Link
                        to="/services"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors font-semibold"
                      >
                        All Services
                      </Link>
                      <Link
                        to="/services/engineering"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Engineering Services
                      </Link>
                      <Link
                        to="/services/after-sales"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        After Sales Services
                      </Link>
                      <Link
                        to="/quote"
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:text-[#1f5a45] hover:bg-[#1f5a45]/5 transition-colors"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link
                      to={link.path}
                      className="px-3 py-2 text-sm font-semibold text-gray-900 rounded-md border-b-2 border-transparent hover:text-[#1f5a45] hover:border-[#b8892e] hover:bg-[#1f5a45]/5 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild variant="secondary" size="sm">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-[#1f5a45] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="py-2 font-medium hover:text-[#1f5a45] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <details>
                <summary className="py-2 font-medium cursor-pointer hover:text-[#1f5a45] transition-colors">About Us</summary>
                <div className="pl-3 pb-2 flex flex-col">
                  <Link
                    to="/about?tab=profile"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Company Profile
                  </Link>
                  <Link
                    to="/about?tab=timeline"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Company Timeline
                  </Link>
                </div>
              </details>
              <details>
                <summary className="py-2 font-medium cursor-pointer hover:text-[#1f5a45] transition-colors">Products</summary>
                <div className="pl-3 pb-2 flex flex-col">
                  <Link
                    to="/products"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    All Products
                  </Link>
                  <Link
                    to="/products/gas-oil-fired-boilers"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Gas & Oil Fired Boilers
                  </Link>
                  <Link
                    to="/products/water-tube-boilers"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Water Tube Boilers
                  </Link>
                  <Link
                    to="/products/package-type-fire-tube-boilers"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Package Fire Tube Boilers
                  </Link>
                  <Link
                    to="/products/waste-heat-recovery-boilers"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Waste Heat Recovery Boilers
                  </Link>
                  <Link
                    to="/products/thermal-oil-heater"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Thermal Oil Heater
                  </Link>
                </div>
              </details>
              <details>
                <summary className="py-2 font-medium cursor-pointer hover:text-[#1f5a45] transition-colors">Services</summary>
                <div className="pl-3 pb-2 flex flex-col">
                  <Link
                    to="/services"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/engineering"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Engineering Services
                  </Link>
                  <Link
                    to="/services/after-sales"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    After Sales Services
                  </Link>
                  <Link
                    to="/quote"
                    className="py-1 text-sm hover:text-[#1f5a45] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </details>
              <Link
                to="/blog"
                className="py-2 font-medium hover:text-[#1f5a45] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Button
                asChild
                size="sm"
                className="w-full mt-2 bg-[#b8892e] hover:bg-[#a57926] text-white border-0 shadow-md hover:shadow-lg transition-colors"
              >
                <Link to="/quote" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
