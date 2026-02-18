import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Users, Zap, Star, X, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/ui/hero-section";
import { Icons } from "@/components/ui/icons";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Dental Practice Owner",
    text: "Within 60 days, our calendar was filled with pre-qualified leads. The content they produce stops people mid-scroll. Best ROI we've ever seen.",
    rating: 5
  },
  {
    name: "James Rodriguez",
    role: "Med Spa Director",
    text: "We went from 5 leads per month to 40+ qualified appointments. Our business has completely transformed without competing with other clinics.",
    rating: 5
  },
  {
    name: "Michelle Chen",
    role: "Law Firm Partner",
    text: "The exclusive territory model means we're the only firm in our area using their system. No competition, just results.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Home Services CEO",
    text: "Finally, a partner that doesn't work with our competitors. Our lead flow increased 300% in the first quarter.",
    rating: 5
  },
  {
    name: "Amanda Foster",
    role: "Fitness Studio Owner",
    text: "The AI follow-up system is insane. Leads get contacted within seconds. Our show rate went from 40% to 85%.",
    rating: 5
  },
  {
    name: "Dr. Kevin Park",
    role: "Chiropractor",
    text: "I was skeptical at first, but the exclusive territory sold me. No one else in my area can use this. Game changer.",
    rating: 5
  },
];

const features = [
  {
    icon: Shield,
    title: "Exclusive Territory",
    description: "No competitors in your area. Your leads are yours alone.",
    stat: "100%",
    statLabel: "Exclusive"
  },
  {
    icon: Users,
    title: "Done-For-You Assets",
    description: "Professional marketing materials without agency markup.",
    stat: "10x",
    statLabel: "ROI Average"
  },
  {
    icon: Zap,
    title: "AI-Powered Follow-Up",
    description: "Automated systems that convert leads while you sleep.",
    stat: "<5s",
    statLabel: "Response Time"
  }
];

export default function PipelineX() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(244,63,94,0.15) 0%, transparent 70%)',
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-rose-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[10%] w-96 h-96 rounded-full bg-rose-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] right-[5%] w-48 h-48 rounded-full bg-white/5 blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-6 mt-4">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <div className="flex items-center">
              <img 
                src="/pipelinex-logo.png" 
                alt="PipelineX" 
                className="h-8 sm:h-10 w-auto invert"
              />
            </div>
            <motion.button
              onClick={() => setIsFormOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 bg-white text-black font-semibold text-sm rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Apply Now</span>
              <motion.div
                className="absolute inset-0 bg-rose-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
                Apply Now
              </span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 z-10">
        <HeroSection
          dark
          badge={{
            text: "Exclusive Partnership Program",
          }}
          title="No More Overpriced Agencies"
          description="We partner with service-based businesses to generate leads through premium marketing assets — without the fancy fees and without competing for your leads."
          actions={[
            {
              text: "Apply Now",
              variant: "glow",
              icon: <ArrowRight className="w-5 h-5" />,
              onClick: () => setIsFormOpen(true),
            },
          ]}
          image={{
            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1248&q=80",
            alt: "Dashboard Preview",
          }}
          onActionClick={() => setIsFormOpen(true)}
        />
      </div>

      {/* Scrolling Testimonials - Two Rows */}
      <section className="py-20 z-10 relative overflow-hidden">
        <div className="text-center mb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-rose-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Partners Getting <span className="text-rose-500">Results</span>
            </h2>
          </motion.div>
        </div>

        {/* Row 1 - Scroll Left */}
        <div className="relative mb-4">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-shrink-0 w-[400px] mx-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-rose-500/30 transition-colors cursor-pointer"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                  ))}
                </div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <span className="text-rose-500 font-bold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...testimonials.slice(3), ...testimonials, ...testimonials.slice(0, 3)].map((testimonial, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-shrink-0 w-[400px] mx-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-rose-500/30 transition-colors cursor-pointer"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-rose-500 text-rose-500" />
                  ))}
                </div>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <span className="text-rose-500 font-bold text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
          .animate-scroll-left:hover,
          .animate-scroll-right:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Value Props with Animated Cards */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-rose-500 text-sm font-semibold tracking-wider uppercase mb-4 block">Why PipelineX</span>
            <h2 className="text-4xl sm:text-5xl font-black">
              Built Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:border-rose-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/5 transition-colors duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 flex items-center justify-center group-hover:bg-rose-500/30 transition-colors">
                      <feature.icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-rose-500">{feature.stat}</p>
                      <p className="text-xs text-white/40">{feature.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/50">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              The <span className="text-rose-500">Difference</span>
            </h2>
            <p className="text-white/50 text-lg">Why compete when you can dominate?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold mb-6">
                  <X className="w-3 h-3" />
                  Traditional Agencies
                </div>
                <ul className="space-y-4">
                  {[
                    "Work with your competitors",
                    "Expensive retainers & hidden fees",
                    "Generic, templated content",
                    "Your leads compete with others",
                    "Long contracts, slow results"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/50">
                      <X className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* New Way */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-gradient-to-br from-rose-500/20 to-rose-500/5 border border-rose-500/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-semibold mb-6">
                  <CheckCircle className="w-3 h-3" />
                  PipelineX Partnership
                </div>
                <ul className="space-y-4">
                  {[
                    "Exclusive to your territory",
                    "Transparent, fair pricing",
                    "Custom, cinematic content",
                    "All leads are 100% yours",
                    "Results in 30 days or less"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-rose-500/20 rounded-[3rem] blur-3xl" />
            
            <div className="relative p-12 sm:p-16 rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 right-8 w-16 h-16 border border-rose-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-8 left-8 w-12 h-12 border border-white/10 rounded-full"
              />
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
                Ready to Own Your<br />
                <span className="text-rose-500">Territory?</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                We only partner with one business per industry, per area. Check if your territory is still available.
              </p>
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-rose-500 text-white font-bold rounded-full text-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="/pipelinex-logo.png" 
              alt="PipelineX" 
              className="h-8 w-auto invert"
            />
          </div>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm text-white/40">© 2025 PipelineX. All rights reserved.</p>
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
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
              onClick={() => setIsFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md p-8 rounded-3xl bg-neutral-900 border border-white/10"
            >
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/60" />
              </button>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-rose-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-white/60">We'll check your territory and get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-rose-500/20 mb-4">
                      <Sparkles className="w-7 h-7 text-rose-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Apply Now</h3>
                    <p className="text-white/50 text-sm">Check if your territory is available</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Business Type & Location"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
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
                          Apply Now
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
