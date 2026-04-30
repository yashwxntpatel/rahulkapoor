import logo from "@/assets/rahul/logo.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal, SplitWords, ImageReveal, MagneticButton } from "@/components/site/Reveal";
import rahul1 from "@/assets/rahul/rahul1.jpg";
import rahul5 from "@/assets/rahul/rahul5.jpg";
import rahul7 from "@/assets/rahul/rahul7.jpg";
import rahul10 from "@/assets/rahul/rahul10.jpg";
import rahul12 from "@/assets/rahul/rahul12.jpg";
import heroBg from "@/assets/rahul/hero-bg.mp4";
import rahul13 from "@/assets/rahul/rahul13.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rahul Kapoor — You Built Success. Now Rebuild Connection." },
      { name: "description", content: "A cinematic family transformation experience by Rahul Kapoor — transformational speaker behind Charan Sparsh & Family Groww. 50,000+ lives across 5 countries." },
      { property: "og:title", content: "Rahul Kapoor — Reconnect. Realign. Rebuild Family." },
      { property: "og:description", content: "Charan Sparsh — a 90-minute experience that has moved 50,000+ people across India, USA, UAE, Australia & Thailand." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Marquee />
      <EmotionalGap />
      <RealityContrast />
      <Introduction />
      <CharanSparsh />
      <FamilyGroww />
      <Journey />
      <Impact />
      <Stories />
      <FinalCTA />
    </Layout>
  );
}

/* ───────────────────────── 01 · HERO ───────────────────────── */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink text-ivory grain"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
  <motion.video
    src={heroBg}
    autoPlay
    muted
    loop
    playsInline
    initial={{ scale: 1.25, filter: "blur(24px)", opacity: 0 }}
    animate={{ scale: 1, filter: "blur(0px)", opacity: 0.99 }}
    transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
</motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 pt-40 md:pt-48 pb-16 min-h-[100svh] flex flex-col justify-end"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="h-px w-14 bg-gold" />
          <span className="hairline text-gold">A Family Transformation Experience</span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,9vw,9rem)] leading-[0.92] max-w-[16ch]">
          <SplitWords text="You built" className="text-ivory" />
          <br />
          <SplitWords text="success." delay={0.15} className="text-ivory" />
          <span className="block mt-2">
            <span className="font-serif-italic font-light text-gold-light">
              <SplitWords text="But lost" delay={0.5} className="text-gold-light" />
              <br />
              <SplitWords text="connection." delay={0.75} className="text-gold-light" />
            </span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 grid md:grid-cols-12 gap-8 items-end"
        >
          <p className="md:col-span-5 text-base md:text-lg text-ivory/65 max-w-md leading-relaxed">
            For 25 years, Rahul Kapoor has helped 50,000+ people across 5 countries
            return to the one room they had been avoiding —
            <span className="text-ivory"> the one with their family in it.</span>
          </p>

          <div className="md:col-span-7 md:text-right flex md:justify-end gap-5 flex-wrap">
            <MagneticButton as={Link} to="/charan-sparsh" variant="gold">
              Experience Charan Sparsh <span className="ml-1">→</span>
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" variant="ghost" className="text-ivory border-ivory/40">
              Enquire Now
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/40"
        >
          <span className="text-[10px] tracking-[0.4em]">SCROLL</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-gradient-to-b from-ivory/60 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── 02 · MARQUEE ───────────────────────── */

