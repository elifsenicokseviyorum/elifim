import { motion } from "framer-motion";
import { Heart, Music } from "lucide-react";
import Navigation from "@/components/navigation";
import FloatingHearts from "@/components/floating-hearts";
import PhotoGallery from "@/components/photo-gallery";
import Timeline from "@/components/timeline";
import Reasons from "@/components/reasons";
import LoveLetters from "@/components/love-letters";
import MusicPlayer from "@/components/music-player";
import ContactForm from "@/components/contact-form";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
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
              className="font-script text-6xl md:text-8xl text-pink-500 mb-6 heart-beat"
            >
              Sevgilim İçin
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
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl card-hover"
              >
                <Heart className="inline mr-2" size={20} />
                Anıları Keşfet
              </button>
              <button
                onClick={() => scrollToSection("#music")}
                className="bg-white text-pink-500 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl card-hover border-2 border-pink-500"
              >
                <Music className="inline mr-2" size={20} />
                Müzik Çal
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mx-auto w-80 h-80 rounded-full overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Romantic couple at sunset" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-pink-500/20 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <PhotoGallery />
      <Timeline />
      <Reasons />
      <LoveLetters />
      <div id="music">
        <MusicPlayer />
      </div>
      <ContactForm />
      
      {/* Footer */}
      <footer className="py-12 bg-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="font-script text-4xl mb-4">Sonsuza kadar seninle</h3>
            <p className="text-pink-100 max-w-2xl mx-auto">
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
          </div>
          
          <div className="text-pink-100">
            <p>&copy; 2024 Sevgilim İçin - Aşkla yapıldı ♥</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
