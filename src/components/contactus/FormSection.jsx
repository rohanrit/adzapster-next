"use client";

export default function FormSection() {
  return (
    <div className="lg:col-span-8 card p-8 md:p-12 relative overflow-hidden group">
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />

      <div className="relative z-10">
        <div className="mb-8 pb-6 border-b border-[var(--border)]">
          <h2 className="text-2xl font-bold text-[var(--text-dark)] dark:text-white">Send a Message</h2>
          <p className="text-[var(--text-muted)] mt-2">We'll respond within 24 hours</p>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">First Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">person</span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                  placeholder="John"
                  type="text"
                />
              </div>
            </div>
            <div className="relative group">
              <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Last Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">person</span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                  placeholder="Doe"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Business Email</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">mail</span>
              <input
                className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50"
                placeholder="john@company.com"
                type="email"
              />
            </div>
          </div>

          <div className="relative group">
            <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Industry</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">business_center</span>
              <select className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white appearance-none hover:border-primary/50 cursor-pointer">
                <option>E-commerce</option>
                <option>SaaS</option>
                <option>FinTech</option>
                <option>Media & Publishing</option>
                <option>Other</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none text-xl">expand_more</span>
            </div>
          </div>

          <div className="relative group">
            <label className="font-semibold text-sm text-[var(--text-dark)] dark:text-gray-300 mb-2 block">Message</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-4 text-[var(--text-muted)] group-focus-within:text-primary transition-colors text-xl">chat</span>
              <textarea
                className="w-full pl-12 pr-4 py-3.5 bg-white/50 dark:bg-[#1B1B3A]/50 backdrop-blur-sm border-2 border-[var(--border)] rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all font-body-md text-[var(--text-dark)] dark:text-white placeholder:text-[var(--text-muted)] hover:border-primary/50 resize-none"
                placeholder="How can we help scale your performance?"
                rows="5"
              ></textarea>
            </div>
          </div>

          <button
            className="btn btn-primary text-lg px-10 py-4 group w-full md:w-auto hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
            type="submit"
          >
            <span>Send Inquiry</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
}
