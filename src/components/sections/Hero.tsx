import { useEffect, useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import { ensureGsap, prefersReducedMotion } from "@/hooks/useGsap";
import { SITE, WHATSAPP_URL } from "@/data/site";
import heroAsset from "@/assets/lavoro-cristalli.jpg.asset.json";

const heroImage = heroAsset.url;

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const strokeRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const el = root.current;
    const heading = headingRef.current;
    if (!el || !heading) return;
    ensureGsap();

    const source = heading.textContent ?? "";
    if (prefersReducedMotion()) {
      gsap.set(el.querySelectorAll("[data-hero-fade]"), { opacity: 1, y: 0 });
      return;
    }

    const chars = source.split("");
    heading.textContent = "";
    const spans = chars.map((c) => {
      const s = document.createElement("span");
      s.textContent = c === " " ? "\u00A0" : c;
      s.style.display = "inline-block";
      heading.appendChild(s);
      return s;
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        spans,
        { yPercent: 60, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.022 },
      );
      if (strokeRef.current) {
        const len = strokeRef.current.getTotalLength();
        gsap.set(strokeRef.current, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(strokeRef.current, { strokeDashoffset: 0, duration: 1.1 }, 0.1);
      }
      tl.fromTo(
        el.querySelectorAll("[data-hero-fade]"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
        0.5,
      );
      tl.fromTo(
        el.querySelectorAll("[data-hero-cta]"),
        { opacity: 0, y: 14, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.1 },
        0.75,
      );
      gsap.to(el.querySelectorAll("[data-sparkle]"), {
        y: -18,
        opacity: 0.9,
        duration: 3.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.4, from: "random" },
      });
    }, el);

    return () => {
      ctx.revert();
      heading.textContent = source;
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[var(--gradient-cream)] pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[
          "left-[8%] top-[22%]",
          "left-[24%] top-[68%]",
          "left-[46%] top-[14%]",
          "left-[62%] top-[78%]",
          "left-[86%] top-[36%]",
          "left-[74%] top-[18%]",
        ].map((pos, i) => (
          <span
            key={i}
            data-sparkle
            className={`absolute ${pos} size-2 rounded-full bg-gold-soft opacity-40 blur-[1px]`}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-soft bg-card px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
            <Star className="size-3.5 fill-primary text-primary" aria-hidden="true" />
            {SITE.rating.toString().replace(".", ",")}/5 su {SITE.reviewCount} recensioni Google
          </span>

          <h1
            ref={headingRef}
            className="mt-6 text-4xl leading-[1.08] font-semibold text-foreground md:text-6xl"
          >
            Mani curate, dettagli d'oro.
          </h1>

          <svg
            viewBox="0 0 220 20"
            className="mt-4 h-5 w-52 text-primary"
            aria-hidden="true"
            focusable="false"
          >
            <path
              ref={strokeRef}
              d="M4 12 C 60 2, 150 2, 216 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <p
            data-hero-fade
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground opacity-0 md:text-lg"
          >
            Salone di manicure e nail art a Stradella. Semipermanente, ricostruzione gel,
            pedicure, ceretta, massaggi ed extension ciglia — tutti i giorni dalle 8:30 alle
            20:30.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              data-hero-cta
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground opacity-0 shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Prenota ora
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              data-hero-cta
              href="#servizi"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground opacity-0 transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Scopri i servizi
            </a>
          </div>

          <p data-hero-fade className="mt-5 text-sm text-muted-foreground opacity-0">
            Oppure chiama al{" "}
            <a href={SITE.phoneHref} className="font-medium text-primary">
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        <div data-hero-fade className="relative opacity-0">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gold-soft/25 blur-2xl" aria-hidden="true" />
          <img
            src={heroImage}
            alt="Ricostruzione unghie stiletto con cristalli realizzata da Mia Nail a Stradella"
            width={1008}
            height={1008}
            fetchPriority="high"
            className="relative aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-gold-soft bg-card px-5 py-4 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sconto attivo</p>
            <p className="font-display text-2xl font-semibold text-primary">-25%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
