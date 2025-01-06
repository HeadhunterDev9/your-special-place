import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [debugInfo, setDebugInfo] = useState('');
  const audioRef = useRef(null);

  // Ermittle die aktuelle Basis-URL
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Konstruiere den Audio-Pfad
  const audioPath = `${baseUrl}ostwind.mp3`;

  useEffect(() => {
    // Debug-Informationen sammeln
    
    
    // Versuche die Audio-Datei zu laden
    fetch(audioPath)
  }, [audioPath]);

  const togglePlay = async () => {
    if (!audioRef.current) {
      setErrorMessage('Audio-Element nicht gefunden');
      return;
    }

    try {
      if (audioRef.current.paused) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setErrorMessage('');
            })
            .catch(error => {
              setErrorMessage(`Wiedergabefehler: ${error.message}`);
              setIsPlaying(false);
            });
        }
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      setErrorMessage(`Allgemeiner Fehler: ${error.message}`);
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-4 rounded-2xl shadow-lg"
    >
      <audio
        ref={audioRef}
        src={audioPath}
        preload="auto"
        onError={(e) => {
          setErrorMessage(`Audio-Ladefehler: ${e.currentTarget.error?.message || 'Unbekannter Fehler'}`);
          console.error('Audio-Element Fehler:', e);
        }}
      />
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="w-full flex items-center justify-center space-x-3 bg-pink-50 py-3 px-6 rounded-xl"
      >
        <span className="text-2xl">
          {isPlaying ? '🎵' : '▶️'}
        </span>
        <span className="text-gray-700 font-medium">
          {isPlaying ? 'Spielt: Ostwind' : 'Musik abspielen'}
        </span>
      </motion.button>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center mt-2">
          {errorMessage}
        </p>
      )}

      {/* Debug-Informationen */}
      <div className="mt-4 p-2 bg-gray-50 rounded text-xs text-gray-600 font-mono whitespace-pre-wrap">
        {debugInfo}
      </div>

      <p className="text-xs text-gray-500 text-center mt-2 italic">
        Lass dich von der Musik verzaubern ✨
      </p>
    </motion.div>
  );
}

export default MusicPlayer;