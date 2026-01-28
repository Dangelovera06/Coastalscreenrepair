import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Target, Zap, Calendar, Video, BarChart3, Users, Star, Play } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    business: "Premier Dental Studio",
    text: "We went from struggling to get 5 new patients a month to being booked out 6 weeks in advance.",
    rating: 5
  },
  {
    name: "Marcus Thompson",
    business: "Elite Med Spa",
    text: "Best investment we've made. The AI follow-up alone has doubled our show rate.",
    rating: 5
  },
  {
    name: "Jennifer Rodriguez",
    business: "Restore Aesthetics",
    text: "Finally, a team that delivers results instead of just reports.",
    rating: 5
  }
];

export default function Education() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-[#001a3d]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <div className="hidden md:block text-xs font-medium tracking-wider text-white/30 uppercase">
            The Blueprint That Books Out All Year Round
          </div>
          <a 
            href="/system"
            className="px-4 py-2 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-white/90 transition-all"
          >
            Work With Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium tracking-wider text-white/50 uppercase mb-6">
                The Complete System
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                The Blueprint That Books You Out{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
                  All Year Round
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-8 max-w-xl">
                How top businesses are using cinematic content, strategic ads, and AI automation to fill their calendars on autopilot.
              </p>
              <a 
                href="/system"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#006eff] to-[#0080ff] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#006eff]/25 transition-all"
              >
                Get The System
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#006eff]/10">
                <img 
                  src="/SOCIAL PROOF/3 copy.png" 
                  alt="Professional content creation"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#006eff]/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#006eff]/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Local Domination */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The "Local Domination" Strategy
            </h2>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
              Your competition is posting generic content. You need to become THE face of your industry in your local area.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                <span className="text-white font-semibold">Social media isn't about going viral.</span> It's about consistently showing up in front of the right people in your area until they know, like, and trust you enough to book.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                When someone in your city thinks about your service, you want your face to pop into their head first. That's domination.
              </p>
              
              <div className="space-y-4">
                {[
                  "Consistent, high-quality content that positions you as the expert",
                  "Hyper-local targeting that reaches people in your service area",
                  "Educational content that solves problems before they book",
                  "Behind-the-scenes content that builds trust and authenticity"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/5 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-[#006eff] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/SOCIAL PROOF/4 copy.png" 
                  alt="Local business success"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#006eff]/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Cinematic Content */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Cinematic Content Wins
            </h2>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
              The bar for content quality has never been higher. If your content looks amateur, they keep scrolling.
            </p>
          </motion.div>

          {/* Video Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                <wistia-player 
                  media-id="aoangn3r46"
                  player-color="#006eff"
                  aspect="0.5625"
                ></wistia-player>
              </div>
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                <wistia-player 
                  media-id="9qg1xl14ce"
                  player-color="#006eff"
                  aspect="0.5625"
                ></wistia-player>
              </div>
              <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/5 shadow-xl">
                <wistia-player 
                  media-id="2ucaviy334"
                  player-color="#006eff"
                  aspect="0.5625"
                ></wistia-player>
              </div>
            </div>
          </motion.div>

          {/* Content Principles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Professional Lighting", desc: "Makes you look credible and trustworthy" },
              { title: "Intentional Framing", desc: "Guides attention to what matters" },
              { title: "Clean Audio", desc: "People forgive bad video, never bad audio" },
              { title: "Strategic Editing", desc: "Captures attention in the first 3 seconds" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors"
              >
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-r from-[#006eff]/10 to-transparent border-l-4 border-[#006eff] rounded-r-2xl"
          >
            <p className="text-xl sm:text-2xl text-white/80 italic font-medium mb-4">
              "The businesses that invest in quality content today will own their market tomorrow. The ones that don't will wonder where all their customers went."
            </p>
            <cite className="text-white/40 text-sm">— D'Angelo Vera, P1 Creative</cite>
          </motion.blockquote>
        </div>

        <style jsx>{`
          wistia-player[media-id='aoangn3r46']:not(:defined),
          wistia-player[media-id='9qg1xl14ce']:not(:defined),
          wistia-player[media-id='2ucaviy334']:not(:defined) { 
            background: #111;
            display: block;
            height: 100%;
            width: 100%;
          }
          wistia-player[media-id='aoangn3r46'],
          wistia-player[media-id='9qg1xl14ce'],
          wistia-player[media-id='2ucaviy334'] {
            display: block;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </section>

      {/* Section 3: Ad Strategy */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/SOCIAL PROOF/5 copy.png" 
                  alt="Ad strategy"
                  className="rounded-2xl h-48 sm:h-64 object-cover w-full"
                />
                <img 
                  src="/SOCIAL PROOF/6 copy.png" 
                  alt="Results"
                  className="rounded-2xl h-48 sm:h-64 object-cover w-full mt-8"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                The Ad Strategy That Actually Works
              </h2>
              <p className="text-lg text-white/50 mb-8">
                I've seen businesses burn through $10,000+ on ads with nothing to show for it. The problem isn't the platform — it's the strategy.
              </p>

              <div className="space-y-4">
                {[
                  { step: "1", title: "Attention-Grabbing Hook", time: "0-3 sec" },
                  { step: "2", title: "Problem Agitation", time: "3-15 sec" },
                  { step: "3", title: "Solution & Social Proof", time: "15-45 sec" },
                  { step: "4", title: "Clear CTA", time: "Final 5 sec" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white/[0.03] border border-white/5 rounded-xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-white">{item.title}</h5>
                    </div>
                    <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-white/40">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Automated Booking */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Automated Booking: The Game Changer
            </h2>
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
              This is where most businesses leave money on the table. They generate interest, but have no system to convert it.
            </p>
          </motion.div>

          {/* Process Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 mb-16"
          >
            {[
              { img: "/WHAT HAPPENS/1.webp", label: "Lead Captured" },
              { img: "/WHAT HAPPENS/2.webp", label: "AI Follow-Up" },
              { img: "/WHAT HAPPENS/3.webp", label: "Auto-Booked" }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.label}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#006eff] rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-white font-semibold">{item.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Speed to Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-[#006eff]/10 to-[#0099ff]/5 border border-[#006eff]/20 rounded-2xl mb-12"
          >
            <p className="text-white/70 mb-2 font-medium">The Speed-to-Lead Problem:</p>
            <p className="text-lg text-white/60">
              Responding to a lead within 5 minutes makes you <span className="text-white font-bold">21x more likely</span> to qualify that lead. After 30 minutes? Your chances drop by 80%.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Instant Response", desc: "Within seconds of a lead coming in, they receive a personalized message" },
              { icon: Users, title: "AI-Powered Follow-Up", desc: "Smart sequences that nurture leads until they're ready to book" },
              { icon: Calendar, title: "Self-Booking", desc: "Leads book directly into your calendar without back-and-forth" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#006eff]/20 to-[#0099ff]/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#006eff]" />
                </div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Others Are Saying
            </h2>
            <p className="text-lg text-white/50">
              Real results from real businesses
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/40">{review.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-12 sm:p-16 bg-gradient-to-br from-[#006eff]/20 via-[#006eff]/10 to-transparent border border-[#006eff]/20 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#006eff]/20 rounded-full blur-[100px] -z-10" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Booked Out?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              We build complete lead generation systems — content, ads, AI follow-up, and automated booking — all done for you in 30 days.
            </p>
            <a
              href="/system"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all shadow-xl shadow-white/10"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-10 sm:h-12 w-auto opacity-60"
            />
          </div>
          <p className="text-sm mb-6 text-white/30">
            Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/20">
            © 2025 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
