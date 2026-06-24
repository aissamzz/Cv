"use client";

import { MessageCircle } from "lucide-react";
import { useDict } from "@/i18n/locale-context";

const WHATSAPP_NUMBER = "213230000000";

export function WhatsAppFloatingButton() {
  const dict = useDict();

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={dict.common.whatsapp}
      className="fixed bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-paper shadow-lg transition-transform hover:scale-105 ltr:right-6 rtl:left-6"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
