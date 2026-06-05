"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ mobile }) => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav
      className={
        mobile
          ? "flex flex-col gap-4 mt-4 text-sm font-medium text-slate-700 dark:text-slate-300"
          : "flex gap-8 text-sm font-medium text-slate-700 dark:text-slate-300"
      }
    >
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "text-blue-600 dark:text-blue-300" : "hover:text-blue-500 dark:hover:text-blue-300 transition"}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;