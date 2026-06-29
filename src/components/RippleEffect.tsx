import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function RippleEffect() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple]);

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <AnimatePresence>
        {ripples.map(ripple => (
          <div 
            key={ripple.id} 
            className="absolute pointer-events-none"
            style={{ 
              left: ripple.x, 
              top: ripple.y
            }}
          >
            <motion.div
              initial={{ opacity: 0.5, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 0, scale: 1.5, x: "-50%", y: "-50%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-[100px] h-[100px] rounded-full border-2 border-gold-300"
              style={{ boxShadow: '0 0 15px rgba(252, 232, 129, 0.4), inset 0 0 15px rgba(252, 232, 129, 0.4)' }}
            />
            <motion.div
              initial={{ opacity: 0.4, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 0, scale: 2.2, x: "-50%", y: "-50%" }}
              transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
              className="absolute w-[100px] h-[100px] rounded-full border-2 border-gold-400"
              style={{ boxShadow: '0 0 15px rgba(227, 188, 81, 0.3), inset 0 0 15px rgba(227, 188, 81, 0.3)' }}
            />
            <motion.div
              initial={{ opacity: 0.3, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: 0, scale: 3, x: "-50%", y: "-50%" }}
              transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
              className="absolute w-[100px] h-[100px] rounded-full border-2 border-gold-500"
              style={{ boxShadow: '0 0 15px rgba(194, 153, 43, 0.2), inset 0 0 15px rgba(194, 153, 43, 0.2)' }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
