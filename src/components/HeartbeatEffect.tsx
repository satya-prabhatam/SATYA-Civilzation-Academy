import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HeartbeatEffect() {
  const [beats, setBeats] = useState<number[]>([]);

  useEffect(() => {
    // Trigger a heartbeat every 4 seconds (lub-dub)
    const interval = setInterval(() => {
      const newBeat = Date.now();
      setBeats(prev => [...prev, newBeat]);
      
      // Clean up after animation finishes
      setTimeout(() => {
        setBeats(prev => prev.filter(b => b !== newBeat));
      }, 4000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center mix-blend-screen opacity-60">
      <AnimatePresence>
        {beats.map(beat => (
          <div key={beat} className="absolute pointer-events-none flex items-center justify-center">
             {/* Lub */}
             <motion.div
              initial={{ opacity: 0.3, scale: 0.2 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute w-[40vh] h-[40vh] rounded-full border-[1px] border-gold-300/30"
              style={{ boxShadow: '0 0 40px rgba(252, 232, 129, 0.1), inset 0 0 40px rgba(252, 232, 129, 0.1)' }}
            />
            {/* Dub */}
            <motion.div
              initial={{ opacity: 0.4, scale: 0.2 }}
              animate={{ opacity: 0, scale: 4.5 }}
              transition={{ duration: 3.5, delay: 0.25, ease: "easeOut" }}
              className="absolute w-[40vh] h-[40vh] rounded-full border-[2px] border-gold-400/40"
              style={{ boxShadow: '0 0 60px rgba(227, 188, 81, 0.2), inset 0 0 60px rgba(227, 188, 81, 0.2)' }}
            />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
