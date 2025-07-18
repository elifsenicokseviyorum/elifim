import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, Clock } from "lucide-react";

export default function LoveCounter() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [daysUntilBirthday, setDaysUntilBirthday] = useState(0);
  const [timeData, setTimeData] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateDays = () => {
      const relationshipStart = new Date('2024-04-16'); // 16 Nisan 2024
      const today = new Date();
      const diffTime = today.getTime() - relationshipStart.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysTogether(diffDays);

      // Elif'in doğum günü - 11 Ağustos
      const currentYear = today.getFullYear();
      let birthday = new Date(currentYear, 7, 11); // Ağustos = 7 (0 indexli)
      
      // Eğer bu yılın doğum günü geçtiyse, gelecek yılı hesapla
      if (today > birthday) {
        birthday = new Date(currentYear + 1, 7, 11);
      }
      
      const timeToBirthday = birthday.getTime() - today.getTime();
      const daysToBirthday = Math.floor(timeToBirthday / (1000 * 60 * 60 * 24));
      setDaysUntilBirthday(daysToBirthday);
    };

    const updateTime = () => {
      const now = new Date();
      setTimeData({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds()
      });
    };

    calculateDays();
    updateTime();
    
    const timer = setInterval(() => {
      calculateDays();
      updateTime();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-script text-4xl text-blue-600 mb-4">Bizim Özel Sayılarımız</h2>
          <p className="text-xl text-gray-600">Zamanın bizim için ne anlama geldiği</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Birlikte geçen günler */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl card-hover"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="font-script text-3xl text-blue-600 mb-2">Birlikte Geçen</h3>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl font-bold text-purple-600 mb-2"
                >
                  {daysTogether}
                </motion.div>
                <p className="text-xl text-gray-600">Gün</p>
                <p className="text-sm text-gray-500 mt-2">16 Nisan 2024'ten bu yana</p>
              </div>
            </motion.div>

            {/* Doğum günü geri sayım */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-2xl card-hover"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="font-script text-3xl text-gold-600 mb-2">Doğum Günün</h3>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl font-bold text-pink-600 mb-2"
                >
                  {daysUntilBirthday}
                </motion.div>
                <p className="text-xl text-gray-600">Gün Kaldı</p>
                <p className="text-sm text-gray-500 mt-2">11 Ağustos</p>
              </div>
            </motion.div>
          </div>

          {/* Anlık saat */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 bg-white rounded-2xl p-8 shadow-2xl card-hover"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-script text-3xl text-purple-600 mb-4">Şu An</h3>
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{timeData.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-500">Saat</div>
                </div>
                <div className="text-4xl font-bold text-purple-600">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600">{timeData.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-gray-500">Dakika</div>
                </div>
                <div className="text-4xl font-bold text-purple-600">:</div>
                <div className="text-center">
                  <motion.div
                    animate={{ color: ["#8B5CF6", "#3B82F6", "#8B5CF6"] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-4xl font-bold"
                  >
                    {timeData.seconds.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-sm text-gray-500">Saniye</div>
                </div>
              </div>
              <p className="text-gray-600 mt-4">Seninle geçen her saniye değerli ♥</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}