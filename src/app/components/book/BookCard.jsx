import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white/90 border border-slate-200 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition duration-300 backdrop-blur-xl dark:bg-slate-900/80 dark:border-slate-800">

            {/* Image */}
            <div className="w-full h-40 sm:h-56 md:h-64 lg:h-72 relative rounded-t-lg sm:rounded-t-xl overflow-hidden">
                <Image
                    src={book.image_url}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    alt={book.title}
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
                <p className="text-[10px] sm:text-xs text-blue-500">
                    {book.category}
                </p>

                <h3 className="font-semibold text-[12px] sm:text-sm md:text-base text-slate-900 dark:text-slate-100 line-clamp-2">
                    {book.title}
                </h3>

                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                    {book.author}
                </p>

                <Link href={`/books/${book.id}`}>
                    <button className="w-full bg-slate-100 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-sm text-slate-800 hover:bg-slate-200 cursor-pointer transition dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;