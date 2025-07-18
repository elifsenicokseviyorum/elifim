import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function AnimatedHeart() {
  return (
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-8xl"
      >
        <motion.div
          animate={{
            color: ["#3B82F6", "#8B5CF6", "#F59E0B", "#3B82F6"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ♥
        </motion.div>
      </motion.div>
      
      {/* Floating hearts around main heart */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
        className="absolute -top-8 -left-8 text-3xl text-blue-500"
      >
        ♥
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute -top-6 -right-6 text-2xl text-purple-500"
      >
        ♥
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5,
        }}
        className="absolute -bottom-4 left-4 text-2xl text-yellow-500"
      >
        ♥
      </motion.div>
    </div>
  );
}