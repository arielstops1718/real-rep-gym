
import React from 'react';

const Hours: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-white">HOURS</h3>
        <p className="text-red-600 font-bold uppercase tracking-widest mt-4">Local Access for the Arvin Community</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Standard Access Card */}
        <div className="bg-zinc-900 border-2 border-zinc-800 p-12 md:p-16 flex flex-col justify-center">
          <h4 className="text-4xl font-black mb-2 uppercase tracking-tighter text-zinc-100">STANDARD</h4>
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-sm mb-12 italic">General Access Hours</p>
          
          <div className="space-y-10">
            <div>
              <p className="text-red-600 font-black uppercase text-xs tracking-[0.3em] mb-4">Monday — Friday</p>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-mono font-black text-white">06:00 AM - 10:00 AM</p>
                <div className="w-12 h-1 bg-zinc-800"></div>
                <p className="text-4xl md:text-5xl font-mono font-black text-white">03:00 PM - 09:00 PM</p>
              </div>
            </div>

            <div>
              <p className="text-red-600 font-black uppercase text-xs tracking-[0.3em] mb-4">Saturday — Sunday</p>
              <p className="text-4xl md:text-5xl font-mono font-black text-white">08:00 AM - 12:00 PM</p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <p className="text-zinc-500 text-sm font-medium">
              *Access is restricted to these times for Standard members.
            </p>
          </div>
        </div>

        {/* VIP Access Card */}
        <div className="bg-zinc-950 border-4 border-red-600 p-12 md:p-16 flex flex-col justify-center relative shadow-[0_0_60px_rgba(220,38,38,0.1)]">
          <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 font-black text-sm uppercase tracking-widest">
            MOST POPULAR
          </div>
          
          <h4 className="text-4xl font-black mb-2 uppercase tracking-tighter text-white italic">VIP ACCESS</h4>
          <p className="text-red-600 font-black uppercase tracking-[0.2em] text-sm mb-12 italic">Unrestricted Entry</p>
          
          <div className="flex flex-col items-start">
            <span className="text-[10rem] md:text-[14rem] font-black text-white tracking-tighter leading-none">24/7</span>
            <p className="text-3xl font-black text-red-600 uppercase tracking-tighter italic mt-[-1rem] ml-2">Open Every Single Day</p>
            
            <p className="mt-12 text-zinc-400 text-xl leading-relaxed max-w-md">
              VIP members receive a digital key for <span className="text-white font-bold">full access</span> anytime, including late nights, early mornings, and holidays.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-red-900/30">
            <p className="text-red-500 font-black text-xs uppercase tracking-widest">
              Dedicated to your schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;