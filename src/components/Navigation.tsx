import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, LogIn, UserCircle, LogOut } from 'lucide-react';
import { auth, signInWithPopup, GoogleAuthProvider } from '../lib/firebase';

export function Navigation({ currentView, onViewChange }: { currentView: string, onViewChange: (view: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleNavClick = (view: string) => {
    onViewChange(view);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif font-bold text-xl tracking-widest text-white cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          SATYA
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-white/70"
        >
          <button onClick={() => handleNavClick('home')} className={`hover:text-white transition-colors duration-300 ${currentView === 'home' ? 'text-gold-400' : ''}`}>Academy</button>
          <button onClick={() => handleNavClick('vision')} className={`hover:text-white transition-colors duration-300 ${currentView === 'vision' ? 'text-gold-400' : ''}`}>Vision</button>
          <button onClick={() => handleNavClick('community')} className={`hover:text-white transition-colors duration-300 ${currentView === 'community' || currentView === 'space' ? 'text-gold-400' : ''}`}>Community</button>
          <button onClick={() => handleNavClick('contact')} className={`hover:text-white transition-colors duration-300 ${currentView === 'contact' ? 'text-gold-400' : ''}`}>Contact</button>
          
          <div className="w-px h-4 bg-white/20 mx-2" />
          
          {user ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={() => handleNavClick('space')}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300 text-gold-400"
              >
                <UserCircle className="w-4 h-4" />
                <span className="max-w-[100px] truncate">{user.displayName || 'Profile'}</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="hover:text-white transition-colors duration-300 text-white/50"
                title="Sign Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button 
              onClick={handleSignIn}
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </button>
          )}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="md:hidden text-white/70 hover:text-white transition-colors p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-xl md:hidden pt-24 pb-8 px-6 flex flex-col gap-6 text-lg uppercase tracking-widest text-white/70"
          >
            <button onClick={() => handleNavClick('home')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'home' ? 'text-gold-400' : ''}`}>Academy</button>
            <button onClick={() => handleNavClick('vision')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'vision' ? 'text-gold-400' : ''}`}>Vision</button>
            <button onClick={() => handleNavClick('community')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'community' || currentView === 'space' ? 'text-gold-400' : ''}`}>Community</button>
            <button onClick={() => handleNavClick('contact')} className={`text-left hover:text-white transition-colors duration-300 ${currentView === 'contact' ? 'text-gold-400' : ''}`}>Contact</button>
            
            <div className="w-12 h-px bg-white/20 my-2" />
            
            {user ? (
              <>
                <button onClick={() => handleNavClick('space')} className="text-left text-gold-400 hover:text-gold-300 flex items-center gap-3">
                  <UserCircle className="w-5 h-5" /> Profile & Space
                </button>
                <button onClick={handleSignOut} className="text-left text-white/50 hover:text-white flex items-center gap-3 mt-4 text-sm">
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <button onClick={handleSignIn} className="text-left hover:text-white transition-colors duration-300 flex items-center gap-3">
                <LogIn className="w-5 h-5" /> Sign In
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
