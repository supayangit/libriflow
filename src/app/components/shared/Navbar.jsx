"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/books", label: "All Books" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={isActive ? "text-blue-600" : ""}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;