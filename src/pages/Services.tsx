import { motion } from 'motion/react';
import ServiceCard from '../components/ServiceCard';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-8">
            ELITE <span className="text-primary italic">PROGRAMS</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Standardizing excellence across all fitness disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
           <ServiceCard 
              title="Fat Decimation" 
              desc="The most aggressive yet sustainable fat loss program in the field. Designed for significant BMI reduction."
              icon="Zap"
              price="399"
              metrics={{ intensity: 90, difficulty: 75, commitment: 95 }}
            />
            <ServiceCard 
              title="Hypertrophy Elite" 
              desc="Focused on building dry, lean muscle mass. Includes advanced volume monitoring and nutritional loading."
              icon="Trophy"
              price="449"
              featured
              metrics={{ intensity: 95, difficulty: 85, commitment: 95 }}
            />
            <ServiceCard 
              title="Lifestyle Reset" 
              desc="For the busy professional. Optimize energy, sleep, and health markers without living in the gym."
              icon="Users"
              price="299"
              metrics={{ intensity: 50, difficulty: 40, commitment: 60 }}
            />
        </div>

        {/* What's included */}
        <div className="bg-accent p-12 md:p-24 border border-white/5">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div>
               <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8">
                 EVERY ENLISTMENT <br /><span className="text-primary">INCLUDES:</span>
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   'Tailored Macro Coaching',
                   'Video Form Analysis',
                   '24/7 Priority Chat',
                   'Supplement Protocol',
                   'Biofeedback Monitoring',
                   'Habit Engineering',
                   'Travel Workout Adaptations',
                   'Mental Fortitude Training'
                 ].map((perk) => (
                   <div key={perk} className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-primary/20 flex items-center justify-center rounded">
                       <Check className="w-3 h-3 text-primary" />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{perk}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             <div className="space-y-8 bg-secondary p-10 brutalist-shadow">
                <h3 className="text-2xl font-black uppercase italic italic tracking-tighter">Ready to Begin?</h3>
                <p className="text-white/50 text-sm">
                  Spaces are intentionally limited to preserve coaching quality. Click below to see if you qualify for a slot.
                </p>
                <Link 
                  to="/contact"
                  className="w-full py-4 bg-primary text-secondary font-black uppercase italic tracking-widest text-center block transition-all hover:scale-105"
                >
                  Start Qualitative Assessment
                </Link>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
