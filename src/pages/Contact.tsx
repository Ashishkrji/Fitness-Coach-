import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { fitnessService } from '../lib/fitnessService';
import { useState } from 'react';
import { cn } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState<ContactFormData | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handlePreSubmit = (data: ContactFormData) => {
    setFormData(data);
    setShowConfirm(true);
  };

  const onConfirm = async () => {
    if (!formData) return;
    setIsSubmitting(true);
    setShowConfirm(false);
    try {
      await fitnessService.submitInquiry(formData);
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setShowConfirm(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-accent border-2 border-primary p-8 md:p-12 max-w-md w-full brutalist-shadow"
            >
              <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-primary">Confirm Submission</h3>
              <p className="text-white/70 mb-8 font-medium">Are you sure you want to submit your inquiry? S Yasmin will receive your details immediately.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onConfirm}
                  className="flex-1 py-4 bg-primary text-secondary font-black uppercase italic tracking-widest hover:brightness-110 transition-all"
                >
                  Yes, Submit
                </button>
                <button 
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-4 border-2 border-white/10 text-white font-black uppercase italic tracking-widest hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.8] mb-8">
                LET'S <br /><span className="text-primary italic text-7xl md:text-9xl">TALK</span>
              </h1>
              <p className="text-xl text-white/70 max-w-md font-medium">
                Ready to take the first step towards a better you? Send a message and let's map out your journey.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-primary text-secondary rounded-xl group-hover:rotate-12 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-black text-white/30 tracking-widest mb-1 font-mono">Call Anytime</span>
                  <span className="text-xl font-bold tracking-tighter">+1 (234) 567-890</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-primary text-secondary rounded-xl group-hover:rotate-12 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-black text-white/30 tracking-widest mb-1 font-mono">Email Us</span>
                  <span className="text-xl font-bold tracking-tighter">coach@syasmin-fitness.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 group cursor-pointer">
                <div className="p-4 bg-primary text-secondary rounded-xl group-hover:rotate-12 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs uppercase font-black text-white/30 tracking-widest mb-1 font-mono">Location</span>
                  <span className="text-xl font-bold tracking-tighter">Wellness City, WC 5001</span>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-6 italic font-mono">Follow My Journey</h3>
              <div className="flex space-x-6">
                <a href="#" className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:text-primary" />
                  <span className="uppercase text-[10px] font-black tracking-widest">Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors group">
                  <Facebook className="w-5 h-5 group-hover:text-primary" />
                  <span className="uppercase text-[10px] font-black tracking-widest">Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors group">
                  <Twitter className="w-5 h-5 group-hover:text-primary" />
                  <span className="uppercase text-[10px] font-black tracking-widest">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="bg-accent p-10 md:p-16 border-2 border-white/5 relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Inquiry Sent!</h2>
                  <p className="text-white/50 mb-8 max-w-sm mx-auto">
                    Thanks for reaching out. S Yasmin will review your goals and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-black uppercase italic tracking-widest border-b-2 border-primary pb-1"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(handlePreSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">Your Name</label>
                       <input 
                        {...register('name')}
                        className={cn(
                          "w-full bg-secondary border-b-2 px-0 py-4 focus:border-primary transition-colors outline-none font-bold placeholder:text-white/10",
                          errors.name ? "border-red-500" : "border-white/10"
                        )}
                        placeholder="e.g. John Doe"
                       />
                       {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">Email Address</label>
                       <input 
                        {...register('email')}
                        className={cn(
                          "w-full bg-secondary border-b-2 px-0 py-4 focus:border-primary transition-colors outline-none font-bold placeholder:text-white/10",
                          errors.email ? "border-red-500" : "border-white/10"
                        )}
                        placeholder="hello@example.com"
                       />
                       {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">Phone Number</label>
                       <input 
                        {...register('phone')}
                        className={cn(
                          "w-full bg-secondary border-b-2 px-0 py-4 focus:border-primary transition-colors outline-none font-bold placeholder:text-white/10",
                          errors.phone ? "border-red-500" : "border-white/10"
                        )}
                        placeholder="+1 (000) 000-0000"
                       />
                       {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.phone.message}</p>}
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">Service of Interest</label>
                       <select 
                        {...register('service')}
                        className={cn(
                          "w-full bg-secondary border-b-2 px-0 py-4 focus:border-primary transition-colors outline-none font-bold appearance-none",
                          errors.service ? "border-red-500" : "border-white/10"
                        )}
                       >
                         <option value="">Select a Program</option>
                         <option value="weight-loss">Weight Loss Elite</option>
                         <option value="muscle-gain">Hypertrophy Build</option>
                         <option value="health-reset">Foundational Health</option>
                         <option value="other">Other Inquiry</option>
                       </select>
                       {errors.service && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.service.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-white/30 font-mono">Briefly describe your goals</label>
                    <textarea 
                      {...register('message')}
                      rows={4}
                      className={cn(
                        "w-full bg-secondary border-b-2 px-0 py-4 focus:border-primary transition-colors outline-none font-bold placeholder:text-white/10 resize-none",
                        errors.message ? "border-red-500" : "border-white/10"
                      )}
                      placeholder="I want to lose 10kg and improve my strength..."
                    />
                    {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.message.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-6 bg-primary text-secondary font-black uppercase italic tracking-widest text-lg flex items-center justify-center space-x-3 hover:brightness-110 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Commit to Excellence'}
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>
            {/* Design accents */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/5 -z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
