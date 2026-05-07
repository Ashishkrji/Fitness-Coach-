import { motion } from 'motion/react';
import { Award, Target, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-12">
              S <br /><span className="text-primary italic">YASMIN</span>
            </h1>
            <p className="text-2xl font-bold uppercase italic tracking-widest text-primary mb-8 underline underline-offset-8">
              Engineer of Excellence
            </p>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                My journey into fitness wasn't just about looking better. It was about discovering the ultimate potential of the human body. 
              </p>
              <p>
                With certifications in Sports Nutrition, Strength & Conditioning, and Behavioral Psychology, I've spent the last decade bridge the gap between "working out" and "transforming."
              </p>
              <p>
                I don't believe in quick fixes, fad diets, or "magical" supplements. I believe in physics, physiology, and the unrelenting pursuit of your best self.
              </p>
            </div>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-square bg-accent overflow-hidden brutalist-shadow">
               <img 
                src="https://picsum.photos/seed/coach-yasmin/1000/1000" 
                alt="Coach S Yasmin" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-10 -right-10 bg-primary text-secondary p-8 hidden md:block">
              <h3 className="text-2xl font-black uppercase italic leading-none mb-2">Validated</h3>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">Over 1,000+ client hours</p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {[
            { icon: Target, title: 'Precision', desc: 'Every rep and calorie accounted for.' },
            { icon: Award, title: 'Results', desc: 'No excuses, only metrics that matter.' },
            { icon: Zap, title: 'Energy', desc: 'Optimizing for peak cognitive performance.' },
            { icon: Heart, title: 'Health', desc: 'Longevity-first transformation strategy.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border-2 border-white/5 hover:border-primary transition-all"
            >
              <item.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold uppercase italic mb-4">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <div className="border-t border-white/10 pt-32">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-20 text-center">
            CERTIFIED <span className="text-primary">&</span> QUALIFIED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { year: '2015', title: 'ISSA Certified Fitness Trainer', org: 'Intl. Sports Sciences Association' },
              { year: '2017', title: 'Precision Nutrition L1', org: 'The Gold Standard in Coaching' },
              { year: '2020', title: 'Strength & Conditioning Specialist', org: 'National Strength Academy' }
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span className="text-5xl font-black text-white/5 mb-[-2rem]">{cert.year}</span>
                <h4 className="text-xl font-bold uppercase italic tracking-tight mb-2 text-white relative z-10">{cert.title}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{cert.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
