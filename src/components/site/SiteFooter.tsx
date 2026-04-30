import { Link } from "@tanstack/react-router";
import logo from "@/assets/rahul/logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-ivory grain relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-navy opacity-90" />
      <div className="relative max-w-[1400px] mx-auto px-6 pt-24 pb-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <img src={logo} alt="Charan Sparsh" className="h-16 w-auto mb-6 brightness-110" />
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-6">
              Your family is waiting.
              <br />
              <span className="font-serif-italic text-gold-light">So is your time.</span>
            </h3>
            <p className="text-ivory/60 max-w-md leading-relaxed">
              Begin the journey home. To the people who shaped you, and the ones you are shaping.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Explore</div>
            <ul className="space-y-3 text-ivory/80">
              <li><Link to="/charan-sparsh" className="hover:text-gold transition-colors">Charan Sparsh</Link></li>
              <li><Link to="/family-groww" className="hover:text-gold transition-colors">Family Groww</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Rahul</Link></li>
              <li><Link to="/events" className="hover:text-gold transition-colors">Events & Workshops</Link></li>
              <li><Link to="/testimonials" className="hover:text-gold transition-colors">Stories</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Connect</div>
            <ul className="space-y-3 text-ivory/80">
              <li>hello@rahulkapoor.live</li>
              <li>+91 98XXX XXXXX</li>
              <li>India · USA · UAE · Australia · Thailand</li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-gold text-navy-deep text-sm font-medium shadow-gold"
            >
              Enquire Now →
            </Link>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Rahul Kapoor. Crafted with intention.</div>
          <div className="font-serif-italic">"Strong families. Stronger lives."</div>
        </div>
      </div>
    </footer>
  );
}
