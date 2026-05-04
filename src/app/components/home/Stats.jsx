import React from 'react';

const Stats = () => {
    return (
        <section className="bg-blue-600 text-white w-full py-12 sm:py-16 lg:py-20">
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-20">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

                    <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            12k+
                        </h3>
                        <p className="text-xs sm:text-sm mt-2">
                            Digital Books
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            45k+
                        </h3>
                        <p className="text-xs sm:text-sm mt-2">
                            Active Readers
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            98%
                        </h3>
                        <p className="text-xs sm:text-sm mt-2">
                            Satisfaction Rate
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Stats;