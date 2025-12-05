import { Routes, Route } from 'react-router-dom';
import Creator from './pages/Creator'; // Adjust path based on where you saved it
import Player from './pages/Player';   // Adjust path based on where you saved it
import './App.css'

function App() {
  return (
    <div className='min-h-screen min-w-screen bg-gray-900 flex items-center justify-center'>
      
      <Routes>
        {/* Route for Home (Creating) */}
        <Route path="/" element={<Creator />} />
        
        {/* Route for Playing (e.g., localhost:5173/abc-123) */}
        <Route path="/:id" element={<Player />} />
      </Routes>
      <a 
        href="https://github.com/kira2406" // <--- Update this with your actual URL
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "'VT323', monospace" }}
        className="
          fixed bottom-4 right-4 z-50 
          text-red hover:text-white 
          font-mono text-M tracking-widest uppercase 
          transition-all duration-300 hover:scale-105
          mix-blend-difference pointer-events-auto
        "
      >
        Created by Kushwanth P
      </a>

    </div>
  );
}

export default App;