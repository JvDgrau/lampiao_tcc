"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import PageContent from "./Home/PageContent";
import getBooksByGenre from "@/actions/getBooksByGenre";
import BookGenreDropdown from "@/components/BookGenreDropdown";
import { Book } from "@/types";

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage: number = 40;

  useEffect(() => {
    async function fetchBooks() {
      const startIndex = (currentPage - 1) * booksPerPage;
      const bookResults = await getBooksByGenre(
        genre,
        startIndex,
        booksPerPage
      );
      setBooks(bookResults);
    }

    fetchBooks();
  }, [genre, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Bem vindo ao Lampião
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem name="Lidos" href="myLibrary" />
            <ListItem name="Lendo" href="myLibrary" />
            <ListItem name="Quero ler" href="myLibrary" />
            <ListItem name="Críticas" href="myLibrary" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Encontre seus livros preferidos
          </h1>
        </div>
        <div className="mt-2">
          <BookGenreDropdown onGenreChange={setGenre} />
        </div>
        <PageContent books={books} />
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}
          >
            Anterior
          </button>
          <button onClick={handleNextPage}>Próximo</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
