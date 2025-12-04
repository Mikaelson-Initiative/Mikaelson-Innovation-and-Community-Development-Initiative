"use client";

import { Suspense } from "react";
import VerifyEmail from "@/features/website/components/auth/verify-email";
import { useSearchParams } from "next/navigation";

const VerificationPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <InnerVerification />
    </Suspense>
  );
};

const InnerVerification = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const username = searchParams.get("fullName");

  return <VerifyEmail email={email!} username={username!} />;
};

export default VerificationPage;
