import React from 'react';
import Image from 'next/image';
import Books from '@/lib/data/books.json';
import Link from 'next/link';

const Feature = () => {
    return (
        <section className="p-10">
            <div className="mx-auto">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Featured Books</h2>
                        <p className="text-gray-500 text-sm">
                            Handpicked selections by our expert curators.
                        </p>
                    </div>
                    <Link href="/books" className="text-blue-600 hover:text-blue-800 transition">
                        View all
                    </Link>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {[...Books]
                        .sort((a, b) => b.total_reads - a.total_reads)
                        .slice(0, 4)
                        .map((book) => (
                            <div key={book.id} className="bg-white rounded-xl shadow-sm">

                                <div className='w-full h-100 relative rounded-t-xl overflow-hidden'>
                                    <Image
                                    src={book.image_url}
                                    fill
                                    alt={book.title}
                                    className="object-cover"
                                />
                                </div>

                                <div className="p-4 space-y-4">
                                    <p className="text-xs text-blue-400">{book.category.toUpperCase()}</p>

                                    <h3 className="font-semibold text-black">
                                        {book.title}
                                    </h3>

                                    <p className="text-xs text-gray-500 mb-3">
                                        {book.author} • {book.publication_year}
                                    </p>

                                    <button className="w-full bg-gray-100 py-2 rounded-lg text-sm text-gray-700">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>

            </div>
        </section>
    );
};

export default Feature;