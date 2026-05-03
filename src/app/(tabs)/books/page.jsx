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
        <div className="p-20 space-y-10">

            <BooksHeader
                activeCategory="All"
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            <div className="grid grid-cols-5 gap-4">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default BooksPage;