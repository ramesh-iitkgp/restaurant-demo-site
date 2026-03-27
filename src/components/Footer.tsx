import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-sm">
            <a href="#" className="font-display text-3xl font-semibold tracking-tighter uppercase mb-6 block">
              DELHI<span className="text-brand-red">76</span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed">
              Your go-to spot for authentic Nepali and Indian Dishes in Coventry. Blending tradition with a modern touch.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-brand-red transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-brand-red transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Order Now</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book A Table</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Menus</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Find Us</h4>
              
            </div>

            <div>
              <h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Contact</h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li>024 7667 2653</li>
                <li>bhupender@hotmail.co.uk</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
          <p>© Delhi 76 Coventry</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
