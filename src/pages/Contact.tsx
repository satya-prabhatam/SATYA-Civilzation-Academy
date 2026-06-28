import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GeometricLotus } from '../components/Lotus';
import { Mail, Phone, User, Linkedin, Instagram } from 'lucide-react';

export function Contact() {
  const [buttonText, setButtonText] = useState('Send Message');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText('Opening Mail Client...');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:shivapurefamily@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a temporary link to reliably trigger the mailto action
    const link = document.createElement('a');
    link.href = mailto;
    link.click();
    
    setTimeout(() => {
      setButtonText('Message Ready');
      setTimeout(() => setButtonText('Send Message'), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-6xl mx-auto z-10 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center mb-24"
      >
        <motion.div variants={itemVariants} className="w-24 h-24 mb-10 opacity-70">
          <GeometricLotus />
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-widest">
          Contact Satya
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 font-light max-w-2xl leading-relaxed">
          Reach out to us to learn more about our academy, partnerships, or to inquire about joining our civilization.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-serif text-gold-300 mb-8">Get in Touch</h2>
            <p className="text-white/70 font-light leading-relaxed mb-8">
              We welcome inquiries from individuals and organizations aligned with our vision of building a wise, sustainable, and future-ready civilization.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold-500/30 bg-transparent backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:border-gold-500/60 transition-colors">
                <User className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-serif mb-1">Akash Shivapure</h4>
                <p className="text-white/50 text-sm font-light">Founder and CEO, Satya Civilization Academy</p>
              </div>
            </div>

            <a href="tel:9975577966" className="flex items-start gap-6 group block w-full hover:bg-white/[0.02] p-4 -ml-4 rounded-xl transition-colors">
              <div className="w-12 h-12 rounded-full border border-gold-500/30 bg-transparent backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:border-gold-500/60 transition-colors">
                <Phone className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-serif mb-1">Phone</h4>
                <p className="text-white/50 text-sm font-light mb-1">Direct contact:</p>
                <span className="text-gold-300 group-hover:text-white transition-colors text-sm tracking-wide">9975577966</span>
              </div>
            </a>
            
            <a href="mailto:shivapurefamily@gmail.com" className="flex items-start gap-6 group block w-full hover:bg-white/[0.02] p-4 -ml-4 rounded-xl transition-colors">
              <div className="w-12 h-12 rounded-full border border-gold-500/30 bg-transparent backdrop-blur-sm flex items-center justify-center shrink-0 group-hover:border-gold-500/60 transition-colors">
                <Mail className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h4 className="text-white font-serif mb-1">Email</h4>
                <p className="text-white/50 text-sm font-light mb-1">For general questions and partnerships:</p>
                <span className="text-gold-300 group-hover:text-white transition-colors text-sm tracking-wide">shivapurefamily@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="pt-8 border-t border-white/10">
            <h4 className="text-white font-serif mb-6">CONNECT WITH AKASH</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/akash-s-853347152?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/akash_shivapure?igsh=MWQyNjVzOXhxN3Bscg==" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="p-8 md:p-10 rounded-3xl border border-white/10 bg-transparent backdrop-blur-md"
        >
          <form 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Name</label>
              <input name="name" type="text" className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="Your full name" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Email</label>
              <input name="email" type="email" className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="Your email address" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Subject</label>
              <input name="subject" type="text" className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="How can we help?" required />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full bg-transparent backdrop-blur-sm border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors resize-none" placeholder="Your message..." required></textarea>
            </div>
            <button 
              type="submit" 
              disabled={buttonText !== 'Send Message'}
              className="w-full px-8 py-4 bg-white text-black font-sans uppercase tracking-[0.2em] text-sm font-semibold hover:bg-gold-300 transition-colors duration-500 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {buttonText}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
