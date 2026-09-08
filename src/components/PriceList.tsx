import { SERVICE_CATEGORIES } from "@/data/services";
import { useScrollReveal } from "@/hooks/useGsap";

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.items.map((item) => ({ ...item, category: c.id })));

export function PriceList() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]", stagger: 0.05 });

  return (
    <div ref={ref}>
      <ul className="grid gap-3 md:grid-cols-2">
        {ALL_SERVICES.map((item, i) => (
          <li
            key={`${item.category}-${item.name}-${i}`}
            data-reveal
            className="reveal-init card-lux flex items-center justify-between gap-4 px-5 py-4"
          >
            <span className="text-sm text-foreground">
              {item.name}
              {item.note && (
                <span className="ml-2 text-xs text-muted-foreground">({item.note})</span>
              )}
            </span>
            <span className="flex shrink-0 items-baseline gap-2">
              {item.full !== "—" && (
                <span className="text-xs text-muted-foreground line-through">{item.full}</span>
              )}
              <span className="text-base font-semibold text-primary">{item.sale}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
