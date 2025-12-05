import { useState } from 'react';
import Monitor from '../components/Monitor';
import ThreeScene from '../components/ThreeScene';

const Creator = () => {
  const [message, setMessage] = useState("");
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);
  const [previewLetter, setPreviewLetter] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

  const handleLetterClick = (letter: string) => {
    setMessage(prev => prev + letter);
    setPreviewLetter(letter);
    setTimeout(() => {
      setPreviewLetter(null);
    }, 1000);
  };

  const shareMessage = async () => {
    if (!message) return;
    try {
      const response = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message }),
      });
      const data = await response.json();

      setGeneratedLink(`${window.location.origin}/${data.code}`);
    } catch (error) {
      console.error("Portal closed:", error);
    }
  };

  const copyToClipboard = () => {
    if (generatedLink) navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div className="min-h-screen max-w-screen flex flex-col items-center gap-12 w-full">
      {/* 1. Interactive Wall */}
      <ThreeScene onLetterClick={handleLetterClick} activeLetter={previewLetter}/>

      {/* 2. Monitor & Controls */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <Monitor message={message} label="Composed Message" />
        
        
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end pb-12 items-center">
        
        <div className="pointer-events-auto w-full max-w-2xl px-4 flex flex-col gap-6">
           
          <div className="flex gap-4 justify-center">
          <button onClick={() => setMessage("")} className="px-8 py-3 border-2 border-red-600 text-red-500 font-bold rounded hover:bg-red-600 hover:text-white uppercase tracking-widest">
            Clear
          </button>
          <button onClick={shareMessage} className="px-8 py-3 bg-gray-200 text-white-900 font-bold rounded hover:bg-white uppercase tracking-widest shadow-lg">
            Share Message
          </button>
        </div>

        </div>
      </div>

      {/* 3. The Modal */}
      {generatedLink && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-gray-800 border-4 border-green-500 p-6 rounded max-w-lg w-full">
            <h2 className="text-green-500 text-2xl font-mono mb-4">TRANSMISSION SENT</h2>
            <code className="block bg-black p-4 text-green-400 mb-4 select-all">{generatedLink}</code>
            <div className="flex gap-4">
              <button onClick={copyToClipboard} className="bg-green-700 text-white px-6 py-2 rounded">Copy Link</button>
              <button onClick={() => setGeneratedLink(null)} className="border border-gray-500 text-gray-300 px-6 py-2 rounded">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creator;