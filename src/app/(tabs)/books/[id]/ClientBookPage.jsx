"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const ClientBookPage = ({ params }) => {
  const router = useRouter();

  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  const [borrowed, setBorrowed] = useState(false);
  const [session, setSession] = useState(null);

  const id = Number(params.id);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const res = await fetch("/api/books");
        const data = await res.json();

        console.log("=== BOOKS API RESPONSE ===");
        console.log(data);

        setBooks(data);
      } catch (err) {
        console.error("Failed to fetch books:", err);
      } finally {
        setLoadingBooks(false);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    console.log("=== BOOK PAGE DEBUG ===");
    console.log("Route Param ID:", params.id);
    console.log("Parsed ID:", id);
    console.log("Books State:", books);

    if (books.length > 0) {
      console.log("First Book:", books[0]);
    }
  }, [books, id, params.id]);

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

  const book = books.find(
    (b) => Number(b.id) === Number(id)
  );

  console.log("Matched Book:", book);

  if (loadingBooks) {
    return (
      <div className="p-10 sm:p-20 text-center">
        <h2 className="text-xl font-semibold">
          Loading book...
        </h2>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="p-10 sm:p-20 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-500">
          Book not found
        </h2>

        <p className="mt-4 text-slate-500">
          Check browser console for debug logs.
        </p>
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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-64 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 dark:shadow-black/30">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6">
          <div>
            <p className="text-xs sm:text-sm text-blue-500 uppercase tracking-wide">
              {book.category}
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-slate-950 dark:text-white">
              {book.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-1">
              by {book.author}
            </p>
          </div>

          <div className="bg-emerald-100 p-3 sm:p-4 rounded-lg text-sm dark:bg-emerald-950/40">
            <p className="font-semibold text-emerald-700 dark:text-emerald-300">
              Available
            </p>

            <p className="text-slate-600 dark:text-slate-300">
              {book.available_quantity} copies left
            </p>
          </div>

          <div className="bg-white/90 border border-slate-200 rounded-3xl p-5 dark:bg-slate-950/90 dark:border-slate-800">
            <h3 className="font-bold text-base sm:text-lg mb-2 text-slate-950 dark:text-white">
              Description
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {book.description}
            </p>
          </div>

          <button
            onClick={handleBorrow}
            disabled={borrowed}
            className={`w-full py-3 rounded-lg shadow-lg transition duration-300 text-sm sm:text-base cursor-pointer ${
              borrowed
                ? "bg-green-600 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {borrowed ? "Borrowed ✓" : "Borrow Book"}
          </button>

          <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-slate-600 dark:text-slate-400">
            <div>
              <p className="font-bold text-xs sm:text-sm">
                PUBLICATION
              </p>
              <p>{book.publication_year}</p>
            </div>

            <div>
              <p className="font-bold text-xs sm:text-sm">
                READS
              </p>
              <p>{book.total_reads}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBookPage;