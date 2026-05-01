import React from 'react';

const Stats = () => {
    return (
        <section className="bg-blue-600 text-white w-full py-20">
            <div className="mx-auto grid grid-cols-3 text-center gap-8">

                <div>
                    <h3 className="text-3xl font-bold">12k+</h3>
                    <p className="text-sm mt-2">Digital Books</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold">45k+</h3>
                    <p className="text-sm mt-2">Active Readers</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold">98%</h3>
                    <p className="text-sm mt-2">Satisfaction Rate</p>
                </div>

            </div>
        </section>
    );
};

export default Stats;