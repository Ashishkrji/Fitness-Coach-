import { motion } from 'motion/react';
import { ArrowRight, Trophy, Zap, Users, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import BMICalculator from '../components/BMICalculator';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/vibrant/1920/1080" 
            alt="Elite Fitness Training" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter mb-8">
                Transform Your <br />
                <span className="text-primary italic">Potential</span> Into <br />
                Performance.
              </h1>
              <p className="text-xl text-white/70 font-medium max-w-2xl mb-12">
                S Yasmin's elite fitness coaching. Personalized guidance for weight loss, 
                muscle gain, and sustainable health improvement. Your evolution starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/contact" 
                  className="group relative px-10 py-5 bg-primary text-secondary font-black uppercase italic tracking-widest text-lg overflow-hidden brutalist-shadow-hover"
                >
                  <span className="relative z-10 flex items-center">
                    Get Free Consult <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link 
                  to="/services" 
                  className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-widest text-lg hover:border-primary hover:text-primary transition-all"
                >
                  View Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-12 opacity-50 hidden lg:flex">
          <div className="flex items-center space-x-2">
            <Trophy className="text-primary w-5 h-5" />
            <span className="uppercase text-xs font-bold tracking-widest">Certified Coach</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="text-primary w-5 h-5" />
            <span className="uppercase text-xs font-bold tracking-widest">Rapid Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="text-primary w-5 h-5" />
            <span className="uppercase text-xs font-bold tracking-widest">500+ Clients</span>
          </div>
        </div>
      </section>

      {/* Stats/About Brief */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-accent relative overflow-hidden">
               <img 
                src="https://picsum.photos/seed/fitness-coach/800/1000" 
                alt="S Yasmin" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-primary text-secondary px-6 py-4 -rotate-2">
                <span className="text-3xl font-black italic">12+ YRS EXP</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 aspect-square bg-primary p-8 hidden md:block">
              <h3 className="text-secondary text-2xl font-black leading-tight uppercase italic mb-4">
                Proven Track Record
              </h3>
              <p className="text-secondary/80 text-sm font-bold">
                Specializing in holistic transformation that lasts.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-8 bg-primary text-secondary inline-block px-4 py-2 rotate-1">
                MEET YOUR COACH
              </h2>
              <p className="text-xl text-white font-medium mb-6">
                I'm S Yasmin, and I've spent over a decade perfecting the art of physique transformation.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                My approach isn't about temporary fixes. It's about engineering a lifestyle that supports your goals. 
                Whether you're looking to shed 20kg or build 10kg of lean muscle, we use science-backed protocols 
                tailored to your unique physiology.
              </p>
              <div className="space-y-4">
                 {['Tailored Nutrition Plans', 'Elite Strength Coaching', 'Daily Accountability', 'Sustainable Habits'].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="w-6 h-1 bg-primary" />
                    <span className="uppercase font-bold tracking-widest text-sm">{item}</span>
                  </div>
                 ))}
              </div>
              <div className="pt-10">
                <Link to="/about" className="text-primary font-black uppercase italic tracking-widest border-b-2 border-primary pb-1 hover:pb-2 transition-all">
                  Read My Full Story
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
              COACHING <span className="text-primary">PROGRAMS</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto uppercase tracking-widest font-bold text-xs ring-1 ring-white/10 px-4 py-2 inline-block">
              Scalable options for every level of commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Weight Loss" 
              desc="Aggressive fat loss protocols combined with metabolism protection."
              icon="Zap"
              price="399"
              metrics={{ intensity: 85, difficulty: 70, commitment: 90 }}
            />
            <ServiceCard 
              title="Muscle Gain" 
              desc="Hypertrophy focused cycles with precision surplus management."
              icon="Trophy"
              price="449"
              featured
              metrics={{ intensity: 95, difficulty: 80, commitment: 95 }}
            />
            <ServiceCard 
              title="Health Reset" 
              desc="Improving metabolic markers, energy levels, and foundational health."
              icon="Users"
              price="299"
              metrics={{ intensity: 60, difficulty: 50, commitment: 70 }}
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="bg-secondary py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                LIFE AT <br /><span className="text-primary italic">THE HUB</span>
              </h2>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest">Connect with our community on Instagram</p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white/5 hover:bg-primary hover:text-secondary px-8 py-4 transition-all group"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-black uppercase italic tracking-widest text-sm">@syasmin_fitness</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square bg-accent relative group cursor-pointer overflow-hidden brutalist-border"
              >
                <img 
                  src={`https://picsum.photos/seed/insta-fit-${i}/600/600`} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="w-10 h-10 text-secondary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <BMICalculator />
      </section>

      {/* Feedback/Testimonials */}
      <section className="py-10">
         <TestimonialSlider />
      </section>

      {/* Blog Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
              FITNESS <br /><span className="text-primary italic">INSIGHTS</span>
            </h2>
            <p className="text-white/50 text-sm font-bold uppercase tracking-widest">Education is as important as execution.</p>
          </div>
          <Link to="/blog" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold uppercase italic tracking-widest transition-all">
            See All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <div key={i} className="group cursor-pointer">
               <div className="aspect-video bg-accent mb-6 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/seed/fitness-post-${i}/600/400`} 
                    alt="Blog Post" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 font-bold text-[10px] uppercase">
                    Nutrition
                  </div>
               </div>
               <h3 className="text-xl font-bold uppercase italic mb-3 group-hover:text-primary transition-colors">
                 Why Your 1200 Calorie Diet is Failing You
               </h3>
               <p className="text-white/50 text-sm line-clamp-2 mb-4">
                 Metabolic adaptation is a real phenomenon. Learn how to break through weight loss plateaus...
               </p>
               <span className="text-xs uppercase tracking-widest font-black text-primary">Read More →</span>
             </div>
           ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 text-center">
          FREQUENTLY <br /><span className="text-primary italic text-5xl md:text-8xl">ASKED</span>
        </h2>
        
        <div className="space-y-6">
          {[
            { q: "How long does a typical transformation take?", a: "Most clients see significant physiological changes within 8-12 weeks. However, true long-term habits usually take 6 months to solidify." },
            { q: "Do I need a gym membership?", a: "Not necessarily. While a gym provides more tools, I can design elite-level hypertrophy and conditioning programs for home setups with minimal equipment." },
            { q: "Is nutrition coaching included?", a: "Yes. In fact, it's the core of my programs. Training is only 20% of the equation; we focus heavily on metabolic health through nutrition." },
            { q: "Can I cancel anytime?", a: "Coaching is billed monthly. While I ask for a 3-month commitment for realistic results, you are never locked into a predatory contract." }
          ].map((faq, i) => (
            <div key={i} className="group border-2 border-white/5 hover:border-primary/50 transition-all p-8 bg-white/5">
              <h3 className="text-xl font-bold uppercase italic mb-4 flex items-center space-x-4">
                <span className="text-primary text-xs font-mono">0{i+1}</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-white/40 text-sm leading-relaxed ml-8">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="pb-32 px-4">
        <div className="max-w-5xl mx-auto bg-primary p-12 md:p-24 text-center -rotate-1 brutalist-shadow">
          <div className="rotate-1">
            <h2 className="text-secondary text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-[0.8] mb-12">
              STOP WISHING. <br />START DOING.
            </h2>
            <Link 
              to="/contact" 
              className="px-12 py-6 bg-secondary text-white font-black uppercase italic tracking-widest text-xl hover:scale-105 transition-transform inline-block"
            >
              Book Your Free Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
