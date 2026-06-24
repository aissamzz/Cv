import fr from "../../messages/fr.json";
import ar from "../../messages/ar.json";
import type { Locale } from "./config";

// `ar.json` intentionally mirrors `fr.json` for now: the RTL routing/layout
// infrastructure is functional, but real Arabic translation is a follow-up task.
const dictionaries = { fr, ar };

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
