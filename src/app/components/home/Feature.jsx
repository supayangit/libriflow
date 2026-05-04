"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Feature = () => {

    const [Books, setBooks] = useState([]);
    
        useEffect(() => {
            fetch("/api/books")
                .then(res => res.json())
                .then(data => setBooks(data));
        }, []);

    return (
        <section className="sm:py-12 lg:py-16">
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
                        className="text-blue-600 hover:underline transition text-sm sm:text-base"
                    >
                        View all
                    </Link>
                </div>

                {/* swiper */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    navigation
                    pagination={{ clickable: true }}
                    grabCursor={true}
                    className="mySwiper pb-12"
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {[...Books]
                        .sort((a, b) => b.total_reads - a.total_reads)
                        .slice(0, 8)
                        .map((book) => (
                            <SwiperSlide key={book.id} className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition pb-4">

                                {/* Image */}
                                <div className="w-full h-40 sm:h-72 md:h-80 lg:h-72 relative rounded-t-lg sm:rounded-t-xl overflow-hidden">
                                    <Image
                                        src={book.image_url}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        alt={book.title}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3">
                                    <p className="text-[12px] sm:text-xs text-blue-400">
                                        {book.category.toUpperCase()}
                                    </p>

                                    <h3 className="font-semibold text-black text-sm sm:text-base line-clamp-2">
                                        {book.title}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {book.author} • {book.publication_year}
                                    </p>

                                    <Link href={`/books/${book.id}`}>
                                        <button className="w-full bg-gray-100 py-2 rounded-lg text-[11px] sm:text-sm text-gray-700 hover:bg-gray-200 transition cursor-pointer">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>

            </div>
        </section >
    );
};

export default Feature;