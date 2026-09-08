# Mia Nail Studio

# PROMPT PER LOVABLE — Sito Web Premium "Mia Nail"

> Incolla questo prompt intero in Lovable per generare il progetto del sito.

---

## 0. RUOLO

Agisci come un team combinato di **Senior UI/UX Designer** + **Senior Frontend Developer**, specializzato in siti vetrina premium per il settore beauty/nail. Obiettivo: costruire un sito **a conversione**, esteticamente **premium**, estremamente curato nei dettagli e nelle micro-animazioni, per un salone di manicure/nail art realmente esistente. Non deve avere l'aspetto di un template generico: ogni sezione deve riflettere il brand reale mostrato nelle foto allegate.

---

## 1. CONTESTO AZIENDALE (dati reali — usa solo questi, non inventare nulla)

- **Nome**: Mia Nail
- **Tipo attività**: Salone di manicure / nail art — mani, piedi, ceretta, massaggi, ricostruzione gel, extension ciglia, trucco permanente
- **Indirizzo**: Piazzale Trieste, 25, 27049 Stradella (PV)
- **Telefono / WhatsApp**: 329 223 2393
- **Orari**: tutti i giorni 8:30–20:30
- **Rating Google**: 4,3/5 su 26 recensioni
- **Social**: Facebook @MiaNailStradella · Instagram @mianail.stradella
- **Descrizione breve (da Google)**: "Attività principale: mani, piedi, ceretta, massaggio, gel"
- **Target**: clientela locale di Stradella e provincia di Pavia

---

## 2. DIREZIONE CREATIVA (basata sulle 3 foto reali del salone allegate)

Le foto mostrano: una reception bianca minimal con adesivo "welcome", un gatto della fortuna dorato e un salvadanaio a maialino dorato sul bancone, fiori freschi (gigli e calle), postazioni manicure bianche con centinaia di smalti su mensole a vista, e una zona più recente in stile boutique con nicchie retroilluminate color crema/oro, sedute in velluto grigio con gambe nere/oro e un divanetto beige.

- **Palette**: bianco/panna come base, accenti oro/champagne (richiamando il gatto della fortuna e le luci calde), un tocco rosa cipria/nude per CTA e dettagli, verde tenue per le piante come elemento naturale ricorrente
- **Font**: uno script/corsivo elegante per il logotipo "Mia Nail" (coerente con quello del listino ufficiale), abbinato a un sans-serif pulito per i testi (es. Playfair Display o Cormorant per i titoli + Inter o Poppins per il corpo)
- **Stile**: minimal-luxury, molta luce, molto white space, animazioni fluide e "morbide" (mai aggressive), sensazione di salone curato e professionale

---

## 3. STACK TECNICO

Usa lo stack di default (React + Vite + TypeScript + Tailwind CSS + shadcn/ui):

- **Installa il pacchetto npm `gsap`** e usane i plugin **ScrollTrigger** e **SplitText** per le animazioni (dal 2025 sono inclusi gratuitamente nel pacchetto core, nessuna licenza aggiuntiva richiesta)
- Usa i componenti shadcn/ui già disponibili dove sensato (Accordion per la FAQ, Carousel per le recensioni, Dialog per la lightbox della galleria), personalizzandoli con la palette del brand invece di lasciarli con lo stile di default
- React Router per le pagine (Home, Servizi, Privacy Policy, Termini e Condizioni, 404)
- lucide-react per le icone (già incluso di default)
- Gestisci i meta tag per pagina (title, description, Open Graph) aggiornando dinamicamente il `<head>` per ogni route
- Non serve alcun backend/database: è un sito vetrina statico, le CTA di prenotazione puntano a WhatsApp e telefono
- Componenti riutilizzabili e ben separati, logica di animazione isolata in hook custom riutilizzabili (es. `useScrollReveal`, `useSplitText`)

---

## 4. ANIMAZIONE HERO (apertura del sito)

Deve essere a tema con l'attività, non generica, e leggera in termini di performance (niente video pesanti, sì a SVG/canvas ottimizzati). Scegli la direzione più elegante da realizzare in puro codice, che si concluda entro 1,5–2 secondi:

