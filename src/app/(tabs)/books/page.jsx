"use client";
import React, {useState} from 'react';
import Books from '@/lib/data/books.json';
import BookCard from '@/app/components/book/BookCard';
import BooksHeader from '@/app/components/book/BooksHeader';

const BooksPage = () => {
    const[activeCategory, setActiveCategory] = useState("All");
    const filteredBooks = activeCategory == "All" ? Books :
    Books.filter((book) => book.category === activeCategory);

    return (
        <div className="p-20 space-y-10">

            <BooksHeader activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

            <div className="grid grid-cols-5 gap-4">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

        </div>
    );
};

export default BooksPage;