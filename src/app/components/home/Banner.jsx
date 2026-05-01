import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="">
            <div className="mx-auto flex justify-between gap-10 items-center">

                {/* Left */}
                <div className="items-start">
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                        NEW ARRIVALS 2024
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                        Find Your Next <span className="text-blue-600">Great Read</span>
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-md">
                        Access thousands of digital books, research papers, and exclusive journals.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow">
                            Browse Now
                        </button>
                        <button className="border px-6 py-3 rounded-lg">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="items-end">
                    <Image
                        src="/assets/books.jpg"
                        alt="library"
                        width={500}
                        height={500}
                        className="rounded-2xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;