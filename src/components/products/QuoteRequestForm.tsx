"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/i18n/locale-context";
import type { Dictionary } from "@/i18n/dictionaries";

export function QuoteRequestForm({ productName, dict }: { productName: string; dict: Dictionary }) {
  const locale = useLocale();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError(false);
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          productName,
          locale,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-forest-200 bg-forest-50 p-6 text-forest-700">
        <CheckCircle2 className="h-5 w-5" />
        <p className="text-sm font-medium">{dict.common.sent}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-mist-200 p-6">
      <p className="text-lg font-semibold text-ink">{dict.common.requestQuote}</p>
      <p className="mt-1 text-sm text-ink/60">{productName}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder={dict.common.name} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input required name="company" placeholder={dict.common.company} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input required type="email" name="email" placeholder={dict.common.email} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input required name="phone" placeholder={dict.common.phone} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
      </div>
      <textarea
        name="message"
        placeholder={dict.common.message}
        rows={4}
        className="mt-4 w-full rounded-lg border border-mist-300 px-4 py-2.5 text-sm"
      />
      {error ? <p className="mt-4 text-sm text-red-600">{dict.common.error}</p> : null}
      <Button type="submit" disabled={sending} className="mt-4 w-full sm:w-auto">
        {sending ? dict.common.sending : dict.common.send}
      </Button>
    </form>
  );
}