- Un tratto di smalto che si "dipinge" lungo un'unghia stilizzata in SVG (stroke-dashoffset animato), in sincrono con la headline che si rivela lettera per lettera via SplitText
- Micro-particelle dorate/glitter che fluttuano lentamente sullo sfondo (canvas leggero o CSS), a richiamo del gatto della fortuna dorato
- Headline con reveal a "tendina" (clip-path animato) + sottotitolo in fade-up + doppia CTA che appare con un leggero bounce controllato

---

## 5. ANIMAZIONI GSAP RICHIESTE IN TUTTO IL SITO

- **ScrollTrigger**: reveal in ingresso per ogni sezione (fade + leggero translateY, con stagger sugli elementi figli, es. le card servizi)
- **Parallax** leggero sulle immagini della galleria durante lo scroll
- **Navbar sticky** che cambia stile (da trasparente a bianca con ombra) dopo lo scroll iniziale, con transizione fluida
- **Counter animato** per il rating (0 → 4,3) e per il numero di recensioni (0 → 26) quando entrano in viewport
- **Hover premium** sulle card servizi/prezzi (scale leggero + ombra + bordo che si illumina in oro)
- **Text split animation** (parola per parola) sui titoli di ogni sezione, al loro ingresso in viewport
- **Carosello recensioni** con transizione fluida (autoplay, pausa on hover, swipe su mobile)
- **Lightbox** per la galleria immagini con apertura animata

---

## 6. STRUTTURA DEL SITO / SEZIONI OBBLIGATORIE

1. **Navbar sticky** — Logo, Servizi, Chi siamo, Galleria, Recensioni, Dove siamo, CTA "Prenota ora"
2. **Hero animata** — headline + sottotitolo + doppia CTA ("Prenota ora" via WhatsApp/telefono + "Scopri i servizi")
3. **Chi siamo / Il salone** — breve testo caldo + le 3 foto reali del salone allegate come galleria
4. **Servizi e prezzi** — tabs o accordion per categoria (usa i dati reali della sezione 8)
5. **Galleria** — grid con lightbox, usa le foto reali allegate come contenuto effettivo (non placeholder generici)
6. **Recensioni** — badge "4,3★ su 26 recensioni Google" + le recensioni reali della sezione 7, in carosello/card
7. **Dove siamo** — mappa Google Maps embed su Piazzale Trieste 25, Stradella (PV) + orari + indicazioni stradali
8. **CTA finale** — "Prenota il tuo appuntamento", bottone WhatsApp click-to-chat precompilato + numero cliccabile + link social
9. **FAQ** — accordion, scrivi 6-8 domande plausibili per questo tipo di salone (es. Come prenoto? Accettate pagamenti con carta? Quanto dura la semipermanente? Fate ceretta anche per uomo? Serve prenotare con anticipo? Fate trucco permanente per eventi?)
10. **Footer** — logo, indirizzo, telefono, orari, social, link a Privacy Policy e Termini, copyright

**Pagine separate**: `/privacy-policy`, `/termini-e-condizioni`, `/404` (custom, animata, coerente col brand, con CTA per tornare in home)

---

## 7. RECENSIONI REALI DA INSERIRE

> Nota: i testi sotto sono estratti da Google e in due casi risultano troncati ("... Altro"). Verifica/completa il testo integrale prima della pubblicazione definitiva, oppure mostra le frasi così come sono, che restano comunque leggibili e credibili.

- **Sara Tipanta** — ★★★★★ (4 mesi fa): *"Extension ciglia perfette! Ho richiesto un effetto il più naturale possibile, ed è uno dei risultati migliori che abbia mai ottenuto."*
- **Angela Manganelli** — ★★★★★ (7 mesi fa): *"Sono rimasta super soddisfatta! Ho fatto con effetto occhio di gatto trasparente."*
- **Leonela Jaramillo** — ★★★☆☆ (2 mesi fa): *"Lavoro preciso, ma lo smalto non dura e rovina le unghie. Metto 3 stelle solo per la precisione del lavoro e la gentilezza del personale."*

