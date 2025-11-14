"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";

// Zod schema
const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    console.log("Sign In:", values);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      {...field}
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-2">
            Sign In
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-t border-gray-300" />
        <span className="mx-2 text-gray-500 text-sm">Or sign in with</span>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      {/* Social Buttons */}
      <div className="flex justify-between gap-2">
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          Google
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          LinkedIn
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2"
        >
          <X /> X
        </Button>
      </div>

      {/* Optional "Create Account" link */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-blue-600 hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
}
