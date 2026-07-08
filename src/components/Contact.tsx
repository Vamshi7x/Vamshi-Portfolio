import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate API call (e.g. Formspree/EmailJS)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] glow-primary animate-pulse-glow z-0 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Have an open role, project discussion, or questions about my systems? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Badge (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-secondary dark:text-blue-450">
              Let's build something next
            </h3>
            
            <p className="text-slate-700 dark:text-gray-305 font-light leading-relaxed">
              I am seeking entry-level **AI/ML Engineer** and **GenAI Developer** positions in **Hyderabad** or **Bangalore**. I am also open to remote roles globally.
            </p>

            {/* Glowing Active Status Badge */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-radial-gradient from-primary/10 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white tech-font uppercase tracking-wide">
                  Active Seeking Roles
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-2 font-light">
                Ready to interview immediately. Let's discuss technical fits and take-home assessments.
              </p>
            </div>

            {/* Social channels cards list */}
            <div className="space-y-4 pt-2">
              <a
                href="mailto:kummarivamshi095@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/30 hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400 group-hover:text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-gray-500 tech-font">EMAIL ME</span>
                  <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">kummarivamshi095@gmail.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vamshikummari7x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/30 hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-gray-500 tech-font">LINKEDIN PROFILE</span>
                  <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">linkedin.com/in/vamshikummari7x</span>
                </div>
              </a>

              <a
                href="https://github.com/Vamshi7x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/30 hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-gray-500 tech-font">GITHUB HOME</span>
                  <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">github.com/Vamshi7x</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-slate-900/30">
                <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-gray-500 tech-font">LOCATION</span>
                  <span className="text-sm text-slate-700 dark:text-gray-300 font-medium">Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl">
              
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="h-16 w-16 text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white">Message Transmitted!</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400 max-w-sm mx-auto font-light">
                    Thank you. Your message has been logged, and I will get back to you at kummarivamshi095@gmail.com shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-gray-200 text-xs font-bold transition-colors tech-font"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 tech-font">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-205 dark:border-gray-800'
                    }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 tech-font">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-205 dark:border-gray-800'
                    }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 tech-font">
                      Message / Requirement
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border bg-gray-50/50 dark:bg-slate-950/20 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all ${
                      errors.message ? 'border-red-500' : 'border-gray-205 dark:border-gray-800'
                    }`}
                      placeholder="Hi Vamshi, I would like to discuss an opportunity on our AI team..."
                    />
                    {errors.message && (
                      <span className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 disabled:opacity-55 transition-all duration-200 gap-2 shadow-lg shadow-primary/20 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
