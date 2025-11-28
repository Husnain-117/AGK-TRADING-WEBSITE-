import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 whitespace-nowrap overflow-x-auto no-scrollbar">
          <div className="hidden md:flex items-center gap-2 opacity-95">
            <Phone size={16} /> <span>+92 300 8690691</span>
          </div>
          <div className="hidden lg:flex items-center gap-2 opacity-95">
            <MapPin size={16} /> <span>Faisal Colony Street #01 , Plot #01 Arifwala Raod Sahiwal,  Pakistan</span>
          </div>
          <div className="flex items-center gap-2 opacity-95">
            <Mail size={16} /> <span>agktrading365@gmail.com </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-primary-foreground/90">Follow Us</span>
          <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Twitter size={16} />
          </a>
          <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
            <Linkedin size={16} />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default TopBar;
