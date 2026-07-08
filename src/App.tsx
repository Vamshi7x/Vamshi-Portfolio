import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ArrowUp, Terminal } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme_v2');
    if (saved) return saved === 'dark';
    return false; // Default to light mode
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Force reset cache once to ensure light mode is default
  useEffect(() => {
    const hasReset = localStorage.getItem('theme_reset_v3');
    if (!hasReset) {
      setDarkMode(false);
      localStorage.setItem('theme_v2', 'light');
      localStorage.setItem('theme_reset_v3', 'true');
    }
  }, []);

  // Sync theme class
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme_v2', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme_v2', 'light');
    }
  }, [darkMode]);

  // Monitor scroll for "Back to Top" button
  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  // Scroll reveal Intersection Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`min-h-screen bg-bg-light dark:bg-bg-dark text-slate-800 dark:text-gray-100 transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`}>
      
      {/* Navigation Header */}
      <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Main Sections */}
      <main>
        <Hero />
        
        <div className="reveal">
          <About />
        </div>

        <div className="reveal">
          <Skills />
        </div>

        <div className="reveal">
          <Projects />
        </div>

        <div className="reveal">
          <Resume />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      {/* Technical Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-bg-dark py-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="tech-font text-sm font-bold text-slate-900 dark:text-white">
                vamshi<span className="text-primary">.dev</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-500 font-light text-center">
              &copy; {new Date().getFullYear()} Vamshi Kummari. Built with React, TypeScript, and Tailwind CSS. All rights reserved.
            </p>

            <div className="text-xs text-slate-400 dark:text-slate-500 tech-font">
              status: <span className="text-emerald-500">compiled_successfully</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Float Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-350 shadow-lg shadow-primary/20 z-40 border border-white/10 animate-bounce"
          aria-label="Back to Top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;
