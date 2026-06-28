import { motion } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';

export function Charter({ onViewChange }: { onViewChange: (view: string) => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const principles = [
    { num: "I", name: "SATYA — Truth Above All", subtitle: "Truth is our highest authority.", desc: "We pursue truth through honesty, intellectual humility, evidence, observation, critical thinking, and open dialogue. We remain willing to revise our understanding when new knowledge emerges. Without truth, knowledge becomes opinion. Without truth, progress loses direction." },
    { num: "II", name: "DHARMA — Responsibility Before Rights", subtitle: "Every action creates consequences.", desc: "Freedom must be balanced by responsibility toward people, communities, future generations, and the natural world. Leadership is measured not by authority, but by accountability." },
    { num: "III", name: "VIDYĀ — Knowledge as a Shared Human Heritage", subtitle: "Knowledge should not be confined by privilege or geography.", desc: "Education is a lifelong journey that empowers individuals to think independently, solve problems creatively, and contribute meaningfully to society. Knowledge grows stronger when shared responsibly." },
    { num: "IV", name: "VIVEKA — Wisdom Guides Knowledge", subtitle: "Knowledge provides power. Wisdom determines how that power is used.", desc: "Every scientific discovery, technological innovation, and public policy should be evaluated not only by what it can achieve, but also by its ethical, social, and environmental consequences." },
    { num: "V", name: "AHIMSĀ — Respect for Life", subtitle: "Every form of life possesses inherent value.", desc: "We seek to reduce unnecessary harm through compassion, responsible innovation, and thoughtful decision-making. Human progress should never require the destruction of human dignity or ecological balance." },
    { num: "VI", name: "PRAKRITI — Harmony with Nature", subtitle: "Nature is not merely a resource to consume. It is the living system that sustains civilization itself.", desc: "SATYA promotes regenerative development, biodiversity, ecological restoration, renewable energy, responsible water management, and sustainable agriculture. Prosperity should restore ecosystems rather than diminish them." },
    { num: "VII", name: "YAJÑA — Contribution Creates Civilization", subtitle: "Civilizations are built through contribution.", desc: "Teaching, research, innovation, volunteering, mentorship, entrepreneurship, and public service are all acts of contribution. Every individual has something valuable to offer." },
    { num: "VIII", name: "SEVA — Leadership Through Service", subtitle: "True leadership begins with service.", desc: "Success finds its greatest meaning when used to improve the lives of others. The purpose of education is not only personal achievement but also meaningful contribution to society." },
    { num: "IX", name: "SAMATVA — Balance Creates Sustainability", subtitle: "Sustainable progress requires balance.", desc: "Balance between innovation and ethics, growth and conservation, individual freedom and collective responsibility, tradition and discovery, technology and humanity. Balance creates resilience." },
    { num: "X", name: "SAMANVAYA — Unity Through Integration", subtitle: "The world's greatest challenges cannot be solved by isolated disciplines.", desc: "SATYA promotes collaboration across science, engineering, medicine, education, agriculture, architecture, economics, public policy, the arts, and culture. Innovation accelerates when knowledge is connected." },
    { num: "XI", name: "SWĀDHYĀYA — Lifelong Self-Development", subtitle: "Learning does not end with graduation.", desc: "Every member of SATYA is encouraged to remain a lifelong learner, continually developing knowledge, skills, character, and understanding. Growth is a lifelong responsibility." },
    { num: "XII", name: "VASUDHAIVA KUTUMBAKAM — One Human Family", subtitle: "Humanity shares one planet, one environment, and one future.", desc: "Progress should strengthen cooperation across cultures, nations, and communities while respecting diversity and human dignity. Global challenges require global collaboration." },
    { num: "XIII", name: "SUSTAINABILITY BEFORE CONSUMPTION", subtitle: "Every resource carries responsibility.", desc: "We commit to responsible production, circular economy principles, renewable energy, efficient resource management, climate resilience, and long-term ecological stewardship. The needs of the present must never compromise the opportunities of future generations." },
    { num: "XIV", name: "ETHICAL INNOVATION", subtitle: "Technology must always remain accountable to humanity.", desc: "Artificial Intelligence, biotechnology, robotics, and future technologies should enhance human well-being, protect privacy, promote fairness, and strengthen democratic and ethical values. Innovation without ethics is incomplete." },
    { num: "XV", name: "OPEN KNOWLEDGE & COLLABORATION", subtitle: "The advancement of civilization depends upon the free exchange of ideas.", desc: "SATYA encourages interdisciplinary research, responsible open knowledge, transparent communication, constructive debate, and collaborative problem-solving. Learning is strongest when shared." },
    { num: "XVI", name: "LEGACY FOR FUTURE GENERATIONS", subtitle: "Every generation inherits the work of those before it.", desc: "Every generation also carries the responsibility to leave behind a world that is wiser, healthier, more sustainable, and more just. We do not build merely for today. We build for centuries." }
  ];

  return (
    <div className="pt-32 pb-32 px-6 max-w-5xl mx-auto z-10 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-24"
      >
        <motion.div variants={itemVariants} className="w-20 h-20 mb-8 opacity-70">
          <GeometricLotus />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-widest">
          The Satya Civilization Charter
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-serif text-gold-300 mb-12 tracking-wide leading-relaxed">
          A Declaration for Building a Wise, Sustainable, and Future-Ready Civilization
        </motion.h2>

        <motion.div variants={itemVariants} className="prose prose-invert prose-lg text-white/80 font-light leading-relaxed max-w-3xl">
          <p>
            Human civilization has reached remarkable heights in science, technology, communication, and innovation. 
            Yet, despite unprecedented progress, humanity continues to face challenges that technology alone cannot solve—environmental degradation, 
            social inequality, misinformation, conflict, declining well-being, and the misuse of knowledge.
          </p>
          <p className="text-xl font-serif text-white mt-8 mb-8 border-l-2 border-gold-500 pl-6 text-left">
            At SATYA, we believe that the true measure of a civilization is not its wealth, power, or technological advancement, 
            but the wisdom, integrity, and responsibility with which it uses them.
          </p>
          <p>
            Inspired by timeless philosophical traditions, including the Vedas and other sources of human knowledge, 
            while remaining grounded in scientific inquiry, ethical reasoning, and universal human values, 
            SATYA seeks to cultivate a civilization where learning, innovation, sustainability, and compassion reinforce one another.
          </p>
          <p>
            Our purpose is not to preserve the past unchanged, nor to pursue the future without reflection. 
            Our purpose is to learn from the best of humanity's heritage while creating solutions for the generations yet to come.
          </p>
        </motion.div>
      </motion.div>

      {/* The 16 Principles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-32"
      >
        <h3 className="text-3xl md:text-5xl font-serif text-center text-white mb-16 tracking-wide">The 16 Principles of SATYA</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
              className="p-8 border border-white/10 bg-transparent backdrop-blur-md rounded-2xl hover:border-gold-500/40 hover:bg-white/[0.02] transition-all duration-500"
            >
              <div className="text-gold-500/50 font-serif text-4xl mb-4 opacity-50">{p.num}</div>
              <h4 className="text-xl font-serif text-gold-300 mb-3">{p.name}</h4>
              <p className="text-white font-medium mb-4 italic">{p.subtitle}</p>
              <p className="text-white/60 font-light text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* The Oath, Vision, Promise */}
      <div className="max-w-4xl mx-auto space-y-24">
        {/* The SATYA Oath */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center p-12 border border-gold-500/30 bg-transparent backdrop-blur-md rounded-3xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.1)_0%,transparent_100%)]" />
          <h3 className="text-3xl font-serif text-white mb-8 relative z-10">The SATYA Oath</h3>
          <blockquote className="text-xl md:text-2xl font-serif text-gold-300 italic leading-relaxed relative z-10">
            "I commit to seeking truth with humility, learning with curiosity, acting with integrity, serving with compassion, and creating with responsibility. I will strive to use knowledge, science, and innovation to improve human life while protecting the natural world. I recognize that my actions shape not only my own future, but the future of generations yet to come. Through collaboration, ethical leadership, and continuous learning, I dedicate myself to building a civilization founded upon truth, wisdom, sustainability, and service."
          </blockquote>
        </motion.div>

        {/* Enduring Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-serif text-white mb-8">Our Enduring Vision</h3>
          <p className="text-xl md:text-3xl font-serif text-white/90 leading-relaxed font-light">
            We envision a civilization where every individual has the opportunity to learn, 
            every innovation serves humanity, every community thrives in harmony with nature, 
            and every generation leaves the world stronger than it found it.
          </p>
        </motion.div>

        {/* The SATYA Promise */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-serif text-white mb-12">The SATYA Promise</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-lg md:text-xl font-serif text-gold-400 mb-16 max-w-2xl mx-auto text-left">
            <p>We seek truth over ideology.</p>
            <p>Wisdom over information.</p>
            <p>Character over status.</p>
            <p>Service over self-interest.</p>
            <p>Stewardship over exploitation.</p>
            <p>Collaboration over division.</p>
            <p className="col-span-1 md:col-span-2 text-center mt-4">Long-term responsibility over short-term gain.</p>
            <p className="col-span-1 md:col-span-2 text-center">A flourishing civilization over isolated success.</p>
          </div>
          
          <p className="text-2xl font-serif text-white italic leading-relaxed max-w-3xl mx-auto border-t border-white/10 pt-12">
            "The greatest legacy we can leave is not merely the knowledge we accumulate, 
            but the wisdom, institutions, and actions that enable future generations to flourish."
          </p>
        </motion.div>

        {/* Action back to apply */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <button 
            onClick={() => onViewChange('apply')}
            className="px-12 py-5 bg-white text-black font-sans uppercase tracking-[0.25em] text-sm font-semibold hover:bg-gold-300 transition-colors duration-500"
          >
            Return to Application
          </button>
        </motion.div>
      </div>
    </div>
  );
}
