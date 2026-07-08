import { useState, useEffect } from 'react';
import { FileText, ArrowRight, Github, Linkedin, Mail, Cpu } from 'lucide-react';

export default function Hero() {
  const roles = ['Full Stack AI Developer', 'GenAI Engineer', 'AI/ML Engineer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: any;
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      timer = setTimeout(handleType, isDeleting ? 40 : 100);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Grids & Radial Glows */}
      <div className="absolute inset-0 bg-bg-light dark:bg-bg-dark transition-colors duration-300 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] glow-primary animate-pulse-glow z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] glow-secondary animate-pulse-glow z-0 pointer-events-none" />
      
      {/* Dot matrix background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Details (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Seeking Badge: Light green bg, green border, dark green text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10b981] bg-[#ecfdf5] text-[#065f46] text-xs font-bold uppercase tracking-wider tech-font mx-auto lg:mx-0 shadow-sm shadow-emerald-100/50">
              <Cpu className="h-3 w-3 animate-spin text-[#059669]" style={{ animationDuration: '3s' }} />
              Open to Remote, Hybrid & Relocation
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#f97316]">Vamshi Kummari</span>
            </h1>

            {/* Static primary title: Solid Blue Accent */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2563eb] dark:text-blue-450">
              I build as an AI/ML Engineer
            </h2>

            {/* Small typewriter rotating in Orange */}
            <div className="h-6 text-sm sm:text-base font-semibold tech-font text-slate-500 dark:text-gray-400 flex items-center justify-center lg:justify-start gap-1">
              <span>Focus Area:</span>
              <span className="text-primary cursor-blink font-bold">{currentText}</span>
            </div>

            <p className="text-lg text-slate-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Specialized in engineering robust **multi-agent LLM systems** (LangGraph/LCEL) and training production-grade classical ML products. Focused on evaluation rigor and system latency optimizations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={() => handleScroll('#projects')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#f97316] hover:bg-[#ea580c] text-white font-bold transition-all duration-200 gap-2 shadow-lg shadow-orange-100/40 cursor-pointer"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('#resume');
                }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/5 bg-white dark:bg-slate-900 font-bold transition-all duration-200 gap-2 tech-font cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a]/5 bg-white dark:bg-slate-900 font-bold transition-all duration-200 tech-font cursor-pointer"
              >
                Contact Me
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex gap-4 items-center justify-center lg:justify-start pt-4 text-slate-600 dark:text-gray-400">
              <a href="https://github.com/Vamshi7x" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/vamshikummari7x" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:kummarivamshi095@gmail.com" className="hover:text-[#2563eb] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Interactive Agent Flow Visual (Right 5 Columns) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Frame: Light blue-gray background with soft borders */}
            <div className="w-full max-w-[420px] aspect-square rounded-2xl border border-[#e5e7eb] dark:border-gray-800 bg-[#f8fafc] dark:bg-gray-900/50 backdrop-blur-sm p-6 relative overflow-hidden shadow-md">
              
              {/* Outer light glow */}
              <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />

              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-[#e5e7eb] dark:border-gray-800 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-slate-500 dark:text-gray-400 tech-font">researchmind_flow.py</span>
              </div>

              {/* Animated Graph representation */}
              <div className="h-64 flex flex-col justify-between items-center relative">
                
                {/* Connecting Lines (Soft blue-gray) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  {/* Lines between nodes */}
                  {/* Router to Research */}
                  <line x1="50%" y1="12%" x2="25%" y2="40%" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Router to Direct Answer */}
                  <line x1="50%" y1="12%" x2="75%" y2="40%" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Research to Orchestrator */}
                  <line x1="25%" y1="40%" x2="50%" y2="65%" stroke="#94a3b8" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="4 4" />
                  {/* Orchestrator to Reducer */}
                  <line x1="50%" y1="65%" x2="50%" y2="88%" stroke="#2563eb" strokeOpacity="0.5" strokeWidth="2" className="animate-pulse" />
                  
                  {/* Pulse running along line Router -> Research */}
                  <circle r="4" fill="#f97316" className="animate-ping">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 175 30 L 88 100" />
                  </circle>
                  <circle r="4" fill="#2563eb" className="animate-ping">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M 88 100 L 175 165" />
                  </circle>
                </svg>

                {/* Node 1: Router - Blue fill, white text */}
                <div className="z-10 bg-[#2563eb] text-white border border-[#2563eb]/20 px-3 py-1 rounded text-xs tech-font font-bold shadow-sm">
                  Router
                </div>

                {/* Middle row: Research & Direct */}
                <div className="w-full flex justify-between px-4 z-10">
                  <div className="bg-white dark:bg-slate-900 border border-[#2563eb]/30 text-slate-800 dark:text-gray-300 px-3 py-1.5 rounded text-xs tech-font flex items-center gap-1.5 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
                    Web Research
                  </div>
                  <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-500 dark:text-gray-400 px-3 py-1.5 rounded text-xs tech-font flex items-center gap-1.5 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-slate-400" />
                    Fast Cache
                  </div>
                </div>

                {/* Node 3: Orchestrator - Orange fill, white text */}
                <div className="z-10 bg-[#f97316] text-white px-4 py-1.5 rounded text-xs tech-font font-bold shadow-md shadow-orange-100/35">
                  Orchestrator
                </div>

                {/* Node 4: Reducer - Blue fill, white text */}
                <div className="z-10 bg-[#2563eb] border border-[#2563eb]/20 text-white px-3 py-1 rounded text-xs tech-font font-bold shadow-sm">
                  Reducer (Final Output)
                </div>
              </div>

              {/* Status Display footer */}
              <div className="mt-6 border-t border-[#e5e7eb] dark:border-gray-800 pt-4 flex justify-between items-center text-xs">
                <span className="text-[#059669] dark:text-emerald-500 tech-font flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  active_agent_session
                </span>
                <span className="text-slate-550 dark:text-gray-500 tech-font">Latency: 230ms</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
