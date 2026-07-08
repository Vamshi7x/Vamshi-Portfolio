import { FileDown, GraduationCap, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

export default function Resume() {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering (Data Science)",
      institution: "Swami Vivekananda Institute of Technology",
      location: "Hyderabad, Telangana, India",
      duration: "2021 – 2025",
      details: [
        "Focused on data structures, algorithms, databases, classical machine learning, neural networks, and generative AI systems.",
        "Hands-on project work in predictive models, NLP classifiers, and LLM orchestration (LangChain & LangGraph)."
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 relative bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Education & <span className="text-primary">Resume</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Preview my academic timeline and download my formal resume.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Education Timeline & Career Profile (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary dark:text-blue-400 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" />
                Education
              </h3>
              
              <div className="relative pl-6 border-l border-secondary/15 dark:border-gray-800 space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline pointer */}
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-white dark:bg-bg-dark" />
                    
                    <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <h4 className="text-lg font-bold text-secondary dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-primary/10 text-primary tech-font self-start sm:self-center">
                          <Calendar className="h-3 w-3" />
                          {edu.duration}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1">
                        {edu.institution}
                      </p>
                      
                      <p className="text-xs text-slate-500 dark:text-gray-500 flex items-center gap-1 mb-4">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </p>

                      <ul className="list-disc pl-4 space-y-2">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-750 dark:text-gray-400 font-light leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Profile Summary Card */}
            <div className="p-6 rounded-2xl border border-secondary/15 dark:border-gray-800 bg-secondary/5 dark:bg-slate-950/10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 tech-font mb-3 flex items-center gap-1.5">
                <Award className="h-4 w-4 text-primary animate-pulse" />
                Key Qualifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-gray-300">Languages:</span>
                  <p className="text-slate-500 dark:text-gray-400 tech-font">Python, SQL, JavaScript (TS)</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-gray-300">Frameworks & SDKs:</span>
                  <p className="text-slate-500 dark:text-gray-400 tech-font">LangChain, LangGraph, FastAPI, Streamlit</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-gray-300">Databases:</span>
                  <p className="text-slate-500 dark:text-gray-400 tech-font">Qdrant Vector DB, PostgreSQL, SQLite</p>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-700 dark:text-gray-300">Core Machine Learning:</span>
                  <p className="text-slate-500 dark:text-gray-400 tech-font">Random Forest, XGBoost, PyTorch, CNN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: PDF Preview & Download (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col h-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 shadow-xl relative overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3 mb-4">
                <span className="text-xs text-slate-500 dark:text-gray-400 tech-font">resume_vamshi.pdf</span>
                <a
                  href="/resume.pdf"
                  download="Vamshi_Kummari_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary hover:bg-[#ea580c] text-white text-xs font-bold shadow-md shadow-orange-100/40 transition-colors tech-font"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              </div>

              {/* PDF Preview Frame (Uses iframe, links to /resume.pdf) */}
              <div className="flex-grow bg-slate-100 dark:bg-slate-950 rounded-xl min-h-[300px] lg:min-h-[400px] overflow-hidden relative border border-gray-200 dark:border-gray-850 flex items-center justify-center">
                <iframe
                  src="/resume.pdf#view=FitH"
                  className="w-full h-full border-none"
                  title="Vamshi Kummari Resume PDF Preview"
                >
                  <div className="text-center p-6 text-sm text-slate-600 dark:text-gray-400">
                    <p className="mb-3">PDF preview is not supported by your browser.</p>
                    <a
                      href="/resume.pdf"
                      download="Vamshi_Kummari_Resume.pdf"
                      className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
                    >
                      Download PDF to view offline
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </iframe>
              </div>

              {/* Note helper */}
              <p className="mt-4 text-[10px] text-center text-slate-400 dark:text-slate-500">
                You can download the full PDF to view complete bulleted summaries of implementations, model details, and evaluations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
