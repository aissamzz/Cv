"use client";

import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { mainNav } from "@/lib/navigation";
import type { Dictionary } from "@/i18n/dictionaries";

export function MobileNav({
  dict,
  onClose,
}: {
  dict: Dictionary;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden">
      <div className="flex items-center justify-between border-b border-mist-200 px-4 py-4">
        <span className="text-lg font-bold text-ink">{dict.meta.siteName}</span>
        <button
          type="button"
          aria-label="Fermer"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist-100"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-1">
          {mainNav.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-mist-100"
              >
                {dict.nav[item.key as keyof Dictionary["nav"]]}
              </Link>
              {item.megaMenu ? (
                <ul className="ms-4 space-y-1 border-s border-mist-200 ps-3">
                  {item.megaMenu.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-mist-100"
                      >
                        {dict.nav[link.key as keyof Dictionary["nav"]]}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-4 border-t border-mist-200 px-4 py-4">
        <LanguageSwitcher />
        <Button href="/contact?type=devis" className="w-full" onClick={onClose}>
          {dict.nav.requestQuote}
        </Button>
      </div>
    </div>
  );
}
