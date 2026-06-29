import { motion } from 'motion/react';
import { Users, MessagesSquare, Globe, HeartHandshake } from 'lucide-react';

export function Community({ onViewChange }: { onViewChange: (view: string) => void }) {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-gold-400 mb-6 tracking-tight">Our Community</h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
        <p className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
          Connect, collaborate, and evolve together. The Satya Civilization Academy is more than an institution; it's a global network of visionaries, builders, and seekers.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold-500/30 transition-all duration-500"
        >
          <Globe className="w-12 h-12 text-gold-400 mb-6" />
          <h3 className="text-2xl font-serif text-white mb-4">Global Network</h3>
          <p className="text-white/60 font-light leading-relaxed mb-6">
            Join members from all over the world. Our community spans across continents, uniting diverse perspectives with a shared vision for humanity's future.
          </p>
          <ul className="space-y-3 text-sm text-white/50 font-light">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Local Chapters</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> International Forums</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Cultural Exchange</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-10 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-gold-500/30 transition-all duration-500"
        >
          <HeartHandshake className="w-12 h-12 text-gold-400 mb-6" />
          <h3 className="text-2xl font-serif text-white mb-4">Collaborative Projects</h3>
          <p className="text-white/60 font-light leading-relaxed mb-6">
            Participate in real-world initiatives. From sustainable agriculture to digital education platforms, our community actively builds the pillars of tomorrow.
          </p>
          <ul className="space-y-3 text-sm text-white/50 font-light">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Open Source Tech</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Community Gardens</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Research Groups</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-center p-12 border border-gold-500/20 rounded-3xl bg-gradient-to-b from-transparent to-gold-500/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.1)_0%,transparent_70%)]" />
        <MessagesSquare className="w-16 h-16 text-gold-300 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl font-serif text-white mb-6 relative z-10">Join the Conversation</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto font-light relative z-10">
          Our digital sanctuary is open. Connect with mentors, peers, and visionaries on our dedicated community platform.
        </p>
        <button 
          onClick={() => onViewChange('space')}
          className="relative z-10 px-8 py-4 bg-gold-500/20 text-gold-300 border border-gold-500/50 uppercase tracking-widest text-xs font-semibold hover:bg-gold-500 hover:text-black transition-all duration-500"
        >
          Join SPACE
        </button>
      </motion.div>
    </div>
  );
}
