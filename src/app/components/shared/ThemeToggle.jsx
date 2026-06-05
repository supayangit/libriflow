"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {mounted ? (
        isDark ? (
          <HiSun className="h-5 w-5 text-yellow-400" />
        ) : (
          <HiMoon className="h-5 w-5 text-slate-900 dark:text-slate-100" />
        )
      ) : (
        <span className="h-5 w-5 rounded-full bg-slate-200 dark:bg-slate-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
