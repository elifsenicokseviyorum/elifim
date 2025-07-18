import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SplashButtonProps {
  onClick: () => void;
}

export default function SplashButton({ onClick }: SplashButtonProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-gold-100 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl font-script text-blue-600 mb-8"
          animate={{ 
            textShadow: ["0 0 20px rgba(59, 130, 246, 0.5)", "0 0 40px rgba(59, 130, 246, 0.8)", "0 0 20px rgba(59, 130, 246, 0.5)"] 
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Elifim için özel bir şey hazırladım ♥
        </motion.h1>
        
        <motion.button
          onClick={onClick}
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-gold-500 text-white px-12 py-4 rounded-full text-2xl font-semibold shadow-2xl"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            y: [0, -10, 0],
            boxShadow: ["0 10px 30px rgba(59, 130, 246, 0.3)", "0 20px 50px rgba(59, 130, 246, 0.5)", "0 10px 30px rgba(59, 130, 246, 0.3)"]
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          <Sparkles className="inline mr-2" size={24} />
          Fıstığım :)
        </motion.button>
        
        <motion.div
          className="mt-8 text-gray-600"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p>Hazır mısın? Tıkla ve gör!</p>
        </motion.div>
      </motion.div>
    </div>
  );
}