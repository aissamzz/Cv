function extractText(node: unknown): string {
  if (typeof node !== "object" || node === null) return "";
  const { text, children } = node as { text?: unknown; children?: unknown };
  if (typeof text === "string") return text;
  if (!Array.isArray(children)) return "";
  return children.map(extractText).join("");
}

// Payload's richText fields store Lexical's JSON document. Components in this
// codebase render rich text as a list of plain paragraph strings, so this
// flattens each top-level block node to one string (inline formatting is lost).
export function lexicalToParagraphs(data: unknown): string[] {
  if (typeof data !== "object" || data === null) return [];
  const root = (data as { root?: unknown }).root;
  if (typeof root !== "object" || root === null) return [];
  const children = (root as { children?: unknown }).children;
  if (!Array.isArray(children)) return [];
  return children.map((node) => extractText(node).trim()).filter((text) => text.length > 0);
}

// Inverse of lexicalToParagraphs, for seeding richText fields from plain string arrays.
export function paragraphsToLexical(paragraphs: string[]) {
  return {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,
      direction: "ltr" as const,
      children: paragraphs.map((text) => ({
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: "ltr" as const,
        children: [{ type: "text", format: 0, style: "", mode: "normal", text, version: 1, detail: 0 }],
      })),
    },
  };
}
