import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Music, Sparkles, Star } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingHearts from "@/components/floating-hearts";
import PhotoGallery from "@/components/photo-gallery";
import Timeline from "@/components/timeline";
import Reasons from "@/components/reasons";
import LoveLetters from "@/components/love-letters";
import MusicPlayer from "@/components/music-player";
import ContactForm from "@/components/contact-form";
import SplashButton from "@/components/splash-button";
import LoadingScreen from "@/components/loading-screen";
import LoveCounter from "@/components/love-counter";
import FortuneTeller from "@/components/fortune-teller";
import TarotCards from "@/components/tarot-cards";
import AnimatedHeart from "@/components/animated-heart";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [showMainSite, setShowMainSite] = useState(false);

  const handleSplashClick = () => {
    setShowSplash(false);
    setShowLoading(true);
  };

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowMainSite(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (showSplash) {
    return <SplashButton onClick={handleSplashClick} />;
  }

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  if (!showMainSite) {
    return null;
  }

  return (
    <div className="min-h-screen modern-romantic-bg">
      <Navigation />
      <FloatingHearts />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 romantic-gradient opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-script text-6xl md:text-8xl text-blue-600 mb-6 heart-beat"
            >
              Birtanem İçin
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              Sen benim dünyamın en güzel rengisın. Her gününü özel kılmak için hazırladığım bu küçük köşe...
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4 mb-12"
            >
              <button
                onClick={() => scrollToSection("#gallery")}
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl card-hover"
              >
                <Heart className="inline mr-2" size={20} />
                Anıları Keşfet
              </button>
              <button
                onClick={() => scrollToSection("#music")}
                className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl card-hover border-2 border-blue-500"
              >
                <Music className="inline mr-2" size={20} />
                Müzik Çal
              </button>
              <button
                onClick={() => scrollToSection("#fortune")}
                className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl card-hover"
              >
                <Sparkles className="inline mr-2" size={20} />
                Fal Bak
              </button>
              <button
                onClick={() => scrollToSection("#tarot")}
                className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-colors shadow-lg hover:shadow-xl card-hover"
              >
                <Star className="inline mr-2" size={20} />
                Tarot
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <AnimatedHeart />
            </motion.div>
          </div>
        </div>
      </section>

      <div id="counter">
        <LoveCounter />
      </div>
      <PhotoGallery />
      <Timeline />
      <Reasons />
      <LoveLetters />
      <div id="music">
        <MusicPlayer />
      </div>
      <div id="fortune">
        <FortuneTeller />
      </div>
      <div id="tarot">
        <TarotCards />
      </div>
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="font-script text-4xl mb-4">Sonsuza kadar seninle</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Bu site, sana olan sonsuz aşkımın küçük bir ifadesi. Her gün seni daha çok seviyorum, 
              ve bu aşk sonsuza kadar sürecek.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Heart size={20} />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Music size={20} />
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
              <Sparkles size={20} />
            </div>
          </div>
          
          <div className="text-blue-100">
            <p>&copy; 2024 Elifim İçin - Aşkla yapıldı ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
