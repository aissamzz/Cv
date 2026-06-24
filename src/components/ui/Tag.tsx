import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-mist-300 px-2.5 py-0.5 text-xs text-ink/70",
        className
      )}
    >
      {children}
    </span>
  );
}
