import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showJoke, setShowJoke] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowQuestion(false);
      setShowJoke(true);
    }, 5000);

    const timer2 = setTimeout(() => {
      setShowJoke(false);
      setShowLoading(true);
    }, 8000);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 10000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-gold-50 flex items-center justify-center z-50">
      <AnimatePresence mode="wait">
        {showQuestion && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl font-bold text-blue-600 mb-4"
              animate={{ 
                textShadow: ["0 0 20px rgba(59, 130, 246, 0.5)", "0 0 40px rgba(59, 130, 246, 0.8)", "0 0 20px rgba(59, 130, 246, 0.5)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Bir şey olacak mı sandın?
            </motion.h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mx-auto w-16 h-16 text-purple-500"
            >
              <Sparkles size={64} />
            </motion.div>
          </motion.div>
        )}

        {showJoke && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-7xl font-bold text-purple-600 mb-4"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Şaka Şaka! 😄
            </motion.h1>
            <motion.p
              className="text-2xl text-gold-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Asıl sürpriz şimdi başlıyor...
            </motion.p>
          </motion.div>
        )}

        {showLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center space-x-2 mb-4"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <Heart className="text-red-500" size={32} />
              <span className="text-3xl font-script text-blue-600">Yükleniyor...</span>
              <Heart className="text-red-500" size={32} />
            </motion.div>
            <motion.div
              className="w-64 h-2 bg-gray-200 rounded-full mx-auto"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}