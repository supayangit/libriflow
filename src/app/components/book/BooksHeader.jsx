import React from 'react';
import { Label, SearchField } from "@heroui/react";
import BooksNavbar from './BooksNavbar'

const BooksHeader = ({activeCategory}) => {
    return (
        <div className='w-full space-y-10 border-b border-gray-200 pb-10'>
            <div>
                <h1 className="font-bold text-3xl">Explore Library</h1>
                <p>Browse through our collection of over 12,000 digital books!</p>
            </div>

            <SearchField name="search" className="w-70">
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search by title or author name" />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>

            <BooksNavbar activeCategory={activeCategory} />
        </div>
    );
};

export default BooksHeader;