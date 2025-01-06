import { motion } from 'framer-motion';

function Memories() {
  // Animation für die Herzen, die sanft schweben
  const floatingHeartAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 text-center"
    >
      {/* Hauptüberschrift mit schwebendem Herz */}
      <div className="relative">
        <motion.span 
          {...floatingHeartAnimation}
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-4xl"
        >
          💝
        </motion.span>
        <h1 className="text-3xl font-bold text-pink-600 mt-8">
          Unsere Geschichte
        </h1>
      </div>

      {/* Hauptnachricht in einer schönen Karte */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-sm mx-auto"
      >
        <p className="text-gray-700 leading-relaxed">
          Auch wenn unsere gemeinsame Reise gerade erst begonnen hat, 
          spüre ich jetzt schon, dass sie etwas ganz Besonderes wird.
        </p>
        
        <div className="my-6 text-pink-400 text-2xl">
          ✨ • ✨ • ✨
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          Ich freue mich darauf, mit dir zusammen unzählige wunderschöne 
          Momente zu erleben, gemeinsam zu lachen, Abenteuer zu erleben 
          und Erinnerungen zu schaffen, die wir für immer in unseren 
          Herzen tragen werden.
        </p>
      </motion.div>

      {/* Zukunftsvorschau mit animierten Elementen */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 mt-8"
      >
        <h2 className="text-xl font-semibold text-pink-500">
          Bald werden hier stehen...
        </h2>
        <div className="flex justify-center space-x-4">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg"
          >
            🌅 Unsere Ausflüge
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="bg-pink-50 p-4 rounded-lg"
          >
            🎈 Besondere Momente
          </motion.div>
        </div>
      </motion.div>

      {/* Motivierende Abschlussnachricht */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 italic mt-8"
      >
        Lass uns gemeinsam die schönsten Erinnerungen schaffen... 💫
      </motion.p>
    </motion.div>
  );
}

export default Memories;