import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Users, 
  Zap, 
  Star, 
  X, 
  Sparkles,
  ChevronDown,
  Target,
  TrendingUp,
  Clock
} from "lucide-react";
import { Glow } from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dental Practice Owner",
    text: "Within 60 days, our calendar was filled with pre-qualified leads. The content they produce stops people mid-scroll. Best ROI we've ever seen.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "James Rodriguez",
    role: "Med Spa Director",
    text: "We went from 5 leads per month to 40+ qualified appointments. Our business has completely transformed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Michelle Chen",
    role: "Law Firm Partner",
    text: "The exclusive model means we're the only firm in our area using their system. No competition, just results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "David Thompson",
    role: "Home Services CEO",
    text: "Finally, a partner that doesn't work with our competitors. Our lead flow increased 300% in the first quarter.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Amanda Foster",
    role: "Fitness Studio Owner",
    text: "The AI follow-up system is insane. Leads get contacted within seconds. Our show rate went from 40% to 85%.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    name: "Dr. Kevin Park",
    role: "Chiropractor",
    text: "I was skeptical at first, but the exclusive access sold me. No one else in my area can use this. Game changer.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
];

const steps = [
  {
    number: "01",
    title: "Apply for Your Spot",
    description: "Submit your application to check if your area is still available. We only work with one business per industry, per location."
  },
  {
    number: "02", 
    title: "Get Your Custom Assets",
    description: "Our team builds your marketing materials, ad creatives, and lead generation system tailored to your business."
  },
  {
    number: "03",
    title: "Watch Leads Pour In",
    description: "Sit back as qualified leads book directly into your calendar. No competition, no shared leads."
  }
];

const features = [
  {
    icon: Shield,
    title: "Exclusive Spot",
    description: "Your market is yours alone. No competitors using our system in your area.",
    highlight: "100% Exclusive"
  },
  {
    icon: Target,
    title: "Done-For-You Assets",
    description: "Professional marketing materials without the agency markup or monthly retainers.",
    highlight: "10x ROI Average"
  },
  {
    icon: Zap,
    title: "AI-Powered Follow-Up",
    description: "Automated systems that engage leads in under 5 seconds, 24/7.",
    highlight: "<5s Response"
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Results",
    description: "See real leads within 30 days or we work for free until you do.",
    highlight: "30-Day Guarantee"
  }
];

const faqs = [
  {
    question: "What makes this different from other marketing agencies?",
    answer: "We don't work with your competitors. Period. When you partner with us, you get exclusive access to our system in your area. Traditional agencies often work with multiple businesses in the same industry and area — we never do."
  },
  {
    question: "How quickly can I expect to see results?",
    answer: "Most partners see their first qualified leads within 14-21 days of launch. We guarantee results within 30 days or we continue working for free until you do."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with service-based businesses including medical practices, dental offices, med spas, law firms, home services, fitness studios, and more. If you serve local clients, we can help."
  },
  {
    question: "What's included in the partnership?",
    answer: "Everything you need: custom ad creatives, landing pages, lead capture forms, AI follow-up sequences, appointment booking, and ongoing optimization. No hidden fees."
  },
  {
    question: "How do I know if my spot is available?",
    answer: "Simply apply using the form on this page. We'll check our database and get back to you within 24 hours with availability and next steps."
  }
];

const comparisonData = {
  traditional: [
    "Works with your competitors",
    "Expensive monthly retainers",
    "Generic, templated content",
    "Leads shared with other clients",
    "Long contracts, slow results"
  ],
  pipelinex: [
    "Exclusive to your area",
    "Transparent, fair pricing",
    "Custom, cinematic content",
    "All leads are 100% yours",
    "Results in 30 days or less"
  ]
};

export default function PipelineX() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'PipelineX Lead',
          content_category: 'Partnership Application'
        });
      }
      
      const submissionData = new URLSearchParams({
        'form-name': 'pipelinex-application',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img 
            src="/pipelinex-logo.png" 
            alt="PipelineX" 
            className="h-8 w-auto invert"
          />
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-6 py-2.5 bg-red-600 text-white font-semibold text-sm rounded-full hover:bg-red-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section with Glow */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-400">Limited spots available</span>
              <ArrowRight className="w-3 h-3 text-red-500" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent"
            >
              Stop Competing For Leads.{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Own Your Market.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10"
            >
              We build done-for-you lead generation systems for service businesses — without the agency fees and without sharing your leads with competitors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <button
                onClick={() => setIsFormOpen(true)}
                className="group px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all flex items-center gap-2 shadow-lg shadow-red-600/25"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40 mb-16"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((t, i) => (
                    <img
                      key={i}
                      src={t.image}
                      alt={t.name}
                      className="w-8 h-8 rounded-full border-2 border-black"
                    />
                  ))}
                </div>
                <span>250+ partners</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Results in 30 days</span>
              </div>
            </motion.div>

            {/* Dashboard Preview with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <MockupFrame size="small" className="mx-auto">
                <Mockup type="responsive">
                  <img
                    src="/pipelinex-hero.png"
                    alt="PipelineX Revenue Dashboard"
                    className="w-full h-auto"
                  />
                </Mockup>
              </MockupFrame>
              <Glow variant="top" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "$50M+", label: "Revenue Generated for Partners" },
              { value: "250+", label: "Exclusive Spots Claimed" },
              { value: "300%", label: "Average Lead Increase" },
              { value: "30", label: "Days to First Results" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">How It Works</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              More Leads in 3 Simple Steps
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              No building, no guessing, no wasted months. Just plug it in and go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors group"
              >
                <span className="text-6xl font-bold text-red-500/20 absolute top-4 right-6">{step.number}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">What You Get</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Dominate
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-black border border-white/5 hover:border-red-500/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/50">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">The Difference</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Launch Fast or Build for Months
            </h2>
            <p className="text-white/50">Why compete when you can dominate?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-white/60">Traditional Agencies</span>
              </div>
              <ul className="space-y-4">
                {comparisonData.traditional.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40">
                    <X className="w-5 h-5 text-red-400/50 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PipelineX */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-500/20">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-white">PipelineX Partnership</span>
              </div>
              <ul className="space-y-4">
                {comparisonData.pipelinex.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Partners Getting Real Results
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-black border border-white/5"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <p className="text-white/70 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-4 block">FAQ</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Got Questions?
            </h2>
            <p className="text-white/50">We've answered the most common ones.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-white/40 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/50">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 sm:p-16 rounded-3xl bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-500/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to Claim Your Spot?
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                We only partner with one business per industry, per area. Limited spots available.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-10 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-lg shadow-lg shadow-red-600/25"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img 
            src="/pipelinex-logo.png" 
            alt="PipelineX" 
            className="h-6 w-auto invert"
          />
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-white/30">© 2026 PipelineX. All rights reserved.</p>
        </div>
      </footer>

      {/* Application Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md mx-4"
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
                    <p className="text-white/50">We'll review your application and get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Apply Now</h3>
                      <p className="text-white/50 text-sm">Limited spots available in your area</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Business Type & Location"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-red-500 transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Checking...
                          </>
                        ) : (
                          <>
                            Check Availability
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
