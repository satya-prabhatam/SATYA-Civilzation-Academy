import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HeartbeatEffect() {
  const [beats, setBeats] = useState<number[]>([]);

  useEffect(() => {
    // Trigger a heartbeat every 2.5 seconds for a calm, ambient pace
    const interval = setInterval(() => {
      const newBeat = Date.now();
      setBeats(prev => [...prev, newBeat]);
      
      // Clean up after animation finishes
      setTimeout(() => {
        setBeats(prev => prev.filter(b => b !== newBeat));
      }, 4000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center mix-blend-screen">
      {/* Persistent Beating Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1, 1.25, 1],
          opacity: [0.1, 0.3, 0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          times: [0, 0.1, 0.2, 0.4, 1]
        }}
        className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full bg-gold-500/10 blur-3xl flex items-center justify-center"
      />

      <AnimatePresence>
        {beats.map(beat => (
          <div key={beat} className="absolute pointer-events-none flex items-center justify-center">
            {/* Water Ripple 1 (Lub) */}
            <motion.div
              initial={{ opacity: 0.5, scale: 0 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute w-[30vh] h-[30vh] rounded-full border-[1px] border-gold-300/40 backdrop-blur-[2px]"
              style={{ boxShadow: '0 0 40px rgba(252, 232, 129, 0.15), inset 0 0 40px rgba(252, 232, 129, 0.15)' }}
            />
            {/* Water Ripple 2 (Lub Echo) */}
            <motion.div
              initial={{ opacity: 0.4, scale: 0 }}
              animate={{ opacity: 0, scale: 4.5 }}
              transition={{ duration: 3.2, delay: 0.1, ease: "easeOut" }}
              className="absolute w-[30vh] h-[30vh] rounded-full border-[1px] border-gold-200/20 backdrop-blur-[1px]"
              style={{ boxShadow: '0 0 20px rgba(252, 232, 129, 0.1), inset 0 0 20px rgba(252, 232, 129, 0.1)' }}
            />
            
            {/* Water Ripple 3 (Dub) */}
            <motion.div
              initial={{ opacity: 0.6, scale: 0 }}
              animate={{ opacity: 0, scale: 5.5 }}
              transition={{ duration: 3.5, delay: 0.3, ease: "easeOut" }}
              className="absolute w-[30vh] h-[30vh] rounded-full border-[2px] border-gold-400/50 backdrop-blur-[4px]"
              style={{ boxShadow: '0 0 60px rgba(227, 188, 81, 0.25), inset 0 0 60px rgba(227, 188, 81, 0.25)' }}
            />
             {/* Water Ripple 4 (Dub Echo) */}
             <motion.div
              initial={{ opacity: 0.4, scale: 0 }}
              animate={{ opacity: 0, scale: 6 }}
              transition={{ duration: 4, delay: 0.45, ease: "easeOut" }}
              className="absolute w-[30vh] h-[30vh] rounded-full border-[1px] border-gold-300/30 backdrop-blur-[2px]"
              style={{ boxShadow: '0 0 30px rgba(227, 188, 81, 0.15), inset 0 0 30px rgba(227, 188, 81, 0.15)' }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
