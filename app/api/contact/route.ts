import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, vehicle, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Contact Form <contact@alpinetrailco.com>",
      to: "alpinetrailco1@gmail.com", // replace with Will's email
      subject: "New Contact Form Submission",
      text: `
You have a new message:

Name: ${name}
Email: ${email}
Phone: ${phone}
Vehicle: ${vehicle}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
