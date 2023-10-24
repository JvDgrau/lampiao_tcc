import { Book } from "@/types";

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY || "";
const genreQueryFilter = "genre:";

const getBooksByGenre = async (
  genre: string,
  startIndex: number,
  maxResults: number
): Promise<Book[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${
        genreQueryFilter + genre
      }&langRestrict=pt-BR&orderBy=newest&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`Erro interno: ${response.status}`);
    }

    const data = await response.json();

    if (data.totalItems === 0) return [];

    const booksMap: { [title: string]: Book } = {};

    data.items.forEach((book: any) => {
      const title = book.volumeInfo.title;
      if (title && !booksMap[title]) {
        booksMap[title] = {
          id: book.id,
          title: title,
          thumbnail: book.volumeInfo.imageLinks?.thumbnail,
          description: book.volumeInfo.description || "Sinopse não disponível",
        };
      }
    });

    const uniqueBooks = Object.values(booksMap);

    return uniqueBooks;
  } catch (error) {
    console.error("Erro ao buscar os livros pelo gênero:", error);
    return [];
  }
};

export default getBooksByGenre;
