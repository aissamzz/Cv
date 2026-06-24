import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerClassName,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "dark";
}) {
  const toneClasses = {
    default: "bg-paper",
    muted: "bg-mist-50",
    dark: "bg-ink text-paper",
  }[tone];

  return (
    <section className={cn("py-16 sm:py-20", toneClasses, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
