import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul5 from "@/assets/rahul/rahul5.jpg";
import rahul12 from "@/assets/rahul/rahul12.jpg";
import rahul13 from "@/assets/rahul/rahul13.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rahul Kapoor — Two Decades. A Few Families. Quiet Work." },
      { name: "description", content: "Rahul Kapoor works privately with a very small number of families each year. This is the story behind that work." },
      { property: "og:title", content: "Rahul Kapoor — The work behind the silence." },
      { property: "og:description", content: "Two decades of observing families in their truth, not their performance. A private practice built on depth, not scale." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="relative bg-navy-deep text-ivory min-h-[90svh] flex items-end pb-20 pt-40 grain overflow-hidden">
        <img src={rahul12} alt="Rahul Kapoor" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 w-full">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">The Work</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] font-light max-w-5xl">
              Rahul Kapoor.
              <br />
              <span className="font-serif-italic text-gradient-gold">A life spent inside the difficult rooms.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">The Practice</div>
            <div className="font-display text-3xl">Quiet. Private. Precise.</div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              For over two decades, Rahul Kapoor has worked in spaces that most practitioners do not enter — the interior life of families. Not the performance of family. The truth of it: the silences, the patterns inherited across generations, the distances so familiar they have stopped being noticed.
            </p>
            <p>
              His approach does not fit a category. He draws from neuroscience and ancestral wisdom, from behavioral depth and the quiet language of Indian tradition — weaving them into something that reaches the part of a person that achievement has learned to protect.
            </p>
            <p>
              He has sat with founders and farmers, with grandparents and teenagers, in five countries and across hundreds of private settings. The context changes. The outcome rarely does: <span className="font-serif-italic">people find their way back to each other.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-28 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-ivory/10">
            {[
              { n: "2–3", l: "Families per year" },
              { n: "6–12", l: "Months of engagement" },
              { n: "5+", l: "Countries" },
              { n: "25", l: "Years of practice" },
            ].map((s) => (
              <Reveal key={s.n}>
                <div className="bg-navy-deep p-10 text-center">
                  <div className="font-display text-5xl md:text-6xl text-gradient-gold">{s.n}</div>
                  <div className="mt-3 text-sm tracking-[0.2em] uppercase text-ivory/60">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={rahul5} alt="Rahul Kapoor" className="w-full aspect-[4/5] object-cover shadow-elegant" />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">The Conviction</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] mb-8">
              The family is not a side note
              <br />
              <span className="font-serif-italic">to a successful life.</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-6">
              Rahul believes that when a family is fractured — quietly, slowly, without anyone choosing it — everything built on top of it eventually reflects that fracture. The leader who cannot connect. The child who succeeds in silence. The parent who stopped being known.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              His work is to enter that fracture — carefully, without rushing — and to help families find their way back to something true. Not perfect. True.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-32 relative overflow-hidden grain">
        <img src={rahul13} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/80 to-navy-deep/40" />
        <div className="relative max-w-[1100px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,6vw,5rem)] font-light leading-[1]">
              If you sense this work is for your family —
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-ivory/70 max-w-2xl">The first conversation is private, unhurried, and without obligation.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Request Consideration →
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
