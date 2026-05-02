"use client";
import React from "react";
import Books from "@/lib/data/books.json";

const BooksNavbar = ({activeCategory, setActiveCategory}) => {
    const categories = [
    "All",
    ...new Set(Books.map((book) => book.category)),
  ];

  return (
    <div className="flex gap-4 flex-wrap py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={()=> setActiveCategory(category)}
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