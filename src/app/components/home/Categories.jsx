"use client";
import React from "react";
import Link from 'next/link';
import {
    FaBookOpen,
    FaLaptopCode,
    FaFlask,
    FaBrain,
    FaChartLine,
    FaBriefcase,
    FaDollarSign,
    FaUser,
    FaPaintBrush,
    FaHistory,
    FaHeartbeat,
    FaBook
} from "react-icons/fa";

const iconMap = {
    Story: FaBookOpen,
    Tech: FaLaptopCode,
    Science: FaFlask,
    Psychology: FaBrain,
    Growth: FaChartLine,
    Business: FaBriefcase,
    Finance: FaDollarSign,
    Biography: FaUser,
    Arts: FaPaintBrush,
    History: FaHistory,
    Health: FaHeartbeat,
    Life: FaBook
};

import { useEffect, useState } from "react";

const Categories = () => {

    const [Books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/api/books")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const uniqueCategories = [...new Set(Books.map(book => book.category))];

    return (
        <section>
            <div className="mx-auto text-center">

                <h2 className="text-2xl font-semibold mb-8 text-slate-950 dark:text-white">
                    Popular Categories
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-6">
                    {uniqueCategories.map((cat) => {
                        const Icon = iconMap[cat] || FaBook;

                        return (
                            <Link key={cat} href={`/books/category/${cat.toLowerCase()}`}>
                                <div
                                    className="bg-white/90 border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition dark:bg-slate-900/80 dark:border-slate-800"
                                >
                                    <Icon className="text-2xl text-blue-500 mb-3 dark:text-blue-300" />
                                    <p className="text-sm font-medium text-slate-950 dark:text-slate-100">{cat}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Categories;