Valuta se mostrare tutte e tre (trasparenza, coerente col rating reale 4,3/5) o solo le due a 5 stelle nel carosello principale, lasciando comunque il badge onnicomprensivo "4,3/5 su 26 recensioni Google" con link a "Vedi tutte le recensioni".

---

## 8. LISTINO SERVIZI COMPLETO (dati reali — sconto 25% attivo, mostra prezzo pieno barrato + prezzo scontato in evidenza)

### Manicure
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Cambio smalto | €8 | €6 |
| Cambio french | €10 | €7,50 |
| Manicure senza smalto | €12 | €9 |
| Manicure con smalto | €15 | €11,25 |
| Manicure french | €18 | €13,50 |
| Manicure semipermanente | €35 | €26,25 |
| Manicure semipermanente french | €40 | €30 |
| Rimozione semipermanente | €10 | €7,50 |
| Rimozione semipermanente + smalto | €15 | €11,25 |
| Rimozione semipermanente + manicure | €20 | €15 |
| Rimozione semipermanente + manicure french | €25 | €18,75 |
| Cambio smalto semipermanente | €29 | €21,75 |
| Cambio french semipermanente | €35 | €26,25 |
| Solo taglio unghie | €5 | €3,75 |

### Ricostruzione Gel
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Ricostruzione con cartina colore | €69 | €51,75 |
| Ricostruzione con cartina french | €74 | €55,50 |
| Copertura unghie colore | €55 | €41,25 |
| Copertura unghie french | €60 | €45 |
| Ritocco colore | €45 | €33,75 |
| Ritocco french | €50 | €37,50 |
| Rimozione gel | €15 | €11,25 |
| Rimozione gel con manicure | €20 | €15 |
| Rimozione gel con semipermanente | €25 | €18,75 |
| Rimozione gel con semipermanente senza manicure | €50 | €37,50 |
| Rimozione gel con semipermanente (altra tariffa) | €45 | €33,75 |
| Gel piedi | +€15 | +€11,25 |

### Pedicure
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Cambio smalto | €10 | €7,50 |
| Cambio french | €12 | €9 |
| Pedicure senza smalto | €24 | €18 |
| Pedicure con smalto | €26 | €19,50 |
| Pedicure spa + 20 min massaggio | €38 | €28,50 |
| Pedicure spa french | — | — |
| Pedicure curativo senza smalto | €29 | €21,75 |
| Solo curativo | €29 | €21,75 |
| Pedicure semipermanente | €45 | €33,75 |
| Pedicure semipermanente french | €50 | €37,50 |
| Rimozione semipermanente | €10 | €7,50 |
| Rimozione semipermanente + smalto | €17 | €12,75 |
| Rimozione semipermanente + pedicure french | €39 | €29,25 |
| Cambio smalto semipermanente | €34 | €25,50 |
| Cambio french semipermanente | €40 | €30 |
| Rimozione semipermanente + pedicure normale | €35 | €26,25 |
| Solo taglio unghie | €7 | €5,25 |

### Piedi (un dito)
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Copertura | €7 | €5,25 |
| Copertura french | €8 | €6 |
| Ricostruzione | €9 | €6,75 |
| Ricostruzione french | €10 | €7,50 |
| Semipermanente | €5 | €3,75 |
| Semipermanente french | €6 | €4,50 |

### Mani (un dito)
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Copertura | €6 | €4,50 |
| Copertura french | €7 | €5,25 |
| Ricostruzione | €8 | €6 |
| Ricostruzione french | €9 | €6,75 |
| Semipermanente | €4 | €3 |
| Semipermanente french | €5 | €3,75 |

