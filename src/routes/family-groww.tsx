import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul10 from "@/assets/rahul/rahul10.jpg";

export const Route = createFileRoute("/family-groww")({
  head: () => ({
    meta: [
      { title: "Family First Masterclass — Phase Two. The Alignment." },
      { name: "description", content: "A 1–2 day structured engagement for families. Not a workshop. A deliberate intervention into the patterns that have quietly governed the home." },
      { property: "og:title", content: "Family First — The second phase of a rare process." },
      { property: "og:description", content: "Parents and their children. Together in the same room. Understanding what has been running beneath the surface — and choosing what comes next." },
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
              <span className="h-px w-12 bg-foreground/30" /> Phase Two · The Alignment
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light max-w-5xl">
              The patterns that shaped
              <br />
              <span className="font-serif-italic text-gradient-gold">your family are not fixed.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-xl text-foreground/75 max-w-2xl leading-relaxed">
              A 1–2 day private engagement for parents and their children — together. Not a workshop. A structured intervention into the inherited patterns, unspoken resentments, and unacknowledged distances that quietly govern the family.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep text-ivory py-32 grain">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden shadow-elegant">
              <img src={rahul10} alt="Family First Masterclass" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">What this engagement creates</div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-[1.1] mb-10">
              Clarity. Alignment. Language. Foundation.
            </h2>
            <ul className="space-y-6">
              {[
                { t: "Seeing the Patterns", d: "What has been running beneath the surface — named, for the first time, in the same room." },
                { t: "A Shared Direction", d: "Where this family is going — not separately, but as one. Agreed upon. Written. Held." },
                { t: "A New Language", d: "Words for the conversations that have had none. A vocabulary built for the hard moments." },
                { t: "Living Practices", d: "Small, repeatable commitments that carry the shift forward — long after the room has gone quiet." },
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
              For families who are ready to look honestly at what they have built.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Family First · 1 Day", p: "A single, intensive day to surface the patterns and create a shared foundation for what follows." },
              { t: "Family First · 2 Days", p: "A deeper engagement — with space for the silences, the reversals, and a 90-day continuance plan." },
              { t: "Private Family Work", p: "6–12 months of direct engagement with Rahul. For two to three families each year. By consideration only." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="border border-border p-10 h-full bg-card hover:shadow-elegant transition-shadow">
                  <div className="font-display text-2xl mb-4">{c.t}</div>
                  <p className="text-foreground/70 mb-8">{c.p}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-foreground border-b border-foreground/40 pb-1 hover:gap-4 transition-all">
                    Begin the Conversation <span>→</span>
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
