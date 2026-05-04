import React from 'react';
import Image from 'next/image';
import Books from '@/lib/data/books.json';
import Link from 'next/link';

const Feature = () => {
    return (
        <section className="py-10 sm:py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-black">
                            Featured Books
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Handpicked selections by our expert curators.
                        </p>
                    </div>

                    <Link
                        href="/books"
                        className="text-blue-500 hover:text-blue-700 transition text-sm sm:text-base"
                    >
                        View all
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[...Books]
                        .sort((a, b) => b.total_reads - a.total_reads)
                        .slice(0, 4)
                        .map((book) => (
                            <div key={book.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition">

                                {/* Image */}
                                <div className="w-full h-60 sm:h-72 md:h-80 lg:h-72 relative rounded-t-xl overflow-hidden">
                                    <Image
                                        src={book.image_url}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        alt={book.title}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-4 space-y-3">
                                    <p className="text-xs text-blue-400">
                                        {book.category.toUpperCase()}
                                    </p>

                                    <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-2">
                                        {book.title}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {book.author} • {book.publication_year}
                                    </p>

                                    <Link href={`/books/${book.id}`}>
                                        <button className="w-full bg-gray-100 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    );
};

export default Feature;