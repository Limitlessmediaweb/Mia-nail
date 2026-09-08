export const SITE = {
  name: "Mia Nail",
  legalName: "Mia Nail",
  tagline: "Nail art e bellezza a Stradella",
  domain: "https://mianail-stradella.it",
  address: {
    street: "Piazzale Trieste, 25",
    zip: "27049",
    city: "Stradella",
    province: "PV",
    country: "IT",
  },
  phoneDisplay: "329 223 2393",
  phoneHref: "tel:+393292232393",
  whatsapp: "393292232393",
  whatsappMessage: "Ciao Mia Nail! Vorrei prenotare un appuntamento.",
  hours: "Tutti i giorni 8:30 – 20:30",
  rating: 4.3,
  reviewCount: 26,
  facebook: "https://www.facebook.com/MiaNailStradella",
  instagram: "https://www.instagram.com/mianail.stradella",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Mia+Nail+Piazzale+Trieste+25+Stradella",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Piazzale+Trieste+25+27049+Stradella+PV",
  mapEmbed:
    "https://www.google.com/maps?q=Piazzale%20Trieste%2025%2C%2027049%20Stradella%20PV&output=embed",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const REVIEWS = [
  {
    name: "Sara Tipanta",
    stars: 5,
    when: "4 mesi fa",
    text: "Extension ciglia perfette! Ho richiesto un effetto il più naturale possibile, ed è uno dei risultati migliori che abbia mai ottenuto.",
  },
  {
    name: "Angela Manganelli",
    stars: 5,
    when: "7 mesi fa",
    text: "Sono rimasta super soddisfatta! Ho fatto con effetto occhio di gatto trasparente.",
  },
  {
    name: "Leonela Jaramillo",
    stars: 3,
    when: "2 mesi fa",
    text: "Lavoro preciso, ma lo smalto non dura e rovina le unghie. Metto 3 stelle solo per la precisione del lavoro e la gentilezza del personale.",
  },
];

export const FAQS = [
  {
    q: "Come posso prenotare un appuntamento?",
    a: "Il modo più veloce è WhatsApp al 329 223 2393: ti rispondiamo con gli orari disponibili. Puoi anche chiamarci direttamente durante gli orari di apertura, tutti i giorni dalle 8:30 alle 20:30.",
  },
  {
    q: "È necessario prenotare con anticipo?",
    a: "Consigliamo di prenotare con qualche giorno di anticipo, soprattutto per ricostruzione gel, extension ciglia e nel fine settimana. Se hai poco tempo, scrivici: capita spesso di avere posti liberi in giornata.",
  },
  {
    q: "Quanto dura la manicure semipermanente?",
    a: "In media dalle 3 alle 4 settimane, a seconda della crescita naturale dell'unghia e delle attività quotidiane. Per mantenere il risultato al meglio consigliamo un controllo ogni 3 settimane.",
  },
  {
    q: "Fate ceretta anche per uomo?",
    a: "Sì. Abbiamo trattamenti dedicati: barba e mento, braccia, schiena e pettorali, con prezzi indicati nel listino.",
  },
  {
    q: "Come funziona lo sconto del 25%?",
    a: "Al momento tutti i servizi del listino sono scontati del 25%: nel listino trovi il prezzo pieno barrato e il prezzo scontato in evidenza, già applicato in cassa.",
  },
  {
    q: "Fate trucco permanente per eventi?",
    a: "Sì, offriamo il trucco permanente su appuntamento con consulenza preliminare. Consigliamo di programmarlo con alcune settimane di anticipo rispetto all'evento, per permettere la completa guarigione.",
  },
  {
    q: "Quanto dura una seduta di extension ciglia?",
    a: "Circa 90–120 minuti per l'applicazione completa, a seconda dell'effetto scelto (naturale o cespuglioso). I refill richiedono meno tempo.",
  },
  {
    q: "Dove siete e c'è parcheggio?",
    a: "Siamo in Piazzale Trieste 25 a Stradella (PV), in centro e facilmente raggiungibile, con parcheggi nelle immediate vicinanze della piazza.",
  },
];
