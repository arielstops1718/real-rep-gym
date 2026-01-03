import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- Sub-components for better organization ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-7'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-black tracking-tighter italic oswald">
          <span className="text-red-600">ARVIN</span>REPS
        </a>
        <div className="hidden md:flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em] items-center italic">
          <a href="#services" className="hover:text-red-500 transition-colors">The Arsenal</a>
          <a href="#memberships" className="hover:text-red-500 transition-colors">Pricing</a>
          <a href="#coach" className="hover:text-red-500 transition-colors">AI Coach</a>
          <a href="#hours" className="hover:text-red-500 transition-colors">Hours</a>
          <a href="#contact" className="bg-red-600 text-white px-8 py-3 skew-box hover:bg-red-700 transition-all">
            <span className="skew-content inline-block">Join Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const AICoach = () => {
  const [messages, setMessages] = useState([
    { role: 'model', text: "Ready to put in work? I'm your Head Coach. I handle routines, motivation, and gym info. What's your goal today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages]);

  const askCoach = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are the Head Coach at Arvin Reps Gym in Arvin, CA. You are motivating, direct, and local. The address is 741 Bear Mt Blvd. You help with weight lifting, fat loss, and strength routines. Use words like 'reps', 'set', 'grind', and 'strength'.",
        }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "Keep pushing! Say that again, I missed it." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Access to the brain is limited! (Check your API Key settings). Until then, just keep lifting heavy!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="coach" className="bg-zinc-900 border-2 border-zinc-800 rounded-none overflow-hidden flex flex-col h-[550px] shadow-2xl relative">
      <div className="bg-red-600 p-5 font-black italic flex items-center justify-between text-white oswald tracking-widest">
        <div className="flex items-center gap-3">
          <i className="fas fa-bolt animate-pulse"></i> LIVE COACH
        </div>
        <span className="text-[10px] bg-black/30 px-2 py-1">24/7 SUPPORT</span>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-950">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-none border-l-4 ${m.role === 'user' ? 'bg-red-700/20 border-red-600 text-zinc-100' : 'bg-zinc-900 border-zinc-700 text-zinc-300'} italic font-medium text-sm`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-red-600 animate-pulse text-xs font-black tracking-widest uppercase italic">Coach is thinking...</div>}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={askCoach} className="p-5 bg-zinc-900 flex gap-3 border-t border-zinc-800">
        <input 
          value={input} onChange={e => setInput(e.target.value)}
          placeholder="Ask for a routine..." 
          className="flex-1 bg-black border-2 border-zinc-800 p-4 text-sm text-white focus:outline-none focus:border-red-600 font-bold" 
        />
        <button type="submit" className="bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition-all">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

const App = () => (
  <div className="selection:bg-red-600 selection:text-white">
    <Navbar />
    
    {/* HERO */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070" 
          className="w-full h-full object-cover grayscale brightness-50 contrast-125" 
          alt="Gym Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-red-600 font-black uppercase tracking-[0.5em] text-xs mb-6">Arvin, CA | The Iron Stronghold</h2>
        <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-none uppercase italic oswald mb-6 select-none">
          OWN YOUR <br /> <span className="text-gradient">REPS</span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 font-medium italic leading-relaxed">
          741 Bear Mt Blvd. Elite equipment for serious lifters. Join the neighborhood's most dedicated fitness community.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#memberships" className="bg-red-600 text-white px-14 py-6 font-black text-2xl skew-box hover:bg-red-700 transition-all uppercase italic oswald shadow-[0_0_40px_rgba(220,38,38,0.3)]">
            <span className="skew-content block">Start Today</span>
          </a>
          <a href="#coach" className="border-2 border-zinc-700 bg-zinc-900/40 text-white px-14 py-6 font-black text-2xl hover:bg-zinc-800 transition-all uppercase italic oswald">
            AI Trainer
          </a>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    <section id="services" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-red-600 font-black uppercase mb-4 italic tracking-widest text-sm">Our Arsenal</h2>
            <h3 className="text-5xl md:text-7xl font-black italic oswald uppercase leading-none">PROFESSIONAL <br /> EQUIPMENT</h3>
          </div>
          <p className="text-zinc-500 italic font-medium max-w-xs border-l-2 border-red-600 pl-4">No lines, no fluff. Just the best racks and platforms in Arvin.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'OPEN GYM', icon: 'fa-dumbbell', desc: 'Elite Rogue racks, platforms, and a massive selection of free weights.' },
            { title: '24/7 ACCESS', icon: 'fa-key', desc: 'VIP members get biometric keycard access. Train on your schedule.' },
            { title: 'STRENGTH', icon: 'fa-fire', desc: 'Competition-grade plates and specialized bars for the dedicated lifter.' }
          ].map((s, i) => (
            <div key={i} className="group bg-zinc-900 p-12 border-b-8 border-zinc-800 hover:border-red-600 transition-all duration-500">
              <i className={`fas ${s.icon} text-5xl text-red-600 mb-10 group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-3xl font-black mb-6 italic oswald uppercase">{s.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AI COACH & PRICING */}
    <section id="memberships" className="py-32 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <AICoach />
          <div>
            <h2 className="text-red-600 font-black mb-6 italic uppercase tracking-[0.3em] text-sm">The Plans</h2>
            <h3 className="text-6xl font-black mb-12 italic oswald leading-none uppercase tracking-tighter">REDLINE YOUR <br /> PROGRESS</h3>
            
            <div className="space-y-8">
              <div className="bg-zinc-950 p-10 border-l-8 border-zinc-800 hover:border-red-900 transition-all flex justify-between items-center group cursor-pointer">
                <div>
                  <h4 className="text-3xl font-black italic oswald uppercase tracking-wider">STANDARD</h4>
                  <p className="text-zinc-500 font-bold text-xs uppercase mt-1">Staffed Hours Access</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-white">$34.99</p>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mt-1">/ Month</p>
                </div>
              </div>
              <div className="bg-zinc-950 p-10 border-l-8 border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.15)] flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-4 py-2 uppercase tracking-widest">BEST VALUE</div>
                <div>
                  <h4 className="text-3xl font-black italic oswald uppercase tracking-wider text-red-600">VIP TOTAL ACCESS</h4>
                  <p className="text-zinc-400 font-bold text-xs uppercase mt-1">24/7 Unlimited Access</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-white">$54.99</p>
                  <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mt-1">/ Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* HOURS */}
    <section id="hours" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="relative glass p-16 md:p-24 skew-box max-w-5xl mx-auto border-zinc-800 border-4">
          <div className="skew-content">
            <h2 className="text-5xl md:text-8xl font-black italic oswald mb-12 uppercase tracking-tighter">ACCESS HOURS</h2>
            <div className="grid md:grid-cols-2 gap-12 text-left italic">
              <div>
                <p className="text-red-600 font-black mb-6 uppercase tracking-widest text-[10px]">Staffed Access</p>
                <ul className="space-y-3 text-2xl font-black oswald">
                  <li className="flex justify-between border-b border-zinc-800 pb-2"><span>MON-FRI</span> <span className="text-red-600">6AM-10PM</span></li>
                  <li className="flex justify-between border-b border-zinc-800 pb-2"><span>SAT-SUN</span> <span className="text-red-600">8AM-2PM</span></li>
                </ul>
              </div>
              <div className="bg-red-600/10 p-8 border-2 border-red-600/30 rounded">
                <p className="text-red-600 font-black mb-4 uppercase tracking-widest text-[10px]">VIP Keycard</p>
                <p className="text-8xl font-black text-white oswald leading-none">24 / 7</p>
                <p className="text-zinc-500 mt-4 text-[11px] font-black uppercase tracking-widest">Never Locked. No Excuses.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER */}
    <footer id="contact" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
        <div>
          <div className="text-3xl font-black italic oswald mb-6">
            <span className="text-red-600">ARVIN</span>REPS
          </div>
          <p className="text-zinc-500 leading-relaxed italic">741 Bear Mt Blvd, Arvin, CA 93203. <br />The home of Arvin strength.</p>
        </div>
        <div className="space-y-4 font-black uppercase tracking-widest text-sm italic">
          <p className="text-red-600 underline underline-offset-8">Contact Info</p>
          <p className="text-white flex items-center gap-3"><i className="fas fa-phone"></i> (555) 123-REPS</p>
          <p className="text-white flex items-center gap-3"><i className="fas fa-envelope"></i> hello@arvinreps.com</p>
        </div>
        <div className="text-right flex flex-col justify-end">
          <p className="text-zinc-800 text-[10px] font-black uppercase italic tracking-[0.4em]">© 2024 Arvin Reps Gym. Build Your Legacy.</p>
        </div>
      </div>
    </footer>
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
