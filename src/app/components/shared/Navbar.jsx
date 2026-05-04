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
          ? "flex flex-col gap-4 mt-4 text-sm font-medium text-gray-600"
          : "flex gap-8 text-sm font-medium text-gray-600"
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
            className={isActive ? "text-blue-600" : "hover:text-blue-400 transition"}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;