import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Workshops — Charan Sparsh & Family Groww Live" },
      { name: "description", content: "Upcoming live experiences with Rahul Kapoor across India and the world." },
      { property: "og:title", content: "Live with Rahul Kapoor — Upcoming dates." },
      { property: "og:description", content: "Charan Sparsh and Family Groww workshops in India, USA, UAE, Australia, Thailand." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { date: "Mar 22", year: "2026", city: "Mumbai", country: "India", program: "Charan Sparsh", venue: "Jio World Convention Centre", status: "Filling Fast" },
  { date: "Apr 14", year: "2026", city: "Dubai", country: "UAE", program: "Family Groww · 2-Day", venue: "Madinat Jumeirah", status: "Open" },
  { date: "May 03", year: "2026", city: "Bengaluru", country: "India", program: "Charan Sparsh", venue: "ITC Gardenia", status: "Open" },
  { date: "Jun 09", year: "2026", city: "New Jersey", country: "USA", program: "Charan Sparsh", venue: "NJPAC", status: "Early Bird" },
  { date: "Jul 19", year: "2026", city: "Sydney", country: "Australia", program: "Family Groww · 1-Day", venue: "ICC Sydney", status: "Open" },
  { date: "Aug 24", year: "2026", city: "Bangkok", country: "Thailand", program: "Charan Sparsh", venue: "Centara Grand", status: "Open" },
];

function EventsPage() {
  return (
    <Layout>
      <section className="bg-navy-deep text-ivory pt-40 pb-24 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Live Calendar</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light max-w-5xl">
              The room opens
              <br />
              <span className="font-serif-italic text-gradient-gold">in your city.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-ivory/70 max-w-2xl">
              Live experiences across India, the USA, UAE, Australia, and Thailand. Bring your family. Bring your team. Bring whoever you have been meaning to call.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-24 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <ul className="divide-y divide-border border-y border-border">
            {events.map((e, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <li className="py-8 grid md:grid-cols-12 gap-6 items-center group hover:bg-secondary/40 transition-colors px-2">
                  <div className="md:col-span-2">
                    <div className="font-display text-3xl md:text-4xl">{e.date}</div>
                    <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{e.year}</div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="font-display text-2xl">{e.city}</div>
                    <div className="text-sm text-muted-foreground">{e.country}</div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="text-foreground font-medium">{e.program}</div>
                    <div className="text-sm text-muted-foreground">{e.venue}</div>
                  </div>
                  <div className="md:col-span-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] tracking-[0.2em] uppercase border border-foreground/30 text-foreground/70">{e.status}</span>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 pb-1 group-hover:gap-4 transition-all">
                      Reserve <span>→</span>
                    </Link>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-28 text-center grain">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light max-w-3xl mx-auto px-6">
            Don't see your city? <span className="font-serif-italic text-gradient-gold">Bring us there.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform">
            Host an event →
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}
