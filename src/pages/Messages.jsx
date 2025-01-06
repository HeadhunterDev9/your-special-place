import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Messages() {
  const [currentMessage, setCurrentMessage] = useState(null);

  // Eine umfangreiche Sammlung von Nachrichten, kategorisiert nach Themen
  const messages = [
    // Süße Komplimente
    "Dein Lächeln ist das Schönste, was ich je gesehen habe ✨",
    "Du machst mich glücklich 💫",
    "Jeder Moment mit dir ist wie ein kleines Wunder 🌟",
    "Deine Augen sind wie Sterne, in denen ich mich verlieren könnte ⭐️",
    "Du bist der beste Beweis dafür, dass Träume wahr werden können 🦋",
    
    // Gefühlvolle Gedanken
    "Wenn ich an dich denke, geht die Sonne in meinem Herzen auf 🌅",
    "Mit dir fühlt sich jeder Tag an wie ein neues Abenteuer 🎈",
    "Du bist der Mensch, von dem ich nicht wusste, dass ich ihn so sehr brauche 💝",
    "Deine Nähe gibt mir ein Gefühl von Zuhause 🏡",
    "Seit ich dich kenne, hat alles mehr Farbe und mehr Bedeutung 🌈",
    
    // Zukunftsträume
    "Ich kann es kaum erwarten, mit dir die Welt zu entdecken 🌍",
    "Mit dir möchte ich jeden Sonnenaufgang und jeden Sonnenuntergang erleben 🌅",
    "Auf alle Abenteuer, die noch vor uns liegen! 🚀",
    "Lass uns zusammen unsere Träume wahr machen ⭐️",
    "Mit dir an meiner Seite kann ich alles schaffen 💪",
    
    // Kleine Aufmunterungen
    "Du bist stärker als du denkst und wunderbarer als du ahnst 🌟",
    "Dein Lachen ist meine Lieblingsmelodie 🎵",
    "Du machst jeden Tag zu etwas Besonderem 🎁",
    "Ich bin so dankbar, dass es dich gibt 🙏",
    "Du bist mein Lieblingsmensch auf der ganzen Welt 🌎",
    
    // Tiefgründige Gefühle
    "In deiner Nähe fühle ich mich vollständig 💫",
    "Du bist der fehlende Teil in meinem Leben, von dem ich nicht wusste, dass er fehlt 🧩",
    "Mit dir macht selbst Schweigen Sinn 💭",
    "Du bist mein Lieblingsziel und mein schönstes Zuhause zugleich 🏡",
    "Jeder Moment mit dir ist ein Geschenk 🎁",
    
    // Verspielte Nachrichten
    "Du bist mein Lieblings-Quatschkopf 🤪",
    "Mit dir ist selbst der langweiligste Tag ein Abenteuer 🎢",
    "Du bringst mich zum Lachen, auch wenn mir gar nicht danach ist 😊",
    "Deine verrückte Art macht mich glücklich 🎈",
    
    // Romantische Gedanken
    "Du bist der Grund für mein Lächeln am Morgen und meine süßen Träume am Abend 🌙",
    "Mein Herz macht Luftsprünge, wenn ich an dich denke 💓",
    "Du bist wie aus meinen Träumen entsprungen 💫",
    "Mit dir fühlt sich jeder Moment magisch an ✨",
    "Du bist meine schönste Realität 🌟"
  ];

  const showRandomMessage = () => {
    let newMessage;
    do {
      newMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (newMessage === currentMessage); // Verhindert, dass die gleiche Nachricht zweimal hintereinander kommt
    
    setCurrentMessage(newMessage);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-8">
        Liebesnachrichten 💌
      </h1>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={showRandomMessage}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-xl shadow-lg font-semibold relative overflow-hidden"
      >
        <span className="relative z-10">💝 Drück mich für eine Nachricht von Herzen 💝</span>
        <motion.div
          className="absolute inset-0 bg-white opacity-20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1 }}
        />
      </motion.button>

      <AnimatePresence mode="wait">
        {currentMessage && (
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center relative"
          >
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ❤️
            </motion.div>
            <p className="text-xl text-gray-700 leading-relaxed">
              {currentMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-500 text-sm"
      >
        Jede Nachricht kommt von Herzen 💕
      </motion.p>
    </motion.div>
  );
}

export default Messages;