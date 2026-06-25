import { getAllCaseStudies } from "@/lib/getCaseStudy";

export async function ClientLogoStrip() {
  const caseStudies = await getAllCaseStudies();
  const clients = Array.from(new Set(caseStudies.map((caseStudy) => caseStudy.clientName)));

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {clients.map((client) => (
        <div
          key={client}
          className="flex h-16 w-40 items-center justify-center rounded-xl border border-mist-200 px-4 text-center text-sm font-medium text-ink/60"
        >
          {client}
        </div>
      ))}
    </div>
  );
}
