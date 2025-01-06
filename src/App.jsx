import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Memories from './pages/Memories';
import Messages from './pages/Messages';
import Gifts from './pages/Gifts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow container mx-auto px-4 py-6 max-w-md pb-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/gifts" element={<Gifts />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

export default App;