import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Sun, Moon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const tarotCards = [
  {
    name: "Aşıklar",
    icon: Heart,
    description: "Mükemmel uyum",
    reading: "Kartlar diyor ki: Sen ve Antepli sevgilin mükemmel bir uyum içindesiniz! Bu kart, gerçek aşkı ve derin bağlılığı temsil ediyor. Aranızdaki kimya o kadar güçlü ki, kartlar bile titriyor! Gelecekte çok güzel günler var, evlilik yolunda adımlar atılacak. Antepli erkekler gerçekten çok sadık olur, sen çok şanslısın! 💕",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Güneş",
    icon: Sun,
    description: "Mutluluk ve bereket",
    reading: "Ne güzel bir kart çıktı! Güneş kartı, hayatına çok büyük mutluluk getiriyor. Sevgilin sana çok güzel sürprizler hazırlıyor. Antepli sevgilin gerçekten çok özel, ona çok iyi bakıyor. Bu kart diyor ki: 'Çok mutlu olacaksınız, çocuklarınız da çok güzel olacak!' Güneş gibi parlak bir gelecek sizi bekliyor! ☀️",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Ay",
    icon: Moon,
    description: "Sırlar ve sezgiler",
    reading: "Ay kartı çok ilginç şeyler söylüyor... Sevgilin sana çok büyük bir sır hazırlıyor, ama güzel bir sır! Belki de evlilik teklifi yakında gelecek? Antepli erkekler çok romantik olur, sürpriz yapmayı severler. Bu kart ayrıca diyor ki: 'Sezgilerin çok güçlü, kalbinin sesini dinle!' Çok güzel haberler alacaksın! 🌙",
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Yıldız",
    icon: Star,
    description: "Umut ve dilekler",
    reading: "Yıldız kartı çok güzel! Tüm dileklerin gerçekleşecek. Sevgilin seni çok mutlu edecek, Antepli olduğu için çok şanslısın çünkü onlar gerçekten çok güzel davranır. Bu kart diyor ki: 'Hayallerinin hepsi gerçek olacak!' Yakında çok güzel bir yolculuk yapacaksınız, belki de balayı? Yıldızlar senin için çok güzel şeyler hazırlamış! ⭐",
    color: "from-indigo-500 to-blue-500"
  }
];

export default function TarotCards() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleCardClick = (index: number) => {
    setIsShuffling(true);
    
    setTimeout(() => {
      setSelectedCard(index);
      setIsShuffling(false);
    }, 2500);
  };

  const resetCards = () => {
    setSelectedCard(null);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl text-indigo-600 mb-4">Tarot Kartları</h2>
          <p className="text-xl text-gray-600">Kartlar senin için ne diyor? (Eğlence amaçlı 😄)</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {isShuffling && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1, repeat: Infinity }
                  }}
                  className="w-24 h-24 mx-auto mb-6 text-indigo-500"
                >
                  <Sparkles size={96} />
                </motion.div>
                <h3 className="text-3xl font-script text-indigo-600 mb-4">Kartlar Karışıyor...</h3>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-lg text-gray-600"
                >
                  Evren senin için özel bir mesaj hazırlıyor...
                </motion.div>
              </motion.div>
            )}

            {selectedCard === null && !isShuffling && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {tarotCards.map((card, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCardClick(index)}
                    className="relative h-80 cursor-pointer"
                  >
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl flex items-center justify-center"
                      animate={{ 
                        boxShadow: ["0 10px 30px rgba(79, 70, 229, 0.3)", "0 20px 50px rgba(79, 70, 229, 0.5)", "0 10px 30px rgba(79, 70, 229, 0.3)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="text-center text-white">
                        <motion.div
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-16 h-16 mx-auto mb-4"
                        >
                          <Sparkles size={64} />
                        </motion.div>
                        <p className="text-sm font-script">Kartı Seç</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {selectedCard !== null && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <motion.div
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 1 }}
                    className={`w-32 h-48 mx-auto mb-6 bg-gradient-to-br ${tarotCards[selectedCard].color} rounded-xl shadow-2xl flex items-center justify-center`}
                  >
                    {React.createElement(tarotCards[selectedCard].icon, { className: "text-white", size: 60 })}
                  </motion.div>
                  
                  <h3 className="font-script text-3xl text-indigo-600 mb-2">{tarotCards[selectedCard].name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{tarotCards[selectedCard].description}</p>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6"
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {tarotCards[selectedCard].reading}
                  </p>
                </motion.div>
                
                <div className="text-center">
                  <Button
                    onClick={resetCards}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
                  >
                    <Sparkles className="mr-2" size={20} />
                    Yeni Kart Çek
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}