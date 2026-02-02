import React from "react";
import { motion } from "framer-motion";
import { Phone, Video, BarChart3, Globe, Calendar, CheckCircle, ArrowRight, Star, Zap, Clock, Users, Sparkles } from "lucide-react";

const CALENDLY_LINK = "https://calendly.com/p1creative/30min";

const offerItems = [
  {
    icon: Phone,
    title: "AI Caller",
    description: "24/7 AI-powered caller that follows up with leads, qualifies them, and books appointments while you sleep."
  },
  {
    icon: Video,
    title: "4 High-End Short Form Videos",
    description: "Cinematic, scroll-stopping content professionally shot and edited to convert viewers into leads."
  },
  {
    icon: BarChart3,
    title: "High-Converting Paid Ad System",
    description: "Strategic ad campaigns built to generate qualified leads at the lowest cost possible."
  },
  {
    icon: Globe,
    title: "Custom Landing Page + Website",
    description: "A beautiful, conversion-optimized website designed to turn traffic into booked appointments."
  },
  {
    icon: Calendar,
    title: "Automated Booking System",
    description: "Seamless booking integration that lets leads schedule directly into your calendar."
  }
];

const reviews = [
  {
    name: "Dr. Marcus Chen",
    business: "Chen Dental Group",
    text: "The AI caller alone paid for the entire system in the first week. We're booking 3x more consultations.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    business: "Glow Med Spa",
    text: "Best investment we made in 2025. The videos are incredible and the leads just keep coming in.",
    rating: 5
  },
  {
    name: "Michael Torres",
    business: "Torres Law Firm",
    text: "Finally a system that actually works. We went from struggling to get clients to being fully booked.",
    rating: 5
  }
];

export default function Offer2026() {
  const handleBookCall = () => {
    window.open(CALENDLY_LINK, '_blank');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-neutral-950 to-[#001a3d]">
      {/* Header - Offer Page Style */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-4 relative">
          {/* Logo - Left */}
          <div className="flex items-center gap-1.5">
            <img 
              src="/p1 white.png" 
              alt="P1 Creative Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Center Text */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-xs sm:text-sm font-bold tracking-widest text-white/60 uppercase whitespace-nowrap">
            2026 Launch Offer — Limited Spots
          </div>

          {/* CTA Button - Right */}
          <button
            onClick={handleBookCall}
            className="px-4 py-2 bg-white text-black font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
          >
            BOOK A CALL
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006eff]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#006eff]/20 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#006eff]/20 border border-[#006eff]/30 rounded-full text-xs font-medium tracking-wider text-[#006eff] uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              2026 Launch Special
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006eff] to-[#0099ff]">
                Get Booked Out
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-8">
              The complete system to generate leads, follow up automatically, and fill your calendar — all done for you.
            </p>

            {/* Price */}
            <div className="mb-10">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-white/40 line-through text-2xl">$4,997</span>
                <span className="text-5xl sm:text-6xl font-bold text-white">$999</span>
              </div>
              <p className="text-[#006eff] font-medium mt-2">One-time setup. No contracts.</p>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#006eff] to-[#0080ff] text-white font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-[#006eff]/30 transition-all"
            >
              Book Your Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-white/30 text-sm mt-4">Free 30-min call. No obligation.</p>
          </motion.div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Here's What You Get
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Everything built and delivered in 30 days
            </p>
          </motion.div>

          <div className="space-y-6">
            {offerItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8 bg-white/[0.03] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#006eff] to-[#0099ff] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.description}</p>
                </div>
                <div className="sm:self-center">
                  <CheckCircle className="w-6 h-6 text-[#006eff]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-r from-[#006eff]/10 to-[#0099ff]/5 border border-[#006eff]/20 rounded-2xl text-center"
          >
            <p className="text-white/60 mb-2">Total Value: <span className="line-through">$4,997</span></p>
            <p className="text-3xl sm:text-4xl font-bold text-white mb-2">You Pay: $999</p>
            <p className="text-[#006eff]">Save $3,998 with this launch offer</p>
          </motion.div>
        </div>
      </section>

      {/* Why This Works Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Why This System Works
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              We've removed every bottleneck that stops businesses from growing
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Speed to Lead", desc: "AI responds to leads in seconds, not hours. That's 21x more likely to qualify." },
              { icon: Clock, title: "24/7 Follow-Up", desc: "Never miss another lead. The system works while you sleep." },
              { icon: Video, title: "Scroll-Stopping Content", desc: "Professional videos that make you impossible to ignore." },
              { icon: BarChart3, title: "Proven Ad Strategy", desc: "Campaigns built on data, not guesswork." },
              { icon: Globe, title: "Conversion-Optimized", desc: "Every touchpoint designed to turn clicks into customers." },
              { icon: Users, title: "Done For You", desc: "We build it all. You just show up for appointments." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#006eff]/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#006eff]" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Images */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/SOCIAL PROOF/3 copy.png",
              "/SOCIAL PROOF/4 copy.png",
              "/SOCIAL PROOF/5 copy.png",
              "/SOCIAL PROOF/6 copy.png"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden"
              >
                <img src={img} alt="Client results" className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
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

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#006eff]/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Questions?
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "How long does it take to set up?", a: "Everything is built and delivered within 30 days. Most clients see their first leads within the first 2 weeks." },
              { q: "Is there a contract?", a: "No contracts. This is a one-time setup fee. After that, you only pay for ad spend (which you control)." },
              { q: "What if I'm not happy?", a: "We'll work with you until you are. Our goal is to fill your calendar, and we don't stop until that happens." },
              { q: "Do I need any tech skills?", a: "None. We handle everything. You just show up for appointments and close deals." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/[0.03] border border-white/5 rounded-xl"
              >
                <h4 className="font-bold text-white mb-2">{item.q}</h4>
                <p className="text-white/60 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
            
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium tracking-wider text-white/60 uppercase mb-6">
              Limited Time Offer
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl font-bold text-white">$999</span>
              <p className="text-[#006eff] mt-2">One-time setup. Everything included.</p>
            </div>
            
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Book a free strategy call and we'll show you exactly how the system works for your business.
            </p>
            
            <motion.button
              onClick={handleBookCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-white/90 transition-all shadow-xl shadow-white/10"
            >
              Book Your Free Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <p className="text-white/30 text-sm mt-4">No obligation. No pressure. Just a conversation.</p>
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
              className="h-10 sm:h-12 w-auto opacity-40"
            />
          </div>
          <p className="text-sm mb-6 text-white/30">
            P1 Creative — Turning businesses into lead-generating machines
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-white/30 hover:text-white/60 transition-colors">Contact</a>
          </div>
          <div className="text-xs uppercase tracking-wider text-white/20">
            © 2026 P1 Creative. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
