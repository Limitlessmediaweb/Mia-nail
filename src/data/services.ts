export type ServiceItem = {
  name: string;
  full: string;
  sale: string;
  note?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  blurb: string;
  items: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "manicure",
    label: "Manicure",
    blurb: "Cura delle mani, smalto tradizionale e semipermanente.",
    items: [
      { name: "Cambio smalto", full: "€8", sale: "€6" },
      { name: "Cambio french", full: "€10", sale: "€7,50" },
      { name: "Manicure senza smalto", full: "€12", sale: "€9" },
      { name: "Manicure con smalto", full: "€15", sale: "€11,25" },
      { name: "Manicure french", full: "€18", sale: "€13,50" },
      { name: "Manicure semipermanente", full: "€35", sale: "€26,25" },
      { name: "Manicure semipermanente french", full: "€40", sale: "€30" },
      { name: "Rimozione semipermanente", full: "€10", sale: "€7,50" },
      { name: "Rimozione semipermanente + smalto", full: "€15", sale: "€11,25" },
      { name: "Rimozione semipermanente + manicure", full: "€20", sale: "€15" },
      { name: "Rimozione semipermanente + manicure french", full: "€25", sale: "€18,75" },
      { name: "Cambio smalto semipermanente", full: "€29", sale: "€21,75" },
      { name: "Cambio french semipermanente", full: "€35", sale: "€26,25" },
      { name: "Solo taglio unghie", full: "€5", sale: "€3,75" },
    ],
  },
  {
    id: "gel",
    label: "Ricostruzione Gel",
    blurb: "Ricostruzione, copertura e ritocco con gel professionale.",
    items: [
      { name: "Ricostruzione con cartina colore", full: "€69", sale: "€51,75" },
      { name: "Ricostruzione con cartina french", full: "€74", sale: "€55,50" },
      { name: "Copertura unghie colore", full: "€55", sale: "€41,25" },
      { name: "Copertura unghie french", full: "€60", sale: "€45" },
      { name: "Ritocco colore", full: "€45", sale: "€33,75" },
      { name: "Ritocco french", full: "€50", sale: "€37,50" },
      { name: "Rimozione gel", full: "€15", sale: "€11,25" },
      { name: "Rimozione gel con manicure", full: "€20", sale: "€15" },
      { name: "Rimozione gel con semipermanente", full: "€25", sale: "€18,75" },
      {
        name: "Rimozione gel con semipermanente senza manicure",
        full: "€50",
        sale: "€37,50",
      },
      {
        name: "Rimozione gel con semipermanente",
        full: "€45",
        sale: "€33,75",
        note: "tariffa alternativa",
      },
      { name: "Gel piedi", full: "+€15", sale: "+€11,25" },
    ],
  },
  {
    id: "pedicure",
    label: "Pedicure",
    blurb: "Pedicure estetico, curativo e spa con massaggio.",
    items: [
      { name: "Cambio smalto", full: "€10", sale: "€7,50" },
      { name: "Cambio french", full: "€12", sale: "€9" },
      { name: "Pedicure senza smalto", full: "€24", sale: "€18" },
      { name: "Pedicure con smalto", full: "€26", sale: "€19,50" },
      { name: "Pedicure spa + 20 min massaggio", full: "€38", sale: "€28,50" },
      { name: "Pedicure spa french", full: "—", sale: "su richiesta" },
      { name: "Pedicure curativo senza smalto", full: "€29", sale: "€21,75" },
      { name: "Solo curativo", full: "€29", sale: "€21,75" },
      { name: "Pedicure semipermanente", full: "€45", sale: "€33,75" },
      { name: "Pedicure semipermanente french", full: "€50", sale: "€37,50" },
      { name: "Rimozione semipermanente", full: "€10", sale: "€7,50" },
      { name: "Rimozione semipermanente + smalto", full: "€17", sale: "€12,75" },
      { name: "Rimozione semipermanente + pedicure french", full: "€39", sale: "€29,25" },
      { name: "Cambio smalto semipermanente", full: "€34", sale: "€25,50" },
      { name: "Cambio french semipermanente", full: "€40", sale: "€30" },
      { name: "Rimozione semipermanente + pedicure normale", full: "€35", sale: "€26,25" },
      { name: "Solo taglio unghie", full: "€7", sale: "€5,25" },
    ],
  },
  {
    id: "piedi-dito",
    label: "Piedi",
    blurb: "Interventi singoli su una sola unghia del piede.",
    items: [
      { name: "Copertura", full: "€7", sale: "€5,25" },
      { name: "Copertura french", full: "€8", sale: "€6" },
      { name: "Ricostruzione", full: "€9", sale: "€6,75" },
      { name: "Ricostruzione french", full: "€10", sale: "€7,50" },
      { name: "Semipermanente", full: "€5", sale: "€3,75" },
      { name: "Semipermanente french", full: "€6", sale: "€4,50" },
    ],
  },
  {
    id: "mani-dito",
    label: "Mani",
    blurb: "Interventi singoli su una sola unghia della mano.",
    items: [
      { name: "Copertura", full: "€6", sale: "€4,50" },
      { name: "Copertura french", full: "€7", sale: "€5,25" },
      { name: "Ricostruzione", full: "€8", sale: "€6" },
      { name: "Ricostruzione french", full: "€9", sale: "€6,75" },
      { name: "Semipermanente", full: "€4", sale: "€3" },
      { name: "Semipermanente french", full: "€5", sale: "€3,75" },
    ],
  },
  {
    id: "ceretta",
    label: "Epilazione / Ceretta",
    blurb: "Ceretta viso e corpo, per donna e per uomo.",
    items: [
      { name: "Sopracciglio", full: "€8", sale: "€6" },
      { name: "Baffetti", full: "€8", sale: "€6" },
      { name: "Ascelle", full: "€8", sale: "€6" },
      { name: "Braccia", full: "€12", sale: "€9" },
      { name: "Inguine parziale", full: "€12", sale: "€9" },
      { name: "Inguine totale", full: "€15", sale: "€11,25" },
      { name: "1/2 Gamba", full: "€15", sale: "€11,25" },
      { name: "Gamba intera", full: "€25", sale: "€18,75" },
      { name: "Schiena", full: "€15", sale: "€11,25" },
      { name: "Pancia", full: "€7", sale: "€5,25" },
      { name: "Pettorali", full: "€8", sale: "€6" },
      { name: "Dita", full: "€5", sale: "€3,75" },
      { name: "Donna glutei", full: "€5-8", sale: "€3,75-6" },
      { name: "Faccia", full: "€20", sale: "€15" },
      { name: "Barba + mento", full: "€8", sale: "€6" },
      { name: "Braccia uomo", full: "€15", sale: "€11,25" },
      { name: "Schiena uomo", full: "€20", sale: "€15" },
    ],
  },
  {
    id: "massaggio",
    label: "Massaggio",
    blurb: "Massaggi viso e corpo, rilassanti e drenanti.",
    items: [
      { name: "Viso", note: "30 min", full: "€30", sale: "€22,50" },
      { name: "Riflessologia plantare", note: "45 min", full: "€40", sale: "€30" },
      { name: "Schiena", note: "30 min", full: "€30", sale: "€22,50" },
      { name: "Gamba", note: "30/45 min", full: "€30-40", sale: "€22,50-30" },
      { name: "Corpo", note: "45/60 min", full: "€40-55", sale: "€30-41,25" },
      { name: "Antistress", note: "45/60 min", full: "€40-55", sale: "€30-41,25" },
      { name: "Drenante", note: "45/60 min", full: "€40-55", sale: "€30-41,25" },
      { name: "Rilassante", note: "45/60 min", full: "€40-55", sale: "€30-41,25" },
    ],
  },
  {
    id: "altri",
    label: "Altri servizi",
    blurb: "Viso, extension ciglia e trucco permanente.",
    items: [
      { name: "Pulizia viso", full: "€30", sale: "€22,50" },
      { name: "Extension ciglia naturale", full: "€70", sale: "€52,50" },
      { name: "Extension ciglia cespuglioso", full: "€80", sale: "€60" },
      { name: "Trucco permanente", full: "€250-380", sale: "€187,50-285" },
    ],
  },
];
