import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "#home", label: "Ana Sayfa" },
    { href: "#counter", label: "Sayılarımız" },
    { href: "#gallery", label: "Anılar" },
    { href: "#timeline", label: "Hikayemiz" },
    { href: "#reasons", label: "Nedenler" },
    { href: "#letters", label: "Mektuplar" },
    { href: "#fortune", label: "Fal Bak" },
    { href: "#tarot", label: "Tarot" },
    { href: "#contact", label: "Mesaj" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="font-script text-2xl text-blue-500">
            <Heart className="inline mr-2" size={24} />
            Elifim
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
