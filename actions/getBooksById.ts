import { Books } from "@/types";

const API_KEY = "AIzaSyD6NhqtMlsOiDtUXQxBwSvUwXk4TZnXqgE";
const query = "genre:science fiction";

const getBooksById = async (): Promise<Books[]> => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
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
