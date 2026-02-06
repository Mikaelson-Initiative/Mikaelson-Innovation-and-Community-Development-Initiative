"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isLoaded, isSignedIn } = useAuth();
    const router = useRouter();
    const [localAuth, setLocalAuth] = useState<boolean | null>(null);

    // Check localStorage auth
    useEffect(() => {
        if (typeof window !== "undefined") {
            const auth = localStorage.getItem("admin_authenticated");
            setLocalAuth(auth === "true");
        }
    }, []);

    // checking both Clerk and localStorage auth
    const isCheckingAuth = !isLoaded || localAuth === null;
    const isAuthenticated = isSignedIn || localAuth;

    useEffect(() => {
        if (isCheckingAuth) return;
        
        if (!isAuthenticated) {
            // Redirect unauthenticated users to admin login
            router.replace("/admin");
        }
    }, [isCheckingAuth, isAuthenticated, router]);

    // Show loading state while checking auth
    if (isCheckingAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg-gray dark:bg-black/80">
                <div className="animate-pulse text-lg">Loading...</div>
            </div>
        );
    }

    // Don't render protected content if not signed in
    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-bg-gray dark:bg-black/80">
                <div className="text-lg">Redirecting to login...</div>
            </div>
        );
    }

    return <>{children}</>;
}