import { Zap, Trophy, Users, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: string;
  price: string;
  featured?: boolean;
  metrics?: {
    intensity: number;
    difficulty: number;
    commitment: number;
  };
}

const iconMap: Record<string, any> = { Zap, Trophy, Users };

export default function ServiceCard({ 
  title, 
  desc, 
  icon, 
  price, 
  featured, 
  metrics = { intensity: 70, difficulty: 60, commitment: 80 } 
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "relative p-8 md:p-12 h-full flex flex-col border-2 transition-all duration-300",
        featured ? "bg-primary border-primary" : "bg-black/40 border-white/10 hover:border-primary/50"
      )}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-primary px-4 py-1 text-[10px] font-black uppercase tracking-widest">
          Most Popular
        </div>
      )}

      <div className="flex justify-between items-start mb-8">
        <div className={cn("p-4", featured ? "bg-secondary text-primary" : "bg-primary/10 text-primary")}>
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <h3 className={cn("text-3xl font-black uppercase italic mb-4", featured ? "text-secondary" : "text-white")}>
        {title}
      </h3>
      
      <p className={cn("text-sm font-medium mb-8 leading-relaxed", featured ? "text-secondary/70" : "text-white/40")}>
        {desc}
      </p>

      {/* Animated Metrics Section */}
      <div className="space-y-4 mb-10">
        {[
          { label: 'Intensity', value: metrics.intensity },
          { label: 'Difficulty', value: metrics.difficulty },
          { label: 'Commitment', value: metrics.commitment }
        ].map((metric, i) => (
          <div key={metric.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className={cn("text-[10px] font-black uppercase tracking-widest", featured ? "text-secondary/60" : "text-white/30")}>
                {metric.label}
              </span>
              <span className={cn("text-[10px] font-black font-mono", featured ? "text-secondary" : "text-primary")}>
                {metric.value}%
              </span>
            </div>
            <div className={cn("w-full h-1 overflow-hidden", featured ? "bg-secondary/10" : "bg-white/5")}>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className={cn("h-full", featured ? "bg-secondary" : "bg-primary")}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-4 mb-10">
        {['Custom Nutrition', 'Video Form Checks', 'Weekly Call'].map((perk) => (
          <div key={perk} className="flex items-center space-x-3">
            <Check className={cn("w-4 h-4", featured ? "text-secondary" : "text-primary")} />
            <span className={cn("text-xs font-bold uppercase tracking-widest", featured ? "text-secondary/80" : "text-white/60")}>
              {perk}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between">
        <div>
           <span className={cn("text-5xl font-black italic", featured ? "text-secondary" : "text-primary")}>${price}</span>
           <span className={cn("text-xs font-bold uppercase ml-1", featured ? "text-secondary/40" : "text-white/20")}>/mo</span>
        </div>
        <button className={cn(
          "px-6 py-3 font-black uppercase italic text-xs tracking-widest transition-all",
          featured ? "bg-secondary text-white hover:bg-black" : "bg-primary text-secondary hover:brightness-110"
        )}>
          Enlist Now
        </button>
      </div>
    </motion.div>
  );
}
