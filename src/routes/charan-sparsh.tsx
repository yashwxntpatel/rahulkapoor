import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul1 from "@/assets/rahul/rahul1.jpg";
import rahul9 from "@/assets/rahul/rahul9.jpg";

export const Route = createFileRoute("/charan-sparsh")({
  head: () => ({
    meta: [
      { title: "Charan Sparsh — A 90-Minute Experience That Returns Your Family" },
      { name: "description", content: "An immersive live transformational experience by Rahul Kapoor. Science, psychology, and Indian wisdom — for ages 5 to 100." },
      { property: "og:title", content: "Charan Sparsh — Touch the feet that walked you here." },
      { property: "og:description", content: "90 minutes. A lifetime returned. The signature experience by Rahul Kapoor." },
    ],
  }),
  component: CharanSparshPage,
});

const roomCards = [
  { t: "The Science", d: "What gratitude and physical reverence do to dopamine, oxytocin, and the parasympathetic nervous system." },
  { t: "The Psychology", d: "Why the people we love most are the ones we hide from — and how to dismantle that wall in a single sitting." },
  { t: "The Story", d: "Rahul's storytelling reaches the part of you that boardrooms and bank accounts have learned to bypass." },
  { t: "The Gesture", d: "A simple, ancient touch — performed together — that rearranges decades of distance in seconds." },
];

const challengeCards = [
  { d: "7 Days", t: "The Reconnect", p: "Daily 10-minute rituals to reopen what years have closed." },
  { d: "14 Days", t: "The Realign", p: "Conversations, gestures, and shared decisions that rebuild trust." },
  { d: "21 Days", t: "The Rebuild", p: "A new family rhythm that survives the noise of modern life." },
];

const cardPopVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0px 28px 60px rgba(0,0,0,0.45)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const darkCardPopVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    borderColor: "rgba(255,255,255,0.08)",
  },
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow: "0px 28px 60px rgba(0,0,0,0.7)",
    borderColor: "rgba(198,162,93,0.5)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const numberVariants = {
  rest: { color: "#C6A25D" },
  hover: {
    color: "#E7C97A",
    scale: 1.1,
    transition: { duration: 0.2 },
  },
};

const titleVariants = {
  rest: { x: 0 },
  hover: { x: 4, transition: { duration: 0.25, ease: "easeOut" } },
};

function CharanSparshPage() {
  return (
    <Layout>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@700;900&display=swap');`}</style>

      {/* ── Hero ── */}
      <section className="relative min-h-[90svh] bg-navy-deep text-ivory grain overflow-hidden flex items-end">
        <motion.img
          src={rahul1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
        <div className="relative max-w-[1400px] mx-auto px-6 pb-24 pt-40 w-full">
          <Reveal>
            <div
              className="text-white leading-none mb-10 select-none"
              style={{
                fontFamily: "'Noto Serif Devanagari', serif",
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 11vw, 10rem)",
                letterSpacing: "-0.01em",
              }}
            >
              चरण स्पर्श
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">The Signature Experience</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light max-w-5xl">
              Touch the feet
              <br />
              <span className="font-serif-italic text-gradient-gold">that walked you here.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── 90 Minutes ── */}
      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="font-display text-7xl text-gradient-gold">90</div>
            <div className="text-sm tracking-[0.3em] uppercase text-muted-foreground mt-2">Minutes</div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-2xl font-display font-light leading-snug text-foreground">
              In an age that has taught us to bow only to screens and salaries, Charan Sparsh is a quiet rebellion — a 90-minute live experience that returns the body, the heart, and the family to the same room.
            </p>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Rahul Kapoor moves through the room like a guide through a forgotten landscape. Children meet parents they had defined too early. Parents meet children they had stopped seeing. By the time the lights come up, no one looks the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── What Happens Inside ── */}
      <section className="bg-navy-deep text-ivory py-32 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-16">
              What happens inside the room.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roomCards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <motion.div
                  className="bg-[#080e1f] border border-white/[0.08] p-10 h-full cursor-default rounded-sm"
                  variants={darkCardPopVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    className="font-display text-3xl mb-5"
                    variants={numberVariants}
                  >
                    0{i + 1}
                  </motion.div>
                  <motion.div
                    className="font-display text-2xl mb-3 text-ivory"
                    variants={titleVariants}
                  >
                    {c.t}
                  </motion.div>
                  <div className="text-ivory/65 text-sm leading-relaxed">{c.d}</div>

                  {/* Gold bottom accent line on hover */}
                  <motion.div
                    className="mt-8 h-px bg-gradient-to-r from-[#C6A25D] to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenge Cards ── */}
      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">After the Room</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light max-w-3xl mb-16">
              The 7, 14, and 21-day family bonding challenges.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {challengeCards.map((c, i) => (
              <Reveal key={c.d} delay={i * 0.1}>
                <motion.div
                  className="border border-border p-10 h-full bg-card cursor-default"
                  variants={cardPopVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  style={{ borderRadius: 2 }}
                >
                  {/* Day label with sliding underline */}
                  <div className="relative inline-block mb-4">
                    <div className="text-sm tracking-[0.25em] uppercase text-muted-foreground">{c.d}</div>
                    <motion.div
                      className="absolute -bottom-0.5 left-0 h-px bg-foreground"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>

                  <motion.div
                    className="font-display text-3xl mb-3"
                    variants={titleVariants}
                  >
                    {c.t}
                  </motion.div>
                  <p className="text-foreground/70">{c.p}</p>

                  {/* Arrow that appears on hover */}
                  <motion.div
                    className="mt-6 text-foreground/30 text-sm tracking-widest"
                    initial={{ opacity: 0, x: -6 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    ——
                  </motion.div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-deep text-ivory py-32 relative overflow-hidden grain">
        <img src={rahul9} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40" />
        <div className="relative max-w-[1100px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] font-light leading-[1] max-w-4xl">
              The room is waiting.
              <br />
              <span className="font-serif-italic text-gradient-gold">Bring everyone you love.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform"
              >
                Bring Charan Sparsh to your city →
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-ivory/30 hover:bg-ivory/5 transition-colors"
              >
                Upcoming dates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}