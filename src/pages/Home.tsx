import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';
import { Sparkles, BookOpen, ChevronDown, Brain, Atom, Zap, Leaf, HeartPulse, Building2, Briefcase, Scale, Landmark, Users, Rocket, Orbit } from 'lucide-react';
import { useRef } from 'react';

export function Home({ onViewChange }: { onViewChange: (view: string) => void }) {
  // HERO SECTION SCROLL
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroSmooth = useSpring(heroProgress, { damping: 20, stiffness: 70 });
  const heroOpacity = useTransform(heroSmooth, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroSmooth, [0, 1], [1, 1.25]);
  const heroY = useTransform(heroSmooth, [0, 1], ["0%", "40%"]);
  const heroFilter = useTransform(heroSmooth, [0, 0.8], ["blur(0px)", "blur(16px)"]);

  // VISION SECTION SCROLL
  const visionRef = useRef(null);
  const { scrollYProgress: visionProgress } = useScroll({
    target: visionRef,
    offset: ["start end", "center center"]
  });
  const visionSmooth = useSpring(visionProgress, { damping: 20, stiffness: 70 });
  const visionY = useTransform(visionSmooth, [0, 1], ["30%", "0%"]);
  const visionOpacity = useTransform(visionSmooth, [0, 1], [0, 1]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center z-10 px-4">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, filter: heroFilter }} 
          className="flex flex-col items-center w-full max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-8 w-64 md:w-96"
          >
            <GeometricLotus />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-center font-medium tracking-tight mb-6"
          >
            <span className="block text-white/80 text-xl sm:text-2xl md:text-3xl mb-4 tracking-widest">WELCOME TO</span>
            <span className="text-gradient">Satya Civilization Academy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="text-white/60 text-base md:text-xl text-center max-w-2xl font-light leading-relaxed mb-12"
          >
            Awakening human potential through ancient wisdom and future technologies. 
            Step into the next phase of conscious evolution.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="group relative px-8 py-3 overflow-hidden rounded-full border border-gold-500/30 bg-transparent backdrop-blur-sm hover:bg-gold-500/10 transition-all duration-500"
          >
            <span className="relative z-10 font-sans uppercase tracking-widest text-sm text-gold-300 flex items-center gap-2">
              Begin Journey <Sparkles className="w-4 h-4" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10 animate-bounce text-white/30 hidden md:block"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Vision Section Overview */}
      <section id="vision" ref={visionRef} className="relative py-32 md:py-48 z-10 px-6 max-w-6xl mx-auto">
        <motion.div style={{ y: visionY, opacity: visionOpacity }} className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-gold-400 mb-8">The Genesis<br/>of Truth</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6 font-light">
              At Satya, we believe civilization is not merely a collection of technologies and cities, but an ongoing expression of human consciousness.
            </p>
            <p className="text-white/70 text-lg leading-relaxed font-light mb-8">
              We bridge the gap between ancient spiritual sciences—represented by the unfolding lotus—and the cinematic frontier of human achievement. 
              Our curriculum is designed to evolve not just the intellect, but the soul.
            </p>
            <button 
              onClick={() => onViewChange('vision')}
              className="group relative inline-flex items-center gap-4 text-gold-300 uppercase tracking-widest text-sm font-medium hover:text-white transition-colors"
            >
              <span className="w-8 h-px bg-gold-500/50 group-hover:w-12 group-hover:bg-gold-300 transition-all duration-300" />
              Read Full Vision
            </button>
          </div>
          <div className="relative aspect-square rounded-full border border-gold-500/20 flex items-center justify-center p-12 overflow-hidden mx-auto w-full max-w-[400px]">
             <div className="absolute inset-0 bg-gold-500/5 rounded-full backdrop-blur-sm" />
             <div className="relative z-10 opacity-40 w-full h-full">
                <GeometricLotus />
             </div>
             <div className="absolute inset-0 border-[0.5px] border-gold-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
             <div className="absolute inset-8 border-[0.5px] border-gold-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section id="academy" className="relative py-32 md:py-48 z-10 px-6 bg-black/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Pillars of Civilization</h2>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Brain className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Consciousness & Human Development",
                desc: "Develop the individual before developing society. Includes Meditation, Yoga, and Emotional Intelligence."
              },
              {
                icon: <BookOpen className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Education & Knowledge Systems",
                desc: "Build a lifelong education ecosystem from Academy to digital courses and University-level learning."
              },
              {
                icon: <Atom className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Science, Innovation & Siddha Tech",
                desc: "Use technology to solve human problems ethically. AI, Robotics, Space, and Biotechnology."
              },
              {
                icon: <Zap className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Energy & Infrastructure",
                desc: "Create energy-independent communities with Solar, Smart grids, and Sustainable infrastructure."
              },
              {
                icon: <Leaf className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Agriculture & Food Systems",
                desc: "Produce healthy food while restoring nature through Natural farming and Aquaponics."
              },
              {
                icon: <HeartPulse className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Wellness & Healthcare",
                desc: "Prevent disease and improve quality of life combining Ayurveda and Modern medicine."
              },
              {
                icon: <Building2 className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Architecture, Cities & Environment",
                desc: "Build sustainable and resilient human settlements, Smart cities, and Vedic architecture."
              },
              {
                icon: <Briefcase className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Economy, Entrepreneurship & Finance",
                desc: "Build prosperity that benefits society through Startups, Investment, and Ethical commerce."
              },
              {
                icon: <Scale className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Governance, Law & Leadership",
                desc: "Create transparent and accountable institutions with Public policy and Digital governance."
              },
              {
                icon: <Landmark className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Culture, Heritage & Civilization",
                desc: "Preserve wisdom while embracing progress through Vedas, Arts, and Cultural preservation."
              },
              {
                icon: <Users className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Community & Global Collaboration",
                desc: "Connect people to build together via Volunteer networks, Forums, and Social impact."
              },
              {
                icon: <Rocket className="w-10 h-10 text-gold-400 mb-8" />,
                title: "Future Research & Civilization Projects",
                desc: "Explore ideas beyond today's limits. Advanced materials, Space habitats, and Long-term planning."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group p-10 rounded-2xl bg-transparent backdrop-blur-md border border-white/10 hover:border-gold-500/30 hover:bg-white/[0.02] transition-all duration-700 flex flex-col items-center text-center"
              >
                {pillar.icon}
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-gold-300 transition-colors duration-500">{pillar.title}</h3>
                <p className="text-white/50 font-light text-sm md:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="join" className="relative py-32 md:py-48 z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="w-20 h-20 mb-10 opacity-50">
             <GeometricLotus />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to Ascend?</h2>
          <p className="text-white/50 mb-12 font-light text-lg">
            Enrollment is open for the next cycle. Space is strictly limited to preserve the transmission of knowledge.
          </p>
          <button 
            onClick={() => onViewChange('join')}
            className="px-10 py-4 md:px-14 md:py-5 bg-white text-black font-sans uppercase tracking-[0.25em] text-xs md:text-sm font-semibold hover:bg-gold-300 transition-colors duration-500"
          >
            Apply Now
          </button>
        </motion.div>
        
        <div className="mt-32 md:mt-48 pt-10 border-t border-white/5 text-white/30 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
          <span>&copy; 2026 Satya Civilization Academy</span>
          <span>Transcendence Awaits</span>
        </div>
      </footer>
    </>
  );
}
