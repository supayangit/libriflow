import Books from "@/lib/data/books.json";

export async function GET() {
  return Response.json(Books);
}