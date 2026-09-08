import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const KEY = "mianail-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
    if (value === "accepted") {
      window.dispatchEvent(new Event("mianail-consent-granted"));
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informativa cookie"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] md:inset-x-auto md:right-6 md:bottom-6"
    >
      <p className="text-sm leading-relaxed text-muted-foreground">
        Usiamo cookie tecnici necessari al funzionamento del sito e, previo consenso,
        cookie di statistica per capire come viene utilizzato. Dettagli nella{" "}
        <Link to="/privacy-policy" className="text-primary underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Accetta
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary"
        >
          Solo necessari
        </button>
      </div>
    </div>
  );
}