function Marquee() {
  const items = [
    "THE HINDU",
    "THE TIMES OF INDIA",
    "THEWEEK",
    "DH Deccan Herald",
    "KHALEEJ TIMES",
    "NAVBHARAT",
  ];
  const loop = [...items, ...items];
  return (
    <section className="bg-gradient-gold text-ink border-y border-gold/30 py-4 overflow-hidden mt-4">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <div key={i} className="flex items-center gap-10 px-6">
            <span className="font-sans text-1xl md:text-2xl text-ink/80 font-bold">{t}</span>
            <span className="h-1 w-1 rounded-full bg-ink" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── 03 · EMOTIONAL GAP ───────────────────────── */

function EmotionalGap() {
  return (
    <section className="bg-ivory text-ink py-32 md:py-44 grain">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <div className="hairline text-foreground/60 mb-6">01 · The Quiet Crisis</div>
            <div className="gold-rule w-24 mb-8" />
            <p className="font-serif-italic text-foreground/70 max-w-xs">
              Somewhere between the next promotion and the next school admission, the family slipped through the cracks.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-12"
            >
              <img
                src={logo}
                alt="Charan Sparsh"
                className="w-80 opacity-100"
              />
            </motion.div>
          </div>
        </Reveal>

        <div className="md:col-span-8 space-y-10">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[0.95] max-w-[18ch]">
              <SplitWords text="The dinner table" className="text-ink" />
              <br />
              <span className="font-serif-italic font-light text-foreground/70">
                <SplitWords text="went silent" delay={0.2} className="text-foreground/70" />
              </span>
              <SplitWords text="long before anyone noticed." delay={0.4} className="text-ink" />
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-10 mt-14">
            {[
              { n: "73%", t: "of urban Indian families report less than 30 minutes of meaningful conversation a day." },
              { n: "1 in 2", t: "teenagers say their parents are present at home but emotionally absent." },
              { n: "8 yrs", t: "average age a child stops sharing their inner world with a parent." },
              { n: "0", t: "of these wounds get healed by another promotion or a bigger house." },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.08} className="border-t border-foreground/15 pt-6">
                <div className="font-display text-5xl md:text-6xl text-ink mb-3">{s.n}</div>
                <p className="text-foreground/65 leading-relaxed max-w-sm">{s.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 04 · REALITY CONTRAST ───────────────────────── */

function RealityContrast() {
  return (
    <section className="bg-ink text-ivory py-32 md:py-44 grain overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="hairline text-gold mb-6">02 · The Contrast</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.25rem,6vw,6rem)] leading-[0.95] max-w-[14ch] mb-20">
            Outside,
            <span className="font-serif-italic font-light text-gold-light"> applause.</span>
            <br />
            Inside,
            <span className="font-serif-italic font-light text-ivory/40"> a closed door.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <div className="relative">
              <ImageReveal src={rahul10} alt="Public success" ratio="4/5" className="rounded-sm" />
              <div className="absolute top-6 left-6 hairline text-ivory/80 bg-ink/40 backdrop-blur px-3 py-2">
                What the world sees
              </div>
              <p className="mt-6 text-lg text-ivory/90 max-w-md">
                Awards. Promotions. Trips. Posts. Filtered photographs of a life that looks beautifully arranged.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative md:mt-24">
              <ImageReveal src={rahul1} alt="Quiet disconnect" ratio="4/5" className="rounded-sm" />
              <div className="absolute top-6 left-6 hairline text-ink bg-gold px-3 py-2">
                What the family feels
              </div>
              <p className="mt-6 text-lg text-ivory/90 max-w-md">
                A child who stops asking. A parent who stops reaching. A spouse who learned not to wait up.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 05 · INTRODUCTION ───────────────────────── */

function Introduction() {
  return (
    <section className="bg-ivory text-ink py-32 md:py-44 grain">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5">
          <ImageReveal src={rahul13} alt="Rahul Kapoor" ratio="4/5" className="shadow-elegant" />
        </Reveal>

      <div className="md:col-span-7 space-y-12">

        <Reveal>
          <div className="hairline text-foreground/60">
            03 · The Voice
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.75rem)] leading-[0.95] max-w-[18ch] tracking-tight">
            <SplitWords text="Rahul Kapoor has spent" className="text-ink" />
            <br />
            <span className="font-serif italic font-light">
              <SplitWords text="25 years" delay={0.2} className="text-foreground/70" />
            </span>
            <span className="block">
              <SplitWords text="learning what families forget." delay={0.35} className="text-ink" />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl">
            A transformational speaker and family mindset coach, Rahul stands at the
            rare intersection of{" "}
            <span className="text-neutral-900">psychology, science and Indian wisdom</span>.
            <br className="hidden md:block" />
            He doesn't sell hacks. He gives families their own voices back —
            the ones that got buried under deadlines, devices, and well-meaning ambition.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-8 max-w-xl pt-4">
          {[
            { n: "50K+", t: "lives moved" },
            { n: "5", t: "countries" },
            { n: "25", t: "years on stage" },
          ].map((s, i) => (
            <Reveal key={i} delay={0.3 + i * 0.08} className="border-t border-neutral-300 pt-4">
              <div className="font-display text-3xl md:text-4xl text-neutral-900">{s.n}</div>
              <div className="text-xs tracking-[0.2em] uppercase text-neutral-500 mt-2">{s.t}</div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <MagneticButton as={Link} to="/about" variant="ink">
            Read Rahul's Story →
          </MagneticButton>
        </Reveal>
      </div>
    </div>
  </section>
);
}

/* ───────────────────────── 06 · CHARAN SPARSH (HERO MODULE) ───────────────────────── */

function CharanSparsh() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={ref}
      className="relative bg-ink text-ivory py-32 md:py-48 overflow-hidden grain"
    >
      <motion.div
        style={{ y }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
      />
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <Reveal className="md:col-span-5">
            <div className="hairline text-gold mb-6">04 · The Signature Experience</div>
            <h2 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.92]">
              Charan
              <br />
              <span className="font-serif-italic font-light text-gradient-gold">Sparsh.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:pt-10">
            <p className="text-lg md:text-xl text-ivory/75 leading-relaxed max-w-2xl">
              A 90-minute emotional experience that bypasses the head and walks straight
              to the heart. Built on gratitude, respect and the oldest gesture in our
              culture — the touch of a parent's feet — it has dissolved 25-year-old
              silences in 25 minutes.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <ImageReveal src={rahul5} alt="Charan Sparsh experience" ratio="16/10" />
          </div>
          <div className="md:col-span-5 grid gap-4 self-end">
            {[
              { k: "90 MIN", v: "A single, uninterrupted experience" },
              { k: "GRATITUDE", v: "Anchored in respect & emotional bonding" },
              { k: "SCIENCE + SOUL", v: "Psychology meets Indian wisdom" },
              { k: "OUTCOME", v: "A deep emotional awakening — felt, not taught" },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border border-ivory/15 p-6 hover:border-gold/60 transition-colors duration-500 group">
                  <div className="hairline text-gold mb-3">{m.k}</div>
                  <div className="text-ivory/80 group-hover:text-ivory transition-colors">{m.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-wrap items-center gap-6">
            <MagneticButton as={Link} to="/charan-sparsh" variant="gold">
              Step Inside the Experience →
            </MagneticButton>
            <Link to="/events" className="text-sm tracking-wide text-ivory/70 hover:text-ivory underline-offset-8 hover:underline">
              See upcoming live dates
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── 07 · FAMILY GROWW ───────────────────────── */

function FamilyGroww() {
  return (
    <section className="bg-ivory text-ink py-32 md:py-44 grain">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5 order-2 md:order-1">
            <ImageReveal src={rahul7} alt="Family Groww workshop" ratio="3/4" className="shadow-elegant" />
          </Reveal>
          <div className="md:col-span-7 order-1 md:order-2 space-y-10">
            <Reveal>
              <div className="hairline text-foreground/60">05 · The Deep Work</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[0.95] max-w-[16ch]">
                Family
                <span className="font-serif-italic font-light text-foreground/70"> Groww </span>
                Program.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl">
                A 1–2 day immersive transformation that moves families from a single
                emotional moment into a life-long operating system —
                a shared vision, a clear set of values, and a way of speaking to each
                other you'll keep using long after the room goes quiet.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl">
              {["Vision", "Values", "Voice"].map((p, i) => (
                <Reveal key={p} delay={0.3 + i * 0.08}>
                  <div className="border-t border-foreground/20 pt-5">
                    <div className="font-display text-3xl mb-2">0{i + 1}</div>
                    <div className="text-foreground font-medium">{p}</div>
                    <p className="text-sm text-foreground/60 mt-2">
                      {i === 0
                        ? "Where this family is going — together."
                        : i === 1
                        ? "What we will and won't trade for success."
                        : "How we speak when it gets hard."}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.55}>
              <MagneticButton as={Link} to="/family-groww" variant="ink">
                Explore the Program →
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 08 · JOURNEY ───────────────────────── */

function Journey() {
  const phases = [
    { n: "01", t: "Reconnect", d: "A single emotional experience that breaks the silence and reopens the door — usually Charan Sparsh." },
    { n: "02", t: "Realign", d: "1–2 days of deep work with the whole family — Family Groww — to build a shared vision, values and language." },
    { n: "03", t: "Rebuild", d: "3–12 months of private coaching where the new way of being becomes the everyday way of living." },
  ];
  return (
    <section className="bg-navy-deep text-ivory py-32 md:py-44 grain overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="hairline text-gold mb-6">06 · The Journey</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.25rem,6vw,6rem)] leading-[0.95] max-w-[14ch] mb-20">
            Three rooms.
            <br />
            <span className="font-serif-italic font-light text-gold-light">One family.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-px bg-ivory/10 border-y border-ivory/10">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1} className="bg-navy-deep">
              <div className="p-10 md:p-12 h-full group hover:bg-ink transition-colors duration-700">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display text-6xl text-gold">{p.n}</span>
                  <span className="hairline text-ivory/40">PHASE</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{p.t}</h3>
                <p className="text-ivory/65 leading-relaxed">{p.d}</p>
                <div className="mt-10 h-px bg-gradient-to-r from-gold/60 to-transparent transition-all duration-700 w-12 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 09 · IMPACT ───────────────────────── */

function Impact() {
  return (
    <section className="bg-ink text-ivory py-28 md:py-36 grain">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-end mb-16">
          <Reveal className="md:col-span-7">
            <h2 className="font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] max-w-[15ch]">
              A reach measured
              <br />
              <span className="font-serif-italic font-light text-gradient-gold">in tears, hugs, and homecomings.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-5">
            <p className="text-ivory/70 leading-relaxed max-w-md">
              Across five countries and twenty-five years, the proof has never been a metric on a slide.
              It's been the sound of a son finally saying the thing he should have said a decade ago.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory/10 border-y border-ivory/10">
          {[
            { n: "50K+", t: "Lives Touched" },
            { n: "5", t: "Countries" },
            { n: "25 yrs", t: "On Stage" },
            { n: "100%", t: "Family-First" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08} className="bg-ink">
              <div className="p-10 text-center">
                <div className="font-display text-5xl md:text-6xl text-ivory">{s.n}</div>
                <div className="hairline text-ivory/50 mt-4">{s.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 10 · STORIES ───────────────────────── */

function Stories() {
  const quotes = [
    {
      q: "I touched my father's feet for the first time in 22 years. Both of us cried. Something I had been carrying my whole life — fell.",
      a: "Vikram S.",
      r: "Entrepreneur · Mumbai",
    },
    {
      q: "I went in as a CEO. I came out as a son. My mother is 79. I still have time. That's the gift Rahul gave me.",
      a: "Anand R.",
      r: "Tech Founder · Bengaluru",
    },
    {
      q: "Our family talks now. Actually talks. Not about logistics — about life. We hadn't done that in years.",
      a: "Priya & Karan",
      r: "Couple · Dubai",
    },
  ];
  return (
    <section className="bg-ivory text-ink py-32 md:py-44 grain">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <Reveal>
            <div className="hairline text-foreground/60 mb-4">07 · The Proof</div>
            <h2 className="font-display text-[clamp(2rem,5.5vw,5rem)] leading-[0.95] max-w-[14ch]">
              They came for a session.
              <br />
              <span className="font-serif-italic font-light text-foreground/70">They left with their family back.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link to="/testimonials" className="text-sm tracking-wide hover:text-foreground/70 underline-offset-8 underline">
              All stories →
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full p-8 md:p-10 bg-card border border-border hover:border-gold transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="font-display text-5xl text-gold leading-none mb-6">"</div>
                <blockquote className="font-serif-italic text-lg leading-relaxed text-foreground/85">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <div className="font-display text-base">{t.a}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-foreground/55 mt-1">{t.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 11 · FINAL CTA ───────────────────────── */

function FinalCTA() {
  return (
    <section className="relative bg-ink text-ivory py-40 overflow-hidden grain">
      <div className="absolute inset-0 opacity-25">
        <img src={rahul12} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
      </div>
      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <Reveal>
          <div className="hairline text-gold mb-8">A Quiet Invitation</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] max-w-[16ch] mx-auto">
            <SplitWords text="The call you've been" className="text-ivory" />
            <br />
            <span className="font-serif-italic font-light text-gold-light">
              <SplitWords text="meaning to make —" delay={0.2} className="text-gold-light" />
            </span>
            <br />
            <SplitWords text="make it now." delay={0.45} className="text-ivory" />
          </h2>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-10 text-ivory/65 max-w-xl mx-auto leading-relaxed">
            One conversation. One room. One ninety-minute experience.
            That's how families come home.
          </p>
        </Reveal>
        <Reveal delay={0.65}>
          <div className="mt-12 flex items-center justify-center gap-5 flex-wrap">
            <MagneticButton as={Link} to="/contact" variant="gold">
              Begin Your Family Transformation →
            </MagneticButton>
            <MagneticButton as={Link} to="/events" variant="ghost" className="text-ivory border-ivory/40">
              See Upcoming Events
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}