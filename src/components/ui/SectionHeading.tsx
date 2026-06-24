import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wide text-forest-500",
            light && "text-forest-300"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={cn("mt-4 text-base", light ? "text-mist-200" : "text-ink/70")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
