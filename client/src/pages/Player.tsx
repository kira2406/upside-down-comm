import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';

const Player = () => {
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [currentLitLetter, setCurrentLitLetter] = useState<string | null>(null);

  const navigate = useNavigate();

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

  const playMessage = async (text: string) => {
    const cleanText = text.toUpperCase();
    for (let i = 0; i < cleanText.length; i++) {
      const char = cleanText[i];
      setCurrentLitLetter(char);
      await sleep(1000);
      setCurrentLitLetter(null);
      await sleep(200);
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}/api/messages/${id}`)
        .then(res => res.json())
        .then(async (data) => {
          if (data.text) {
            setMessage(data.text);
            await sleep(1000);
            playMessage(data.text);
          }
        })
        .catch(err => console.error("Signal Lost", err));
    }
  }, [id]);

  return (
    <div className="flex flex-col items-center gap-12 w-full">

      <div className="absolute inset-0 z-0">
        <ThreeScene 
          activeLetter={currentLitLetter}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end items-center pb-6 lg:pb-12">
        
        {/* Enable pointer events ONLY on the buttons/monitor */}
        <div className="pointer-events-auto w-full max-w-2xl px-4 flex flex-col gap-4 lg:gap-6">
           
              <div className="flex gap-4 justify-center mt-6">
                <button 
                  onClick={() => playMessage(message)} 
                  className="border-2 border-gray-500 text-gray-300 font-bold rounded hover:text-white hover:border-white uppercase tracking-widest flex items-center justify-center transition-all
                  px-4 py-2 text-sm
                  lg:px-8 lg:py-3 lg:text-base
                  "
                >
                  Replay Message
                </button>
                
                <button 
                  onClick={() => navigate("/")}
                  className="border-2 border-gray-500 text-gray-300 font-bold rounded hover:text-white hover:border-white uppercase tracking-widest flex items-center justify-center transition-all
                  px-4 py-2 text-sm
                  lg:px-8 lg:py-3 lg:text-base"
                >
                  Create New Message
                </button>
                
           </div>

        </div>
      </div>

    </div>
  );
};

export default Player;