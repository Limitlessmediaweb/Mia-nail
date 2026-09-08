import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";

const TITLE = "Privacy Policy | Mia Nail Stradella";
const DESCRIPTION =
  "Informativa sul trattamento dei dati personali del sito di Mia Nail, salone di manicure e nail art a Stradella (PV).";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-36 pb-24 md:pt-44">
      <h1 className="text-4xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Ultimo aggiornamento: settembre 2026
      </p>

      <div className="prose-mianail mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Titolare del trattamento</h2>
          <p className="mt-2">
            Titolare del trattamento è Mia Nail, {SITE.address.street}, {SITE.address.zip}{" "}
            {SITE.address.city} ({SITE.address.province}). Per qualsiasi richiesta relativa ai
            tuoi dati puoi contattarci al numero {SITE.phoneDisplay}.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Dati raccolti</h2>
          <p className="mt-2">
            Questo sito è una vetrina informativa e non richiede registrazione né prevede
            moduli di contatto. Se ci scrivi su WhatsApp o ci chiami, trattiamo i dati che ci
            fornisci (nome, numero di telefono, preferenze di appuntamento) al solo scopo di
            gestire la prenotazione. Navigando sul sito possono essere raccolti dati tecnici
            (indirizzo IP, tipo di browser, pagine visitate) tramite strumenti di statistica,
            solo previo tuo consenso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Cookie</h2>
          <p className="mt-2">
            Utilizziamo cookie tecnici necessari al funzionamento del sito, che non richiedono
            consenso, e cookie di statistica (Google Analytics 4) attivati solo se accetti
            tramite il banner. Puoi modificare la tua scelta in qualsiasi momento cancellando i
            dati del sito dal tuo browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Servizi di terze parti</h2>
          <p className="mt-2">
            Il sito include una mappa di Google Maps e collegamenti a WhatsApp, Facebook e
            Instagram. L'utilizzo di questi servizi comporta il trattamento dei dati da parte
            dei rispettivi fornitori, secondo le loro informative privacy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Conservazione e diritti</h2>
          <p className="mt-2">
            I dati relativi agli appuntamenti sono conservati per il tempo necessario alla
            gestione del servizio e agli obblighi di legge. Ai sensi del Regolamento (UE)
            2016/679 puoi chiedere in ogni momento accesso, rettifica, cancellazione,
            limitazione o opposizione al trattamento, oltre alla portabilità dei dati,
            contattandoci al numero indicato sopra. Hai inoltre diritto di reclamo al Garante
            per la protezione dei dati personali.
          </p>
        </section>
      </div>
    </article>
  );
}
