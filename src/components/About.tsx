import { ArrowDown, ChefHat, ArrowRight, Vegan, WheatOff } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-brand-cream px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold uppercase text-brand-black leading-none">
            Welcome to <span className="text-brand-red">Delhi 76</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-base text-black/60">
            We pride ourselves on blending traditional recipes with a modern touch, offering a rich menu that celebrates the unique culinary heritage of both India and Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-[800px]">
          
          {/* Card 1: Text */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-1 lg:col-span-2 lg:row-span-1">
            <div>
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <ChefHat className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-brand-black">Culinary Heritage</h3>
              <p className="mt-4 text-sm text-black/70 leading-relaxed">
                From the aromatic spices of our signature Indian curries and sizzling tandoori grills to the delicate artistry of Nepalese momos and hearty Himalayan specialties, every dish is crafted with passion.
              </p>
            </div>
            <div className="mt-6 flex gap-2">
              <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/60">Fresh Ingredients</span>
              <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/60">Halal</span>
            </div>
          </div>

          {/* Card 2: Image Vertical */}
          <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-lg lg:col-span-1 lg:row-span-2 group">
            <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop" alt="Momo" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-display text-3xl font-semibold uppercase leading-none text-white">FamousMomos</h3>
              <p className="mt-2 text-xs text-white/70">A taste of the Himalayas.</p>
            </div>
          </div>

          {/* Card 3: Red CTA */}
          <div className="flex flex-col items-center justify-center rounded-[2rem] bg-brand-red p-8 text-center shadow-lg lg:col-span-1 lg:row-span-1 transition-transform hover:scale-[1.02]">
            <h3 className="font-display text-3xl font-semibold uppercase text-white">OrderTakeaway</h3>
            <p className="mt-2 text-xs font-medium text-white/80 uppercase tracking-widest">Coventry Delivery</p>
            <a href="#order" className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-red shadow-md transition-colors hover:bg-black hover:text-white">
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Card 4: Image Square */}
          <div className="relative overflow-hidden rounded-[2rem] bg-black shadow-lg lg:col-span-1 lg:row-span-1 group">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Ambience" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="font-display text-xl font-semibold uppercase text-white tracking-widest">Dine In</span>
            </div>
          </div>

          {/* Card 5: Dietary Info */}
          <div className="flex flex-col justify-center rounded-[2rem] bg-brand-black p-8 text-white shadow-lg lg:col-span-2 lg:row-span-1">
            <div className="flex items-center gap-3 text-brand-red mb-4">
              <Vegan className="h-6 w-6" />
              <WheatOff className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">Dietary Friendly</h3>
            <p className="mt-2 text-sm text-white/60">
              We offer a wide range of options including vegetarian, vegan, and gluten-free dishes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
