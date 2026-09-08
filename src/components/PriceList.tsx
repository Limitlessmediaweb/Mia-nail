import { SERVICE_CATEGORIES } from "@/data/services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useScrollReveal } from "@/hooks/useGsap";

export function PriceList() {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector: "[data-reveal]", stagger: 0.05 });

  return (
    <div ref={ref}>
      <Tabs defaultValue={SERVICE_CATEGORIES[0]!.id} className="w-full">
        <TabsList className="mx-auto flex h-auto w-full max-w-4xl flex-wrap justify-center gap-1 rounded-2xl bg-secondary p-1.5">
          {SERVICE_CATEGORIES.map((c) => (
            <TabsTrigger
              key={c.id}
              value={c.id}
              className="rounded-xl px-4 py-2 text-xs data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-sm md:text-sm"
            >
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {SERVICE_CATEGORIES.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-10">
            <p className="mb-6 text-center text-sm text-muted-foreground">{c.blurb}</p>
            <ul className="grid gap-3 md:grid-cols-2">
              {c.items.map((item, i) => (
                <li
                  key={`${c.id}-${item.name}-${i}`}
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
                      <span className="text-xs text-muted-foreground line-through">
                        {item.full}
                      </span>
                    )}
                    <span className="text-base font-semibold text-primary">{item.sale}</span>
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
