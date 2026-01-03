
import React, { useState, useRef, useEffect } from 'react';
import { getTrainerResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AITrainer: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your Arvin Coach. I'm here to support your fitness journey. How can I help you reach your goals today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    const response = await getTrainerResponse(userMessage);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Community Support</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tight uppercase">MOTIVATION ON <br /> DEMAND.</h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-8">
            Need a routine or nutrition advice? Our local AI Coach is here 24/7 to keep you on track. 
            We believe in progress, not perfection. Let's get to work together.
          </p>
          <div className="flex gap-4">
            <div className="p-6 bg-zinc-900 border-l-2 border-red-600 rounded-md flex-1">
              <i className="fas fa-heart text-red-600 mb-2 block text-2xl"></i>
              <p className="text-xs uppercase font-black tracking-widest text-zinc-100">Health Focus</p>
            </div>
            <div className="p-6 bg-zinc-900 border-l-2 border-red-600 rounded-md flex-1">
              <i className="fas fa-users text-red-600 mb-2 block text-2xl"></i>
              <p className="text-xs uppercase font-black tracking-widest text-zinc-100">Local Pride</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col h-[500px] shadow-2xl relative">
          <div className="bg-zinc-800 p-4 border-b border-zinc-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <i className="fas fa-user-check text-white"></i>
              </div>
              <div>
                <p className="text-sm font-black text-white uppercase tracking-widest">ARVIN COACH</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Ready to help</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-950">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-xl ${
                  msg.role === 'user' 
                    ? 'bg-red-600 text-white rounded-tr-none' 
                    : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-xl rounded-tl-none border border-zinc-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How can I help you today?..."
                className="flex-1 bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-red-600"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-red-600 text-white w-12 h-12 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AITrainer;