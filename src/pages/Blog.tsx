import { motion } from 'motion/react';
import { Search, Tag, Calendar, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const posts = [
  {
    id: 1,
    title: "The Truth About Metabolic Adaptation",
    excerpt: "Why your extreme calorie deficit might be the reason you've stopped losing weight, and how to fix it.",
    category: "Nutrition",
    date: "May 12, 2024",
    author: "S Yasmin",
    image: "https://picsum.photos/seed/blog-1/800/500"
  },
  {
    id: 2,
    title: "Top 5 Muscle Building Movements",
    excerpt: "Hypertrophy isn't just about weight. It's about tension, tempo, and mechanical advantage.",
    category: "Training",
    date: "May 10, 2024",
    author: "S Yasmin",
    image: "https://picsum.photos/seed/blog-2/800/500"
  },
  {
    id: 3,
    title: "Mastering Your Morning Routine",
    excerpt: "The first 60 minutes of your day set the physiological tone for the next 15 hours.",
    category: "Lifestyle",
    date: "May 08, 2024",
    author: "S Yasmin",
    image: "https://picsum.photos/seed/blog-3/800/500"
  },
  {
    id: 4,
    title: "Protein Sparing Modified Fasting",
    excerpt: "A deep dive into advanced fat loss strategies for elite athletes and physique competitors.",
    category: "Science",
    date: "May 05, 2024",
    author: "S Yasmin",
    image: "https://picsum.photos/seed/blog-4/800/500"
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Nutrition', 'Training', 'Lifestyle', 'Science'];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-6">
              THE <span className="text-primary italic">JOURNAL</span>
            </h1>
            <p className="text-xl text-white/50 font-bold uppercase tracking-widest max-w-lg leading-relaxed">
              Decades of fitness wisdom distilled into actionable intelligence.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[10px] uppercase font-black tracking-widest border-2 transition-all ${
                  activeCategory === cat 
                  ? 'bg-primary border-primary text-secondary' 
                  : 'border-white/10 text-white/40 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {filteredPosts.map((post, idx) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] bg-accent mb-8 overflow-hidden relative brutalist-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex space-x-2">
                   <div className="bg-primary text-secondary px-4 py-1 font-black uppercase italic text-[10px] tracking-widest shadow-lg">
                    {post.category}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-6 text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-3 h-3" />
                    <span>By {post.author}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-white/50 leading-relaxed font-medium line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-4">
                  <span className="flex items-center space-x-3 text-primary uppercase font-black italic tracking-widest text-xs group-hover:space-x-5 transition-all">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-40 bg-primary p-12 md:p-20 text-center relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-secondary text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.8] max-w-2xl mx-auto">
               NEVER MISS A <br />BREAKTHROUGH.
             </h2>
             <p className="text-secondary/60 uppercase font-black tracking-widest text-xs mb-10 max-w-md mx-auto italic">
               Join 5,000+ top performers receiving weekly fitness intelligence.
             </p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white border-2 border-secondary px-6 py-4 outline-none font-bold placeholder:text-black/30"
                />
                <button className="bg-secondary text-white px-10 py-4 font-black uppercase italic tracking-widest hover:bg-black transition-colors">
                  Subscribe
                </button>
             </form>
           </div>
           <Tag className="absolute -bottom-10 -right-10 w-64 h-64 text-secondary/5 rotate-12" />
        </div>
      </div>
    </div>
  );
}
