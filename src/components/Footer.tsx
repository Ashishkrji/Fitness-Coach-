import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold uppercase italic tracking-tighter">S Yasmin</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Professional fitness coaching for those who demand more from themselves. Weight loss, gain, and elite physical transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-primary hover:text-secondary rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary hover:text-secondary rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-primary hover:text-secondary rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About S Yasmin</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/transformations" className="hover:text-primary transition-colors">Results Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Fitness Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Support</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-widest mb-6 text-primary">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Modern Fitness Hub, 45 Elite St,<br />Wellness City, WC 5001</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>coach@syasmin-fitness.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} S Yasmin Fitness Coaching. Built for elite performers.
          </p>
        </div>
      </div>
    </footer>
  );
}
