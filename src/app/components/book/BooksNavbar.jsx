"use client";
import React from "react";
import Books from "@/lib/data/books.json";
import { useRouter } from "next/navigation";

const BooksNavbar = ({ activeCategory }) => {
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
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto sm:flex-wrap py-2 sm:py-4">

            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(category)}
                    className={`
                        whitespace-nowrap
                        px-3 sm:px-4 md:px-5
                        py-1.5 sm:py-2
                        text-xs sm:text-sm md:text-base
                        rounded-full
                        transition
                        cursor-pointer
                        ${
                            activeCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-900 hover:bg-blue-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-blue-500/20"
                        }
                    `}
                >
                    {category}
                </button>
            ))}

        </div>
    );
};

export default BooksNavbar;