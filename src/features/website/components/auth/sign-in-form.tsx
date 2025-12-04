"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Google } from "@/components/icons/google";
import { LinkedIn } from "@/components/icons/LinkedIn";
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
import { Eye, EyeOff, UserSearch } from "lucide-react";
import Link from "next/link";
import { Apple } from "@/components/icons/apple";
import { useAuth, useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";

// Zod schema
const signInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const { isSignedIn, userId } = useAuth();
  const { user } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && userId) {
      router.push("/feed");
    }
  }, [isSignedIn, userId]);

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isDisabled = form.formState.isValid;

  const onSubmit = async (values: SignInFormValues) => {
    if (!isLoaded) return;

    const email = values.email;
    const password = values.password;

    try {
      setIsLoading(true);

      const signInAttempt = await signIn.create({
        identifier: email,
        password: password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/feed");
      } else {
        console.error(
          "Sign-in incomplete:",
          JSON.stringify(signInAttempt, null, 2)
        );
        alert("Sign-in incomplete. Please try again.");
      }
    } catch (err: any) {
      console.error("Sign-in error:", JSON.stringify(err, null, 2));

      if (err.errors && err.errors.length > 0) {
        const errorMessage = err.errors[0].message;
        const errorCode = err.errors[0].code;

        switch (errorCode) {
          case "form_identifier_not_found":
            alert("No account found with this email.");
            break;
          case "form_password_incorrect":
            alert("Incorrect password. Please try again.");
            break;
          case "strategy_for_user_invalid":
            alert("This sign-in method is not available for your account.");
            break;
          case "form_param_format_invalid":
            alert("Invalid email format.");
            break;
          default:
            alert(errorMessage || "Failed to sign in. Please try again.");
        }
      } else {
        alert("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = async () => {
    if (!isLoaded || !signIn) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: `/sso-callback`,
      redirectUrlComplete: `${window.location.origin}/feed`,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
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

          <Button
            disabled={!isDisabled}
            type="submit"
            variant={"brand"}
            className="w-full mt-2"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>

      {/* Divider */}
      <div className="flex items-center my-8">
        <hr className="flex-1 border-t border-gray-300" />
        <span className="mx-2 text-black text-sm md:text-xl font-semibold">
          OR
        </span>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      {/* Social Buttons */}
      <div className="flex flex-col justify-between gap-2">
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2 border-brand-green-100"
          onClick={handleGoogle}
        >
          <Google /> Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2 border-brand-green-100"
        >
          <LinkedIn />
          Sign in with LinkedIn
        </Button>

        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2 border-brand-green-100"
        >
          <Apple /> Sign in with Apple ID
        </Button>
      </div>

      {/* Optional "Create Account" link */}
      <div className="text-center mt-4 text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-brand-primary hover:underline">
          Create Account
        </Link>
      </div>
    </div>
  );
}
