import { Apple, PlayCircle } from 'lucide-react';

export default function AppBanner() {
  return (
    <section className="bg-brand-red py-12 px-4 text-white">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-white/20 bg-white/10 p-8 md:p-12 backdrop-blur-sm">
        <div>
          <h3 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight">App Coming Soon</h3>
          <p className="mt-2 text-sm text-white/80 max-w-md">
            Enjoy the authentic flavors of Delhi 76 wherever you are. Exclusive offers and seamless service just a tap away.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
            <Apple className="h-5 w-5" /> iOS Store
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
            <PlayCircle className="h-5 w-5" /> Android
          </button>
        </div>
      </div>
    </section>
  );
}
