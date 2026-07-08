import { TrendingUp, Database, Brain, Workflow, ShieldAlert } from 'lucide-react';

export default function About() {
  const journeyTimeline = [
    {
      phase: "01",
      title: "Data Analytics (Foundation)",
      skills: "SQL, Power BI, Advanced Excel",
      desc: "Discovered the power of clean data. Built reporting systems and analyzed business metrics to uncover core trends.",
      icon: <Database className="h-5 w-5 text-gray-400" />
    },
    {
      phase: "02",
      title: "Classical Machine Learning",
      skills: "Scikit-Learn, Random Forest, XGBoost, GridSearchCV",
      desc: "Moved from reporting to predicting. Built robust classification and regression pipelines, tuning features for performance.",
      icon: <TrendingUp className="h-5 w-5 text-cyan-400" />
    },
    {
      phase: "03",
      title: "Deep Learning & NLP",
      skills: "PyTorch, Transformers, CNNs, LSTMs, BERT",
      desc: "Dived into neural architectures, experimenting with sequence models, image representations, and basic language representation.",
      icon: <Brain className="h-5 w-5 text-indigo-400" />
    },
    {
      phase: "04",
      title: "Generative AI Engineering (Current)",
      skills: "LangGraph, LangChain, RAG, Qdrant, RAGAS (LLM-as-judge)",
      desc: "Engineering complex agentic systems. Orchestrating multi-agent chains, streaming responses, and evaluating outputs systematically.",
      icon: <Workflow className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            A developer who bridges data insights, classical statistical models, and state-of-the-art Generative AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Text (Left 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-secondary dark:text-blue-450">
              From Data to Decision-Making Agents
            </h3>
            
            <p className="text-slate-705 dark:text-gray-305 leading-relaxed">
              My journey into artificial intelligence didn't start with raw abstractions, but with real data. I began by digging into business records using <strong className="text-slate-900 dark:text-white">SQL, Excel, and Power BI</strong>. That foundation taught me to appreciate structured data pipelines, data quality, and data hygiene.
            </p>
            
            <p className="text-slate-705 dark:text-gray-305 leading-relaxed">
              To predict trends instead of just analyzing them, I transitioned to classical Machine Learning models. I learned how to balance model capacity, handle class imbalance, and optimize hyperparameters. Over time, this natural curiosity pulled me into deep learning and natural language processing.
            </p>
            
            <p className="text-slate-705 dark:text-gray-305 leading-relaxed">
              Today, I focus heavily on <strong className="text-slate-900 dark:text-white">Generative AI Engineering</strong>. Rather than treating LLMs as simple black boxes, I design and run multi-agent workflows, build advanced RAG architectures, and implement systematic **LLM-as-judge evaluation harnesses** to guarantee production quality.
            </p>

            {/* Glowing Active Status Badge: Green */}
            <div className="p-4 rounded-xl border border-[#10b981]/25 bg-[#ecfdf5]/40 dark:bg-emerald-950/10 flex items-start gap-3 mt-4">
              <ShieldAlert className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-gray-200">Current Focus: Production Rigor</h4>
                <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                  Actively engineering agent systems that streaming tokens, handle fallbacks dynamically, and pass strict hallucination and citation fidelity benchmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Visual (Right 7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h4 className="text-lg font-bold tech-font text-slate-850 dark:text-gray-300 border-b border-gray-200 dark:border-gray-800 pb-2">
              My Technical Evolution
            </h4>
            
            <div className="relative pl-6 sm:pl-8 border-l border-secondary/20 dark:border-gray-850 space-y-8">
              {journeyTimeline.map((item, index) => (
                <div key={index} className="relative">
                  
                  {/* Timeline dot */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full border border-secondary/15 dark:border-gray-800 bg-white dark:bg-slate-900 text-xs shadow-sm shadow-indigo-50/50">
                    {item.icon}
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-bold tech-font text-primary">{item.phase}</span>
                    <h5 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {item.title}
                    </h5>
                    <div className="inline-block px-2 py-0.5 text-xs rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-slate-900 text-slate-600 dark:text-gray-400 tech-font">
                      {item.skills}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
