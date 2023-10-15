/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, FC } from "react";
import useOnPlay from "@/hooks/useOnPlay";
import useAuthModal from "@/hooks/useAuthModal";
import BookComponent from "@/components/BookComponent";
import ModalBook from "@/components/ModalBooks";

interface Book {
  id: string;
  thumbnail?: string;
  title: string;
  description: string;
  comments: Comment[];
}

interface Comment {
  name: string;
  comment: string;
}

interface PageContentProps {
  books: Book[];
}

const PageContent: FC<PageContentProps> = ({ books }) => {
  const onPlay = useOnPlay(books);
  const { onClose, isOpen } = useAuthModal();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  if (books.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        Cadastre-se e escolha seus livros preferidos.
      </div>
    );
  }

  const onClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <ModalBook isOpen={!!selectedBook} onClose={handleCloseModal}>
        {selectedBook && (
          <BookComponent
            bookThumbnail={selectedBook.thumbnail}
            bookDescription={selectedBook.description}
            comments={selectedBook.comments}
          />
        )}
      </ModalBook>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          2xl:grid-cols-8 
          gap-4 
          mt-4
        "
      >
        {books
          .filter((item) => item.thumbnail)
          .map((item) => (
            <div key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-150 h-220 hover:scale-105 transition-transform duration-300"
                onClick={() => onClick(item)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PageContent;
