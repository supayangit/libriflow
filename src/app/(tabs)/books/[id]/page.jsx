"use client";

import { useParams } from "next/navigation";
import Books from "@/lib/data/books.json";
import Image from "next/image";
import { toast } from "react-toastify";
import { useState } from 'react';

const BookDetailsPage = () => {
  const params = useParams();
  const id = parseInt(params.id);

  const book = Books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Book not found
        </h2>
      </div>
    );
  }

 const [borrowed, setBorrowed] = useState(false);

  const handleBorrow = () => {
    if (borrowed) return;

    setBorrowed(true);

    toast.success(`"${book.title}" borrowed successfully!`);
  };

  return (
    <div className="py-20 px-30 flex gap-15 mx-auto">

      {/* LEFT IMAGE */}
      <div className="w-1/2 h-150 relative rounded-xl overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="space-y-6">

        <div>
          <p className="text-xs text-blue-500 uppercase">{book.category}</p>
          <h1 className="text-4xl font-bold">{book.title}</h1>
          <p className="text-gray-700">by {book.author}</p>
        </div>

        {/* Availability */}
        <div className="bg-green-100 p-4 rounded-lg text-sm">
          <p className="font-semibold">Available</p>
          <p className="text-gray-600">
            {book.available_quantity} copies left
          </p>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">Description</h3>
          <p className="text-gray-600">{book.description}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleBorrow}
          disabled={borrowed}
          className={`w-full py-3 rounded-lg shadow transition cursor-pointer
            ${borrowed
              ? "bg-green-600 text-white cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {borrowed ? "Borrowed ✓" : "Borrow Book"}
        </button>

        {/* Extra Info */}
        <div className="grid grid-cols-2 gap-4 pt-6 text-sm text-gray-600">
          <div>
            <p className="font-bold text-sm">PUBLICATION</p>
            <p>{book.publication_year}</p>
          </div>
          <div>
            <p className="font-bold text-sm">READS</p>
            <p>{book.total_reads}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetailsPage;