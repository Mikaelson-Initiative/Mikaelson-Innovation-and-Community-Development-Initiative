"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Apple } from "@/components/icons/apple";
import { Google } from "@/components/icons/google";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useAuth, useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACKEND_URL } from "../../../../../constants";

// Zod validation schema
const formSchema = z
  .object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    acceptTerms: z.boolean().refine((val) => val, {
      message: "You must accept the terms and policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type CreateAccountFormValues = z.infer<typeof formSchema>;

export default function CreateAccountForm() {
  const { signUp, setActive, isLoaded } = useSignUp();
  const { signIn } = useSignIn();
  const { isSignedIn, userId } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      router.push("/feed");
    }
  }, [isSignedIn]);

  const form = useForm<CreateAccountFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const isDisabled = form.formState.isValid;

  const onSubmit = async (values: CreateAccountFormValues) => {
    if (!isLoaded) return;
    try {
      setPendingVerification(true);
      const email = values.email;
      const password = values.password;

      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      alert("Code sent to your mail");
      router.push(`/verify-email?email=${email}&fullName=${values.fullName}`);
      setPendingVerification(false);
    } catch (error) {
      console.log("SignUp Error:", error);
    }
  };

  const handleGoogle = async () => {
    if (!isLoaded || !signIn) return;

    await signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: `${window.location.origin}/sso-callback`,
      redirectUrlComplete: `${window.location.origin}/feed`,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
              <FormItem className="">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Accept Terms */}
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start space-x-2">
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="accept"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <label htmlFor="accept" className="text-xs">
                      I accept the{" "}
                      <Link
                        href="/terms"
                        className="underline text-brand-green-100"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="underline text-brand-green-100"
                      >
                        Privacy policy
                      </Link>
                    </label>
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
            className="w-full mt-10 "
          >
            {!pendingVerification ? "Sign Up" : "Creating account..."}
          </Button>
        </form>
      </Form>
      <div id="clerk-captcha"></div>

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
          <Google />
          Continue with Google
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2 border-brand-green-100"
        >
          <LinkedIn /> Continue with LinkedIn
        </Button>
        <Button
          variant="outline"
          className="flex-1 flex items-center justify-center gap-2 border-brand-green-100"
        >
          <Apple /> Continue with Apple ID
        </Button>
      </div>
      <div className="text-center mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-brand-primary hover:underline">
          Log in
        </Link>
      </div>
    </div>
  );
}
