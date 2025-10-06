import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const form = await req.json();

        const required = ["name", "email", "subject", "message"];
        for (const field of required) {
            if (!form[field]) {
                return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
            }
        }

        await resend.emails.send({
            from: process.env.FROM_EMAIL as string,
            to: process.env.TO_EMAIL as string,
            subject: `New Contact from ${form.name}: ${form.subject}`,
            html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.phone || "N/A"}</p>
        <p><strong>Company:</strong> ${form.company || "N/A"}</p>
        <p><strong>Budget:</strong> ${form.budget || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${form.message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
        console.error("Error sending contact form email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}