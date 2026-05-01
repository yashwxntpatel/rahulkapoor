import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/charan-sparsh", label: "Charan Sparsh" },
  { to: "/family-groww", label: "Family First" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Accounts" },
  { to: "/events", label: "Gatherings" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-2xl border-b border-foreground/10 py-3 text-ink"
          : "bg-transparent py-6 text-ivory"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="leading-tight">
            <div className="font-display text-base tracking-[0.18em] uppercase">
              RAHUL KAPOOR
            </div>
            <div className="text-[10px] tracking-[0.28em] uppercase opacity-60">
              Private Family Transformation
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.slice(1, -1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm opacity-80 hover:opacity-100 transition-opacity relative group"
              activeProps={{ className: "opacity-100" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-premium hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-ink text-sm font-semibold shadow-gold"
          >
            Request Consideration
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-deep text-ivory"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-6 mt-10">
              {nav.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-ivory/90 hover:text-gold transition-colors"
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
