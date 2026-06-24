"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

export function QuickContactForm({ productName, dict }: { productName: string; dict: Dictionary }) {
  const [sent, setSent] = useState(false);

  // TODO: wire to backend
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
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
      <p className="text-lg font-semibold text-ink">{dict.common.quickContact}</p>
      <p className="mt-1 text-sm text-ink/60">{productName}</p>
      <div className="mt-6 grid gap-4">
        <input required name="name" placeholder={dict.common.name} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input required type="email" name="email" placeholder={dict.common.email} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <textarea
          name="message"
          placeholder={dict.common.message}
          rows={3}
          className="w-full rounded-lg border border-mist-300 px-4 py-2.5 text-sm"
        />
      </div>
      <Button type="submit" className="mt-4 w-full sm:w-auto">
        {dict.common.send}
      </Button>
    </form>
  );
}
