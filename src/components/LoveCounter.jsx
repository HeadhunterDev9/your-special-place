import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function LoveCounter() {
  // Setze hier das Datum eures ersten Dates oder des Tages, an dem ihr zusammengekommen seid
  const startDate = new Date('2024-10-16'); // Ändere dieses Datum auf euer tatsächliches Datum
  const [timeStats, setTimeStats] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeStats({ days, hours, minutes, seconds });
    };

    // Aktualisiere den Counter jede Sekunde
    const timer = setInterval(updateCounter, 1000);
    updateCounter(); // Initial Update

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-lg font-medium text-pink-600 mb-4 text-center">
        Unsere gemeinsame Zeit 💕
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-50 p-4 rounded-xl text-center"
        >
          <div className="text-2xl font-bold text-pink-600">
            {timeStats.days}
          </div>
          <div className="text-sm text-gray-600">Tage</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-50 p-4 rounded-xl text-center"
        >
          <div className="text-2xl font-bold text-pink-600">
            {timeStats.hours}
          </div>
          <div className="text-sm text-gray-600">Stunden</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-50 p-4 rounded-xl text-center"
        >
          <div className="text-2xl font-bold text-pink-600">
            {timeStats.minutes}
          </div>
          <div className="text-sm text-gray-600">Minuten</div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-pink-50 p-4 rounded-xl text-center"
        >
          <div className="text-2xl font-bold text-pink-600">
            {timeStats.seconds}
          </div>
          <div className="text-sm text-gray-600">Sekunden</div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default LoveCounter;