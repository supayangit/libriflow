"use client";
import React from "react";
import Books from "@/lib/data/books.json";
import { useRouter } from "next/navigation";

const BooksNavbar = ({activeCategory }) => {
    const router = useRouter();
    const categories = [
    "All",
    ...new Set(Books.map((book) => book.category)),
  ];

  const handleClick = (category) => {
    if (category === "All") {
      router.push("/books");
    } else {
      router.push(`/books/category/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="flex gap-4 flex-wrap py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={()=> handleClick(category)}
          className={`px-4 py-2 text-sm rounded-full transition ${
            activeCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default BooksNavbar;