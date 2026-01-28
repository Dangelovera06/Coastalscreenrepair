import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle, ArrowRight, Play, Target, Zap, Calendar, Video, BarChart3, Users } from "lucide-react";

export default function Education() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Check localStorage on mount
  useEffect(() => {
    const unlocked = localStorage.getItem('education_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Fire Facebook Pixel event
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Education Page Access',
          content_category: 'Education Opt-in',
          value: 0,
          currency: 'USD'
        });
        
        window.fbq('trackCustom', 'EducationUnlock', {
          name: formData.name,
          timestamp: new Date().toISOString()
        });
      }

      // Submit to Netlify
      const submissionData = new URLSearchParams({
        'form-name': 'education-optin',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        submittedAt: new Date().toISOString()
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submissionData.toString()
      });

      // Unlock content
      localStorage.setItem('education_unlocked', 'true');
      setIsUnlocked(true);

    } catch (error) {
      console.error('Submission error:', error);
      // Still unlock on error
      localStorage.setItem('education_unlocked', 'true');
      setIsUnlocked(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

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
            The Playbook for Local Domination
          </div>
          {isUnlocked && (
            <a 
              href="/system"
              className="px-4 py-2 bg-black text-white font-medium text-xs sm:text-sm tracking-wider uppercase rounded-lg hover:bg-black/80 transition-all"
            >
              Work With Us
            </a>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 px-4 sm:px-6 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-black/5 rounded-full text-xs font-medium tracking-wider text-black/60 uppercase mb-6">
              From the Desk of D'Angelo Vera
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              How to Dominate Your Local Market Using Social Media in 2025
            </h1>
            <p className="text-lg sm:text-xl text-black/60 max-w-2xl mx-auto">
              The exact strategies I've used to help businesses fill their calendars with qualified appointments — without wasting money on ads that don't convert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Gate */}
      <section className="relative pb-20">
        {/* Gate Overlay */}
        <AnimatePresence>
          {!isUnlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-[#FAFAF8]/60 backdrop-blur-sm"
              style={{ top: '80px' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl shadow-black/10 p-8 border border-black/5"
              >
                <div className="text-center mb-6">
                  <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-black/70" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Unlock Free Access
                  </h3>
                  <p className="text-black/60 text-sm">
                    Enter your details below to read the full guide
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 bg-[#FAFAF8] border rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all ${errors.name ? 'border-red-400' : 'border-black/10'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@business.com"
                      className={`w-full px-4 py-3 bg-[#FAFAF8] border rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all ${errors.email ? 'border-red-400' : 'border-black/10'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black/70 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 bg-[#FAFAF8] border rounded-lg text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all ${errors.phone ? 'border-red-400' : 'border-black/10'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Unlocking...
                      </>
                    ) : (
                      <>
                        Unlock Full Guide
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-black/40 mt-4">
                    Your information is secure. We never share your data.
                  </p>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blurred Background Content (visible but blurred when locked) */}
        <div className={`transition-all duration-500 ${!isUnlocked ? 'blur-md pointer-events-none select-none' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-black/5 shadow-sm mb-12"
            >
              <div className="w-16 h-16 rounded-full bg-black/10 flex items-center justify-center text-2xl font-bold text-black">
                DV
              </div>
              <div>
                <h4 className="font-bold text-black text-lg">D'Angelo Vera</h4>
                <p className="text-black/60 text-sm">Founder, P1 Creative</p>
                <p className="text-black/40 text-xs mt-1">Helping businesses generate leads through cinematic content & AI automation</p>
              </div>
            </motion.div>

            {/* Introduction */}
            <article className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <p className="text-xl text-black/80 leading-relaxed mb-6">
                  Look, I'm going to be straight with you. Most businesses are doing social media wrong. They're posting random content, hoping something sticks, and wondering why their phone isn't ringing.
                </p>
                <p className="text-lg text-black/70 leading-relaxed">
                  I've spent years building systems that actually work — systems that turn strangers into booked appointments. And today, I'm going to break down exactly how we do it at P1 Creative.
                </p>
              </motion.div>

              {/* Section 1 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    1. The "Local Domination" Strategy
                  </h2>
                </div>
                
                <div className="bg-[#F5F5DC]/30 border border-[#F5F5DC] rounded-xl p-6 mb-6">
                  <p className="text-black/80 font-medium mb-2">The Core Principle:</p>
                  <p className="text-black/70">Your competition is posting generic content. You need to become the face of your industry in your local area.</p>
                </div>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  Here's what most business owners don't understand: <strong className="text-black">social media isn't about going viral.</strong> It's about consistently showing up in front of the right people in your area until they know, like, and trust you enough to book.
                </p>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  When someone in your city thinks about your service, you want your face to pop into their head first. That's domination. And it happens through:
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Consistent, high-quality content that positions you as the expert",
                    "Hyper-local targeting that reaches people in your service area",
                    "Educational content that solves problems before they book",
                    "Behind-the-scenes content that builds trust and authenticity"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black/60 mt-0.5 flex-shrink-0" />
                      <span className="text-black/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/SOCIAL PROOF/3 copy.png" 
                    alt="Team creating content"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-medium">Real businesses we've helped dominate their local market</p>
                  </div>
                </div>
              </motion.section>

              {/* Section 2 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    2. Why Cinematic Content Wins
                  </h2>
                </div>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  Here's the truth: the bar for content quality has never been higher. People scroll through hundreds of posts a day. <strong className="text-black">If your content looks amateur, they keep scrolling.</strong>
                </p>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  Cinematic content isn't about having a Hollywood budget. It's about:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: "Professional Lighting", desc: "Makes you look credible and trustworthy" },
                    { title: "Intentional Framing", desc: "Guides attention to what matters" },
                    { title: "Clean Audio", desc: "People will forgive bad video, never bad audio" },
                    { title: "Strategic Editing", desc: "Keeps attention in the first 3 seconds" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white border border-black/5 rounded-xl">
                      <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                      <p className="text-sm text-black/60">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-black pl-6 my-8">
                  <p className="text-xl text-black/80 italic">
                    "The businesses that invest in quality content today will own their market tomorrow. The ones that don't will wonder where all their customers went."
                  </p>
                  <cite className="text-black/50 text-sm mt-2 block">— D'Angelo Vera</cite>
                </blockquote>

                <div className="relative rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/SOCIAL PROOF/4 copy.png" 
                    alt="Content production"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </motion.section>

              {/* Section 3 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    3. The Ad Strategy That Actually Works
                  </h2>
                </div>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  I've seen businesses burn through $10,000+ on ads with nothing to show for it. The problem isn't the platform — it's the strategy.
                </p>

                <div className="bg-white border border-black/5 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-black mb-4">The P1 Creative Ad Framework:</h4>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0">1</div>
                      <div>
                        <h5 className="font-semibold text-black">Attention-Grabbing Hook (0-3 seconds)</h5>
                        <p className="text-sm text-black/60">Stop the scroll with something unexpected. A question, a bold statement, or pattern interrupt.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0">2</div>
                      <div>
                        <h5 className="font-semibold text-black">Problem Agitation (3-15 seconds)</h5>
                        <p className="text-sm text-black/60">Make them feel the pain of their current situation. Show you understand their struggle.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0">3</div>
                      <div>
                        <h5 className="font-semibold text-black">Solution & Social Proof (15-45 seconds)</h5>
                        <p className="text-sm text-black/60">Present your solution and back it up with results. Show, don't tell.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center text-sm font-bold text-black flex-shrink-0">4</div>
                      <div>
                        <h5 className="font-semibold text-black">Clear CTA (Final 5 seconds)</h5>
                        <p className="text-sm text-black/60">Tell them exactly what to do next. Make it stupidly simple.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-black/70 leading-relaxed">
                  But here's what separates good campaigns from great ones: <strong className="text-black">retargeting.</strong> The person who watched your video but didn't book? They're not lost. They just need more touchpoints. Our system ensures they see your face again and again until they're ready.
                </p>
              </motion.section>

              {/* Section 4 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black">
                    4. Automated Booking: The Game Changer
                  </h2>
                </div>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  This is where most businesses leave money on the table. They generate interest, but they have no system to capture and convert that interest into booked appointments.
                </p>

                <div className="bg-[#F5F5DC]/30 border border-[#F5F5DC] rounded-xl p-6 mb-6">
                  <p className="text-black/80 font-medium mb-2">The Speed-to-Lead Problem:</p>
                  <p className="text-black/70">Studies show that responding to a lead within 5 minutes makes you <strong>21x more likely</strong> to qualify that lead. After 30 minutes? Your chances drop by 80%.</p>
                </div>

                <p className="text-lg text-black/70 leading-relaxed mb-4">
                  Here's what our automated system does:
                </p>

                <div className="space-y-4 mb-6">
                  {[
                    { icon: Zap, title: "Instant Response", desc: "Within seconds of a lead coming in, they receive a personalized message" },
                    { icon: Users, title: "AI-Powered Follow-Up", desc: "Smart sequences that nurture leads until they're ready to book" },
                    { icon: Calendar, title: "Self-Booking", desc: "Leads can book directly into your calendar without back-and-forth" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white border border-black/5 rounded-xl">
                      <div className="w-10 h-10 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-black/70" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{item.title}</h4>
                        <p className="text-sm text-black/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <img 
                    src="/WHAT HAPPENS/1.webp" 
                    alt="Lead generation"
                    className="rounded-xl h-48 object-cover w-full"
                  />
                  <img 
                    src="/WHAT HAPPENS/2.webp" 
                    alt="AI follow-up"
                    className="rounded-xl h-48 object-cover w-full"
                  />
                  <img 
                    src="/WHAT HAPPENS/3.webp" 
                    alt="Automated booking"
                    className="rounded-xl h-48 object-cover w-full"
                  />
                </div>

                <p className="text-lg text-black/70 leading-relaxed">
                  The result? <strong className="text-black">Your calendar fills up while you sleep.</strong> No more chasing leads. No more missed opportunities. No more wondering where your next customer is coming from.
                </p>
              </motion.section>

              {/* Final CTA Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <div className="bg-black text-white rounded-2xl p-8 sm:p-12 text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Ready to Dominate Your Market?
                  </h3>
                  <p className="text-white/70 mb-8 max-w-xl mx-auto">
                    At P1 Creative, we build complete lead generation systems — content, ads, AI follow-up, and automated booking — all done for you.
                  </p>
                  <a
                    href="/system"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all"
                  >
                    See How It Works
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.section>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isUnlocked ? 1 : 0.5, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center py-8 border-t border-black/10"
              >
                <p className="text-black/60 mb-2">To your success,</p>
                <p className="text-2xl font-bold text-black" style={{ fontFamily: 'cursive' }}>D'Angelo Vera</p>
                <p className="text-sm text-black/40 mt-1">Founder, P1 Creative</p>
              </motion.div>
            </article>
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
