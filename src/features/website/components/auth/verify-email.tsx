"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export default function VerifyEmail({ email }: { email: string }) {
  const [otp, setOtp] = useState("");

  // Function to hide part of email
  const maskEmail = (email: string) => {
    const [name, domain] = email.split("@");
    if (name.length <= 2) return `${name[0]}***@${domain}`;
    return `${name[0]}***${name[name.length - 1]}@${domain}`;
  };

  const hiddenEmail = maskEmail(email);

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp);
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
          value={otp}
          onChange={setOtp}
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
        disabled={otp.length !== 6}
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
