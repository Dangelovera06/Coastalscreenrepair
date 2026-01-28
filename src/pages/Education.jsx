import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Zap, Calendar, Video, BarChart3, Users, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    business: "Premier Dental Studio",
    text: "We went from struggling to get 5 new patients a month to being booked out 6 weeks in advance. The system just works.",
    rating: 5
  },
  {
    name: "Marcus Thompson",
    business: "Elite Med Spa",
    text: "Best investment we've made. The AI follow-up alone has doubled our show rate for consultations.",
    rating: 5
  },
  {
    name: "Jennifer Rodriguez",
    business: "Restore Aesthetics",
    text: "Finally, a team that delivers results instead of just reports. Our calendar has never been this full.",
    rating: 5
  }
];

export default function Education() {
  return (
    <div className="min-h-screen w-full bg-[#FAFAF8]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-black/5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/P1 Creative Black on White Words copy.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="hidden md:block text-xs font-medium tracking-wider text-black/40 uppercase">
            The Blueprint That Books Out All Year Round
          </div>
          <a 
            href="/system"
            className="px-4 py-2 bg-black text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-black/80 transition-all"
          >
            Work With Us
          </a>
        </div>
      </header>

      {/* Hero Section with Full-Width Image */}
      <section className="pt-20 sm:pt-24 relative">
        {/* Hero Image */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
          <img 
            src="/SOCIAL PROOF/3 copy.png" 
            alt="Professional content creation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  The Blueprint That Books You Out All Year Round
                </h1>
                <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
                  How top businesses are using cinematic content, strategic ads, and AI automation to fill their calendars on autopilot.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Businesses Helped" },
              { value: "10M+", label: "Leads Generated" },
              { value: "85%", label: "Avg. Show Rate" },
              { value: "30 Days", label: "To Full System" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Article - 2 columns on desktop */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <p className="text-xl sm:text-2xl text-black/80 leading-relaxed mb-6 font-medium">
                    Most businesses are doing social media wrong. They post random content, hope something sticks, and wonder why their phone isn't ringing.
                  </p>
                  <p className="text-lg text-black/70 leading-relaxed">
                    After helping hundreds of businesses fill their calendars, I've identified the exact system that works — every single time. Here's the blueprint.
                  </p>
                </motion.div>

                {/* Section 1 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      The "Local Domination" Strategy
                    </h2>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden mb-8">
                    <img 
                      src="/SOCIAL PROOF/4 copy.png" 
                      alt="Local business domination"
                      className="w-full h-72 sm:h-80 object-cover"
                    />
                  </div>
                  
                  <div className="bg-[#F5F5DC]/40 border border-[#E8E4D4] rounded-xl p-6 mb-6">
                    <p className="text-black/80 font-semibold mb-2">The Core Principle:</p>
                    <p className="text-black/70">Your competition is posting generic content. You need to become THE face of your industry in your local area.</p>
                  </div>

                  <p className="text-lg text-black/70 leading-relaxed mb-4">
                    <strong className="text-black">Social media isn't about going viral.</strong> It's about consistently showing up in front of the right people in your area until they know, like, and trust you enough to book.
                  </p>

                  <p className="text-lg text-black/70 leading-relaxed mb-6">
                    When someone in your city thinks about your service, you want your face to pop into their head first. That's domination. Here's how it happens:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    {[
                      "Consistent, high-quality content that positions you as the expert",
                      "Hyper-local targeting that reaches people in your service area",
                      "Educational content that solves problems before they book",
                      "Behind-the-scenes content that builds trust and authenticity"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-black/5">
                        <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                        <span className="text-black/70 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {/* Section 2 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      Why Cinematic Content Wins
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <img 
                      src="/SOCIAL PROOF/5 copy.png" 
                      alt="Content production"
                      className="rounded-xl h-48 sm:h-64 object-cover w-full"
                    />
                    <img 
                      src="/SOCIAL PROOF/6 copy.png" 
                      alt="Professional filming"
                      className="rounded-xl h-48 sm:h-64 object-cover w-full"
                    />
                  </div>

                  <p className="text-lg text-black/70 leading-relaxed mb-6">
                    The bar for content quality has never been higher. People scroll through hundreds of posts a day. <strong className="text-black">If your content looks amateur, they keep scrolling.</strong>
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: "Professional Lighting", desc: "Makes you look credible and trustworthy" },
                      { title: "Intentional Framing", desc: "Guides attention to what matters" },
                      { title: "Clean Audio", desc: "People forgive bad video, never bad audio" },
                      { title: "Strategic Editing", desc: "Captures attention in the first 3 seconds" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-white border border-black/5 rounded-xl shadow-sm">
                        <h4 className="font-bold text-black mb-1">{item.title}</h4>
                        <p className="text-sm text-black/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-black pl-6 py-4 my-8 bg-white/50 rounded-r-xl">
                    <p className="text-xl text-black/80 italic font-medium">
                      "The businesses that invest in quality content today will own their market tomorrow. The ones that don't will wonder where all their customers went."
                    </p>
                  </blockquote>
                </motion.section>

                {/* Section 3 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      The Ad Strategy That Actually Works
                    </h2>
                  </div>

                  <p className="text-lg text-black/70 leading-relaxed mb-6">
                    I've seen businesses burn through $10,000+ on ads with nothing to show for it. The problem isn't the platform — it's the strategy.
                  </p>

                  <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
                    <h4 className="font-bold text-black text-xl mb-6">The P1 Creative Ad Framework:</h4>
                    
                    <div className="space-y-6">
                      {[
                        { step: "1", title: "Attention-Grabbing Hook", time: "0-3 seconds", desc: "Stop the scroll with something unexpected. A question, a bold statement, or pattern interrupt." },
                        { step: "2", title: "Problem Agitation", time: "3-15 seconds", desc: "Make them feel the pain of their current situation. Show you understand their struggle." },
                        { step: "3", title: "Solution & Social Proof", time: "15-45 seconds", desc: "Present your solution and back it up with results. Show, don't tell." },
                        { step: "4", title: "Clear CTA", time: "Final 5 seconds", desc: "Tell them exactly what to do next. Make it stupidly simple." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">{item.step}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-bold text-black">{item.title}</h5>
                              <span className="text-xs bg-black/5 px-2 py-0.5 rounded-full text-black/50">{item.time}</span>
                            </div>
                            <p className="text-sm text-black/60">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-lg text-black/70 leading-relaxed">
                    What separates good campaigns from great ones: <strong className="text-black">retargeting.</strong> The person who watched your video but didn't book? They're not lost. They just need more touchpoints.
                  </p>
                </motion.section>

                {/* Section 4 */}
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">
                      Automated Booking: The Game Changer
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <img 
                      src="/WHAT HAPPENS/1.webp" 
                      alt="Lead generation"
                      className="rounded-xl h-40 sm:h-48 object-cover w-full"
                    />
                    <img 
                      src="/WHAT HAPPENS/2.webp" 
                      alt="AI follow-up"
                      className="rounded-xl h-40 sm:h-48 object-cover w-full"
                    />
                    <img 
                      src="/WHAT HAPPENS/3.webp" 
                      alt="Automated booking"
                      className="rounded-xl h-40 sm:h-48 object-cover w-full"
                    />
                  </div>

                  <div className="bg-[#F5F5DC]/40 border border-[#E8E4D4] rounded-xl p-6 mb-6">
                    <p className="text-black/80 font-semibold mb-2">The Speed-to-Lead Problem:</p>
                    <p className="text-black/70">Responding to a lead within 5 minutes makes you <strong className="text-black">21x more likely</strong> to qualify that lead. After 30 minutes? Your chances drop by 80%.</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { icon: Zap, title: "Instant Response", desc: "Within seconds of a lead coming in, they receive a personalized message" },
                      { icon: Users, title: "AI-Powered Follow-Up", desc: "Smart sequences that nurture leads until they're ready to book" },
                      { icon: Calendar, title: "Self-Booking", desc: "Leads book directly into your calendar without back-and-forth" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-white border border-black/5 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-black/70" />
                        </div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{item.title}</h4>
                          <p className="text-sm text-black/60">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xl text-black font-medium">
                    The result? Your calendar fills up while you sleep.
                  </p>
                </motion.section>

                {/* Final CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black text-white rounded-2xl p-8 sm:p-12 text-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Get Booked Out?
                  </h3>
                  <p className="text-white/70 mb-8 max-w-xl mx-auto">
                    We build complete lead generation systems — content, ads, AI follow-up, and automated booking — all done for you in 30 days.
                  </p>
                  <a
                    href="/system"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all"
                  >
                    See How It Works
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </article>
            </div>

            {/* Sidebar - Reviews & Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                
                {/* Reviews Section */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-black/5 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <Quote className="w-5 h-5 text-black/40" />
                    <h3 className="font-bold text-black">What Others Are Saying</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review, i) => (
                      <div key={i} className="pb-6 border-b border-black/5 last:border-0 last:pb-0">
                        <div className="flex gap-1 mb-3">
                          {[...Array(review.rating)].map((_, j) => (
                            <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-black/70 mb-3 italic">"{review.text}"</p>
                        <div>
                          <p className="font-semibold text-black text-sm">{review.name}</p>
                          <p className="text-xs text-black/50">{review.business}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Sticky CTA Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black rounded-2xl p-6 text-white"
                >
                  <h4 className="font-bold text-lg mb-2">Want This System?</h4>
                  <p className="text-sm text-white/70 mb-4">
                    Get a complete lead generation system built for your business in 30 days.
                  </p>
                  <a
                    href="/system"
                    className="block w-full py-3 bg-white text-black font-bold rounded-lg text-center hover:bg-white/90 transition-all text-sm"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#F5F5DC]/30 rounded-2xl border border-[#E8E4D4] p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-xl font-bold text-white">
                      DV
                    </div>
                    <div>
                      <p className="font-bold text-black">D'Angelo Vera</p>
                      <p className="text-xs text-black/50">P1 Creative</p>
                    </div>
                  </div>
                  <p className="text-sm text-black/60">
                    Helping businesses generate leads through cinematic content & AI-powered automation systems.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 w-full border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img 
              src="/P1 Creative Black on White Words copy.png" 
              alt="P1 Creative Logo" 
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <p className="text-xs sm:text-sm mb-6 sm:mb-8 text-black/40">
            Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <a href="#" className="text-xs sm:text-sm text-black/40 transition-colors hover:text-black">Privacy Policy</a>
            <a href="#" className="text-xs sm:text-sm text-black/40 transition-colors hover:text-black">Terms of Service</a>
            <a href="#" className="text-xs sm:text-sm text-black/40 transition-colors hover:text-black">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-black/30">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
