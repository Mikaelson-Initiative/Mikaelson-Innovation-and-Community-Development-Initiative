"use client";

import React, { useState } from "react";
import Link from "next/link";
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
import { Button } from "@/components/ui/button";

import { AlertCircle, Loader2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const AdminSignInForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const handleSubmit = async (values: z.infer<typeof loginSchema>) => {
    setLoginError("");
    setIsLoggingIn(true);

    try {
      // Fake API login delay
      await new Promise((res) => setTimeout(res, 1500));

      if (values.username !== "admin" || values.password !== "admin123") {
        throw new Error("Invalid username or password");
      }

      router.push("/admin/dashboard");
    } catch (err: any) {
      setLoginError(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
        {/* Header */}
        <div className="text-center mb-6">
          <Image
            src="/assets/images/mikaelsonlogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto h-20 w-20 rounded-2xl"
          />
          <h1 className="text-2xl font-bold mt-4">Admin Login</h1>
          <p className="text-gray-600 text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            {/* Username */}
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="admin" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Error Message */}
            {loginError && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
                <AlertCircle size={18} />
                {loginError}
              </div>
            )}

            {/* Submit Button */}
            <Button
              disabled={isLoggingIn}
              variant={"brand"}
              type="submit"
              className="w-full !py-7"
            >
              {!isLoggingIn ? (
                "Sign In"
              ) : (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  Signing in...
                </span>
              )}
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="mt-6 text-center flex items-center justify-center">
          <Link
            href="/"
            className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSignInForm;
