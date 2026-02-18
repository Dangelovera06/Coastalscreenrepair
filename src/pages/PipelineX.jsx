import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Users, Zap, Star, X } from "lucide-react";

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
];

const features = [
  {
    icon: Shield,
    title: "Exclusive Territory",
    description: "No competitors in your area. Your leads are yours alone."
  },
  {
    icon: Users,
    title: "Done-For-You Assets",
    description: "Professional marketing materials without agency markup."
  },
  {
    icon: Zap,
    title: "AI-Powered Follow-Up",
    description: "Automated systems that convert leads while you sleep."
  }
];

export default function PipelineX() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/pipelinex-logo.png" 
              alt="PipelineX" 
              className="h-8 sm:h-10 w-auto invert"
            />
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-all"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              <span className="text-sm text-white/70">Exclusive Partnership Program</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-8 max-w-4xl"
          >
            No More
            <br />
            <span className="text-rose-500">Overpriced Agencies</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed"
          >
            We partner with service-based businesses to generate leads through premium marketing assets — without the fancy fees and without competing for your leads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <button
              onClick={() => setIsFormOpen(true)}
              className="group px-8 py-4 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition-all flex items-center gap-2"
            >
              Check Availability
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-white/40 sm:py-4">Limited spots per territory</p>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-5 group-hover:bg-rose-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            The <span className="text-rose-500">Partnership</span> Model
          </motion.h2>
          <p className="text-white/60 text-lg">Why compete when you can dominate?</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-red-400">Traditional Agencies</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Work with your competitors",
                "Expensive retainers & hidden fees",
                "Generic, templated content",
                "Your leads compete with others",
                "Long contracts, slow results"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/60">
                  <X className="w-5 h-5 text-red-400/60 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-rose-500/5 border border-rose-500/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-rose-500">PipelineX Partnership</h3>
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
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Testimonials */}
      <section className="py-20 border-t border-white/5 overflow-hidden">
        <div className="text-center mb-12 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold mb-3"
          >
            Partners Getting <span className="text-rose-500">Real Results</span>
          </motion.h2>
          <p className="text-white/60">Join businesses already dominating their markets</p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-testimonials">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 mx-3 p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/50">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-testimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-testimonials {
            animation: scroll-testimonials 30s linear infinite;
          }
          .animate-scroll-testimonials:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Social Proof Images */}
      <section className="py-16 border-t border-white/5 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll-images">
            {[
              "/SOCIAL PROOF/3 copy.png",
              "/SOCIAL PROOF/4 copy.png",
              "/SOCIAL PROOF/5 copy.png",
              "/SOCIAL PROOF/6 copy.png",
              "/SOCIAL PROOF/3 copy.png",
              "/SOCIAL PROOF/4 copy.png",
              "/SOCIAL PROOF/5 copy.png",
              "/SOCIAL PROOF/6 copy.png",
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-2">
                <img
                  src={src}
                  alt="Partner success"
                  className="w-64 h-44 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-images {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-images {
            animation: scroll-images 25s linear infinite;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Own Your
            <br />
            <span className="text-rose-500">Territory?</span>
          </motion.h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            We only partner with one business per industry, per area. Check if your territory is still available.
          </p>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all text-lg"
          >
            Check Availability
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
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
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          ></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md bg-neutral-900 rounded-2xl p-8 border border-white/10"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-white/60" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-white/60">We'll check your territory and get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Check Your Territory</h3>
                  <p className="text-white/60 text-sm">See if your area is still available</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Business Type & Location"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-rose-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-600 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Checking..." : "Check Availability"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
