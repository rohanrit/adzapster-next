export default function ContactSidebar() {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6">
      {/* Direct Support Card */}
      <div className="card p-6 md:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-6 text-[var(--text-dark)] dark:text-white">Direct Support</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-primary to-primary-dark rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-[var(--text-dark)] dark:text-white mb-1">Technical Assistance</p>
                <p className="text-[var(--text-body)] dark:text-gray-300">support@adzapster.com</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">24/7 Priority support for Enterprise clients</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">business_center</span>
              </div>
              <div>
                <p className="font-bold text-[var(--text-dark)] dark:text-white mb-1">Sales Inquiries</p>
                <p className="text-[var(--text-body)] dark:text-gray-300">+1 (888) 555-0192</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Mon - Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="card overflow-hidden" id="offices">
        <div className="h-56 md:h-64 w-full bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 dark:bg-[#1B1B3A]/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
              <span className="font-bold text-[var(--text-dark)] dark:text-white">New York HQ</span>
            </div>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4 text-[var(--text-dark)] dark:text-white">Global Headquarters</h3>
          <p className="text-[var(--text-body)] dark:text-gray-300 mb-6">
            One World Trade Center, Suite 85<br />
            New York, NY 10007<br />
            United States
          </p>
          <div className="flex gap-8 pt-6 border-t border-[var(--border)]">
            <div>
              <p className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-1">EMEA Hub</p>
              <p className="text-[var(--text-dark)] dark:text-white font-semibold">London, UK</p>
            </div>
            <div>
              <p className="text-xs font-bold text-[var(--purple)] uppercase tracking-widest mb-1">APAC Hub</p>
              <p className="text-[var(--text-dark)] dark:text-white font-semibold">Singapore</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
