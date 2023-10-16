import { Book } from "@/types";

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY || "";
const genreQueryFilter = "genre:";

const getBooksById = async (
  genre: string,
  startIndex: number,
  maxResults: number
): Promise<Book[]> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${
      genreQueryFilter + genre
    }&langRestrict=pt-BR&orderBy=newest&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`
  );
  const data = await response.json();

  if (data.totalItems === 0) {
    const books: Book[] = [];
    return books;
  }

  const books: Book[] = data.items.map((book: any) => ({
    id: book.id,
    title: book.volumeInfo.title,
    thumbnail: book.volumeInfo.imageLinks?.thumbnail,
  }));

  return books;
};

export default getBooksById;
