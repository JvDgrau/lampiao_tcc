import { Book } from "@/types";

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY || "";

const getBooksByTitle = async (title: string): Promise<Book[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${API_KEY}`
    );
    const data = await response.json();

    if (data.totalItems === 0) {
      return [];
    }

    const books: Book[] = data.items.map((book: any) => ({
      id: book.id,
      title: book.volumeInfo.title,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
    }));

    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export default getBooksByTitle;
