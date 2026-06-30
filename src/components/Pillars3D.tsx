import { motion, useAnimationFrame } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Heart, BookOpen, Leaf, Target, Cpu, LineChart, Globe, Building2, Users, Music, Rocket, Sparkles, Hexagon } from 'lucide-react';

const pillars = [
  { name: "Consciousness", icon: <Heart className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Education", icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Agriculture", icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Health", icon: <Target className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Science", icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Technology", icon: <Cpu className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Entrepreneurship", icon: <LineChart className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Sustainability", icon: <Globe className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Architecture", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Society", icon: <Users className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Arts & Culture", icon: <Music className="w-8 h-8 md:w-10 md:h-10" /> },
  { name: "Space & Future", icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" /> },
];

export function Pillars3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  
  const [radius, setRadius] = useState(400);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 220 : 380);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  useAnimationFrame((t) => {
    if (containerRef.current) {
      const rotateY = t / 40; 
      containerRef.current.style.transform = `rotateY(${rotateY}deg)`;
    }
    if (coreRef.current) {
      coreRef.current.style.transform = `rotateY(${t / 20}deg) rotateX(${t / 30}deg)`;
    }
    if (ring1Ref.current) {
      ring1Ref.current.style.transform = `translate(-50%, -50%) rotateX(75deg) rotateZ(${t / 15}deg)`;
    }
    if (ring2Ref.current) {
      ring2Ref.current.style.transform = `translate(-50%, -50%) rotateX(75deg) rotateZ(${-t / 25}deg)`;
    }
  });

  return (
    <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Deep black gold ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Central Core Hologram */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold-500/10 blur-[60px] rounded-full pointer-events-none" />
      
      <div 
        ref={coreRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold-500/40 pointer-events-none flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Hexagon className="w-16 h-16 md:w-24 md:h-24 absolute" strokeWidth={1} />
        <Hexagon className="w-12 h-12 md:w-16 md:h-16 absolute rotate-90" strokeWidth={1} />
      </div>

      {/* Futuristic Orbit Rings */}
      <div 
        ref={ring1Ref}
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-dashed border-gold-500/20 pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      />
      <div 
        ref={ring2Ref}
        className="absolute top-1/2 left-1/2 w-[450px] h-[450px] md:w-[750px] md:h-[750px] rounded-full border border-gold-500/10 pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
      />

      <div 
        ref={containerRef}
        className="relative w-[180px] h-[260px] md:w-[220px] md:h-[320px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {pillars.map((pillar, index) => {
          const angle = (index / pillars.length) * 360;
          
          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-6 bg-black/80 backdrop-blur-md border border-gold-500/30 shadow-[0_0_30px_rgba(212,175,55,0.1)] group hover:border-gold-400 hover:shadow-[0_0_50px_rgba(212,175,55,0.3)] transition-all duration-500 overflow-hidden cursor-pointer"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)'
              }}
            >
              {/* Futuristic HUD corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500/50" />
              
              {/* Inner tech pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-gold-900/10 to-black/80" />
              
              <div className="relative z-10 text-gold-400 mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:scale-110 group-hover:text-gold-300 transition-all duration-500">
                {pillar.icon}
              </div>
              
              {/* Techy label */}
              <div className="relative z-10 w-full text-center">
                <div className="text-gold-500/60 font-mono text-[10px] tracking-widest mb-2 uppercase">System.{index + 1 > 9 ? index + 1 : `0${index + 1}`}</div>
                <h3 className="text-gold-100 font-serif text-base md:text-lg tracking-wider drop-shadow-md">
                  {pillar.name}
                </h3>
              </div>
              
              {/* Glowing animated line */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gold-500/20 overflow-hidden">
                <div className="w-full h-full bg-gold-400 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
