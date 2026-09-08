import { useEffect } from "react";

/** Google Analytics 4 — sostituisci con il tuo ID di misurazione. */
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

function loadGa() {
  if (
    GA_MEASUREMENT_ID.includes("XXXX") ||
    document.getElementById("ga4-script")
  ) {
    return;
  }
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);

  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function Analytics() {
  useEffect(() => {
    if (localStorage.getItem("mianail-cookie-consent") === "accepted") loadGa();
    const handler = () => loadGa();
    window.addEventListener("mianail-consent-granted", handler);
    return () => window.removeEventListener("mianail-consent-granted", handler);
  }, []);

  return null;
}
