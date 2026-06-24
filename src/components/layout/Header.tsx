"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Leaf } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { mainNav } from "@/lib/navigation";
import { useDict } from "@/i18n/locale-context";
import { stripLocaleFromPathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

export function Header() {
  const dict = useDict();
  const pathname = usePathname();
  const currentPath = stripLocaleFromPathname(pathname);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mist-200 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-500 text-paper">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="text-lg">{dict.meta.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const isActive =
              currentPath === item.href ||
              (item.href !== "/" && currentPath.startsWith(item.href));
            return (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => item.megaMenu && setOpenKey(item.key)}
                onMouseLeave={() => item.megaMenu && setOpenKey(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-forest-600" : "text-ink/80 hover:text-ink"
                  )}
                >
                  {dict.nav[item.key as keyof Dictionary["nav"]]}
                </Link>
                {item.megaMenu && openKey === item.key ? (
                  <MegaMenu item={item} dict={dict} />
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button href="/contact?type=devis" size="md">
            {dict.nav.requestQuote}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist-100 lg:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobileOpen ? (
        <MobileNav dict={dict} onClose={() => setMobileOpen(false)} />
      ) : null}
    </header>
  );
}
