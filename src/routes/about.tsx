import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul5 from "@/assets/rahul/rahul5.jpg";
import rahul12 from "@/assets/rahul/rahul12.jpg";
import rahul13 from "@/assets/rahul/rahul13.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rahul Kapoor — 25 Years. 5 Countries. 50,000 Lives." },
      { name: "description", content: "Transformational speaker, family mindset coach, and author. The story of a man who returns families to themselves." },
      { property: "og:title", content: "Rahul Kapoor — A life spent returning families to themselves." },
      { property: "og:description", content: "25 years guiding families across India, USA, UAE, Australia, and Thailand." },
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
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">About</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] font-light max-w-5xl">
              Rahul Kapoor.
              <br />
              <span className="font-serif-italic text-gradient-gold">A life spent walking families home.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-4">
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3">The Man</div>
            <div className="font-display text-3xl">A speaker. A coach. A guide.</div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              For 25 years, Rahul Kapoor has stood in front of CEOs and grandmothers, teenagers and grandfathers, in five countries and across hundreds of stages — and watched something almost extinct return to the room: <em className="font-serif-italic">the courage to feel.</em>
            </p>
            <p>
              His framework is unusual. It refuses the binary. He combines neuroscience with grandmother-wisdom, behavioral psychology with the silent languages of Indian tradition, and stories that arrive without warning and leave without asking permission.
            </p>
            <p>
              He has worked with Fortune 500 leaders and farmers, billionaires and first-time parents. The audience changes. The result rarely does: <span className="font-serif-italic">people walk out holding the people they walked in beside.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-28 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-px bg-ivory/10">
            {[
              { n: "50,000+", l: "Lives transformed" },
              { n: "65+", l: "Global sessions" },
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
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">The Mission</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05] mb-8">
              Strong families.
              <br />
              <span className="font-serif-italic">Stronger lives.</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-6">
              Rahul believes the family is the original startup, the first government, the only therapy that lasts. When families work, leaders lead better, children rise softer, elders age held.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              His mission is simple — and inconvenient: to put the family back at the center of the modern life, before another generation grows up rich and lonely.
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
              Want Rahul in your room?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl text-ivory/70 max-w-2xl">For your family, your company, your community, or your stage.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Reach out →
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
