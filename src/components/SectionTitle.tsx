import { useSplitText } from "@/hooks/useGsap";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
}: Props) {
  const ref = useSplitText<HTMLHeadingElement>();
  const Tag = as;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
      )}
      <Tag
        ref={ref}
        className="text-3xl leading-tight font-semibold text-foreground md:text-5xl"
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
