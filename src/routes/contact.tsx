import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Begin Your Family's Transformation with Rahul Kapoor" },
      { name: "description", content: "Book Charan Sparsh, Family Groww, or private family coaching. We respond within 24 hours." },
      { property: "og:title", content: "Begin the journey home." },
      { property: "og:description", content: "Reach out to Rahul Kapoor's team for events, coaching, and partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="bg-ivory pt-40 pb-20 grain">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-foreground/30" /> Contact
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] font-light">
                Begin the journey
                <br />
                <span className="font-serif-italic text-gradient-gold">home.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-foreground/75 max-w-md leading-relaxed">
                Tell us about your family, your event, or the moment you have been meaning to create. Our team responds within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 space-y-6 text-foreground/80">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Email</div>
                  <div className="font-display text-xl">hello@rahulkapoor.live</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Phone</div>
                  <div className="font-display text-xl">+91 98XXX XXXXX</div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">Working In</div>
                  <div>India · USA · UAE · Australia · Thailand</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-card border border-border p-8 md:p-10 shadow-elegant space-y-6"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-gold text-5xl font-display mb-4">✦</div>
                  <h3 className="font-display text-3xl mb-3">Thank you.</h3>
                  <p className="text-foreground/70">We have your message. Someone from Rahul's team will write back within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Your name" name="name" />
                    <Field label="Family / Company" name="org" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">I am interested in</label>
                    <select className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors">
                      <option>Charan Sparsh — public event</option>
                      <option>Charan Sparsh — bring to my city</option>
                      <option>Family Groww — 1 or 2 day program</option>
                      <option>Private Family Coaching</option>
                      <option>Corporate / keynote</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">Tell us a little more</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-gradient-gold text-navy-deep font-medium shadow-gold hover:scale-[1.01] transition-transform">
                    Send Message →
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors" />
    </div>
  );
}
