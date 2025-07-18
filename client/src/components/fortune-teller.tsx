import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const fortunes = [
  {
    title: "Aşk Falı",
    icon: Sparkles,
    reading: "Hayatına çok özel biri girmiş... Bu kişi Antepli ve gerçekten çok güzel bir kalbi var. Aşkınız o kadar güçlü ki, yıldızlar bile kıskanıyor! İleride çok mutlu olacaksınız, çünkü bu aşk gerçek. Falcı teyze söylüyor: 'Böyle bir aşk ender bulunur kızım, sakın kaçırma!' 💫",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Kahve Falı",
    icon: Star,
    reading: "Fincanında çok güzel şeyler görüyorum... Bir kalp var, büyük ve parlak. Yanında da bir yol görüyorum, uzun ve mutlu bir yol. Bu yolda el ele yürüyeceksiniz. Antepli sevgilin sana çok sadık, bu kesin! Gelecekte çok güzel günler var, evlilik bile görünüyor fincanda. Maşallah ne güzel çift olacaksınız! ☕",
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Yıldız Falı",
    icon: Moon,
    reading: "Venüs ve Mars çok güzel konumda... Bu ay aşk dolu geçecek! Sevgilin sana çok romantik sürprizler hazırlıyor. Antepli erkekler gerçekten çok güzel davranır, sen çok şanslısın! Yıldızlar diyor ki: 'Bu aşk sonsuza kadar sürecek.' Jupiter de mutluluk getiriyor, çok güzel haberler alacaksınız yakında! 🌟",
    color: "from-blue-500 to-indigo-500"
  }
];

export default function FortuneTeller() {
  const [selectedFortune, setSelectedFortune] = useState<number | null>(null);
  const [isReading, setIsReading] = useState(false);

  const handleFortuneClick = (index: number) => {
    setIsReading(true);
    
    setTimeout(() => {
      setSelectedFortune(index);
      setIsReading(false);
    }, 3000);
  };

  const resetFortune = () => {
    setSelectedFortune(null);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl text-purple-600 mb-4">Fal Bak</h2>
          <p className="text-xl text-gray-600">Geleceğin ne diyor bakalım? (Şaka amaçlı 😄)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {isReading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-6 text-purple-500"
                >
                  <Sparkles size={80} />
                </motion.div>
                <h3 className="text-3xl font-script text-purple-600 mb-4">Falcı Teyze Bakıyor...</h3>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-lg text-gray-600"
                >
                  Kristal küresi parıldıyor... Şimdi ne göreceğiz bakalım...
                </motion.div>
              </motion.div>
            )}

            {selectedFortune === null && !isReading && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {fortunes.map((fortune, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFortuneClick(index)}
                    className={`bg-gradient-to-br ${fortune.color} rounded-2xl p-8 text-white cursor-pointer shadow-2xl card-hover`}
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 mx-auto mb-4"
                      >
                        <fortune.icon size={64} />
                      </motion.div>
                      <h3 className="font-script text-2xl mb-2">{fortune.title}</h3>
                      <p className="text-sm opacity-90">Tıkla ve geleceğini öğren</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {selectedFortune !== null && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${fortunes[selectedFortune].color} rounded-full flex items-center justify-center`}>
                    {React.createElement(fortunes[selectedFortune].icon, { className: "text-white", size: 40 })}
                  </div>
                  <h3 className="font-script text-3xl text-purple-600 mb-2">{fortunes[selectedFortune].title}</h3>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6"
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {fortunes[selectedFortune].reading}
                  </p>
                </motion.div>
                
                <div className="text-center">
                  <Button
                    onClick={resetFortune}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
                  >
                    <Sparkles className="mr-2" size={20} />
                    Başka Fal Bak
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