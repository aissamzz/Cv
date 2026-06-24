"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/i18n/dictionaries";

type RequestType = "info" | "devis" | "partenariat";

export function ContactForm({
  dict,
  defaultType = "info",
}: {
  dict: Dictionary;
  defaultType?: RequestType;
}) {
  const [requestType, setRequestType] = useState<RequestType>(defaultType);
  const [sent, setSent] = useState(false);

  const typeOptions: { value: RequestType; label: string }[] = [
    { value: "info", label: dict.common.infoRequest },
    { value: "devis", label: dict.common.quoteRequest },
    { value: "partenariat", label: dict.common.partnershipRequest },
  ];

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
      <p className="text-sm font-semibold text-ink">{dict.common.requestType}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {typeOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setRequestType(option.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              requestType === option.value
                ? "bg-forest-500 text-paper"
                : "bg-mist-100 text-ink/70 hover:bg-mist-200"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <input required name="name" placeholder={dict.common.name} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input name="company" placeholder={dict.common.company} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input required type="email" name="email" placeholder={dict.common.email} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
        <input name="phone" placeholder={dict.common.phone} className="rounded-lg border border-mist-300 px-4 py-2.5 text-sm" />
      </div>
      <textarea
        required
        name="message"
        placeholder={dict.common.message}
        rows={5}
        className="mt-4 w-full rounded-lg border border-mist-300 px-4 py-2.5 text-sm"
      />
      <Button type="submit" className="mt-4 w-full sm:w-auto">
        {dict.common.send}
      </Button>
    </form>
  );
}
