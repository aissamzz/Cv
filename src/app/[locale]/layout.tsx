import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, dirForLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LocaleProvider } from "@/i18n/locale-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/cta/WhatsAppFloatingButton";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: dict.meta.siteName,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={dirForLocale(locale)}>
      <body className="font-sans antialiased">
        <LocaleProvider locale={locale} dict={dict}>
          <Header />
          <main>{children}</main>
          <Footer dict={dict} />
          <WhatsAppFloatingButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
