"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define schema for validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Infer TypeScript type from schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactUsForm: React.FC = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Form submitted:", values);
    // TODO: handle submission (e.g., API call)
  };

  return (
    <div>
      {/* Navbar */}
      {/* Replace with your Navbar component */}
      {/* <Navbar /> */}

      <main className="max-w-3xl mx-auto px-6 py-24">
        {/* Page Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 dark:text-brand-text-dark-heading">Contact Us</h1>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-brand-text-dark">
            Thank you for your interest in the Mikaelson Initiative. We&apos;d love
            to hear from you! <br />
            Whether you have questions, feedback, or want to partner with us,
            drop us a message below or email us directly at{" "}
            <a
              href="mailto:community@mikaelsoninitiative.org"
              className="text-teal-500 font-semibold hover:underline"
            >
              community@mikaelsoninitiative.org
            </a>
            .
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-slate-50 dark:bg-card p-8 rounded-xl shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter message subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Your message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </section>
      </main>
    </div>
  );
};

export default ContactUsForm;
