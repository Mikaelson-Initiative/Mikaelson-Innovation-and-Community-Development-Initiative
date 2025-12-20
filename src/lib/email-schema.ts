import { z } from "zod";

const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "yopmail.com",
  "throwawaymail.com",
];

const BLOCKED_EMAILS = [
  "test@test.com",
  "email@email.com",
  "fake@fake.com",
  "example@example.com",
];

export const emailSchema = z
  .email("Enter a valid email address")
  .min(6, "Email is too short")
  .max(254, "Email is too long")

  // Block obvious fake emails
  .refine(
    (email) => !BLOCKED_EMAILS.includes(email.toLowerCase()),
    "Please use a real email address"
  )

  // Block disposable domains
  .refine((email) => {
    const domain = email.split("@")[1]?.toLowerCase();
    return domain && !DISPOSABLE_DOMAINS.includes(domain);
  }, "Disposable email addresses are not allowed")

  // Extra sanity checks
  .refine(
    (email) =>
      !email.includes("..") && !email.startsWith(".") && !email.endsWith("."),
    "Enter a valid email address"
  );
