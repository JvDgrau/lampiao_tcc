"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { useUser } from "@/hooks/useUser";
import { useEffect, useState } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { Book } from "@/types";

export const revalidate = 0;

const MyLibrary = async () => {
  const { user } = useUser();
  const { supabaseClient } = useSessionContext();
  const [books, setBooks] = useState<Book[]>([]);

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
              {books.map((book) => (
                <div key={book.user_book_id}>
                  <h3>{book.book_id}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MyLibrary;
