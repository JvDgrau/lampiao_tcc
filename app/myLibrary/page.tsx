"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { Book } from "@/types";
import fetchBookThumbnail from "@/actions/getBookThumbnail";

export const revalidate = 0;

interface ThumbnailMap {
  [key: number]: string;
}

const MyLibrary = async () => {
  const { user } = useUser();
  const { supabaseClient } = useSessionContext();
  const [books, setBooks] = useState<Book[]>([]);
  const [bookThumbnails, setBookThumbnails] = useState<ThumbnailMap>({});

  useEffect(() => {
    if (!user?.id) {
      return;
    }
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("user_books")
        .select("*")
        .eq("user_id", user.id);

      if (!error && data) {
        setBooks(data as unknown as Book[]);
      }
    };

    fetchData();
  }, [supabaseClient, user?.id]);

  useEffect(() => {
    const fetchThumbnails = async () => {
      const thumbnailMap: ThumbnailMap = {};

      for (const book of books) {
        thumbnailMap[book.user_book_id] = await fetchBookThumbnail(
          book.book_id
        );
      }

      setBookThumbnails(thumbnailMap);
    };

    fetchThumbnails();
  }, [books]);

  const removeBook = async (userBookId: number) => {
    if (!user?.id) return;

    try {
      const { error } = await supabaseClient
        .from("user_books")
        .delete()
        .match({ user_id: user.id, user_book_id: userBookId });

      if (error) throw error;

      setBooks(books.filter((book) => book.user_book_id !== userBookId));
    } catch (err) {
      console.error("Erro ao remover livro:", err);
    }
  };

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
      <Header>
        <div className="mt-20">
          <div
            className="
              flex 
              flex-col 
              md:flex-row 
              items-center 
              gap-x-5
            "
          >
            <div className="relative h-32 w-32 lg:h-44 lg:w-44">
              <Image
                className="object-cover"
                fill
                src="/images/LibraryIcon.png"
                alt="Playlist"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">
                Bem vindo de volta {user?.email}
              </p>
              <h1
                className="
                  text-white 
                  text-4xl 
                  sm:text-5xl 
                  lg:text-7xl 
                  font-bold
                "
              >
                Minha Biblioteca
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4 ml-6">
        {books.map((book) => (
          <div key={book.user_book_id} className="relative group">
            <button
              className="
                absolute top-0 start-28 z-10  
                bg-red-500 text-white 
                w-5 h-5 
                rounded-full 
                opacity-0 group-hover:opacity-100
                text-xs
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700
              "
              onClick={() => removeBook(book.user_book_id)}
            >
              &times;{" "}
            </button>
            <img
              src={bookThumbnails[book.user_book_id]}
              alt={book.title}
              className="w-150 h-220 hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibrary;
