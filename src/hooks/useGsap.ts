import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
export function ensureGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return gsap;
}

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Reveals the element (and optionally its children, with stagger) on scroll.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  childSelector?: string;
  y?: number;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<T | null>(null);
  const { childSelector, y = 28, stagger = 0.12, delay = 0 } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    ensureGsap();

    const targets: Element[] = childSelector
      ? Array.from(el.querySelectorAll(childSelector))
      : [el];
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [childSelector, y, stagger, delay]);

  return ref;
}

/** Word-by-word reveal for headings. */
export function useSplitText<T extends HTMLElement = HTMLHeadingElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    ensureGsap();

    const original = el.getAttribute("data-split-source") ?? el.textContent ?? "";
    el.setAttribute("data-split-source", original);

    if (prefersReducedMotion()) return;

    const words = original.split(" ").filter(Boolean);
    el.textContent = "";
    const spans = words.map((word, i) => {
      const outer = document.createElement("span");
      outer.style.display = "inline-block";
      outer.style.overflow = "hidden";
      outer.style.verticalAlign = "top";
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.textContent = word + (i < words.length - 1 ? "\u00A0" : "");
      outer.appendChild(inner);
      el.appendChild(outer);
      return inner;
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    }, el);

    return () => {
      ctx.revert();
      el.textContent = original;
    };
  }, []);

  return ref;
}

/** Counts a number up when it enters the viewport. */
export function useCountUp<T extends HTMLElement = HTMLSpanElement>(
  value: number,
  decimals = 0,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    ensureGsap();
    const format = (n: number) =>
      decimals > 0 ? n.toFixed(decimals).replace(".", ",") : Math.round(n).toString();

    if (prefersReducedMotion()) {
      el.textContent = format(value);
      return;
    }

    const state = { n: 0 };
    el.textContent = format(0);
    const ctx = gsap.context(() => {
      gsap.to(state, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(state.n);
        },
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [value, decimals]);

  return ref;
}

/** Subtle parallax on scroll. */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 40) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    ensureGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -strength / 10 },
        {
          yPercent: strength / 10,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, [strength]);

  return ref;
}
