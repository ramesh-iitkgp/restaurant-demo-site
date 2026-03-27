import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-brand-cream py-24 px-4 overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 mb-6">
          <span className="flex gap-1 text-brand-red">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-current" />
            ))}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider">Based on 675 Reviews</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-semibold uppercase text-brand-black">Loved by Coventry</h2>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">SC</div>
              <div>
                <h4 className="font-semibold text-sm">ShivaChenimeni</h4>
                <p className="text-[10px] text-gray-400 uppercase">July 2025</p>
              </div>
            </div>
            <div className="flex text-brand-red gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">"Amazing taste, very good place to vibe. Loved ambience. Must recommended and must visit for Indian food in Coventry."</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">BG</div>
              <div>
                <h4 className="font-semibold text-sm">Bhumika Gowda</h4>
                <p className="text-[10px] text-gray-400 uppercase">June 2025</p>
              </div>
            </div>
            <div className="flex text-brand-red gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">"One of the best spots for Indian food in Coventry. Delicious dishes, friendly staff, and a decent ambience."</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">RV</div>
              <div>
                <h4 className="font-semibold text-sm">Rishika Vijaykumar</h4>
                <p className="text-[10px] text-gray-400 uppercase">June 2025</p>
              </div>
            </div>
            <div className="flex text-brand-red gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">"Really good food. Clean and cozy ambiance. The starters and main course were really tasty."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
