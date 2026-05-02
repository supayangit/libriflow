import React from 'react';
import Image from 'next/image';
import Books from '@/lib/data/books.json';

const Feature = () => {
    return (
        <section className="bg-white p-10">
            <div className="mx-auto">

                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Featured Books</h2>
                        <p className="text-gray-500 text-sm">
                            Handpicked selections by our expert curators.
                        </p>
                    </div>
                    <a href="/books" className="text-blue-600">View all</a>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {[...Books]
                        .sort((a, b) => b.total_reads - a.total_reads)
                        .slice(0, 4)
                        .map((book) => (
                            <div key={book.id} className="bg-white rounded-xl shadow-sm">

                                <Image
                                    src={book.image_url}
                                    width={300}
                                    height={400}
                                    alt={book.title}
                                    className="rounded-t-lg mb-4"
                                />

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