import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-red pt-32 pb-20 text-center">
      
      {/* Background Texture/Overlay */}
      <div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <span className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
          Coventry • Indian • Nepalese
        </span>
        
        <h1 className="text-[5rem] sm:text-[8rem] md:text-[11rem] leading-[0.85] uppercase font-semibold text-white tracking-tighter font-display drop-shadow-2xl">
          Delhi 76
        </h1>
        
        <p className="mt-6 max-w-xl font-sans text-sm sm:text-base font-medium text-white/90 tracking-wide uppercase leading-relaxed">
          76 Albany Road, Earlsdon, Coventry CV5 6JU
        </p>

        {/* Restored Text */}
        <h2 className="mt-12 font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight text-brand-accent drop-shadow-lg">
          Authentic Indian Curry
        </h2>

        {/* Hero Image Composition */}
        <div className="relative mt-8 mb-16 w-full max-w-3xl group cursor-pointer">
          <div className="absolute inset-0 bg-black/20 blur-3xl rounded-full transform scale-75"></div>
          {/* New Image */}
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fbd7a6c-3c9f-48f3-9405-e3bd7e4420b8_1600w.png" alt="Authentic Indian Thali Feast" className="relative z-10 mx-auto h-[300px] sm:h-[450px] w-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/10 rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out brightness-105 contrast-110" />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-4 sm:right-10 z-20 animate-bounce-slow">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-brand-black shadow-xl border-4 border-brand-red">
              <span className="text-xs font-semibold uppercase tracking-tighter">Rated</span>
              <span className="font-display text-2xl font-semibold">4.8</span>
              <div className="flex text-brand-red gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-2 w-2 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 relative z-20">
          <a href="#menu" className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-xl transition-all hover:bg-black hover:text-white">
            <span>Explore Menu</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a href="#book" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-brand-red hover:border-white">
            Book a Table
          </a>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg className="block w-full h-12 sm:h-24 text-brand-cream" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
