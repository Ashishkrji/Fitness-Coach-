import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BMICalculator() {
  const [weight, setWeight] = useState<number>(70);
  const [height, setHeight] = useState<number>(175);
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const result = weight / (heightInMeters * heightInMeters);
    setBmi(Number(result.toFixed(1)));
    
    if (result < 18.5) setCategory('Underweight');
    else if (result < 25) setCategory('Healthy');
    else if (result < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div className="bg-accent border border-white/10 p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-6">
          <Calculator className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Health Tools</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 leading-tight">
          CHECK YOUR <br /><span className="text-primary italic">VITAL STATS</span>
        </h2>
        <p className="text-white/50 mb-10 max-w-md">
          Body Mass Index (BMI) is a simple measurement that uses your height and weight to work out if your weight is healthy.
        </p>

        <div className="space-y-8 max-w-sm">
          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/50">
              <label>Weight (kg)</label>
              <span className="text-primary">{weight} kg</span>
            </div>
            <input 
              type="range" 
              min="40" 
              max="200" 
              value={weight} 
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full accent-primary h-1 bg-white/10 appearance-none rounded-full cursor-pointer"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-white/50">
              <label>Height (cm)</label>
              <span className="text-primary">{height} cm</span>
            </div>
            <input 
              type="range" 
              min="140" 
              max="220" 
              value={height} 
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full accent-primary h-1 bg-white/10 appearance-none rounded-full cursor-pointer"
            />
          </div>

          <button 
            onClick={calculateBMI}
            className="w-full py-4 bg-primary text-secondary font-black uppercase italic tracking-widest transition-all hover:brightness-110"
          >
            Calculate BMI
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-square bg-secondary flex flex-col items-center justify-center border-2 border-primary/20 relative z-10 p-10 text-center">
          {bmi ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={bmi}
            >
              <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-black mb-4 block">Your Result</span>
              <div className="text-8xl md:text-9xl font-black italic text-primary leading-none mb-4">{bmi}</div>
              <div className="text-2xl font-black uppercase italic tracking-tighter mb-2">{category}</div>
              <p className="text-white/40 text-xs italic">
                {category === 'Healthy' ? 'Great job! Keep maintaining your lifestyle.' : 'Consult with me to reach your ideal range.'}
              </p>
            </motion.div>
          ) : (
            <div className="text-white/20">
              <Calculator className="w-24 h-24 mb-4 mx-auto" />
              <p className="font-bold uppercase italic tracking-widest">Results will appear here</p>
            </div>
          )}
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-full h-full border border-primary/10 -z-0" />
        <div className="absolute top-4 left-4 w-full h-full border border-primary/10 -z-0" />
      </div>
    </div>
  );
}
