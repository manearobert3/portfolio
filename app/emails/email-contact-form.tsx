import { z } from "zod";
import { contactSchema } from "../lib/schema";

type ContactFormEmailProps = z.infer<typeof contactSchema>;

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => {
  return (
    <div>
      <h1>Contact form submission</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
};
