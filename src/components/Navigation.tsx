import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation({ currentView, onViewChange }: { currentView: string, onViewChange: (view: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onViewChange(view);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif font-bold text-xl tracking-widest text-white cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          SATYA
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70"
        >
          <button onClick={() => handleNavClick('home')} className={`hover:text-white transition-colors duration-300 ${currentView === 'home' ? 'text-gold-400' : ''}`}>Academy</button>
          <button onClick={() => handleNavClick('vision')} className={`hover:text-white transition-colors duration-300 ${currentView === 'vision' ? 'text-gold-400' : ''}`}>Vision</button>
          <button onClick={() => handleNavClick('contact')} className={`hover:text-white transition-colors duration-300 ${currentView === 'contact' ? 'text-gold-400' : ''}`}>Contact</button>
          <button onClick={() => handleNavClick('join')} className={`hover:text-white transition-colors duration-300 ${currentView === 'join' ? 'text-gold-400' : ''}`}>Join</button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl md:hidden pt-24 pb-8 px-6 flex flex-col gap-6 text-lg uppercase tracking-widest text-white/70"
          >
            <button onClick={() => handleNavClick('home')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'home' ? 'text-gold-400' : ''}`}>Academy</button>
            <button onClick={() => handleNavClick('vision')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'vision' ? 'text-gold-400' : ''}`}>Vision</button>
            <button onClick={() => handleNavClick('contact')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'contact' ? 'text-gold-400' : ''}`}>Contact</button>
            <button onClick={() => handleNavClick('join')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'join' ? 'text-gold-400' : ''}`}>Join</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
