import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import reel1 from "@/assets/videos/reel1.mp4";
import reel2 from "@/assets/videos/reel2.mp4";
import reel3 from "@/assets/videos/reel3.mp4";
import reel4 from "@/assets/videos/reel4.mp4";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Stories — What Families Say After Charan Sparsh" },
      { name: "description", content: "Real stories from real families across India, USA, UAE, Australia, and Thailand." },
      { property: "og:title", content: "Stories from inside the room." },
      { property: "og:description", content: "What families say after Charan Sparsh and Family Groww." },
    ],
  }),
  component: TestimonialsPage,
});

const stories = [
  { q: "I held my mother's feet for the first time in 31 years. She held my face like I was four again. I have not stopped crying — or smiling.", a: "Anil M.", r: "CEO, Mumbai" },
  { q: "I came for my parents. I left realizing I was the one who needed to come back.", a: "Priya S.", r: "Banker, Dubai" },
  { q: "Rahul does not give a talk. He gives you back the people you forgot to love loudly.", a: "Dr. R. Iyer", r: "Surgeon, Bangalore" },
  { q: "My 16-year-old put down his phone for 90 minutes. Then he hugged me. We have not stopped talking since.", a: "Meera P.", r: "Mother, Sydney" },
  { q: "I run a 4,000-person company. I had not asked my father how he was in two years. That ended that night.", a: "Karan V.", r: "Founder, Bengaluru" },
  { q: "It felt less like a session and more like a homecoming none of us knew we needed.", a: "The Sharma Family", r: "Houston" },
  { q: "Rahul has the rarest gift — he makes silence feel safe enough to speak in.", a: "Asha N.", r: "Educator, Pune" },
  { q: "I lost my father six months later. The last time I touched his feet was that evening with Rahul. I will carry that gift forever.", a: "Vikram T.", r: "Entrepreneur, Delhi" },
  { q: "My teenage daughter said, 'Dad, you finally listened.' I did not realize how loudly I had been talking.", a: "Rohan G.", r: "Architect, Dubai" },
];

const reels = [reel1, reel2, reel3, reel4];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function PlayIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <path d="M1.5 1.5L11.5 7L1.5 12.5V1.5Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect x="2" y="1.5" width="3.5" height="11" rx="1" fill="white" />
      <rect x="8.5" y="1.5" width="3.5" height="11" rx="1" fill="white" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.5 5.5H4.2L8 2V14L4.2 10.5H1.5V5.5Z" fill="white" />
      <path d="M10.5 5.2C11.6 5.9 12.3 6.9 12.3 8C12.3 9.1 11.6 10.1 10.5 10.8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12.8 3C14.6 4.4 15.5 6.1 15.5 8C15.5 9.9 14.6 11.6 12.8 13" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.5 5.5H4.2L8 2V14L4.2 10.5H1.5V5.5Z" fill="white" />
      <path d="M11 5.5L14.5 9M14.5 5.5L11 9" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ReelCard({ src, index }: { src: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
  }, []);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div
      className="relative flex-shrink-0 w-[210px] sm:w-[230px] md:w-auto aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group snap-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 pointer-events-none" />

      <div className="absolute top-4 left-4">
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/40 font-medium">
          0{index + 1}
        </span>
      </div>

      <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,162,93,0.2)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/22 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
        >
          {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
        </button>

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="w-[38px] h-[38px] rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/22 active:scale-95 transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.4)]"
        >
          {isPlaying ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>

      {isPlaying && (
        <div className="absolute inset-0 rounded-2xl ring-1 ring-[#C6A25D]/30 pointer-events-none animate-pulse" />
      )}
    </div>
  );
}

function StoryCard({ s, delay }: { s: (typeof stories)[0]; delay: number }) {
  return (
    <Reveal delay={delay} className="break-inside-avoid mb-6">
      <figure
        className="
          relative overflow-hidden
          bg-gradient-to-br from-[#020617] via-[#020617] to-[#0A0F1F]
          border border-white/10
          p-10
          shadow-[0_20px_60px_rgba(0,0,0,0.6)]
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)]
          hover:scale-[1.02] hover:-translate-y-1
          transition-all duration-500
          group
        "
      >
        <div className="pointer-events-none absolute -top-16 -left-16 w-48 h-48 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,162,93,0.18)_0%,transparent_70%)]" />

        <div className="text-[#C6A25D] text-7xl font-display leading-none mb-4 opacity-70 select-none">
          "
        </div>

        <blockquote className="text-white/90 text-[1.1rem] leading-[1.85] font-serif-italic">
          {s.q}
        </blockquote>

        <figcaption className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
          <div
            className="
              w-11 h-11 rounded-full flex-shrink-0
              bg-gradient-to-br from-[#C6A25D] via-[#E7C97A] to-[#B8964F]
              flex items-center justify-center
              text-black text-sm font-semibold tracking-wide
              select-none
            "
          >
            {getInitials(s.a)}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium leading-tight">{s.a}</span>
            <span className="text-white/60 text-sm mt-0.5">{s.r}</span>
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function TestimonialsPage() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="bg-ivory pt-40 pb-20 grain">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-foreground/30" /> Stories from the Room
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] font-light max-w-5xl">
              The proof is the
              <br />
              <span className="font-serif-italic text-gradient-gold">silence after the hug.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── Testimonial Cards ── */}
      <section className="bg-ivory pb-32 grain">
        <div className="max-w-[1400px] mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {stories.map((s, i) => (
            <StoryCard key={i} s={s} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </section>

      {/* ── Reels Video Section ── */}
      <section className="bg-[#020617] py-28 grain overflow-x-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <Reveal>
            <div className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-white/20" /> Inside the Room
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] font-light text-white max-w-3xl mb-16">
              Feel it before
              <br />
              <span className="font-serif-italic text-gradient-gold">you arrive.</span>
            </h2>
          </Reveal>

          {/* Reel grid: horizontal scroll mobile / 4-col desktop */}
          <div className="
            flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6
            md:grid md:grid-cols-4 md:overflow-visible md:gap-5
            scrollbar-hide
          ">
            {reels.map((src, i) => (
              <ReelCard key={i} src={src} index={i} />
            ))}
          </div>

          {/* Subtle bottom caption */}
          <Reveal delay={0.2}>
            <p className="mt-10 text-white/25 text-sm tracking-wide text-center">
              Hover to play · Sound on by default
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-navy-deep text-ivory py-28 text-center grain">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-light max-w-3xl mx-auto px-6">
            Your story is the next page.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.03] transition-transform"
          >
            Enquire Now →
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}