"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const ClientBookPage = ({ params }) => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const router = useRouter();
  const id = parseInt(params.id);

  const [borrowed, setBorrowed] = useState(false);
  const [session, setSession] = useState(null);

  const book = Books.find((b) => b.id === id);

  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await authClient.getSession();
        const data = res?.data || res;
        setSession(data);
      } catch (err) {
        console.error(err);
      }
    };

    getSession();
  }, []);

  if (!book) {
    return (
      <div className="p-10 sm:p-20 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-500">
          Book not found
        </h2>
      </div>
    );
  }

  const handleBorrow = () => {
    if (!session?.user) {
      router.push("/signin");
      return;
    }

    if (borrowed) return;

    setBorrowed(true);
    toast.success(`"${book.title}" borrowed successfully!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 lg:py-20">

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6">

          {/* TITLE */}
          <div>
            <p className="text-xs sm:text-sm text-blue-500 uppercase tracking-wide">
              {book.category}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {book.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-700 mt-1">
              by {book.author}
            </p>
          </div>

          {/* AVAILABILITY */}
          <div className="bg-green-100 p-3 sm:p-4 rounded-lg text-sm">
            <p className="font-semibold text-green-700">Available</p>
            <p className="text-gray-600">{book.available_quantity} copies left</p>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-2">Description</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {book.description}
            </p>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleBorrow}
            disabled={borrowed}
            className={`w-full py-3 rounded-lg shadow transition text-sm sm:text-base cursor-pointer
              ${borrowed
                ? "bg-green-600 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {borrowed ? "Borrowed ✓" : "Borrow Book"}
          </button>

          {/* EXTRA INFO */}
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-gray-600">
            <div>
              <p className="font-bold text-xs sm:text-sm">PUBLICATION</p>
              <p>{book.publication_year}</p>
            </div>

            <div>
              <p className="font-bold text-xs sm:text-sm">READS</p>
              <p>{book.total_reads}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClientBookPage;
