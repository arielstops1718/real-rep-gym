import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4">
          Welcome to the Neighborhood Stronghold
        </h2>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
          ARVIN <br />
          <span className="text-gradient">REPS GYM</span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 text-lg md:text-xl mb-6 leading-relaxed font-medium">
          Arvin Reps Gym is the premier local destination for fitness. Whether you're here to lift heavy or start your health journey, our doors are open to everyone in Arvin.
        </p>
        
        <p className="text-red-500 font-bold mb-10 flex items-center justify-center gap-2">
          <i className="fas fa-location-dot"></i>
          741 Bear Mt Blvd, Arvin, California 93203
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full md:w-auto bg-red-600 text-white px-12 py-5 rounded-md font-black text-xl hover:bg-red-700 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            JOIN US TODAY
          </a>
          <a href="#memberships" className="w-full md:w-auto border-2 border-zinc-700 px-12 py-5 rounded-md font-bold text-xl hover:bg-zinc-800 transition-all uppercase tracking-widest">
            VIEW MEMBERSHIPS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
