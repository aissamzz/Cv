"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "./locale-context";
import { locales, type Locale } from "./config";

type LinkProps = Omit<ComponentProps<typeof NextLink>, "href"> & {
  href: string;
};

/** Prefixes internal hrefs with the current locale so callers never hardcode `/fr` or `/ar`. */
export function Link({ href, ...props }: LinkProps) {
  const locale = useLocale();
  const localizedHref = toLocalizedHref(href, locale);
  return <NextLink href={localizedHref} {...props} />;
}

export function toLocalizedHref(href: string, locale: Locale): string {
  if (/^[a-z]+:\/\//i.test(href) || href.startsWith("#")) return href;
  const suffix = href === "/" ? "" : href;
  return `/${locale}${suffix}`;
}

/** Strips the leading `/fr` or `/ar` segment from a pathname, returning the locale-agnostic path. */
export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  const maybeLocale = segments[1];
  if ((locales as readonly string[]).includes(maybeLocale)) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/$/, "") || "/";
  }
  return pathname;
}
