"use client";
import React, { useState, useEffect } from "react";
import getBooksByTitle from "@/actions/getBooksByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import SearchContent from "./components/SearchContent";
import { Book } from "@/types";

interface SearchProps {
  searchParams: { title: string };
}

const Search: React.FC<SearchProps> = ({ searchParams }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 40;
  const hasMoreBooks = books.length === booksPerPage;

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchParams.title) {
        const startIndex = (currentPage - 1) * booksPerPage;
        const results = await getBooksByTitle(
          searchParams.title,
          startIndex,
          booksPerPage
        );
        setBooks(results);
      } else {
        setBooks([]);
        setCurrentPage(1);
      }
    };

    fetchBooks();
  }, [searchParams.title, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Pesquise</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent books={books} />
      {books.length > 0 && (
        <div className="mt-4 flex justify-between px-4 pb-4">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Anterior
          </button>
          {hasMoreBooks && <button onClick={handleNextPage}>Próximo</button>}
        </div>
      )}
    </div>
  );
};

export default Search;
