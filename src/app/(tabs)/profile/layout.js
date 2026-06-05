"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function ProfileLayout({ children }) {
  const router = useRouter();
  const [status, setStatus] = useState("loading"); 
  // loading | authorized | unauthorized

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        const res = await authClient.getSession();
        const data = res?.data || res;

        if (!isMounted) return;

        if (data?.user) {
          setStatus("authorized");
        } else {
          setStatus("unauthorized");
          router.replace("/signin");
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setStatus("unauthorized");
          router.replace("/signin");
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false;
    };
  }, [router]);

  // LOADING STATE
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 bg-gray-50 dark:bg-slate-950">
        Checking authentication...
      </div>
    );
  }

  // BLOCK RENDER BEFORE REDIRECT
  if (status !== "authorized") {
    return null;
  }

  return <>{children}</>;
}