import { motion } from 'motion/react';

export function Navigation({ currentView, onViewChange }: { currentView: string, onViewChange: (view: string) => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="font-serif font-bold text-xl tracking-widest text-white cursor-pointer"
        onClick={() => onViewChange('home')}
      >
        SATYA
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="flex gap-8 text-xs md:text-sm uppercase tracking-widest text-white/70"
      >
        <button onClick={() => onViewChange('home')} className={`hover:text-white transition-colors duration-300 hidden md:block ${currentView === 'home' ? 'text-gold-400' : ''}`}>Academy</button>
        <button onClick={() => onViewChange('vision')} className={`hover:text-white transition-colors duration-300 hidden md:block ${currentView === 'vision' ? 'text-gold-400' : ''}`}>Vision</button>
        <button onClick={() => onViewChange('contact')} className={`hover:text-white transition-colors duration-300 hidden md:block ${currentView === 'contact' ? 'text-gold-400' : ''}`}>Contact</button>
        <button onClick={() => onViewChange('join')} className={`hover:text-white transition-colors duration-300 ${currentView === 'join' ? 'text-gold-400' : ''}`}>Join</button>
      </motion.div>
    </nav>
  );
}
