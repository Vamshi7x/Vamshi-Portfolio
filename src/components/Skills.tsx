import { Cpu, TrendingUp, Brain, Server, Monitor, Wrench, ChevronRight } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "GenAI & LLM Engineering",
      icon: <Cpu className="h-6 w-6 text-cyan-650 dark:text-cyan-400" />,
      color: "border-cyan-100 dark:border-cyan-950/30 bg-cyan-50/15 dark:bg-cyan-950/5 hover:border-cyan-300 dark:hover:border-cyan-800 text-cyan-800 dark:text-cyan-400",
      skills: [
        "LangChain", "LangGraph", "RAG Pipelines", "RAGAS (Evaluation)",
        "Groq Inference", "Mistral", "Tavily Search API", "Prompt Engineering"
      ]
    },
    {
      title: "Classical Machine Learning",
      icon: <TrendingUp className="h-6 w-6 text-indigo-650 dark:text-indigo-400" />,
      color: "border-indigo-100 dark:border-indigo-950/30 bg-indigo-50/15 dark:bg-indigo-950/5 hover:border-indigo-300 dark:hover:border-indigo-800 text-indigo-800 dark:text-indigo-400",
      skills: [
        "scikit-learn", "Random Forest", "XGBoost", "LightGBM",
        "GridSearchCV", "SMOTE (Imbalance)", "Feature Engineering", "Pandas & NumPy"
      ]
    },
    {
      title: "Deep Learning & NLP",
      icon: <Brain className="h-6 w-6 text-purple-650 dark:text-purple-400" />,
      color: "border-purple-100 dark:border-purple-950/30 bg-purple-50/15 dark:bg-purple-950/5 hover:border-purple-300 dark:hover:border-purple-800 text-purple-800 dark:text-purple-400",
      skills: [
        "PyTorch", "TensorFlow", "CNNs", "RNNs / LSTMs",
        "Transformers", "BERT", "Word Embeddings", "Transfer Learning"
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Server className="h-6 w-6 text-emerald-650 dark:text-emerald-400" />,
      color: "border-emerald-100 dark:border-emerald-950/30 bg-emerald-50/15 dark:bg-emerald-950/5 hover:border-emerald-300 dark:hover:border-emerald-800 text-emerald-800 dark:text-emerald-400",
      skills: [
        "Python", "FastAPI", "Docker", "SQL / PostgreSQL",
        "Qdrant (Vector DB)", "HuggingFace Embeddings", "RESTful APIs", "SSE Streaming"
      ]
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="h-6 w-6 text-amber-650 dark:text-amber-400" />,
      color: "border-amber-100 dark:border-amber-950/30 bg-amber-50/15 dark:bg-amber-950/5 hover:border-amber-300 dark:hover:border-amber-800 text-amber-850 dark:text-amber-400",
      skills: [
        "React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3",
        "Streamlit", "Leaflet.js", "Chart.js", "State Management"
      ]
    },
    {
      title: "Developer Tools & Power BI",
      icon: <Wrench className="h-6 w-6 text-rose-650 dark:text-rose-450" />,
      color: "border-rose-100 dark:border-rose-950/30 bg-rose-50/15 dark:bg-rose-950/5 hover:border-rose-300 dark:hover:border-rose-800 text-rose-800 dark:text-rose-400",
      skills: [
        "Git & GitHub", "VS Code", "uv (Python Package Manager)", "Power BI",
        "Excel Analytics", "Render Cloud Deployment", "Vercel / Netlify", "Linux / CLI"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      {/* Background ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] glow-primary animate-pulse-glow z-0 pointer-events-none opacity-50" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] glow-secondary animate-pulse-glow z-0 pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            A comprehensive overview of libraries, frameworks, databases, and architectural tools in my developer stack.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-gray-200 dark:border-gray-850 transition-all duration-300 bg-white dark:bg-slate-900/40 backdrop-blur-sm shadow-md hover:shadow-xl hover:border-[#10b981]/30 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-gray-150 dark:border-gray-800 pb-4 mb-4">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-secondary dark:text-blue-400">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs rounded border border-gray-200 dark:border-gray-800 bg-slate-50/50 dark:bg-slate-950/80 text-slate-700 dark:text-gray-300 tech-font flex items-center gap-1 hover:text-primary dark:hover:text-primary hover:border-primary/30 transition-colors"
                    >
                      <ChevronRight className="h-3 w-3 text-slate-400 dark:text-slate-600" />
                      {skill}
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
