import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const { name, company, email, phone, message, productName, locale } =
    body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !EMAIL_RE.test(email) ||
    typeof productName !== "string" ||
    !productName.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const payload = await getPayload({ config });
  await payload.create({
    collection: "submissions",
    data: {
      type: "quote",
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : undefined,
      phone: typeof phone === "string" ? phone.trim() : undefined,
      message: typeof message === "string" ? message.trim() : undefined,
      productName: productName.trim(),
      locale: typeof locale === "string" ? locale : undefined,
    },
  });

  return NextResponse.json({ ok: true });
}
