# Vamshi Kummari - Personal Portfolio Website

A modern, fast, and fully responsive developer portfolio showcasing engineering solutions in **Generative AI, Multi-Agent Orchestration, and Classical Machine Learning**. 

Designed for an **AI/ML Engineer & Full Stack AI Developer** using a tri-color light-first aesthetic (Blue + Orange + Green).

🔗 **Live Portfolio**: `http://localhost:5173` (Local Dev) / Deployed via Vercel/Netlify.
📄 **Formal Resume**: Available in [public/resume.pdf](public/resume.pdf)

---

## 🚀 Technology Stack

- **Frontend**: React 19 + TypeScript + Vite (Fast HMR)
- **Styling**: Tailwind CSS v4 (Light-mode default with dark mode toggles)
- **Icons**: Lucide React
- **Animations**: CSS Intersection Observer scroll-reveals + typewriter typing animations
- **Build Tooling**: TypeScript Compiler (`tsc`), Vite Bundler

---

## 🧑‍💻 Technical Profile (From Resume)

AI/ML Engineer graduate with hands-on experience building and deploying Generative AI applications, multi-agent systems, and machine learning solutions. Skilled in LangChain, LangGraph, RAG pipelines, FastAPI, and cloud deployment, with a strong foundation in classical ML, deep learning, and NLP.

### Technical Skill Matrix

| Category | Technologies / Libraries |
|---|---|
| **Languages** | Python, SQL, JavaScript (TypeScript) |
| **GenAI & LLM Engineering** | LangChain, LangGraph, Advanced RAG, Vector Databases (Qdrant), Word Embeddings, Prompt Engineering, LLM Evaluation (RAGAS / LLM-as-Judge) |
| **Machine Learning** | Scikit-learn, Random Forest, XGBoost, LightGBM, PyTorch (Deep Learning), NLP |
| **Backend & Deployment** | FastAPI, RESTful APIs, SSE (Server-Sent Events) Streaming, Docker, Render, Streamlit, Git & GitHub |
| **Data & Tools** | Pandas, NumPy, Power BI, Advanced Excel, EDA (Exploratory Data Analysis) |

---

## 🛠️ Featured Engineering Projects

The portfolio highlights three core production-ready applications:

### 1. ResearchMind AI – Multi-Agent Research Assistant
- **Stack**: LangGraph | FastAPI | React/TypeScript | Groq (LLaMA-3.3-70B) | Mistral | Tavily | Render
- **Core Implementations**:
  - Engineered a **5-stage LangGraph pipeline** (`Router` $\rightarrow$ `Research` $\rightarrow$ `Orchestrator` $\rightarrow$ `Workers` $\rightarrow$ `Reducer`) to automate structured, citation-backed report generation.
  - Designed fan-out parallel worker nodes to draft report sections concurrently, cutting latency.
  - Built real-time token streaming using FastAPI SSE (`astream_events`) and React `ReadableStream` reader.
  - Constructed an **LLM-as-judge evaluation harness** (24 test queries) to measure hallucination risk, faithfulness, and citation grounds.
- **Demo Live**: [researchmind-np15.onrender.com](https://researchmind-np15.onrender.com)

### 2. AI Mock Interviewer – Adaptive Interview Simulation
- **Stack**: LangChain (LCEL) | FastAPI | Groq LLaMA-3.3-70B | JavaScript | Docker | Chart.js
- **Core Implementations**:
  - Developed a **4-chain LCEL pipeline** (Question Gen $\rightarrow$ Eval $\rightarrow$ Ideal Answer $\rightarrow$ Report) covering 14+ technical domains.
  - Implemented a server-side subtopic cursor to eliminate repetition and drive adaptive questions.
  - Leveraged Pydantic structured schemas for parseable feedback and exported Chart.js performance metrics.
- **Demo Live**: [mock-interview-7bui.onrender.com](https://mock-interview-7bui.onrender.com)

### 3. LandSense AI – Land Price Prediction System
- **Stack**: Python | Scikit-learn | Random Forest | XGBoost | LightGBM | Streamlit | Leaflet.js
- **Core Implementations**:
  - Trained models on **65,000+ land records** across 367 localities in 14 Indian states.
  - Engineered 27 feature predictors (infrastructure indices, historical compound growth, zoning limits) and achieved a **$93\%$ $R^2$ accuracy rating** with optimized Random Forests.
  - Served the model (235MB binary file via Git LFS) through a Streamlit interface integrated with Leaflet maps.
- **Demo Live**: [landsense-ai.streamlit.app](https://landsense-ai.streamlit.app)

---

## 🎓 Academic Foundation

- **Degree**: Bachelor of Technology (B.Tech) in **Computer Science & Engineering (Data Science)**
- **Institution**: Swami Vivekananda Institute of Technology, Hyderabad
- **Duration**: 2021 – 2025

---

## 💻 Local Execution Guide

To run this project locally, ensure you have Node.js installed, then follow these commands:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Compile & Bundle (Production Build)
```bash
npm run build
```
This runs TypeScript checking (`tsc`) and Vite bundling to output static deployable assets under the `/dist` directory.

---

## 📬 Contact & Channels

- **Email**: kummarivamshi095@gmail.com
- **GitHub**: [github.com/Vamshi7x](https://github.com/Vamshi7x)
- **LinkedIn**: [linkedin.com/in/vamshikummari7x](https://linkedin.com/in/vamshikummari7x)
