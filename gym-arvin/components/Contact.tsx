
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Visit Us</h2>
          <h3 className="text-4xl font-black mb-8 tracking-tight uppercase">JOIN THE COMMUNITY.</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <p className="font-black text-zinc-100 uppercase text-xs tracking-widest mb-1">Our Location</p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  741 Bear Mt Blvd<br />
                  Arvin, California 93203
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="font-black text-zinc-100 uppercase text-xs tracking-widest mb-1">Call Us</p>
                <p className="text-zinc-500 text-sm font-bold">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="font-black text-zinc-100 uppercase text-xs tracking-widest mb-1">Email Us</p>
                <p className="text-zinc-500 text-sm font-bold">community@arvinreps.com</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-400 hover:text-red-600 hover:border-red-600 transition-all">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-400 hover:text-red-600 hover:border-red-600 transition-all">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 rounded-xl border border-zinc-800 shadow-2xl">
            <p className="text-zinc-400 mb-8 font-medium italic">Have a question about memberships or programs? Drop us a line and we'll get you started on your journey.</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-black mb-2 text-zinc-500 uppercase tracking-widest">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-black mb-2 text-zinc-500 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-xs font-black mb-2 text-zinc-500 uppercase tracking-widest">Your Goals / Questions</label>
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-4 rounded-md font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest"
            >
              {status === 'success' ? (
                <>
                  <i className="fas fa-check"></i> WELCOME ABOARD!
                </>
              ) : (
                'SEND MESSAGE'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
