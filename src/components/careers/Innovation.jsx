import SectionHeading from '@/components/SectionHeading';

export default function Innovation() {
  return (
    <section className="section section--light">
      <div className="container">
        <div className="section-header">
          <SectionHeading>
            Innovation is our <span className="gradient-text">baseline</span>.
          </SectionHeading>
          <p className="text-xl text-tertiary">We foster an environment where technical excellence meets radical transparency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-1 card p-lg flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-6xl">bolt</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background relative z-10">High Velocity</h3>
            <p className="font-body-md text-body-md text-tertiary relative z-10">We ship code daily and iterate at the speed of the global market.</p>
          </div>
          <div className="md:col-span-1 md:row-span-1 card p-lg flex flex-col justify-between items-start bg-secondary text-on-primary">
            <span className="material-symbols-outlined text-on-primary text-4xl">public</span>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-primary">Remote First</h3>
              <p className="font-body-md text-label-sm text-on-primary/80">Talent has no borders. Work from anywhere in the world.</p>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-2 card p-lg flex flex-col gap-md bg-on-background">
            <img 
              className="w-full h-48 object-cover rounded-xl grayscale opacity-60"
              src="/images/section-img-005.png"
              alt="Continuous Growth"
            />
            <div>
              <h3 className="font-headline-md text-headline-md text-background">Continuous Growth</h3>
              <p className="font-body-md text-label-sm text-tertiary mt-base">Dedicated annual budget for learning, conferences, and certifications for every team member.</p>
            </div>
            <div className="mt-auto pt-md border-t border-outline-variant/30">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-primary/40"></div>
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-secondary/40"></div>
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-tertiary/40"></div>
                <div className="w-8 h-8 rounded-full border-2 border-on-background bg-surface-container flex items-center justify-center text-[10px] text-on-background">+42</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-1 card p-lg flex items-center gap-lg">
            <div className="hidden sm:block w-32 h-32 rounded-full border-4 border-primary/20 p-2 shrink-0">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary text-4xl">verified</span>
              </div>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-background">Ownership Mindset</h3>
              <p className="font-body-md text-body-md text-tertiary">Every employee receives equity. You are an architect of the company's success, not just a passenger.</p>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 card p-lg flex flex-col justify-center text-center">
            <div className="text-on-background font-display-lg text-display-lg">0.2ms</div>
            <div className="text-on-background font-label-md uppercase tracking-widest text-xs opacity-60">Our Latency Peak</div>
          </div>
        </div>
      </div>
    </section>
  );
}
