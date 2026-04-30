import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode, type ElementType } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "section";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <span>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.05em]">
          <motion.span
            className={`inline-block ${className ?? ""}`}
            initial={{ y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 1,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
            {i < words.length - 1 && "\u00A0"}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/**
 * Directional image reveal:
 *  - from="left": image fades + slides in from the left (use when image sits on the left)
 *  - from="right": fades + slides in from the right
 *  - from="center" (default): no movement, just a soft fade-in
 */
export function ImageReveal({
  src,
  alt,
  className,
  imgClassName,
  ratio,
  from = "center",
  distance = 80,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  from?: "left" | "right" | "center";
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const initial =
    from === "left"
      ? { opacity: 0, x: -distance }
      : from === "right"
      ? { opacity: 0, x: distance }
      : { opacity: 0 };

  const animate = inView
    ? from === "center"
      ? { opacity: 1 }
      : { opacity: 1, x: 0 }
    : {};

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className ?? ""}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={initial}
        animate={animate}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full h-full object-cover ${imgClassName ?? ""}`}
      />
    </div>
  );
}

/**
 * Premium CTA — stays in place, glows + slightly scales on hover.
 * No magnetic displacement.
 */
type MagneticProps = {
  children: ReactNode;
  className?: string;
  variant?: "gold" | "ghost" | "ink";
  as?: ElementType;
} & Record<string, unknown>;

export function MagneticButton({
  children,
  className,
  variant = "gold",
  as,
  ...rest
}: MagneticProps) {
  const styles =
    variant === "gold"
      ? "bg-gradient-gold text-ink shadow-gold"
      : variant === "ink"
      ? "bg-ink text-ivory border border-gold/40"
      : "border border-current text-current bg-transparent";

  const Comp: ElementType = as ?? "button";

  return (
    <Comp
      {...rest}
      className={`btn-premium inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide ${styles} ${className ?? ""}`}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
    </Comp>
  );
}