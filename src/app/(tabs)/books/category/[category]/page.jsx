"use client";

import React from "react";
import Books from "@/lib/data/books.json";
import BookCard from "@/app/components/book/BookCard";
import BooksHeader from "@/app/components/book/BooksHeader";
import { useParams } from "next/navigation";

const BooksByCategoryPage = () => {
  const params = useParams();
  const categoryParam = params?.category;

  // normalize slug 
  const activeCategory = categoryParam
    ? categoryParam
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-")
    : "All";

  const categories = ["All", ...new Set(Books.map(b => b.category))];

  const isValidCategory = categories.includes(activeCategory);

  const filteredBooks =
    activeCategory === "All"
      ? Books
      : Books.filter((book) => book.category === activeCategory);

  return (
    <div className="p-20 space-y-10">

      <BooksHeader activeCategory={activeCategory} />

      {!isValidCategory ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold text-purple-500">
            Category not found
          </h2>
          <p className="text-gray-500 mt-2">
            Try selecting a valid category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

    </div>
  );
};

export default BooksByCategoryPage;