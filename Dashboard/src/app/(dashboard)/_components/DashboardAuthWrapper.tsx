"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/auth-service";

interface DashboardAuthWrapperProps {
  children: React.ReactNode;
}

export default function DashboardAuthWrapper({
  children,
}: DashboardAuthWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authResult = await isAuthenticated();

        if (authResult?.is_authenticated) {
          setIsAuth(true);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuth) {
    return null;
  }

  return <>{children}</>;
}
