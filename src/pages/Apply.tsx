import { motion } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';

export function Apply({ onViewChange }: { onViewChange: (view: string) => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto z-10 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-16"
      >
        <motion.div variants={itemVariants} className="w-24 h-24 mb-10 opacity-70">
          <GeometricLotus />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-white mb-6">
          Welcome to SATYA
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-serif text-gold-300 mb-12 tracking-wide leading-relaxed">
          You're Not Just Applying.<br/>You're Choosing to Build the Future.
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed space-y-8 mb-16 text-center md:text-left"
      >
        <p>Thank you for your interest in joining SATYA.</p>
        <p>
          SATYA is a long-term initiative dedicated to education, technology, sustainability, research, and human development. 
          We believe that meaningful change is created by people who are curious, ethical, and committed to continuous learning.
        </p>
        <p>
          Whether you are a student, researcher, engineer, designer, educator, entrepreneur, or volunteer, 
          we value your willingness to contribute.
        </p>
        <div className="p-6 md:p-8 border border-gold-500/30 bg-transparent backdrop-blur-md rounded-3xl text-center shadow-[inset_0_0_20px_rgba(191,149,63,0.05)]">
          <p className="text-xl font-serif text-gold-300 mb-6">
            Before you begin your application, please take a moment to read our principles.
          </p>
          <button 
            onClick={() => onViewChange('charter')}
            className="px-8 py-3 border border-gold-500 text-gold-400 font-sans uppercase tracking-[0.2em] text-xs font-semibold hover:bg-gold-500/10 transition-colors duration-300"
          >
            Read The SATYA Charter
          </button>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="space-y-8 max-w-2xl mx-auto"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Full Name</label>
            <input type="text" className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email Address</label>
            <input type="email" className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Primary Area of Interest</label>
            <select className="w-full bg-void/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none">
              <option>Student / Learner</option>
              <option>Research & Science</option>
              <option>Engineering & Technology</option>
              <option>Design & Architecture</option>
              <option>Education & Teaching</option>
              <option>Entrepreneurship</option>
              <option>Volunteer / Community</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">How would you like to contribute?</label>
            <textarea rows={5} className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors resize-none" placeholder="Tell us about your skills, passions, and how you envision participating in SATYA..."></textarea>
          </div>
        </div>

        <div className="flex items-center gap-3 py-4">
          <input type="checkbox" id="principles" required className="w-4 h-4 rounded border-white/20 bg-transparent backdrop-blur-sm text-gold-500 focus:ring-gold-500/30" />
          <label htmlFor="principles" className="text-sm text-white/60 font-light cursor-pointer">
            I have read and align with the principles of the SATYA Charter.
          </label>
        </div>

        <button type="button" onClick={() => onViewChange('home')} className="w-full px-8 py-5 bg-white text-black font-sans uppercase tracking-[0.25em] text-sm font-semibold hover:bg-gold-300 transition-colors duration-500">
          Submit Application
        </button>
      </motion.form>
    </div>
  );
}
