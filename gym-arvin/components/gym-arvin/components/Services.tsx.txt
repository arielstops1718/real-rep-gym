import React from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Open Gym Access',
    description: 'The floor is yours. No distractions, no waiting in line for machines. Just you and the iron, 24/7 for VIPs.',
    icon: 'fa-door-open'
  },
  {
    id: '2',
    title: 'Strength & Conditioning',
    description: 'Master the compound lifts. Squat, bench, and deadlift in a facility designed for maximum power output.',
    icon: 'fa-dumbbell'
  },
  {
    id: '3',
    title: 'Weight Loss Programs',
    description: 'Reach your goals with our elite treadmill zone and specialized high-intensity fat-burning protocols.',
    icon: 'fa-fire'
  }
];

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-red-600 font-bold uppercase tracking-widest mb-4">Our Programs</h2>
        <h3 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic">RESULTS DRIVEN FITNESS.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="group bg-zinc-900 p-10 rounded-none border-l-4 border-zinc-800 hover:border-red-600 transition-all duration-300">
            <div className="w-20 h-20 bg-zinc-800 rounded-none flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors skew-x-[-10deg]">
              <i className={`fas ${service.icon} text-3xl text-red-600 group-hover:text-white skew-x-[10deg]`}></i>
            </div>
            <h4 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">{service.title}</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
