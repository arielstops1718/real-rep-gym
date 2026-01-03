import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="text-3xl font-black tracking-tighter text-red-600 mb-6 block">
              ARVIN<span className="text-zinc-100">REPS</span>
            </a>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              The premier destination for high-performance training in Arvin. Join our community and redefine your limits with our expert support and local facility.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-500 hover:text-red-600"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-zinc-500 hover:text-red-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-zinc-500 hover:text-red-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-zinc-500 hover:text-red-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-zinc-100 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#services" className="hover:text-red-600 transition-colors">Our Programs</a></li>
              <li><a href="#memberships" className="hover:text-red-600 transition-colors">Memberships</a></li>
              <li><a href="#ai-trainer" className="hover:text-red-600 transition-colors">AI Coach</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Join Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-100 mb-6 uppercase tracking-widest text-sm">Support</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#" className="hover:text-red-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Arvin Reps Gym. Built for the community. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
