import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 2 + 3,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, newHeart.duration * 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{ y: "-100px", opacity: [0, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: heart.duration, ease: "easeOut" }}
            className="absolute text-pink-500"
            style={{
              left: `${heart.x}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            ♥
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
