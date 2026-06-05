"use client";
import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "@/app/components/book/BookCard";
import BooksHeader from "@/app/components/book/BooksHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Grid } from "swiper/modules";

export default function ClientBooksPage() {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, []);

    const searchParams = useSearchParams();

    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [swiper, setSwiper] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const query = searchParams.get("search") || "";
        setSearchQuery(query);
        setInputValue(query);
    }, [searchParams]);

    const filteredBooks = useMemo(() => {
        const query = searchQuery.toLowerCase();

        return Books
            .filter((book) =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
            )
            .sort((a, b) => a.title.localeCompare(b.title));
    }, [searchQuery, Books]);

    const slidesPerPage = 5;
    const totalPages = Math.ceil(filteredBooks.length / slidesPerPage);

    const goToPage = (index) => {
        setCurrentPage(index);
        swiper?.slideTo(index * slidesPerPage);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-8 lg:py-12 space-y-3 sm:space-y-5">
            <BooksHeader
                activeCategory="All"
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            {/* swiper */}
            <Swiper
                onSwiper={setSwiper}
                modules={[Grid]}
                spaceBetween={16}
                grid={{ rows: 1, fill: "row" }}
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
              ${currentPage === index
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }
            `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}