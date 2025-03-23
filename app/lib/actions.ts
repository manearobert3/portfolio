"use server";
import { z } from "zod";
import { contactSchema } from "./schema";
import { Resend } from "resend";
import { ContactFormEmail } from "../emails/email-contact-form";

type Inputs = z.infer<typeof contactSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: Inputs) {
  const result = contactSchema.safeParse(data);
  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: `Robert Manea <contact@manearobert.dev>`,
      to: [email],
      cc: ["manea.robert.petrisor@gmail.com"],
      subject: "Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (!data || error) {
      throw new Error("There was a problem sending the email.");
    }
    return { error: false };
  } catch (error) {
    return { error };
  }
}
