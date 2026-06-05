import ClientBookPage from "./ClientBookPage";
import books from "@/lib/data/books.json";

export async function generateMetadata({ params }) {
  const id = parseInt(params.id);
  const book = books.find((b) => b.id === id);

  if (book) {
    return {
      title: `${book.title} — Libriflow`,
      description: book.description || undefined,
    };
  }

  return { title: `Book — Libriflow` };
}

export default function Page({ params }) {
  return <ClientBookPage params={params} />;
}