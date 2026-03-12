import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-riii-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="font-display text-8xl font-bold text-riii-gold tracking-widest">
            RIII&amp;
          </h1>
          <p className="font-body text-riii-cream text-xl mt-4 italic">
            All Your Desires. One Place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;