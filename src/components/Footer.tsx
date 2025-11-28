import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

import heroIndustrial from "@/assets/hero-industrial.jpg";
import productsImage from "@/assets/products-showcase.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground mt-0">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 w-[620px] h-[620px] rounded-full border-2 border-primary-foreground/10" />
        <div className="absolute top-24 left-24 w-16 h-16 bg-primary-foreground/10" />
        <div className="absolute top-40 left-40 w-10 h-10 bg-primary-foreground/10" />
        <div className="absolute -bottom-28 -right-20 w-[480px] h-[480px] rounded-full border-2 border-primary-foreground/10" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About / Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="AK Traders" className="w-10 h-10 rounded-md object-contain ring-1 ring-primary-foreground/20 bg-white" />
              <div>
                <div className="text-lg font-bold">AK Traders</div>
                <div className="text-xs text-primary-foreground/80">Great minds for better services</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/90 leading-relaxed max-w-xs">
              Engineering reliable boiler solutions: steam boilers, thermal oil heaters, fuel conversions, and complete overhauling.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/15 grid place-items-center hover:bg-primary-foreground/25 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/15 grid place-items-center hover:bg-primary-foreground/25 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/15 grid place-items-center hover:bg-primary-foreground/25 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <li><Link to="/about" className="hover:text-white">About Company</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white">News & Updates</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/quote" className="hover:text-white">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-lg font-semibold">Recent News</h3>
            <div className="mt-4 space-y-4">
              {[
                { img: heroIndustrial, title: "Energy savings with waste heat recovery", date: "May, 10 2024" },
                { img: productsImage, title: "Choosing the right thermal oil heater", date: "May, 11 2024" },
              ].map((n, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={n.img} alt="news" className="w-14 h-14 object-cover rounded" />
                  <div className="text-sm">
                    <div className="text-primary-foreground leading-snug line-clamp-1">{n.title}</div>
                    <div className="text-primary-foreground/70 text-xs">Date: {n.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info / Newsletter */}
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <p className="mt-3 text-sm text-primary-foreground/90">Subscribe to get our latest updates & news</p>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-md bg-primary-foreground/10 placeholder-primary-foreground/80 text-primary-foreground px-3 py-2 ring-1 ring-primary-foreground/20 focus:ring-primary-foreground/40 outline-none"
              />
            </div>
            <button
              className="mt-3 inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/90 transition-colors"
              aria-label="Subscribe"
            >
              Subscribe Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-5 space-y-2 text-sm text-primary-foreground/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Faisal Colony Street #01, Plot #01, Arifwala Road, Sahiwal</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>06 km Sahiwal Arifwala Road, Sahiwal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>C.E.O: Mr. Amir Saeed - +92 300 8690691</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>Director: Mr. Mian Ammar Usama - +92 300 4493333, +92 316 4044444</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>agktrading365@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-primary-foreground/10" />
        <p className="mt-4 text-center text-xs text-primary-foreground/80">Copyright © {currentYear} AK Traders. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
