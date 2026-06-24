import { Leaf } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { mainNav, legalLinks } from "@/lib/navigation";
import type { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-mist-200 bg-ink text-mist-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-paper">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-500 text-paper">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg">{dict.meta.siteName}</span>
          </Link>
          <p className="max-w-sm text-sm text-mist-300">{dict.footer.description}</p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">{dict.footer.sitemap}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-mist-300 hover:text-paper">
                  {dict.nav[item.key as keyof Dictionary["nav"]]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper">{dict.footer.contact}</p>
          <ul className="mt-4 space-y-2 text-sm text-mist-300">
            <li>+213 (0)23 00 00 00</li>
            <li>contact@cielvert.dz</li>
            <li>Zone Industrielle, Alger, Algérie</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-mist-400">
            {legalLinks.map((link) => (
              <Link key={link.key} href={link.href} className="hover:text-paper">
                {dict.footer[link.key as keyof Dictionary["footer"]]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-mist-400">
            © {new Date().getFullYear()} {dict.meta.siteName}. {dict.footer.rights}
          </p>
          <LanguageSwitcher tone="dark" className="text-mist-300" />
        </div>
      </div>
    </footer>
  );
}
