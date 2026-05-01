import React from 'react';
import Image from 'next/image';

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
                    <a href="#" className="text-blue-600 text-md">View all</a>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((book) => (
                        <div key={book} className="bg-white rounded-xl shadow-sm">

                            <Image
                                src="/assets/Atomic_habits.jpg"
                                width={300}
                                height={500}
                                alt="Atomic Habits book cover"
                                className="w-full h-auto rounded-t-lg mb-4"
                            />

                            <div className="p-4 space-y-4">
                                <p className="text-xs text-blue-400">FICTION</p>
                                <h3 className="font-semibold text-black">Atomic Habits</h3>
                                <p className="text-xs text-gray-500 mb-3">James Clear • 2024</p>

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