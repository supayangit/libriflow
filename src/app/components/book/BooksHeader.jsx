"use client";
import React from 'react';
import { SearchField, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import BooksNavbar from './BooksNavbar';

const BooksHeader = ({ activeCategory, inputValue, setInputValue }) => {
    const router = useRouter();

    const handleSearch = () => {
        if (!inputValue?.trim()) return;
        router.push(`/books?search=${encodeURIComponent(inputValue)}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10 border-b border-gray-200 pb-6 sm:pb-8 lg:pb-10">

            {/* Title */}
            <div>
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                    Explore Library
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                    Browse through our collection of over 12,000 digital books!
                </p>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">

                <SearchField
                    name="search"
                    value={inputValue}
                    onChange={setInputValue}
                    className="w-full sm:w-72 md:w-96"
                >
                    <SearchField.Group className="flex items-center border border-gray-300 rounded-xl sm:rounded-l-xl sm:rounded-r-none overflow-hidden">
                        <SearchField.SearchIcon className="ml-2 text-gray-500" />

                        <SearchField.Input
                            placeholder="Search by title or author name"
                            onKeyDown={handleKeyDown}
                            className="px-2 py-2 outline-none border-none rounded-none text-sm sm:text-base"
                        />

                        <SearchField.ClearButton className="mr-2" />
                    </SearchField.Group>
                </SearchField>

                <Button
                    onClick={handleSearch}
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl sm:rounded-l-none sm:rounded-r-xl border sm:border-l-0 border-blue-500 text-sm sm:text-base"
                >
                    Search
                </Button>

            </div>

            {/* Categories */}
            <BooksNavbar activeCategory={activeCategory} />

        </div>
    );
};

export default BooksHeader;