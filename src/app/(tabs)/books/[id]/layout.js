"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function BookLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await authClient.getSession();
        const data = res?.data || res;

        if (data?.user) {
          setAuthorized(true);
        } else {
          router.replace("/signin");
        }
      } catch (err) {
        console.error(err);
        router.replace("/signin");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Checking authentication...
      </div>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
}