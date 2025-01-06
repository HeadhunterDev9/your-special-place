import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function BottomNav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const activeIndicator = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 500, damping: 30 }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100">
      <div className="max-w-md mx-auto px-4 py-2 flex justify-around items-center">
        <Link to="/" className="relative px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🏠</span>
            <span className={`text-xs ${isActive('/') ? 'text-pink-600' : 'text-gray-500'}`}>
              Home
            </span>
            {isActive('/') && (
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-500 rounded-full"
                {...activeIndicator}
              />
            )}
          </div>
        </Link>

        <Link to="/memories" className="relative px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💝</span>
            <span className={`text-xs ${isActive('/memories') ? 'text-pink-600' : 'text-gray-500'}`}>
              Erinnerungen
            </span>
            {isActive('/memories') && (
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-500 rounded-full"
                {...activeIndicator}
              />
            )}
          </div>
        </Link>

        <Link to="/messages" className="relative px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">💌</span>
            <span className={`text-xs ${isActive('/messages') ? 'text-pink-600' : 'text-gray-500'}`}>
              Nachrichten
            </span>
            {isActive('/messages') && (
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-500 rounded-full"
                {...activeIndicator}
              />
            )}
          </div>
        </Link>

        <Link to="/gifts" className="relative px-4 py-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl mb-1">🎁</span>
            <span className={`text-xs ${isActive('/gifts') ? 'text-pink-600' : 'text-gray-500'}`}>
              Geschenke
            </span>
            {isActive('/gifts') && (
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-pink-500 rounded-full"
                {...activeIndicator}
              />
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNav;