import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    name: "Alex Rivera",
    results: "22kg Lost / 14% Bodyfat Reduction",
    before: "https://picsum.photos/seed/before-1/600/800",
    after: "https://picsum.photos/seed/after-1/600/800",
    quote: "I didn't just lose weight; I found a sustainable way to stay fit while eating the food I love."
  },
  {
    name: "Sarah Jenkins",
    results: "8kg Lean Muscle Gain",
    before: "https://picsum.photos/seed/before-2/600/800",
    after: "https://picsum.photos/seed/after-2/600/800",
    quote: "Yasmin's precision when it came to volume management and recovery was the game changer I needed."
  }
];

export default function Transformations() {
  return (
    <div className="pt-32 pb-32">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-8">
            REAL <span className="text-primary">RESULTS</span>
          </h1>
          <p className="text-xl text-white/50 font-bold uppercase tracking-widest border-l-4 border-primary pl-6">
            We don't manufacture hype. We manufacture change.
          </p>
        </div>

        <div className="space-y-40">
           {cases.map((client, idx) => (
             <div key={client.name} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                  <div className="relative group overflow-hidden">
                    <img src={client.before} alt="Before" className="w-full aspect-[3/4] object-cover grayscale" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 py-4 text-center bg-secondary/80 font-black uppercase italic text-xs tracking-widest text-white/50">Before</div>
                  </div>
                  <div className="relative group overflow-hidden">
                    <img src={client.after} alt="After" className="w-full aspect-[3/4] object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 py-4 text-center bg-primary font-black uppercase italic text-xs tracking-widest text-secondary">After</div>
                  </div>
               </div>
               
               <div className="flex-1 space-y-8">
                  <div className="flex items-center space-x-3 text-primary">
                    <Trophy className="w-6 h-6" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Transformation Case Study</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight">
                    {client.name}
                  </h2>
                  <div className="bg-primary/20 border-l-4 border-primary p-6 inline-block">
                    <span className="text-2xl font-black text-primary italic uppercase tracking-tighter">{client.results}</span>
                  </div>
                  <p className="text-xl text-white/70 italic leading-relaxed font-medium">
                    "{client.quote}"
                  </p>
                  <button className="flex items-center space-x-4 group text-white font-bold uppercase tracking-widest text-sm italic">
                    <span>Read Full Journey</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </button>
               </div>
             </div>
           ))}
        </div>
        
        <div className="mt-40 bg-white/5 p-12 text-center">
           <h3 className="text-2xl font-black uppercase italic mb-8 tracking-tighter">Your Name Could Be Here Next</h3>
           <Link to="/contact" className="px-12 py-5 bg-primary text-secondary font-black uppercase italic tracking-widest inline-block hover:scale-105 transition-all">
             Start Your Journey
           </Link>
        </div>
       </div>
    </div>
  );
}
