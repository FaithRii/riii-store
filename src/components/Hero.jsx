import React, { useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.jpg';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const categories = [
    { label: 'Men', emoji: '🖤' },
    { label: 'Women', emoji: '✨' },
    { label: 'Streetwear', emoji: '🔥' },
    { label: 'Luxury', emoji: '💎' },
    { label: 'New In', emoji: '⚡' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-riii-black opacity-70"></div>

      {/* Subtle gold overlay tint */}
      <div className="absolute inset-0 bg-riii-gold opacity-5"></div>

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-riii-gold opacity-10"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-riii-gold opacity-10"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

        {/* Top label */}
        <div className="inline-block mb-8">
          <span className="font-ui text-xs tracking-[0.4em] uppercase text-riii-gold border border-riii-gold border-opacity-40 px-6 py-2">
            New Collection 2025
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-white leading-none mb-6">
          <span className="block text-6xl md:text-8xl lg:text-9xl">All Your</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl text-riii-gold mt-2">Desires.</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl mt-2">One Place.</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-24 bg-riii-gold opacity-60"></div>
          <span className="font-display text-2xl text-riii-gold">RIII&amp;.</span>
          <div className="h-px w-24 bg-riii-gold opacity-60"></div>
        </div>

        {/* Tagline */}
        <p className="font-body text-riii-cream text-lg md:text-xl italic mb-10 max-w-lg mx-auto">
          Fashion that speaks every language. Curated for the bold, the elegant, and everyone in between.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group relative bg-riii-gold text-riii-black font-ui font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 overflow-hidden transition-all duration-300 hover:shadow-lg">
            <span className="relative z-10">Shop Now</span>
            <div className="absolute inset-0 bg-riii-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          <button className="border border-riii-gold text-riii-gold font-ui font-bold text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-riii-gold hover:text-riii-black transition-all duration-300">
            Explore Collections
          </button>
        </div>

        {/* Floating Category Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="group flex items-center gap-2 bg-riii-black bg-opacity-60 border border-riii-gold border-opacity-30 hover:border-riii-gold hover:bg-riii-gold hover:text-riii-black text-riii-cream font-ui text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300 backdrop-blur-sm"
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      
     

    </section>
  );
}

export default Hero;
