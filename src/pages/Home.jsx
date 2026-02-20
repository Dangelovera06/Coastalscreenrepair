import React, { useState } from "react";

const HERO_IMAGE = "/hero-ripped-screen.jpg";
const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80";

export default function Home() {
  const [heroErr, setHeroErr] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/coastal-logo.png"
              alt="Coastal Screen Repair"
              className="h-8 sm:h-9 w-auto"
            />
          </a>
          <a
            href="tel:+1234567890"
            className="text-sm font-semibold text-[#1e3a5f] hover:text-[#2d5a8a] transition-colors"
          >
            Call for a quote
          </a>
        </div>
      </header>

      {/* Hero: full-bleed ripped screen image + overlay CTA */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end sm:items-center">
        <img
          src={heroErr ? HERO_FALLBACK : HERO_IMAGE}
          alt="Ripped or damaged screen door or enclosure"
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setHeroErr(true)}
        />
        <div className="absolute inset-0 bg-neutral-900/50" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 pt-32 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl">
            Ripped screen? We fix outdoor screen enclosures—only.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl">
            Professional repair for patio screens, pool cages, and lanai enclosures. Fast, local, and focused on screens only.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-neutral-100 transition-colors shadow-lg"
            >
              Get a free quote
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              Request repair
            </a>
          </div>
        </div>
      </section>

      {/* Social proof / one-liner */}
      <section className="py-10 sm:py-12 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-neutral-600 text-base sm:text-lg font-medium">
            Outdoor screen enclosure repair only—no windows, no siding. Just screens, done right.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-12">
            Why choose us
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-[#1e3a5f] font-bold text-lg">
                1
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Screens only</h3>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base">
                We specialize in screen enclosures—patios, pool cages, lanais. No distractions, no upsells.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-[#1e3a5f] font-bold text-lg">
                2
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Fast & local</h3>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base">
                Quick quotes and scheduling. We’re in your area and focused on getting your screens back in shape.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-[#1e3a5f] font-bold text-lg">
                3
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">Clear pricing</h3>
              <p className="mt-2 text-neutral-600 text-sm sm:text-base">
                Honest estimates and no hidden fees. You’ll know the cost before we start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section id="contact" className="py-16 sm:py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ready to fix your screen?
          </h2>
          <p className="mt-4 text-white/90">
            Get a free quote. We’ll come out, assess the damage, and give you a clear price.
          </p>
          <a
            href="tel:+1234567890"
            className="mt-8 inline-flex items-center justify-center px-10 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-neutral-100 transition-colors"
          >
            Call for a free quote
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src="/coastal-logo.png"
            alt="Coastal Screen Repair"
            className="h-7 w-auto"
          />
          <p className="text-neutral-500 text-sm">
            Outdoor screen enclosure repair only.
          </p>
          <a
            href="tel:+1234567890"
            className="text-[#1e3a5f] font-semibold text-sm hover:underline"
          >
            (123) 456-7890
          </a>
        </div>
      </footer>
    </div>
  );
}
