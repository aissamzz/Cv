import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUBMISSION_TYPES = ["contact", "quick-contact"] as const;
const REQUEST_TYPES = ["info", "devis", "partenariat"] as const;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { type, name, company, email, phone, message, productName, requestType, locale } =
    body as Record<string, unknown>;

  if (
    typeof type !== "string" ||
    !SUBMISSION_TYPES.includes(type as (typeof SUBMISSION_TYPES)[number]) ||
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  if (type === "quick-contact" && (typeof productName !== "string" || !productName.trim())) {
    return NextResponse.json({ error: "Missing productName" }, { status: 400 });
  }

  if (type === "contact" && (typeof message !== "string" || !message.trim())) {
    return NextResponse.json({ error: "Missing message" }, { status: 400 });
  }

  const payload = await getPayload({ config });
  await payload.create({
    collection: "submissions",
    data: {
      type: type as (typeof SUBMISSION_TYPES)[number],
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : undefined,
      phone: typeof phone === "string" ? phone.trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
      productName: typeof productName === "string" ? productName.trim() : undefined,
      requestType: REQUEST_TYPES.includes(requestType as (typeof REQUEST_TYPES)[number])
        ? (requestType as (typeof REQUEST_TYPES)[number])
        : undefined,
      locale: typeof locale === "string" ? locale : undefined,
    },
  });

  return NextResponse.json({ ok: true });
}
