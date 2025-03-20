import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is too short."),
  email: z.string().email("Invalid email.").nonempty("Email is required."),
  message: z.string().min(2, "Message is too short."),
});
