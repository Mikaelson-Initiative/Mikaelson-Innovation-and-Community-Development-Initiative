"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function VerifyEmail({
  email,
  username,
}: {
  email: string;
  username: string;
}) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [otp, setOtp] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  // Function to hide part of email
  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    if (name.length <= 2) return `${name[0]}***@${domain}`;
    return `${name[0]}***${name[name.length - 1]}@${domain}`;
  };

  const hiddenEmail = maskEmail(email);

  const handleSubmit = async () => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }

      if (signUpAttempt.status === "complete") {
        axios.post(`http://localhost:5000/api/v1/users`, {
          username,
          email,
          clerkId: signUpAttempt.createdUserId,
        });

        await setActive({ session: signUpAttempt.createdSessionId });
        alert("Account created successfully!");
        router.push("/dashboard");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 space-y-6">
      <h2 className="text-xl font-semibold text-center">Verify your email</h2>

      <p className="text-sm text-center text-gray-600">
        Enter the 6-digit code sent to{" "}
        <span className="font-medium">{hiddenEmail}</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex items-center justify-center">
        <InputOTP
          maxLength={6}
          value={code}
          onChange={setCode}
          className="flex justify-center"
        >
          <InputOTPGroup className="space-x-2">
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSeparator />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        onClick={handleSubmit}
        disabled={code.length !== 6}
        className="w-full"
        variant="brand"
      >
        Verify
      </Button>

      <p className="text-xs text-center text-gray-500">
        Didn’t receive a code?{" "}
        <button className="underline text-brand-primary">Resend</button>
      </p>
    </div>
  );
}
