import { motion } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';
import { Globe, BookOpen, Lightbulb, Leaf, Users, ShieldAlert } from 'lucide-react';

export function Vision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto z-10 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-24"
      >
        <motion.div variants={itemVariants} className="w-24 h-24 mb-10 opacity-70">
          <GeometricLotus />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-white mb-6">
          SATYA
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-serif text-gold-300 mb-8 tracking-wide">
          Building the Future Through Truth, Wisdom & Innovation
        </motion.h2>
        
        <motion.p variants={itemVariants} className="uppercase tracking-[0.3em] text-white/50 text-xs md:text-sm">
          A Civilization for Humanity
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="prose prose-invert prose-lg max-w-none text-white/80 font-light leading-relaxed space-y-8"
      >
        <p className="text-xl md:text-2xl font-serif text-white leading-relaxed text-center mb-16">
          The world has achieved extraordinary progress in science, technology, medicine, and communication. 
          Yet many of humanity's greatest challenges remain—environmental degradation, inequality, 
          misinformation, declining well-being, and a growing disconnect between knowledge and wisdom.
        </p>

        <div className="p-8 md:p-12 border border-gold-500/30 bg-transparent backdrop-blur-md rounded-3xl text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.1)_0%,transparent_100%)]" />
          <h3 className="text-2xl font-serif text-gold-400 mb-6 relative z-10">SATYA was founded on a simple belief:</h3>
          <p className="text-2xl md:text-4xl font-serif text-white relative z-10 leading-snug">
            "The future of humanity depends not only on what we build, but on who we become."
          </p>
        </div>

        <p>
          We envision a civilization where education inspires curiosity, technology serves humanity, 
          nature is respected, ethical leadership is valued, and knowledge is shared for the benefit of all.
        </p>
        <p>
          SATYA is an open framework for lifelong learning, responsible innovation, and collaborative progress.
        </p>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

        <h3 className="text-3xl font-serif text-gold-300 mb-6">Our Vision</h3>
        <p>
          To inspire individuals and communities to build a future where truth, wisdom, science, 
          technology, sustainability, and compassion work together to improve life for present and future generations.
        </p>

        <h3 className="text-3xl font-serif text-gold-300 mb-6 mt-16">Our Mission</h3>
        <p className="mb-6">SATYA exists to:</p>
        <ul className="space-y-4 list-none pl-0">
          {[
            "Empower lifelong learning.",
            "Encourage ethical innovation.",
            "Promote sustainable living.",
            "Support scientific thinking alongside human values.",
            "Preserve and explore valuable knowledge from both history and modern research.",
            "Foster collaboration across disciplines and cultures.",
            "Help individuals develop knowledge, character, and practical skills."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-gold-500 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

        <h3 className="text-3xl font-serif text-gold-300 mb-10 text-center">Our Philosophy</h3>
        <p className="text-center mb-12">Everything we create is guided by six principles:</p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: <Globe className="w-8 h-8" />, title: "Truth", desc: "Seek understanding through honesty, evidence, reflection, and continuous learning." },
            { icon: <BookOpen className="w-8 h-8" />, title: "Knowledge", desc: "Education should be accessible, practical, interdisciplinary, and available throughout life." },
            { icon: <Lightbulb className="w-8 h-8" />, title: "Innovation", desc: "Technology should solve real problems while respecting people, society, and the environment." },
            { icon: <Leaf className="w-8 h-8" />, title: "Sustainability", desc: "Human progress should strengthen, not diminish, the natural world." },
            { icon: <Users className="w-8 h-8" />, title: "Collaboration", desc: "Meaningful progress is built through cooperation across cultures, professions, and communities." },
            { icon: <ShieldAlert className="w-8 h-8" />, title: "Responsibility", desc: "Every innovation carries a responsibility to future generations." }
          ].map((principle, i) => (
            <div key={i} className="p-8 border border-white/10 rounded-2xl bg-transparent backdrop-blur-md hover:border-gold-500/30 transition-colors">
              <div className="text-gold-400 mb-6">{principle.icon}</div>
              <h4 className="text-xl font-serif text-white mb-3">{principle.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />

        <h3 className="text-3xl font-serif text-gold-300 mb-6">The SATYA Ecosystem</h3>
        <p className="mb-6">SATYA brings together multiple fields into one connected vision:</p>
        <div className="flex flex-wrap gap-3 mb-16">
          {[
            "Consciousness & Human Development",
            "Education & Research",
            "Science & Technology",
            "Artificial Intelligence",
            "Renewable Energy",
            "Agriculture & Food Systems",
            "Wellness & Healthcare",
            "Sustainable Architecture & Cities",
            "Entrepreneurship & Ethical Economy",
            "Governance & Leadership",
            "Culture & Heritage",
            "Global Collaboration"
          ].map((field, i) => (
            <span key={i} className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/70 bg-white/5">
              {field}
            </span>
          ))}
        </div>
        <p>Together, these areas form an ecosystem dedicated to creating practical solutions for a changing world.</p>

        <h3 className="text-3xl font-serif text-gold-300 mb-6 mt-16">What We Believe</h3>
        <ul className="space-y-4 list-none pl-0">
          {[
            "Knowledge becomes meaningful when applied with wisdom.",
            "Innovation has greater value when guided by ethics.",
            "Education should empower people to think critically and act responsibly.",
            "Sustainable development requires cooperation between science, technology, communities, and nature.",
            "Every individual has the potential to contribute to a better future."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="text-gold-500 mt-1">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="text-3xl font-serif text-gold-300 mb-6 mt-16">Our Commitment</h3>
        <p>
          SATYA is committed to creating educational resources, research, technology, and collaborative initiatives 
          that encourage learning, innovation, sustainability, and responsible leadership.
        </p>
        <p>
          We welcome students, educators, researchers, entrepreneurs, developers, creators, and lifelong learners 
          to participate in building solutions that benefit society.
        </p>

        <div className="my-24 text-center">
          <p className="uppercase tracking-[0.2em] text-gold-500 text-sm mb-8">Our Guiding Statement</p>
          <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed mb-16">
            "The future is not inherited—it is built. Every lesson learned, every idea explored, 
            every innovation created, and every act of responsibility contributes to the civilization 
            we leave for future generations."
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <h4 className="text-2xl font-serif text-white">Welcome to SATYA.</h4>
            <p className="text-gold-300 tracking-widest uppercase text-sm">
              Learn with curiosity. Build with integrity.<br className="md:hidden" /> Innovate with responsibility. Grow together.
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
