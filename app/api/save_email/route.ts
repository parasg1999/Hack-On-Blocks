import validateEmail from "@/app/utils/validateEmail";
import knex from "knex";
import { NextResponse } from "next/server";

const db = knex({
  client: "pg",
  connection: {
    host: "viaduct.proxy.rlwy.net",
    database: "railway",
    user: "postgres",
    password: "UCeddhEkNHGyfNxvNtaqzkWwEzbozhWj",
    port: 50426,
  },
});

type EmailData = {
  email: string;
};

export async function POST(request: Request) {
  const data: EmailData = await request.json();

  const isValidEmail = validateEmail(data.email || "");

  if (!isValidEmail)
    return NextResponse.json({ success: false }, { status: 400 });

  await db("emails")
    .insert({ email: data.email })
    .onConflict(["email"])
    .merge();

  return NextResponse.json({ success: true });
}
