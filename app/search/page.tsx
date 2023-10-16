"use client";
import { useState, useEffect } from "react";
import getBooksByTitle from "@/actions/getBooksByTitle";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import SearchContent from "./components/SearchContent";
import { Book } from "@/types";

export const revalidate = 0;

interface SearchProps {
  searchParams: { title: string };
}

const Search = ({ searchParams }: SearchProps) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (searchParams.title) {
        const results = await getBooksByTitle(searchParams.title);
        setBooks(results);
      }
    };

    fetchBooks();
  }, [searchParams.title]);

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Pesquise</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent books={books} />
    </div>
  );
};

export default Search;
