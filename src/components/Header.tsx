export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl bg-black px-6 py-4 shadow-2xl">
        <a href="#" className="font-display text-xl font-semibold tracking-tighter text-white uppercase">
          DELHI<span className="text-brand-red">76</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">About</a>
          <a href="#menu" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Menu</a>
          <a href="#reviews" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#book" className="hidden sm:block rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white uppercase tracking-wide hover:bg-white/20 transition-colors">
            Book Table
          </a>
          <a href="#order" className="rounded-lg bg-brand-red px-5 py-2 text-xs font-semibold text-white uppercase tracking-wide hover:bg-red-600 transition-colors shadow-lg shadow-red-900/20">
            Order Online
          </a>
        </div>
      </nav>
    </header>
  );
}
