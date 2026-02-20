import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/">
            <img src="/coastal-logo.png" alt="Coastal Screen Repair" className="h-8 w-auto" />
          </a>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#162d4a] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Free Estimate
          </a>
        </div>
      </header>

      {/* ── HERO ── full-bleed image, all text centered ─────────── */}
      <section className="relative pt-16 min-h-[90vh] flex items-center justify-center text-center">
        <img
          src="/hero-pool-cage.jpg"
          alt="Beautiful Florida pool cage screen enclosure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/55" />

        <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 py-20 max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="text-yellow-400 text-base leading-none">★★★★★</span>
            <span className="text-white font-semibold text-sm">#1 Trusted in Palm Beach</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Stop letting ripped screens<br className="hidden sm:block" /> ruin your home.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed">
            Coastal Screen Repair fixes outdoor screen enclosures, pool cages, patios, and lanais — fast, clean, and at a fair price.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="tel:+1234567890"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-[#1e3a5f] font-bold text-base rounded-lg hover:bg-neutral-100 transition-colors shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get My Free Estimate
            </a>
            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 border-2 border-white text-white font-bold text-base rounded-lg hover:bg-white hover:text-[#1e3a5f] transition-colors"
            >
              See What We Fix
            </a>
          </div>

          {/* Quick proof row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">✓</span> Free Estimates</span>
            <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">✓</span> Same-Week Service</span>
            <span className="flex items-center gap-1.5"><span className="text-green-400 font-bold">✓</span> Licensed &amp; Insured</span>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────── */}
      <section className="bg-[#1e3a5f] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-white/90 text-sm font-semibold text-center">
            <span>★ #1 Trusted Screen Repair in Palm Beach</span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>Free Estimates — Always</span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>Outdoor Screen Enclosures Only</span>
            <span className="hidden sm:block text-white/30">|</span>
            <span>Licensed &amp; Insured</span>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ──────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-3">Our Guarantees</h2>
          <p className="text-neutral-500 text-lg mb-12">We stand behind every job — no exceptions.</p>
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Quality Guarantee */}
            <div className="relative bg-[#1e3a5f] rounded-2xl p-8 text-white text-center overflow-hidden">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/5 rounded-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white/15 flex items-center justify-center text-3xl">
                  🏅
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">We Guarantee</div>
                <h3 className="text-2xl font-extrabold mb-3">100% Quality</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Every repair is done right or we come back and fix it — free. We use only premium screen mesh and materials built to handle Florida weather. If you're not fully satisfied, we make it right. Period.
                </p>
                <div className="mt-5 inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90">
                  Satisfaction Guaranteed ✓
                </div>
              </div>
            </div>

            {/* Best Price Guarantee */}
            <div className="relative bg-white border-2 border-[#1e3a5f] rounded-2xl p-8 text-center overflow-hidden">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#1e3a5f]/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#1e3a5f]/5 rounded-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-3xl">
                  💰
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">We Guarantee</div>
                <h3 className="text-2xl font-extrabold text-[#1e3a5f] mb-3">Best Pricing</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We offer the most competitive pricing in Palm Beach County. Got a lower written quote from another licensed screen repair company? Show us and we'll beat it. No hidden fees, no surprises — ever.
                </p>
                <div className="mt-5 inline-block border border-[#1e3a5f]/30 rounded-full px-4 py-1.5 text-xs font-semibold text-[#1e3a5f]">
                  We'll Beat Any Written Quote ✓
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ──────────────────────────────────────────── */}
      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">What We Do</h2>
          <p className="mt-3 text-neutral-500 text-lg max-w-xl mx-auto">
            We repair and re-screen outdoor enclosures only. No windows, no doors, no siding — just screens, done right.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏊", title: "Pool Cage Re-screening", desc: "Full pool cage panel replacement and frame repair to keep bugs and debris out." },
              { icon: "🌿", title: "Patio & Lanai Screens", desc: "Torn, sagging, or missing patio screens replaced with heavy-duty fiberglass mesh." },
              { icon: "🚪", title: "Screen Doors", desc: "Screen door repair and replacement — sliding, hinged, or pet-resistant screens." },
              { icon: "🔧", title: "Frame & Spline Repair", desc: "Bent frames, broken spline, and damaged hardware fixed or fully replaced." },
            ].map((item) => (
              <div key={item.title} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-neutral-900 text-base mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL SERVICES ───────────────────────────────── */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Professional Services</h2>
          <p className="text-neutral-400 text-lg mb-10">Everything we do — done right, every time.</p>

          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden text-left">
            <div className="px-6 py-4 border-b border-neutral-800 text-center">
              <p className="text-white font-bold text-base">Your Complete Screen Repair Solution</p>
            </div>
            {[
              { title: "Screen Repair", desc: "Torn, sagging, or damaged screen panels replaced with premium mesh" },
              { title: "Replace Rusted Screws", desc: "Full fastener inspection and replacement to keep your enclosure solid" },
              { title: "Pool & Patio Aluminum Repair", desc: "Bent or damaged aluminum frames straightened and restored" },
              { title: "Kick Plate Installation", desc: "Heavy-duty kick plates added to protect the bottom of your screens" },
              { title: "Privacy Screen", desc: "Upgrade to privacy mesh that blocks views without blocking airflow" },
              { title: "Enclosure Reinforcement", desc: "Structural reinforcement so your enclosure handles Florida storms" },
              { title: "Screen Door Replacement / Repair", desc: "Sliding, hinged, or pet-resistant doors repaired or fully replaced" },
              { title: "Screen Windows", desc: "Window screen repair and re-screening for the whole enclosure" },
              { title: "Restoration", desc: "Full enclosure restoration — like-new results at a fraction of replacement cost" },
            ].map((item, i, arr) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 px-6 py-5 ${i < arr.length - 1 ? "border-b border-neutral-800" : ""}`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7.5 12.5l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white text-sm">{item.title}</span>
                  <span className="text-neutral-400 text-sm"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="tel:+1234567890"
            className="mt-10 inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-neutral-900 font-bold text-base rounded-lg hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Get a Free Estimate on Any Service
          </a>
        </div>
      </section>

      {/* ── FREE ESTIMATES ──────────────────────────────────────── */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-green-100 text-green-700 font-bold text-sm px-4 py-1.5 rounded-full mb-5">
            Always Free
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">
            We Come to You — Free Estimates, No Pressure
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
            We'll come out, look at the damage, and give you a clear written quote — completely free. No surprises, no hidden fees. You decide if you want to move forward.
          </p>
          <a
            href="tel:+1234567890"
            className="mt-10 inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#1e3a5f] text-white font-bold text-lg rounded-lg hover:bg-[#162d4a] transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Schedule My Free Estimate
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> No obligation</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Same-week availability</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Written quote provided</span>
            <span className="flex items-center gap-1.5"><span className="text-green-500">✓</span> Palm Beach area</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-yellow-50 text-yellow-700 font-bold text-sm px-4 py-1.5 rounded-full mb-4">
            5-Star Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900">#1 Trusted in Palm Beach</h2>
          <p className="mt-3 text-neutral-500 text-lg">Here's what our neighbors are saying.</p>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                name: "Maria T.",
                location: "West Palm Beach, FL",
                text: "My pool cage screens were torn after the storm. Coastal came out the next day, gave me a fair quote, and finished the job in one afternoon. Absolutely incredible.",
              },
              {
                name: "James R.",
                location: "Boca Raton, FL",
                text: "Called three companies — Coastal was the only one who showed up on time. Work looks perfect, price was honest, and they cleaned up after themselves. 10/10.",
              },
              {
                name: "Sandra K.",
                location: "Lake Worth, FL",
                text: "The patio screen door was ripped and hanging off the frame. They fixed the frame AND replaced the screen same day. Neighbors keep asking who did the work!",
              },
            ].map((r) => (
              <div key={r.name} className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4">
                <div className="text-yellow-400 text-lg tracking-wide">★★★★★</div>
                <p className="text-neutral-700 leading-relaxed text-sm flex-1">"{r.text}"</p>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">{r.name}</p>
                  <p className="text-neutral-400 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#1e3a5f] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to fix those screens?</h2>
          <p className="mt-4 text-white/80 text-lg">
            Call us today. Free estimate, no obligation, same-week service in Palm Beach County.
          </p>
          <a
            href="tel:+1234567890"
            className="mt-8 inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#1e3a5f] font-bold text-lg rounded-lg hover:bg-neutral-100 transition-colors shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Get My Free Estimate
          </a>
          <p className="mt-4 text-white/50 text-sm">No pressure. Free quotes. Palm Beach area only.</p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="py-8 border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <img src="/coastal-logo.png" alt="Coastal Screen Repair" className="h-7 w-auto" />
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Coastal Screen Repair · Palm Beach, FL · Outdoor screen enclosure repair only.
          </p>
          <a href="tel:+1234567890" className="text-[#1e3a5f] font-bold text-sm hover:underline">
            (123) 456-7890
          </a>
        </div>
      </footer>
    </div>
  );
}
