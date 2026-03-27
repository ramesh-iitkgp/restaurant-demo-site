import { ArrowRight } from 'lucide-react';

export default function Menu() {
  return (
    <section id="menu" className="bg-white py-24 px-4 sm:px-8 border-t border-black/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The Menu</span>
            <h2 className="mt-2 font-display text-5xl sm:text-7xl font-semibold uppercase tracking-tighter text-black leading-none">
              Taste The<br />Essence
            </h2>
          </div>
          <div className="md:max-w-xs text-right md:text-left">
            <p className="text-sm text-black/60">
              From sizzling Tandoori dishes to traditional Nepalese specialities.
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-widest text-black hover:text-brand-red hover:border-brand-red transition-colors">
              Download Full Menu
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Item 1 */}
          <div className="group">
            <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=800&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Chicken Curry" />
            </div>
            <div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
              <h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Chicken Curry</h3>
              <span className="font-mono text-sm font-semibold">£10.50</span>
            </div>
            <p className="mt-2 text-xs text-black/60 line-clamp-2">Aromatic spices, tender chicken breast, traditional sauce.</p>
          </div>

          {/* Item 2 */}
          <div className="group">
            <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Momos" />
            </div>
            <div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
              <h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Nepalese Momos</h3>
              <span className="font-mono text-sm font-semibold">£8.95</span>
            </div>
            <p className="mt-2 text-xs text-black/60 line-clamp-2">Steamed dumplings filled with spiced meat or vegetables, served with chutney.</p>
          </div>

          {/* Item 3 */}
          <div className="group">
            <div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Biryani" />
            </div>
            <div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
              <h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Mutton Biryani</h3>
              <span className="font-mono text-sm font-semibold">£12.95</span>
            </div>
            <p className="mt-2 text-xs text-black/60 line-clamp-2">Basmati rice cooked with marinated mutton and exotic spices.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#order" className="inline-flex items-center gap-3 rounded-full bg-brand-black px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-red">
            <span>View All Dishes</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
