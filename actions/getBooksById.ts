import { Books } from "@/types";

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY || "";
const query = "genre:romance";

const getBooksById = async (): Promise<Books[]> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=pt&key=${API_KEY}&maxResults=40`
  );
  const data = await response.json();

  const books: Books[] = data.items.map((book: any) => ({
    id: book.id,
    title: book.volumeInfo.title,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail,
  }));

  return books;
};

export default getBooksById;
