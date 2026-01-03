
import React from 'react';

const Memberships: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Membership Plans</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase">JOIN THE TEAM.</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Standard Membership */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col hover:border-zinc-700 transition-all shadow-xl relative overflow-hidden group">
          <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter">Standard Membership</h4>
          <p className="text-zinc-500 text-sm mb-6 uppercase tracking-widest font-bold">Consistent Progress</p>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-red-600">$34.99</span>
              <span className="text-zinc-500 text-sm">/mo (Autopay)</span>
            </div>
            <p className="text-zinc-400 text-xs mt-2 italic font-bold text-red-500/80">Monthly payment due on the 1st of each month</p>
          </div>

          <div className="space-y-4 flex-1 mb-8 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-zinc-300 font-bold uppercase tracking-tight">Registration Fee</span>
              <span className="font-black text-white">$39.99</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-zinc-300 font-bold uppercase tracking-tight">Annual Maintenance</span>
              <span className="font-black text-white">$39.99</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-zinc-300 font-bold uppercase tracking-tight">Cash Payment</span>
              <span className="font-black text-white">$39.99/mo</span>
            </div>
            
            <div className="bg-zinc-950 p-4 rounded-md space-y-3 mt-4 border border-zinc-800">
              <p className="text-red-600 text-xs font-black uppercase tracking-[0.2em]">Community Hero Discounts</p>
              <div className="flex justify-between">
                <span className="text-zinc-400">Municipal & Veteran</span>
                <span className="font-black text-white">$29.99/mo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Additional Family (Limit 2)</span>
                <span className="font-black text-white">$29.99/ea</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-xs font-black uppercase text-zinc-500 mb-2 tracking-widest">Access Hours</p>
              <div className="space-y-1 text-zinc-300 font-bold">
                <p>Mon-Fri: 6AM-10AM & 3PM-9PM</p>
                <p>Sat-Sun: 8AM-12PM</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="w-full bg-zinc-800 hover:bg-red-600 text-white font-black py-4 rounded-md text-center transition-all uppercase tracking-widest">
            SELECT STANDARD
          </a>
        </div>

        {/* VIP Membership */}
        <div className="bg-zinc-900 border-2 border-red-600 rounded-xl p-8 flex flex-col hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] transition-all shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-1 font-black text-xs uppercase tracking-widest rounded-bl-md">
            RECOMMENDED
          </div>
          
          <h4 className="text-2xl font-black mb-2 uppercase tracking-tighter">VIP Membership</h4>
          <p className="text-red-600 text-sm mb-6 uppercase tracking-widest font-bold">Total Freedom</p>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-red-600">$54.99</span>
              <span className="text-zinc-500 text-sm">/mo (Autopay)</span>
            </div>
            <p className="text-zinc-400 text-xs mt-2 italic font-bold text-red-500/80">Monthly payment due on the 1st of each month</p>
          </div>

          <div className="space-y-4 flex-1 mb-8 text-sm">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-zinc-300 font-bold uppercase tracking-tight">Registration Fee</span>
              <span className="font-black text-white">$49.99</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-zinc-800">
              <span className="text-zinc-300 font-bold uppercase tracking-tight">Annual Maintenance</span>
              <span className="font-black text-white">$39.99</span>
            </div>
            
            <div className="bg-zinc-950 p-4 rounded-md space-y-3 mt-4 border border-zinc-800">
              <p className="text-red-600 text-xs font-black uppercase tracking-[0.2em]">Community Hero Discounts</p>
              <div className="flex justify-between">
                <span className="text-zinc-400">Municipal & Veteran</span>
                <span className="font-black text-white">$49.99/mo</span>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-3 p-4 bg-red-600/10 border border-red-600/20 rounded-md">
              <i className="fas fa-unlock text-red-600 text-xl"></i>
              <div>
                <p className="text-xs font-black uppercase text-red-600 tracking-widest">UNRESTRICTED ACCESS</p>
                <p className="text-sm font-black text-white uppercase italic">24 Hours / 7 Days a week</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              <li className="flex items-center gap-2"><i className="fas fa-check text-red-600"></i> No Blackout Hours</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-red-600"></i> All-Day Keycard Access</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-red-600"></i> Priority Floor Support</li>
            </ul>
          </div>

          <a href="#contact" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-md text-center transition-all shadow-lg uppercase tracking-widest">
            GET VIP ACCESS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Memberships;