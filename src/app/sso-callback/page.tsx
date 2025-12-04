"use client";
import { AuthenticateWithRedirectCallback, useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BACKEND_URL } from "../../../constants";

export default function SSOCallbackPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    const syncUserToBackend = async () => {
      if (!isLoaded || !user) return;

      try {
        const userId = user.id;
        const email = user.primaryEmailAddress?.emailAddress;
        const username = user.username || email?.split("@")[0];

        const userExists = await axios.get(
          `${BACKEND_URL}/api/v1/users/${userId}`
        );

        if (!userExists?.data.data?.id) {
          // User doesn't exist, create them
          await axios.post(`${BACKEND_URL}/api/v1/users`, {
            username,
            email,
            clerkId: userId,
          });
        }
      } catch (error) {
        console.error("SSO callback handling failed:", error);
      }
    };

    syncUserToBackend();
  }, [isLoaded, user, router]);

  return (
    <>
      <AuthenticateWithRedirectCallback />
      <div id="clerk-captcha" />
    </>
  );
}
