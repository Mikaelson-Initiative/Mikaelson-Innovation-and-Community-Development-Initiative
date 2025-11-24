"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.email("Enter a valid email address"),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Reset link sent to:", data.email);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 space-y-6">
      <h2 className="text-xl font-semibold text-center">Forgot Password</h2>

      <p className="text-sm text-gray-600 text-center">
        Enter the email address associated with your account to receive a reset
        link.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            variant="brand"
            disabled={!form.formState.isValid}
          >
            Send Reset Link
          </Button>
        </form>
      </Form>
    </div>
  );
}
