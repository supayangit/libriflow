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
                    className="w-70"
                    value={inputValue}
                    onChange={setInputValue}
                >
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input
                            placeholder="Search by title or author name"
                            onKeyDown={handleKeyDown}
                        />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

                <Button onClick={handleSearch}>
                    Search
                </Button>
            </div>

            <BooksNavbar activeCategory={activeCategory} />
        </div>
    );
};

export default BooksHeader;