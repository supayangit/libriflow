"use client";
import React, {useState} from 'react';
import Books from '@/lib/data/books.json';
import BookCard from '@/app/components/book/BookCard';
import BooksHeader from '@/app/components/book/BooksHeader';

const BooksPage = () => {

    return (
        <div className="p-20 space-y-10">

            <BooksHeader activeCategory="All" />

            <div className="grid grid-cols-5 gap-4">
                {Books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default BooksPage;