### Epilazione / Ceretta
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Sopracciglio | €8 | €6 |
| Baffetti | €8 | €6 |
| Ascelle | €8 | €6 |
| Braccia | €12 | €9 |
| Inguine parziale | €12 | €9 |
| Inguine totale | €15 | €11,25 |
| 1/2 Gamba | €15 | €11,25 |
| Gamba intera | €25 | €18,75 |
| Schiena | €15 | €11,25 |
| Pancia | €7 | €5,25 |
| Pettorali | €8 | €6 |
| Dita | €5 | €3,75 |
| Donna glutei | €5-8 | €3,75-6 |
| Faccia | €20 | €15 |
| Barba + mento | €8 | €6 |
| Braccia uomo | €15 | €11,25 |
| Schiena uomo | €20 | €15 |

### Massaggio
| Servizio | Durata | Prezzo pieno | Prezzo scontato |
|---|---|---|---|
| Viso | 30 min | €30 | €22,50 |
| Riflessologia plantare | 45 min | €40 | €30 |
| Schiena | 30 min | €30 | €22,50 |
| Gamba | 30/45 min | €30-40 | €22,50-30 |
| Corpo | 45/60 min | €40-55 | €30-41,25 |
| Antistress | 45/60 min | €40-55 | €30-41,25 |
| Drenante | 45/60 min | €40-55 | €30-41,25 |
| Rilassante | 45/60 min | €40-55 | €30-41,25 |

### Altri servizi
| Servizio | Prezzo pieno | Prezzo scontato |
|---|---|---|
| Pulizia viso | €30 | €22,50 |
| Extension ciglia naturale | €70 | €52,50 |
| Extension ciglia cespuglioso | €80 | €60 |
| Trucco permanente | €250-380 | €187,50-285 |

---

## 9. CHECKLIST TECNICA/SEO/LEGAL OBBLIGATORIA

Il cliente ha richiesto esplicitamente questi 10 punti:

1. Privacy Policy (pagina dedicata)
2. Terms & Conditions (pagina dedicata)
3. CTA chiare in ogni sezione rilevante
4. FAQ
5. `robots.txt`
6. `sitemap.xml`
7. Pagina 404 personalizzata
8. Alt text su tutte le immagini
9. Analytics (integra Google Analytics 4, con placeholder per l'ID di tracciamento)
10. Meta titles ottimizzati per ogni pagina

**Completa a standard premium per un sito locale con questi 10 aggiuntivi:**

11. Meta description ottimizzate per ogni pagina
12. Open Graph + Twitter Card tags (per anteprima corretta su WhatsApp/social)
13. Dati strutturati Schema.org JSON-LD (`LocalBusiness` / `BeautySalon`, con `aggregateRating` 4,3/26 e orari di apertura)
14. Favicon e app icon complete (+ `manifest.json` base, pronto per PWA)
15. Cookie banner conforme GDPR con link alla Privacy Policy
16. CTA di contatto realmente funzionanti (link WhatsApp `wa.me` precompilato, `tel:` cliccabile)
17. Ottimizzazione immagini: lazy loading, formati moderni (webp/avif), compressione
18. Responsive testato su tutti i breakpoint principali (375px, 768px, 1024px, 1440px)
19. Accessibilità: contrasti AA, `aria-label` sui bottoni icona, navigazione completa da tastiera
20. Canonical URL su ogni pagina + predisposizione HTTPS (nota per il deploy finale)

---

## 10. PERFORMANCE E QUALITÀ

- Mobile-first
- Lighthouse target: Performance >90, Accessibility >95, SEO >95, Best Practices >95
- Nessuna Cumulative Layout Shift dovuta alle animazioni GSAP (riserva sempre lo spazio degli elementi animati)
- Font caricati con `font-display: swap`

---

## 11. DELIVERABLE ATTESO

- Progetto completo e funzionante, con tutte le pagine e sezioni elencate sopra, con i contenuti reali di Mia Nail (non lorem ipsum)
- `robots.txt` e `sitemap.xml` generati correttamente (usa un dominio placeholder tipo `mianail-stradella.it`, facilmente sostituibile)
- Codice pulito, componentizzato
- Verifica il risultato nell'anteprima live di Lovable su desktop e mobile, correggendo eventuali problemi di layout prima di considerare il sito concluso

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/da82af26-187c-456c-b39a-4c4f4090c2d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
