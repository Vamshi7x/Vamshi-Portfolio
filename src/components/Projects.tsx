import { Github, ExternalLink, Activity, Layers, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "ResearchMind AI",
      subtitle: "Multi-Agent Research Assistant",
      desc: "A multi-agent research platform that processes complex user queries into detailed, citation-backed reports using a parallelized agent workflow.",
      highlights: [
        "Built a 5-stage LangGraph pipeline (Router → Research → Orchestrator → Workers → Reducer) supporting fan-out parallel section drafting.",
        "Integrated the Tavily API for live web grounding to minimize hallucinations.",
        "Implemented real-time token streaming using FastAPI SSE and a React ReadableStream reader.",
        "Built an LLM-as-judge evaluation harness (Groq Llama-3.3-70B, 24 test queries) which measuring faithfulness, citation accuracy, and hallucination risk."
      ],
      stats: [
        { label: "Pipeline Stages", value: "5-Stage Flow" },
        { label: "Eval Suite", value: "24 Queries" },
        { label: "Primary Model", value: "Llama-3.3-70B" }
      ],
      tech: ["LangGraph", "FastAPI", "React", "TypeScript", "SSE Streaming", "Mistral", "Groq", "Tavily API", "LLM-as-Judge"],
      github: "https://github.com/Vamshi7x", // Default or mock
      live: "https://researchmind-np15.onrender.com",
      icon: <Layers className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "AI Mock Interviewer",
      subtitle: "Adaptive Interview Simulation Platform",
      desc: "An intelligent simulation platform that generates custom interview scenarios based on topic, job role, or resume content.",
      highlights: [
        "Built a 4-chain LCEL pipeline (question generation → evaluation → ideal answer → final report) covering 14+ technical topics.",
        "Created an adaptive dialogue engine with a server-side subtopic cursor to eliminate repetition and guide flow.",
        "Supported MCQ, written, and voice-based formats with Pydantic structured output validation.",
        "Added downloadable custom PDF performance reports featuring Chart.js score trends."
      ],
      stats: [
        { label: "LCEL Pipeline", value: "4-Chain" },
        { label: "Technical Topics", value: "14+ Topics" },
        { label: "Containers", value: "Dockerized" }
      ],
      tech: ["LangChain (LCEL)", "FastAPI", "Groq", "JavaScript", "Docker", "Render", "Vercel", "Chart.js"],
      github: "https://github.com/Vamshi7x",
      live: "https://mock-interview-7bui.onrender.com",
      icon: <Cpu className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "LandSense AI",
      subtitle: "Land Price Prediction System",
      desc: "A data-driven machine learning system trained to predict properties value across multiple states and localities in India.",
      highlights: [
        "Trained models on a custom dataset of 65,000+ property records across 367 localities in 14 Indian states.",
        "Engineered 27 features including infrastructure quality, zoning limits, and historical growth indexes.",
        "Optimized Random Forest, XGBoost, and LightGBM models using GridSearchCV tuning.",
        "Deployed an interactive Streamlit application integrated with Leaflet.js geo-mappings using Git LFS to serve the 235MB model file."
      ],
      stats: [
        { label: "Prediction R²", value: "93% R²" },
        { label: "Dataset Size", value: "65,000+ Recs" },
        { label: "Localities", value: "367 Areas" }
      ],
      tech: ["Python", "scikit-learn", "Random Forest", "XGBoost", "LightGBM", "Streamlit", "Leaflet.js", "Git LFS"],
      github: "https://github.com/Vamshi7x",
      live: "https://landsense-ai.streamlit.app",
      icon: <Activity className="h-6 w-6 text-emerald-400" />
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] glow-secondary animate-pulse-glow z-0 pointer-events-none opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] glow-primary animate-pulse-glow z-0 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Selected engineering solutions covering multi-agent platforms, custom RAG frameworks, and trained machine learning models.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:border-[#10b981]/45 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div>
                {/* Header (Icon + Title + Subtitle) */}
                <div className="flex items-start justify-between border-b border-gray-150 dark:border-gray-800 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary dark:text-blue-450 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-550 dark:text-gray-400 tech-font">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary text-slate-600 dark:text-gray-400 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary text-slate-600 dark:text-gray-400 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        className="p-1.5 rounded-lg border border-gray-200 dark:border-gray-800 text-slate-300 dark:text-slate-700 cursor-not-allowed"
                        title="Local Development Only"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-700 dark:text-gray-305 font-light mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Key Highlights list */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-405 dark:text-slate-550 tech-font">
                    Key Implementations
                  </h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer details (Stat grid + Tech tags) */}
              <div>
                {/* Stats Callouts */}
                <div className="grid grid-cols-3 gap-2 border-t border-gray-150 dark:border-gray-800 pt-4 mb-4">
                  {project.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="text-center p-2 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-gray-150 dark:border-gray-800/80">
                      <div className="text-xs sm:text-sm font-bold text-primary dark:text-orange-400 tech-font">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-slate-550 dark:text-slate-500 tech-font uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-gray-300 tech-font"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
