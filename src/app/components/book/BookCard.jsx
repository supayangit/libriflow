import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
    return (
        <div key={book.id} className="bg-white rounded-xl shadow-sm">

            <div className="w-full h-83 relative rounded-xl overflow-hidden">
                <Image
                    src={book.image_url}
                    fill
                    alt={book.title}
                    className="object-cover"
                />
            </div>

            <div className="p-4 space-y-4">
                <p className="text-xs text-blue-400">{book.category}</p>
                <h3 className="font-semibold text-black">{book.title}</h3>
                <p className="text-xs text-gray-500 mb-3">{book.author} • {book.publication_year}</p>

                <Link href={`/books/${book.id}`}>
                    <button className="w-full bg-gray-100 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition cursor-pointer">
                        View Details
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default BookCard;