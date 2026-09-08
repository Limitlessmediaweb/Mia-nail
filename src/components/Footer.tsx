import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/data/site";
import logo from "@/assets/mia-nail-logo.webp";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Mia Nail"
            width={307}
            height={220}
            loading="lazy"
            className="h-24 w-auto object-contain"
          />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Salone di manicure e nail art a Stradella: mani, piedi, ceretta, massaggi,
            ricostruzione gel, extension ciglia e trucco permanente.
          </p>
        </div>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city} ({SITE.address.province})
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <a href={SITE.phoneHref} className="hover:text-primary">
              {SITE.phoneDisplay}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
            {SITE.hours}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex gap-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook di Mia Nail"
              className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="size-4" aria-hidden="true" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram di Mia Nail"
              className="rounded-full border border-border p-2.5 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" aria-hidden="true" />
            </a>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/servizi" className="hover:text-primary">
                Listino servizi
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/termini-e-condizioni" className="hover:text-primary">
                Termini e Condizioni
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mia Nail · {SITE.address.street},{" "}
        {SITE.address.city} ({SITE.address.province})
      </div>
    </footer>
  );
}
