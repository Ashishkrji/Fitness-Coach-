import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Weight Loss Client",
    comment: "I lost 15kg in 12 weeks with Yasmin. The nutrition plan was so sustainable that I didn't feel like I was on a diet at all.",
    image: "https://picsum.photos/seed/portrait-1/100/100"
  },
  {
    name: "Sarah Chen",
    role: "Muscle Build Client",
    comment: "Gaining lean muscle as a vegetarian was tough until I met Yasmin. Her precision with micros and macros is unmatched.",
    image: "https://picsum.photos/seed/portrait-2/100/100"
  },
  {
    name: "James Wilson",
    role: "Executive Health",
    comment: "As a busy CEO, I needed a trainer who understands time constraints. The high-intensity protocols she designed are perfect.",
    image: "https://picsum.photos/seed/portrait-3/100/100"
  }
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="max-w-5xl mx-auto px-4 relative">
      <div className="absolute top-0 left-0 text-primary/10">
        <Quote className="w-48 h-48 -rotate-12" />
      </div>

      <div className="relative z-10 text-center py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-tight max-w-3xl mx-auto">
              "{testimonials[index].comment}"
            </p>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[index].image} 
                alt={testimonials[index].name}
                className="w-16 h-16 rounded-full border-2 border-primary grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <div className="font-black uppercase italic tracking-widest text-primary">{testimonials[index].name}</div>
                <div className="text-xs uppercase font-bold text-white/40 tracking-widest">{testimonials[index].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center space-x-4 mt-16">
          <button 
            onClick={prev}
            className="p-4 bg-white/5 hover:bg-primary hover:text-secondary transition-all rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-primary w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="p-4 bg-white/5 hover:bg-primary hover:text-secondary transition-all rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
