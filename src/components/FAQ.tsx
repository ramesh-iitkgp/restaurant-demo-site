import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center font-display text-4xl font-semibold uppercase tracking-tight">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <details className="group rounded-2xl border border-black/10 bg-brand-cream p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h3 className="font-display text-lg font-semibold uppercase">Where is Delhi 76 located?</h3>
              <span className="relative h-5 w-5 shrink-0">
                <Plus className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" />
                <Minus className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" />
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Delhi 76 is located at 76 Albany Road, Earlsdon, Coventry CV5 6JU. We are easy to find and welcome guests from all over Coventry.
            </p>
          </details>

          <details className="group rounded-2xl border border-black/10 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h3 className="font-display text-lg font-semibold uppercase">Do you offer vegetarian and vegan options?</h3>
              <span className="relative h-5 w-5 shrink-0">
                <Plus className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" />
                <Minus className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" />
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Yes! We offer a wide range of options, including vegetarian, vegan, and gluten-free dishes, catering to all dietary preferences.
            </p>
          </details>

          <details className="group rounded-2xl border border-black/10 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h3 className="font-display text-lg font-semibold uppercase">Do you offer takeaway?</h3>
              <span className="relative h-5 w-5 shrink-0">
                <Plus className="absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" />
                <Minus className="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" />
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              Yes, we offer convenient Indian takeaway and Nepalese delivery in Coventry. Order online or call us.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
