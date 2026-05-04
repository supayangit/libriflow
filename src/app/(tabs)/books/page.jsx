"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Books from '@/lib/data/books.json';
import BookCard from '@/app/components/book/BookCard';
import BooksHeader from '@/app/components/book/BooksHeader';

const BooksPage = () => {
    const searchParams = useSearchParams();

    const [inputValue, setInputValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
    }, [searchQuery]);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 lg:py-16 space-y-8 sm:space-y-10">

            <BooksHeader
                activeCategory="All"
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default BooksPage;