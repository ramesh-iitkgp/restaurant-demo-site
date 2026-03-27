export default function HoursAndBooking() {
  return (
    <section id="book" className="bg-brand-black py-20 px-4 sm:px-8 text-white">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Visit Us</span>
          <h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight">Opening Hours</h2>
          <p className="mt-4 text-white/60 max-w-md">Experience Delhi 76 in person. We recommend booking in advance for weekends.</p>
          
          <div className="mt-10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-lg uppercase tracking-wide">Tue - Thu</span>
              <span className="font-mono text-sm text-brand-red">17:00 – 22:30</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-lg uppercase tracking-wide">Fri - Sat</span>
              <span className="font-mono text-sm text-brand-red">17:30 – 23:00</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-display text-lg uppercase tracking-wide">Sunday</span>
              <span className="font-mono text-sm text-brand-red">17:00 – 22:30</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 opacity-50">
              <span className="font-display text-lg uppercase tracking-wide">Monday</span>
              <span className="font-mono text-sm">Closed</span>
            </div>
          </div>
        </div>

        <div className="relative bg-brand-red rounded-[2rem] p-10 overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="relative z-10 font-display text-3xl font-semibold uppercase mb-6">Book Your Table</h3>
          <p className="relative z-10 text-sm text-white/90 mb-8 px-4">Reserve your spot for an unforgettable dining experience in Earlsdon.</p>
          
          <form className="relative z-10 flex flex-col gap-4 max-w-xs mx-auto">
            <input type="text" placeholder="Name" className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 transition-colors" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white/80 transition-colors" />
              <input type="time" className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white/80 transition-colors" />
            </div>
            <button type="button" className="mt-2 w-full bg-white text-brand-red font-display font-semibold uppercase tracking-wider text-sm py-4 rounded-xl hover:bg-black hover:text-white transition-colors">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
