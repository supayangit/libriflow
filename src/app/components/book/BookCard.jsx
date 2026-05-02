import React from 'react';
import Image from 'next/image';

const BookCard = ({ book }) => {
    return (
        <div key={book.id} className="bg-white rounded-xl shadow-sm">

            <Image
                src={book.image_url}
                width={200}
                height={300}
                alt={book.title}
                className="rounded-t-lg mb-4"
            />

            <div className="p-4 space-y-4">
                <p className="text-xs text-blue-400">FICTION</p>
                <h3 className="font-semibold text-black">{book.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{book.author} • {book.publication_year}</p>

                <button className="w-full bg-gray-100 py-2 rounded-lg text-sm text-gray-700">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default BookCard;