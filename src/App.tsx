import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
// import Blog from "./pages/Blog"; // Temporarily disabled
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import EngineeringServices from "./pages/EngineeringServices";
import AfterSalesServices from "./pages/AfterSalesServices";
import SteamSupplyServices from "./pages/SteamSupplyServices";
import SparePartsServices from "./pages/SparePartsServices";
import Values from "./pages/Values";
import Projects from "./pages/Projects";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showTopBar = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {showTopBar && <TopBar />}
      <Navbar />
      <main className="flex-grow">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/values" element={<Values />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/engineering" element={<EngineeringServices />} />
              <Route path="/services/after-sales" element={<AfterSalesServices />} />
              <Route path="/services/steam-supply" element={<SteamSupplyServices />} />
              <Route path="/services/spare-parts" element={<SparePartsServices />} />
              <Route path="/products" element={<Products />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              {/* <Route path="/blog" element={<Blog />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
