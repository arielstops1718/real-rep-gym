import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-rows-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-red-600/10 rounded-none blur-3xl transition-all group-hover:bg-red-600/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" 
            alt="The Iron Paradise" 
            className="relative rounded-none shadow-2xl grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 border-l-8 border-red-600"
          />
        </div>

        <div>
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">The Local House of Iron</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase italic">Built by Grit. Driven by Pain.</h3>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Arvin Reps Gym was founded for the locals who are tired of the soft, "commercial" gym culture. We don't care about your outfit. 
              We care about your effort.
            </p>
            <p>
              This is a sanctuary for the hungry. Whether you're hitting a new PR on the platform or burning off the day's stress on the treadmills, 
              you're surrounded by people who respect the work.
            </p>
          </div>
          
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <i className="fas fa-bolt text-red-600"></i>
              <span className="font-bold uppercase tracking-tighter">Raw, Unfiltered Intensity</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-weight-hanging text-red-600"></i>
              <span className="font-bold uppercase tracking-tighter">Serious Plates for Serious Gains</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fas fa-skull text-red-600"></i>
              <span className="font-bold uppercase tracking-tighter">No Ego, Just Results</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
