"use client";
import React from 'react';
import { SearchField, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import BooksNavbar from './BooksNavbar';

const BooksHeader = ({ activeCategory, inputValue, setInputValue }) => {
    const router = useRouter();

    const handleSearch = () => {
        if (!inputValue.trim()) return;
        router.push(`/books?search=${encodeURIComponent(inputValue)}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className='w-full space-y-10 border-b border-gray-200 pb-10'>
            <div>
                <h1 className="font-bold text-3xl">Explore Library</h1>
                <p>Browse through our collection of over 12,000 digital books!</p>
            </div>

            <div className="flex items-center gap-2">

                <SearchField
                    name="search"
                    value={inputValue}
                    onChange={setInputValue}
                    className="w-70"
                >
                    <SearchField.Group className="flex items-center border border-gray-300 rounded-l-xl rounded-r-none overflow-hidden">
                        <SearchField.SearchIcon className="ml-2 text-gray-500" />

                        <SearchField.Input
                            placeholder="Search by title or author name"
                            onKeyDown={handleKeyDown}
                            className="px-2 py-2 outline-none border-none rounded-none"
                        />

                        <SearchField.ClearButton className="mr-2" />
                    </SearchField.Group>
                </SearchField>

                <Button
                    onClick={handleSearch}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-l-none rounded-r-xl border border-l-0 border-blue-500"
                >
                    Search
                </Button>

            </div>

            <BooksNavbar activeCategory={activeCategory} />
        </div>
    );
};

export default BooksHeader;