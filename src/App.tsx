import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Vision } from './pages/Vision';
import { Join } from './pages/Join';
import { Apply } from './pages/Apply';
import { Charter } from './pages/Charter';
import { Community } from './pages/Community';
import { Space } from './pages/Space';
import { Curriculum } from './pages/Curriculum';
import { RippleEffect } from './components/RippleEffect';
import { HeartbeatEffect } from './components/HeartbeatEffect';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress globally for parallax layers
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 20, 
    stiffness: 70, 
    mass: 0.5 
  });

  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-void font-sans text-white overflow-hidden selection:bg-gold-500/30">
      <motion.div style={{ y: bgY }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.08)_0%,transparent_60%)]" />
        <div className="stars absolute inset-0" />
      </motion.div>

      <Navigation currentView={currentView} onViewChange={setCurrentView} />

      <RippleEffect />
      <HeartbeatEffect />

      <main className="relative z-10">
        {currentView === 'home' && <Home onViewChange={setCurrentView} />}
        {currentView === 'vision' && <Vision />}
        {currentView === 'join' && <Join onViewChange={setCurrentView} />}
        {currentView === 'apply' && <Apply onViewChange={setCurrentView} />}
        {currentView === 'charter' && <Charter onViewChange={setCurrentView} />}
        {currentView === 'community' && <Community onViewChange={setCurrentView} />}
        {currentView === 'space' && <Space />}
        {currentView === 'curriculum' && <Curriculum onViewChange={setCurrentView} />}
      </main>
    </div>
  );
}
