import { motion } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';
import { Globe, BookOpen, Users, Lightbulb, Rocket, Leaf, Target, HandHeart, CheckCircle2 } from 'lucide-react';

export function Join({ onViewChange }: { onViewChange: (view: string) => void }) {
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
    <div className="pt-32 pb-32 px-6 max-w-5xl mx-auto z-10 relative">
      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-32"
      >
        <motion.div variants={itemVariants} className="w-20 h-20 mb-8 opacity-70">
          <GeometricLotus />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight">
          Join <span className="text-gradient">SATYA</span>
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-serif text-white/90 mb-8 leading-snug max-w-3xl">
          Be Part of Something Bigger Than Yourself
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
          Every generation inherits a world shaped by the choices of those before it. 
          Every generation also has the opportunity—and the responsibility—to improve it.
        </motion.p>
      </motion.div>

      {/* Intro Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="prose prose-invert prose-lg max-w-3xl mx-auto text-center font-light leading-relaxed mb-32 space-y-8 text-white/80"
      >
        <p>
          SATYA is an invitation to people who believe that knowledge, innovation, compassion, 
          and integrity can help build a better future. Whether you are a student, educator, 
          researcher, entrepreneur, engineer, artist, farmer, developer, healthcare professional, 
          or simply someone who wants to contribute, there is a place for you here.
        </p>
        <p className="text-xl md:text-2xl font-serif text-gold-300">
          We believe meaningful progress comes from people with diverse skills working toward shared goals.
        </p>
      </motion.div>

      {/* Why Join SATYA? */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <h3 className="text-3xl md:text-5xl font-serif text-center text-white mb-16">Why Join SATYA?</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Globe className="w-8 h-8" />, title: "Contribute to a Shared Vision", desc: "Help develop ideas, projects, and educational resources that aim to benefit individuals, communities, and future generations." },
            { icon: <BookOpen className="w-8 h-8" />, title: "Learn Without Limits", desc: "Explore knowledge across disciplines—from science and technology to sustainability, history, education, wellness, and more." },
            { icon: <Users className="w-8 h-8" />, title: "Collaborate with Purpose", desc: "Work alongside people who value curiosity, creativity, ethical thinking, and practical problem-solving." },
            { icon: <Lightbulb className="w-8 h-8" />, title: "Turn Ideas into Action", desc: "Contribute to real-world initiatives, research, software, educational content, and community projects." },
            { icon: <Rocket className="w-8 h-8" />, title: "Build Skills That Matter", desc: "Develop technical, creative, leadership, communication, and research skills through meaningful work." },
            { icon: <Leaf className="w-8 h-8" />, title: "Create Lasting Impact", desc: "Your contributions can help shape resources and initiatives that continue to educate and inspire others." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="p-8 border border-white/10 bg-transparent backdrop-blur-md hover:bg-white/[0.02] hover:border-gold-500/40 transition-all duration-500 rounded-2xl group"
            >
              <div className="text-gold-500/50 group-hover:text-gold-400 transition-colors mb-6">{item.icon}</div>
              <h4 className="text-xl font-serif text-white mb-4 group-hover:text-gold-300 transition-colors">{item.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Two Column Section: Who Can Join & What We Value */}
      <div className="grid md:grid-cols-2 gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-10 md:p-12 rounded-3xl border border-gold-500/20 bg-transparent backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-8 h-8 text-gold-400" />
            <h3 className="text-3xl font-serif text-white">Who Can Join?</h3>
          </div>
          <p className="text-white/60 mb-8 font-light">SATYA welcomes people from all backgrounds, including:</p>
          <ul className="space-y-4">
            {[
              "Students and lifelong learners",
              "Teachers and educators",
              "Researchers and scientists",
              "Software developers and AI engineers",
              "Entrepreneurs and innovators",
              "Designers and architects",
              "Environmental and sustainability advocates",
              "Healthcare and wellness professionals",
              "Farmers and agricultural experts",
              "Writers, artists, and creators",
              "Volunteers and community leaders"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/80 text-sm">
                <span className="text-gold-500/50 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-gold-300/80 italic text-sm">
            What matters most is a willingness to learn, collaborate, and contribute responsibly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-10 md:p-12 rounded-3xl border border-gold-500/20 bg-transparent backdrop-blur-md"
        >
          <div className="flex items-center gap-4 mb-8">
            <HandHeart className="w-8 h-8 text-gold-400" />
            <h3 className="text-3xl font-serif text-white">What We Value</h3>
          </div>
          <p className="text-white/60 mb-8 font-light">We look for people who strive to:</p>
          <ul className="space-y-6">
            {[
              "Seek truth with curiosity and humility.",
              "Respect evidence, critical thinking, and open dialogue.",
              "Use knowledge responsibly.",
              "Care for people and the environment.",
              "Collaborate with integrity and mutual respect.",
              "Keep learning and improving."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white/80 text-base">
                <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Together We Can */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="text-center mb-32 max-w-4xl mx-auto"
      >
        <h3 className="text-4xl font-serif text-gold-300 mb-8">Together We Can</h3>
        <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
          Together, we can create educational resources, build innovative technologies, 
          promote sustainable practices, support communities, and inspire future generations.
        </p>
        <div className="p-8 md:p-12 border-y border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full" />
          <p className="text-2xl md:text-4xl font-serif text-white relative z-10 leading-snug">
            No single person builds a civilization.
            <br /><br />
            It is built by countless individuals who choose to learn, create, and serve together.
          </p>
        </div>
      </motion.div>

      {/* Final Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-4xl mx-auto pb-16"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-white mb-12">Join the Journey</h2>
        
        <blockquote className="text-lg md:text-2xl font-serif text-white/80 italic leading-relaxed mb-16 border-l-4 border-gold-500 pl-8 md:pl-12 text-left relative">
          <span className="text-6xl text-gold-500/20 absolute -top-4 -left-2">"</span>
          The future is shaped by those who choose to participate rather than observe. 
          If you believe knowledge should serve humanity, innovation should be guided by responsibility, 
          and progress should include everyone, then SATYA is a place where your ideas, skills, and passion can make a difference.
        </blockquote>

        <p className="text-xl text-gold-400 font-medium tracking-wide mb-16 px-4">
          Join us in building a future rooted in truth, driven by knowledge, and strengthened through collaboration.
        </p>

        <button 
          onClick={() => onViewChange('apply')}
          className="px-12 py-5 bg-white text-black font-sans uppercase tracking-[0.25em] text-sm font-semibold hover:bg-gold-300 transition-colors duration-500"
        >
          Apply to Join
        </button>
      </motion.div>

    </div>
  );
}
