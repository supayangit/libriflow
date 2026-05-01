import React from 'react';

const Categories = () => {
    return (
        <section className="bg-gray-50">
            <div className="mx-auto text-center">

                <h2 className="text-2xl font-semibold mb-8">
                    Popular Categories
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
                    {["Science", "Arts", "History", "Tech", "Business", "Health", "Life"].map((cat) => (
                        <div
                            key={cat}
                            className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center"
                        >
                            <div className="w-10 h-10 bg-gray-200 rounded-md mb-3"></div>
                            <p className="text-sm font-medium">{cat}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;