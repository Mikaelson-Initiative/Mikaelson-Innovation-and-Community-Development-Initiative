"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn } from "@clerk/nextjs";

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
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AdminSignInForm = () => {
  const router = useRouter();
  const { signIn, setActive } = useSignIn();
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

    // manual login 
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
  console.log("🔵 Form submitted with:", values);
  setLoginError("");
  setIsLoggingIn(true);

  try {
    await new Promise((res) => setTimeout(res, 1500));

    if (values.email !== "admin@mikaelson.com" || values.password !== "admin123") {
      throw new Error("Invalid email or password");
    }

    
    localStorage.setItem("admin_authenticated", "true");
    localStorage.setItem("admin_email", values.email);

    // window.location.href = "/admin/dashboard";
    router.replace("/admin/dashboard");
    
  } catch (err: any) {
    console.error("Login error:", err);
    setLoginError(err.message);
    setIsLoggingIn(false);
  }
};


  // handling google signin here 
  const handleGoogleSignIn = async () => {
    if (!signIn) return;

    try {
      setIsLoggingIn(true);
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/admin/dashboard",
      });
    } catch (err: any) {
      console.error("Google sign-in error:", err);
      setLoginError(err.errors?.[0]?.message || "Failed to sign in with Google");
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-brand-dark-bg-nav">
      <div className="bg-white dark:bg-card w-full dark:border-2 dark:border-brand-primary max-w-md p-8 rounded-xl shadow-md">
        {/* Header */}
        <div className="text-center mb-6">
          <Image
            src="/assets/images/mikaelsonlogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto h-20 w-20 rounded-2xl"
          />
          <h1 className="text-2xl font-bold mt-4 dark:text-white">Admin Login</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Google Sign-In Button */}
        <Button
          onClick={handleGoogleSignIn}
          disabled={isLoggingIn}
          className="w-full mb-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 h-12"
          type="button"
        >
          {isLoggingIn ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={18} />
              Signing in...
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </span>
          )}
        </Button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-card text-gray-500 dark:text-gray-400">
              Or continue with email
            </span>
          </div>
        </div>

        {/* Email/Password Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="admin@mikaelson.com" 
                      type="email"
                      className="dark:bg-gray-800 dark:border-gray-600"
                      {...field} 
                    />
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
                  <FormLabel className="dark:text-gray-300">Password</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      className="dark:bg-gray-800 dark:border-gray-600"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Error Message */}
            {loginError && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-md text-sm">
                <AlertCircle size={18} />
                {loginError}
              </div>
            )}

            {/* Submit Button */}
             <Button
              disabled={isLoggingIn}
              variant="brand"
              type="submit"
              className="w-full !py-7"
            >
              {isLoggingIn ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  Signing in...
                </span>
              ) : (
                "Sign In with Email"
              )}
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="mt-6 text-center flex items-center justify-center">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-sm"
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



