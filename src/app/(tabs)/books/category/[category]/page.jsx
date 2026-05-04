"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Books from "@/lib/data/books.json";
import BookCard from "@/app/components/book/BookCard";
import BooksHeader from "@/app/components/book/BooksHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";

import { Grid } from "swiper/modules";

const BooksByCategoryPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const categoryParam = params?.category;

  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [swiper, setSwiper] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // sync search param 
  useEffect(() => {
    const query = searchParams.get("search") || "";
    setSearchQuery(query);
    setInputValue(query);
  }, [searchParams]);

  // format category
  const activeCategory = categoryParam
    ? categoryParam
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("-")
    : "All";

  const categories = ["All", ...new Set(Books.map((b) => b.category))];
  const isValidCategory = categories.includes(activeCategory);

  // filtered + search + category + sort 
  const filteredBooks = useMemo(() => {
    const query = searchQuery.toLowerCase();

    let result =
      activeCategory === "All"
        ? Books
        : Books.filter((book) => book.category === activeCategory);

    result = result.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    return result.sort((a, b) => a.title.localeCompare(b.title));
  }, [activeCategory, searchQuery]);

  // pagination logic
  const slidesPerPage = 5; // 1 row × 5 cols = 5 items
  const totalPages = Math.ceil(filteredBooks.length / slidesPerPage);

  const goToPage = (index) => {
    setCurrentPage(index);
    swiper?.slideTo(index * slidesPerPage);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 lg:py-12 space-y-3 sm:space-y-5">

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
        <>
          {/* swiper */}
          <Swiper
            onSwiper={setSwiper}
            modules={[Grid]}
            spaceBetween={16}
            grid={{
              rows: 1,
              fill: "row",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {filteredBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* pagination */}
          <div className="flex justify-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`
                  w-10 h-10 rounded-md text-sm font-semibold transition
                  ${
                    currentPage === index
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BooksByCategoryPage;