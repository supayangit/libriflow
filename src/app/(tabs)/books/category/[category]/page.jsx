"use client";
import React, { useState } from "react";
import Books from "@/lib/data/books.json";
import BookCard from "@/app/components/book/BookCard";
import BooksHeader from "@/app/components/book/BooksHeader";
import { useParams } from "next/navigation";

const BooksByCategoryPage = () => {
  const params = useParams();
  const categoryParam = params?.category;

  const [inputValue, setInputValue] = useState("");

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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">

      <BooksHeader
        activeCategory={activeCategory}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {!isValidCategory ? (
        <div className="text-center py-16 sm:py-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">
            Category not found
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Try selecting a valid category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

    </div>
  );
};

export default BooksByCategoryPage;