import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import rahul1 from "@/assets/rahul/rahul1.jpg";
import rahul9 from "@/assets/rahul/rahul9.jpg";

export const Route = createFileRoute("/charan-sparsh")({
  head: () => ({
    meta: [
      { title: "Charan Sparsh — Phase One. The Awakening." },
      { name: "description", content: "A live experience that works beneath the surface. Not a talk. A space where families encounter what years of silence have obscured." },
      { property: "og:title", content: "Charan Sparsh — The beginning of a rare process." },
      { property: "og:description", content: "The first phase of Rahul Kapoor's private family transformation. An emotional awakening designed for those who already sense what is at stake." },
    ],
  }),
  component: CharanSparshPage,
});

const roomCards = [
  { t: "The Science", d: "What gratitude and reverence do to the architecture of the nervous system — and why the body carries what the mind refuses to acknowledge." },
  { t: "The Psychology", d: "Why the people we love most become the ones we hide from — and how a single, held experience begins to dismantle that." },
  { t: "The Story", d: "Rahul's stories reach the part of a person that achievement has learned to bypass. They arrive without warning. They do not ask permission to stay." },
  { t: "The Gesture", d: "An ancient act, performed together — that rearranges decades of accumulated distance in a single, unhurried moment." },
];

const challengeCards = [
  { d: "7 Days", t: "The Opening", p: "Daily rituals to sustain what the experience has awakened. Small. Repeatable. Irreversible." },
  { d: "14 Days", t: "The Repair", p: "Conversations and gestures that begin to rebuild the trust that distance quietly eroded." },
  { d: "21 Days", t: "The Foundation", p: "A new rhythm that the family can carry forward — long after the room has gone quiet." },
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
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6">Phase One · The Awakening</div>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light max-w-5xl">
              The beginning
              <br />
              <span className="font-serif-italic text-gradient-gold">of the return.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── What It Is ── */}
      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <div className="font-display text-7xl text-gradient-gold">90</div>
            <div className="text-sm tracking-[0.3em] uppercase text-muted-foreground mt-2">Minutes</div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <p className="text-2xl font-display font-light leading-snug text-foreground">
              Not a talk. Not a seminar. A carefully constructed space in which families encounter what years of distance, ambition, and silence have quietly obscured.
            </p>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Rahul moves through the room with the precision of someone who has spent decades observing what families carry and what they refuse to set down. Those who enter rarely leave the same. What shifts in that room tends to stay shifted.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── What Happens Inside ── */}
      <section className="bg-navy-deep text-ivory py-32 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light mb-16">
              What unfolds inside the room.
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

      {/* ── After the Room ── */}
      <section className="bg-ivory py-32 grain">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">After the Experience</div>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light max-w-3xl mb-16">
              The 7, 14, and 21-day continuance practices.
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
              The space is held.
              <br />
              <span className="font-serif-italic text-gradient-gold">For those who are ready to enter.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform"
              >
                Bring Charan Sparsh to your gathering →
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-ivory/30 hover:bg-ivory/5 transition-colors"
              >
                View upcoming dates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
