import { motion } from 'framer-motion';
import { useState } from 'react';
import LoveCounter from '../components/LoveCounter';

function Home() {
  // State für den Herzeffekt
  const [heartScale, setHeartScale] = useState(1);

  // Diese Funktion erzeugt einen Pulseffekt für das Herz
  const triggerHeartbeat = () => {
    setHeartScale(1.4);
    setTimeout(() => setHeartScale(1), 200);
  };

  // Container-Animation für das sanfte Einblenden der Seite
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  // Animation für einzelne Elemente
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Herzlicher Willkommensgruß */}
      <motion.header 
        variants={itemVariants} 
        className="text-center space-y-4"
      >
        <motion.div
          animate={{ scale: heartScale }}
          onClick={triggerHeartbeat}
          className="text-6xl cursor-pointer inline-block transition-transform"
          whileHover={{ scale: 1.2 }}
        >
          ❤️
        </motion.div>
        <h1 className="text-3xl font-bold text-pink-600">
          Hallo mein Schatz!
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Ich habe diese App nur für dich gemacht, 
          weil du mir unendlich viel bedeutest.
        </p>
      </motion.header>

      <motion.div variants={itemVariants}>
        <LoveCounter />
      </motion.div>

      {/* Hauptbereich mit Karten */}
      <motion.div 
        variants={itemVariants}
        className="space-y-6"
      >
        {/* Besondere Karte mit Animation */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white p-6 rounded-2xl shadow-lg relative overflow-hidden"
        >
          <motion.div
            className="absolute -right-4 -top-4 w-24 h-24 bg-pink-100 rounded-full opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <h2 className="text-xl font-semibold text-pink-500 mb-3">
            Du bist etwas ganz Besonderes 💫
          </h2>
          <p className="text-gray-600 leading-relaxed relative z-10">
            In dieser App findest du liebevolle Nachrichten und 
            einen Blick in unsere gemeinsame Zukunft. Ich hoffe, 
            sie zaubert dir ein Lächeln ins Gesicht.
          </p>
        </motion.div>

        {/* Anleitung zur Navigation */}
        <motion.div
          variants={itemVariants}
          className="bg-pink-50 p-6 rounded-2xl shadow-md space-y-4"
        >
          <h3 className="text-lg font-medium text-pink-600">
            Entdecke unsere kleine Welt 🌟
          </h3>
          <p className="text-gray-600">
            Ich habe verschiedene besondere Orte für dich vorbereitet:
          </p>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-start space-x-3">
              <span className="text-xl">🏠</span>
              <p>Hier auf der Startseite siehst du, wie lange wir schon "zusammen" sind und was uns verbindet</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">💝</span>
              <p>Unter "Erinnerungen" habe ich dir aufgeschrieben, wie sehr ich mich auf unsere gemeinsame Zukunft freue</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">💌</span>
              <p>Bei "Nachrichten" findest du jeden Tag neue, süße Überraschungen, die dir hoffentlich ein Lächeln ins Gesicht zaubern</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">🎁</span>
              <p>Unter "Geschenke" warten besondere Botschaften auf dich - jede einzelne kommt von Herzen und erzählt von meinen tiefsten Gefühlen für dich</p>
            </div>
          </div>
          <p className="text-sm text-pink-500 italic mt-4">
            Nimm dir Zeit, alles in Ruhe zu erkunden. Jeder Bereich ist mit viel Liebe für dich gemacht 💕
          </p>
        </motion.div>
      </motion.div>

      {/* Persönliche Note am Ende */}
      <motion.footer 
        variants={itemVariants}
        className="text-center mt-8"
      >
        <p className="text-gray-500 italic">
          Mit ganz viel Liebe gemacht 💕
        </p>
      </motion.footer>
    </motion.div>
  );
}

export default Home;