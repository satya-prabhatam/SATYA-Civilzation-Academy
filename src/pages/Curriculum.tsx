import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Heart, Rocket, Target, Users, Code, LineChart, Cpu, Leaf, Building2, Globe, Music } from 'lucide-react';

export function Curriculum({ onViewChange }: { onViewChange: (view: string) => void }) {
  const ageGroups = [
    {
      age: "5–8 Years",
      stage: "Foundation",
      goal: "Build curiosity, values, creativity, and healthy habits.",
      description: "Across the 12 pillars, children learn through stories, games, simple experiments, gardening, art, teamwork, movement, and observation. The curriculum focuses on asking questions, caring for nature, basic health, kindness, and creative thinking.",
      outcome: "A curious, confident child who enjoys learning rather than memorizing."
    },
    {
      age: "9–12 Years",
      stage: "Exploration",
      goal: "Discover interests and practical skills.",
      description: "Children begin learning basic coding, science experiments, environmental awareness, communication, financial basics, teamwork, simple agriculture, and introductory engineering concepts through projects.",
      outcome: "Students discover what excites them and begin building practical skills."
    },
    {
      age: "13–16 Years",
      stage: "Discovery",
      goal: "Develop identity and foundational career skills.",
      description: "Students explore every SATYA pillar through projects. They learn research methods, entrepreneurship basics, leadership, AI tools, engineering design, wellness, ethics, and community service.",
      outcome: "They begin identifying strengths and possible career directions."
    },
    {
      age: "17–21 Years",
      stage: "Career Preparation",
      goal: "Build professional competence.",
      description: "Learners choose specialization tracks while continuing interdisciplinary learning. They complete internships, research, portfolio projects, startup challenges, and advanced technical or creative work.",
      outcome: "Career readiness, entrepreneurial thinking, and a strong portfolio."
    },
    {
      age: "22–30 Years",
      stage: "Professional Growth",
      goal: "Build careers, businesses, and expertise.",
      description: "Curricula focus on advanced technical knowledge, leadership, business creation, research, innovation, project management, and lifelong learning.",
      outcome: "Professionals who can create value, lead teams, or build organizations."
    },
    {
      age: "31–45 Years",
      stage: "Leadership",
      goal: "Scale impact.",
      description: "Learners focus on executive leadership, mentoring, governance, strategic thinking, advanced entrepreneurship, family wellbeing, sustainability, and community building.",
      outcome: "Leaders who strengthen organizations and communities."
    },
    {
      age: "46–60 Years",
      stage: "Legacy",
      goal: "Share knowledge and mentor others.",
      description: "The curriculum emphasizes mentoring, consulting, teaching, social impact, advanced research, cultural preservation, and supporting future generations.",
      outcome: "Experienced individuals who multiply their impact through others."
    },
    {
      age: "60+ Years",
      stage: "Wisdom",
      goal: "Preserve and transmit knowledge.",
      description: "The focus shifts to documenting experiences, mentoring younger learners, storytelling, wellbeing, philosophy, and contributing to community knowledge.",
      outcome: "A living library of wisdom that benefits future generations."
    }
  ];

  const pillarsProgression = [
    { name: "Consciousness", child: "Emotional awareness", teen: "Self-reflection", youngAdult: "Purpose", adult: "Leadership", icon: <Heart className="w-5 h-5 text-gold-400" /> },
    { name: "Education", child: "Learning through play", teen: "Study methods", youngAdult: "Career skills", adult: "Lifelong learning", icon: <BookOpen className="w-5 h-5 text-gold-400" /> },
    { name: "Agriculture", child: "Plant a seed", teen: "School garden", youngAdult: "Sustainable farming", adult: "Agri-business", icon: <Leaf className="w-5 h-5 text-gold-400" /> },
    { name: "Health", child: "Healthy habits", teen: "Fitness", youngAdult: "Preventive health", adult: "Family wellness", icon: <Heart className="w-5 h-5 text-gold-400" /> },
    { name: "Science", child: "Experiments", teen: "Scientific thinking", youngAdult: "Research", adult: "Innovation", icon: <Target className="w-5 h-5 text-gold-400" /> },
    { name: "Technology", child: "Digital literacy", teen: "Programming", youngAdult: "AI & software", adult: "Emerging tech", icon: <Cpu className="w-5 h-5 text-gold-400" /> },
    { name: "Entrepreneurship", child: "Saving & sharing", teen: "Small projects", youngAdult: "Startups", adult: "Business growth", icon: <LineChart className="w-5 h-5 text-gold-400" /> },
    { name: "Sustainability", child: "Nature care", teen: "Climate awareness", youngAdult: "Green innovation", adult: "Circular economy", icon: <Globe className="w-5 h-5 text-gold-400" /> },
    { name: "Architecture", child: "Build models", teen: "Design thinking", youngAdult: "Urban systems", adult: "Smart infrastructure", icon: <Building2 className="w-5 h-5 text-gold-400" /> },
    { name: "Society", child: "Cooperation", teen: "Civic responsibility", youngAdult: "Governance", adult: "Policy & leadership", icon: <Users className="w-5 h-5 text-gold-400" /> },
    { name: "Arts & Culture", child: "Creativity", teen: "Expression", youngAdult: "Design & communication", adult: "Cultural leadership", icon: <Music className="w-5 h-5 text-gold-400" /> },
    { name: "Space & Future", child: "Curiosity", teen: "Astronomy", youngAdult: "Space technology", adult: "Future systems", icon: <Rocket className="w-5 h-5 text-gold-400" /> },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Life-Stage Curricula</h1>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />
        <p className="text-xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed">
          Instead of creating one curriculum for everyone, SATYA provides adaptive learning paths. People at different ages have different needs, so the same 12 pillars are taught differently depending on the learner's stage of life.
        </p>
      </motion.div>

      <div className="space-y-12 mb-32">
        {ageGroups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:border-gold-500/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="text-gold-400 font-serif text-2xl mb-2">{group.stage}</div>
                <div className="text-white/50 uppercase tracking-widest text-sm mb-4">{group.age}</div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 text-sm">
                  Goal: {group.goal}
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-white/80 font-light leading-relaxed">
                  {group.description}
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-white/40 uppercase tracking-wider text-xs block mb-1">Outcome</span>
                  <span className="text-gold-100/90 font-medium">{group.outcome}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-12 text-center">How the 12 Pillars Adapt</h2>
        
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-5 gap-4 mb-4 px-6 text-sm uppercase tracking-widest text-white/40">
              <div className="col-span-1">Pillar</div>
              <div className="col-span-1">Child (5-12)</div>
              <div className="col-span-1">Teen (13-16)</div>
              <div className="col-span-1">Young Adult (17-30)</div>
              <div className="col-span-1">Adult (31+)</div>
            </div>
            
            <div className="space-y-3">
              {pillarsProgression.map((pillar, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <div className="col-span-1 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-black/20">
                      {pillar.icon}
                    </div>
                    <span className="font-serif text-white">{pillar.name}</span>
                  </div>
                  <div className="col-span-1 text-white/60 font-light text-sm">{pillar.child}</div>
                  <div className="col-span-1 text-white/60 font-light text-sm">{pillar.teen}</div>
                  <div className="col-span-1 text-white/60 font-light text-sm">{pillar.youngAdult}</div>
                  <div className="col-span-1 text-white/60 font-light text-sm">{pillar.adult}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gold-900/20 to-black/40 border border-gold-500/20 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-serif text-white mb-6">A Lifelong Learning Ecosystem</h2>
        <p className="text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          A learner who joins at age 10 doesn't just complete a course—they continue growing through SATYA for decades. This transforms SATYA into an ecosystem where the curriculum evolves alongside the learner's stage of life and aspirations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm uppercase tracking-widest text-gold-400/60 mb-12">
          <span>Foundation</span>
          <span>→</span>
          <span>Exploration</span>
          <span>→</span>
          <span>Discovery</span>
          <span>→</span>
          <span className="hidden md:inline">Career</span>
          <span className="hidden md:inline">→</span>
          <span className="hidden md:inline">Leadership</span>
          <span className="hidden md:inline">→</span>
          <span>Wisdom</span>
        </div>
        
        <button 
          onClick={() => onViewChange('apply')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition-colors uppercase tracking-widest text-sm group"
        >
          Begin Your Path
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
