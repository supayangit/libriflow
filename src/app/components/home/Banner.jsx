import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <section>
            <div className="mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

                {/* Left */}
                <div className="text-center lg:text-left">
                    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                        NEW ARRIVALS 2026
                    </span>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                        Find Your Next <span className="text-blue-600">Great Read</span>
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-md mx-auto lg:mx-0">
                        Access thousands of digital books, research papers, and exclusive journals.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
                        <Link href="/books">
                            <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                                Browse Now
                            </button>
                        </Link>
                        <button className="w-full sm:w-auto border px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <Image
                        src="/assets/books.jpg"
                        alt="library"
                        width={500}
                        height={500}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                        className="rounded-2xl shadow-lg w-full h-auto"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;