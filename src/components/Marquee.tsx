export default function Marquee() {
  return (
    <div className="overflow-hidden border-b border-black/5 bg-brand-cream py-6">
      <div className="flex animate-scroll whitespace-nowrap">
        <div className="flex items-center gap-8 px-4">
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Authentic</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Indian Curry</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Nepalese Momos</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Tandoori Grill</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Vegan Options</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Gluten Free</span>
          <span className="text-brand-red text-2xl">●</span>
          {/* Duplicate for seamless scroll */}
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Authentic</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Indian Curry</span>
          <span className="text-brand-red text-2xl">●</span>
          <span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Nepalese Momos</span>
          <span className="text-brand-red text-2xl">●</span>
        </div>
      </div>
    </div>
  );
}
