import { motion } from 'framer-motion';
import { useState } from 'react';

function GiftBox({ message, emoji }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  // Diese Funktion erzeugt eine schüttelnde Animation vor dem Öffnen
  const handleShake = () => {
    if (!isOpen) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        setIsOpen(true);
      }, 1000);
    }
  };

  // Animationsvarianten für verschiedene Zustände des Geschenks
  const giftVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
      },
    },
    open: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      animate={isShaking ? 'shake' : isOpen ? 'open' : undefined}
      variants={giftVariants}
      className="relative"
    >
      <motion.div
        className={`bg-white p-6 rounded-2xl shadow-lg cursor-pointer 
          ${isOpen ? 'bg-pink-50' : 'hover:shadow-xl'} transition-shadow`}
        onClick={handleShake}
      >
        {!isOpen ? (
          <div className="text-center">
            <span className="text-4xl block mb-2">🎁</span>
            <p className="text-gray-600">Klick zum Öffnen</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-3"
          >
            <span className="text-4xl block">{emoji}</span>
            <p className="text-gray-700">{message}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default GiftBox;