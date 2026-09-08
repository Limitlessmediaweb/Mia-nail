import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { WHATSAPP_URL, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Servizi", hash: "servizi" },
  { label: "Chi siamo", hash: "chi-siamo" },
  { label: "Galleria", hash: "galleria" },
  { label: "Recensioni", hash: "recensioni" },
  { label: "Dove siamo", hash: "dove-siamo" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/95 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navigazione principale"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"
      >
        <Link to="/" className="font-logo text-3xl leading-none text-gradient-gold">
          Mia Nail
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.hash}>
              {onHome ? (
                <a
                  href={`#${l.hash}`}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to="/"
                  hash={l.hash}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <Link
              to="/servizi"
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              Listino
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            aria-label={`Chiama Mia Nail al ${SITE.phoneDisplay}`}
            className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Prenota ora
          </a>
          <button
            type="button"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary lg:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {LINKS.map((l) => (
              <li key={l.hash}>
                {onHome ? (
                  <a
                    href={`#${l.hash}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to="/"
                    hash={l.hash}
                    className="block rounded-lg px-3 py-3 text-sm text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/servizi"
                className="block rounded-lg px-3 py-3 text-sm text-foreground hover:bg-secondary"
              >
                Listino completo
              </Link>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
          >
            Prenota su WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
