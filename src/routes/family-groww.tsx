import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul10 from "@/assets/rahul/rahul10.jpg";

export const Route = createFileRoute("/family-groww")({
  head: () => ({
    meta: [
      { title: "Family Groww — A Blueprint for the Home You Wish You Grew Up In" },
      { name: "description", content: "1–2 day immersive masterclass for parents and adult children. Vision, vocabulary, and rituals — built together." },
      { property: "og:title", content: "Family Groww — Build the family you wish you grew up in." },
      { property: "og:description", content: "An immersive masterclass with Rahul Kapoor for parents and their teenage / adult children." },
    ],
  }),
  component: FamilyGrowwPage,
});

function FamilyGrowwPage() {
  return (
    <Layout>
      <section className="bg-ivory pt-40 pb-24 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-foreground/30" /> The Family Groww Program
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light max-w-5xl">
              Build the family
              <br />
              <span className="font-serif-italic text-gradient-gold">you wish you grew up in.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-xl text-foreground/75 max-w-2xl leading-relaxed">
              A 1–2 day immersive masterclass for parents and their teenage or adult children. We don't fix your family. We give it a vision, a vocabulary, and a rhythm — together, in the same room.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-32 grain">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden shadow-elegant">
              <img src={rahul10} alt="Family Groww" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">What we build, together</div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] mb-10">
              Vision. Values. Vocabulary. Rituals.
            </h2>
            <ul className="space-y-6">
              {[
                { t: "A Family Vision", d: "Where are we going — as people, not as schedules?" },
                { t: "A Shared Value System", d: "What we honor in this house, when no one is watching." },
                { t: "A New Vocabulary", d: "Language for the conversations we have been avoiding." },
                { t: "Living Rituals", d: "Small, repeatable practices that hold the family in motion." },
              ].map((p, i) => (
                <li key={p.t} className="flex gap-6 border-b border-ivory/10 pb-6">
                  <div className="text-gold font-display text-2xl">0{i + 1}</div>
                  <div>
                    <div className="font-display text-xl mb-1">{p.t}</div>
                    <div className="text-ivory/65">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-16 max-w-3xl">
              For families ready to grow on purpose.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Family Groww · 1 Day", p: "An intensive day to map your family's vision and align the room." },
              { t: "Family Groww · 2 Day", p: "A deeper immersion — with rituals, role reversals, and a 90-day living plan." },
              { t: "Private Family Coaching", p: "3–12 months of personal work with Rahul. For families ready for full transformation." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="border border-border p-10 h-full bg-card hover:shadow-elegant transition-shadow">
                  <div className="font-display text-2xl mb-4">{c.t}</div>
                  <p className="text-foreground/70 mb-8">{c.p}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 pb-1 hover:gap-4 transition-all">
                    Enquire <span>→</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
