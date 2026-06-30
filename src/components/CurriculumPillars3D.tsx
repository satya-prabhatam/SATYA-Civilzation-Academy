import { motion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Heart, BookOpen, Leaf, Target, Cpu, LineChart, Globe, Building2, Users, Music, Rocket, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const pillarsProgression = [
  { name: "Consciousness", child: "Emotional awareness", teen: "Self-reflection", youngAdult: "Purpose", adult: "Leadership", icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />, color: "from-pink-500 to-rose-600", shadow: "rgba(244,63,94,0.5)" },
  { name: "Education", child: "Learning through play", teen: "Study methods", youngAdult: "Career skills", adult: "Lifelong learning", icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, color: "from-blue-500 to-indigo-600", shadow: "rgba(99,102,241,0.5)" },
  { name: "Agriculture", child: "Plant a seed", teen: "School garden", youngAdult: "Sustainable farming", adult: "Agri-business", icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" />, color: "from-emerald-400 to-green-600", shadow: "rgba(16,185,129,0.5)" },
  { name: "Health", child: "Healthy habits", teen: "Fitness", youngAdult: "Preventive health", adult: "Family wellness", icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />, color: "from-red-400 to-red-600", shadow: "rgba(239,68,68,0.5)" },
  { name: "Science", child: "Experiments", teen: "Scientific thinking", youngAdult: "Research", adult: "Innovation", icon: <Target className="w-8 h-8 md:w-10 md:h-10" />, color: "from-cyan-400 to-blue-600", shadow: "rgba(6,182,212,0.5)" },
  { name: "Technology", child: "Digital literacy", teen: "Programming", youngAdult: "AI & software", adult: "Emerging tech", icon: <Cpu className="w-8 h-8 md:w-10 md:h-10" />, color: "from-purple-400 to-violet-600", shadow: "rgba(139,92,246,0.5)" },
  { name: "Entrepreneurship", child: "Saving & sharing", teen: "Small projects", youngAdult: "Startups", adult: "Business growth", icon: <LineChart className="w-8 h-8 md:w-10 md:h-10" />, color: "from-amber-400 to-orange-600", shadow: "rgba(245,158,11,0.5)" },
  { name: "Sustainability", child: "Nature care", teen: "Climate awareness", youngAdult: "Green innovation", adult: "Circular economy", icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />, color: "from-teal-400 to-emerald-600", shadow: "rgba(20,184,166,0.5)" },
  { name: "Architecture", child: "Build models", teen: "Design thinking", youngAdult: "Urban systems", adult: "Smart infrastructure", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />, color: "from-slate-400 to-gray-600", shadow: "rgba(148,163,184,0.5)" },
  { name: "Society", child: "Cooperation", teen: "Civic responsibility", youngAdult: "Governance", adult: "Policy & leadership", icon: <Users className="w-8 h-8 md:w-10 md:h-10" />, color: "from-yellow-400 to-yellow-600", shadow: "rgba(234,179,8,0.5)" },
  { name: "Arts & Culture", child: "Creativity", teen: "Expression", youngAdult: "Design & communication", adult: "Cultural leadership", icon: <Music className="w-8 h-8 md:w-10 md:h-10" />, color: "from-fuchsia-400 to-pink-600", shadow: "rgba(217,70,239,0.5)" },
  { name: "Space & Future", child: "Curiosity", teen: "Astronomy", youngAdult: "Space technology", adult: "Future systems", icon: <Rocket className="w-8 h-8 md:w-10 md:h-10" />, color: "from-indigo-400 to-purple-600", shadow: "rgba(99,102,241,0.5)" },
];

export function CurriculumPillars3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(400);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 160 : 420);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % pillarsProgression.length);
    setRotationAngle((prev) => prev - (360 / pillarsProgression.length));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + pillarsProgression.length) % pillarsProgression.length);
    setRotationAngle((prev) => prev + (360 / pillarsProgression.length));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[900px] flex items-center justify-center overflow-hidden" style={{ perspective: '1500px' }}>
      
      {/* Navigation Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 z-30">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-30">
        <button 
          onClick={handleNext}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      <motion.div 
        ref={containerRef}
        animate={{ rotateY: rotationAngle }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="relative w-[150px] h-[300px] md:w-[320px] md:h-[480px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {pillarsProgression.map((pillar, index) => {
          const angle = (index / pillarsProgression.length) * 360;
          const isActive = activeIndex === index;
          
          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col items-center p-4 md:p-8 backdrop-blur-xl border transition-all duration-700 overflow-hidden rounded-2xl md:rounded-[2rem] ${
                isActive
                  ? 'bg-black/90 border-white/30 z-20'
                  : 'bg-black/60 border-white/10 z-10 opacity-40 hover:opacity-70'
              }`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${isActive ? radius + 40 : radius}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                boxShadow: isActive ? `0 0 50px ${pillar.shadow}, inset 0 0 30px ${pillar.shadow}` : 'none',
              }}
            >
              {/* Vibrant Background Gradient (Active Only) */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${pillar.color} transition-opacity duration-700 ${isActive ? 'opacity-20' : 'opacity-0'}`} 
              />
              
              <div className={`relative z-10 transition-all duration-700 mb-6 mt-4 ${isActive ? 'text-white scale-125' : 'text-white/50 scale-100'}`}>
                {pillar.icon}
              </div>
              
              <h3 className={`relative z-10 font-serif text-xl md:text-3xl tracking-wider text-center mb-8 transition-colors duration-700 ${isActive ? 'text-white font-medium' : 'text-white/70'}`}>
                {pillar.name}
              </h3>
              
              {/* Age Details */}
              <div className={`relative z-10 w-full space-y-3 md:space-y-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                
                <div className="bg-black/40 border border-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="text-[9px] md:text-xs text-white/40 uppercase tracking-widest mb-1">Child (5-12)</div>
                  <div className="text-xs md:text-sm text-white/90 font-light">{pillar.child}</div>
                </div>
                
                <div className="bg-black/40 border border-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="text-[9px] md:text-xs text-white/40 uppercase tracking-widest mb-1">Teen (13-16)</div>
                  <div className="text-xs md:text-sm text-white/90 font-light">{pillar.teen}</div>
                </div>
                
                <div className="bg-black/40 border border-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="text-[9px] md:text-xs text-white/40 uppercase tracking-widest mb-1">Young Adult (17-30)</div>
                  <div className="text-xs md:text-sm text-white/90 font-light">{pillar.youngAdult}</div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
                  <div className="text-[9px] md:text-xs text-white/40 uppercase tracking-widest mb-1">Adult (31+)</div>
                  <div className="text-xs md:text-sm text-white/90 font-light">{pillar.adult}</div>
                </div>

              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
