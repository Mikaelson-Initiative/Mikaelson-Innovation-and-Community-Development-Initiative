"use client";
import VerifyEmail from "@/features/website/components/auth/verify-email";
import { useSearchParams } from "next/navigation";

const Verificationpage = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const username = searchParams.get("fullName");
  return <VerifyEmail email={email!} username={username!} />;
};

export default Verificationpage;
