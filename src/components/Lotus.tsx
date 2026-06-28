import { motion } from 'motion/react';

export function GeometricLotus({ className }: { className?: string }) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.2;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 1 }
        }
      };
    }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    filter: [
      'drop-shadow(0 0 15px rgba(227,188,81,0.5)) drop-shadow(0 0 5px rgba(255,249,214,0.3))',
      'drop-shadow(0 0 35px rgba(227,188,81,0.9)) drop-shadow(0 0 15px rgba(255,249,214,0.6))',
      'drop-shadow(0 0 15px rgba(227,188,81,0.5)) drop-shadow(0 0 5px rgba(255,249,214,0.3))'
    ]
  };

  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#c2992b" />
          <stop offset="50%" stopColor="#e3bc51" />
          <stop offset="100%" stopColor="#fff9d6" />
        </linearGradient>
        <linearGradient id="goldFill" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(194, 153, 43, 0.05)" />
          <stop offset="100%" stopColor="rgba(255, 249, 214, 0.2)" />
        </linearGradient>
      </defs>
      
      <motion.g
        animate={pulse}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        stroke="url(#goldGrad)"
        strokeWidth="2"
        fill="url(#goldFill)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Center */}
        <motion.path d="M100 160 C100 160, 80 110, 100 60 C120 110, 100 160, 100 160 Z" custom={0} variants={draw} />
        
        {/* Layer 1 - Inner Petals */}
        <motion.path d="M100 160 C100 160, 70 120, 80 70 C90 100, 100 160, 100 160 Z" custom={1} variants={draw} />
        <motion.path d="M100 160 C100 160, 130 120, 120 70 C110 100, 100 160, 100 160 Z" custom={1} variants={draw} />

        {/* Layer 2 */}
        <motion.path d="M100 160 C100 160, 50 130, 60 80 C80 110, 100 160, 100 160 Z" custom={2} variants={draw} />
        <motion.path d="M100 160 C100 160, 150 130, 140 80 C120 110, 100 160, 100 160 Z" custom={2} variants={draw} />

        {/* Layer 3 */}
        <motion.path d="M100 160 C100 160, 30 135, 40 90 C60 120, 100 160, 100 160 Z" custom={3} variants={draw} />
        <motion.path d="M100 160 C100 160, 170 135, 160 90 C140 120, 100 160, 100 160 Z" custom={3} variants={draw} />
        
        {/* Base Petals */}
        <motion.path d="M100 160 C100 160, 40 160, 20 140 C50 150, 100 160, 100 160 Z" custom={4} variants={draw} />
        <motion.path d="M100 160 C100 160, 160 160, 180 140 C150 150, 100 160, 100 160 Z" custom={4} variants={draw} />

        {/* Sparkles / Light dots */}
        <motion.circle cx="100" cy="50" r="1.5" fill="url(#goldGrad)" custom={5} variants={draw} stroke="none" />
        <motion.circle cx="85" cy="40" r="1" fill="url(#goldGrad)" custom={6} variants={draw} stroke="none" />
        <motion.circle cx="115" cy="40" r="1" fill="url(#goldGrad)" custom={6} variants={draw} stroke="none" />
        <motion.circle cx="70" cy="55" r="1" fill="url(#goldGrad)" custom={7} variants={draw} stroke="none" />
        <motion.circle cx="130" cy="55" r="1" fill="url(#goldGrad)" custom={7} variants={draw} stroke="none" />
      </motion.g>
    </motion.svg>
  );
}
