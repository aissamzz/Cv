"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import { useLocale, useDict } from "@/i18n/locale-context";
import { stripLocaleFromPathname, toLocalizedHref } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const pathname = usePathname();
  const locale = useLocale();
  const dict = useDict();
  const basePath = stripLocaleFromPathname(pathname);

  const labels: Record<string, string> = {
    fr: dict.common.languageSwitcherFr,
    ar: dict.common.languageSwitcherAr,
  };

  const inactiveClasses =
    tone === "dark" ? "text-mist-300 hover:text-paper" : "text-ink/60 hover:text-ink";
  const separatorClasses = tone === "dark" ? "text-paper/20" : "text-ink/30";
  const activeClasses = tone === "dark" ? "text-forest-300" : "text-forest-600";

  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      {locales.map((target, index) => (
        <span key={target} className="flex items-center gap-1">
          {index > 0 ? <span className={separatorClasses}>/</span> : null}
          <NextLink
            href={toLocalizedHref(basePath, target)}
            aria-current={target === locale ? "true" : undefined}
            className={cn(
              "rounded-full px-2 py-1 transition-colors",
              target === locale ? activeClasses : inactiveClasses
            )}
          >
            {labels[target]}
          </NextLink>
        </span>
      ))}
    </div>
  );
}
