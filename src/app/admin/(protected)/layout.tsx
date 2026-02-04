"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isLoaded, isSignedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            // Redirect unauthenticated users to admin login
            router.replace("/admin");
        }
    }, [isLoaded, isSignedIn, router]);

    // Show loading state while checking auth
    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg-gray dark:bg-black/80">
                <div className="animate-pulse text-lg">Loading...</div>
            </div>
        );
    }

    // Don't render protected content if not signed in
    if (!isSignedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg-gray dark:bg-black/80">
                <div className="text-lg">Redirecting to login...</div>
            </div>
        );
    }

    return <>{children}</>;
}
