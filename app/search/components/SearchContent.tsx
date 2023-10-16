"use client";

import { Book } from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface SearchContentProps {
  books: Book[];
}

const SearchContent: React.FC<SearchContentProps> = ({ books }) => {
  const onPlay = useOnPlay(books);

  if (books.length === 0) {
    return (
      <div
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        Nenhum conteúdo encontrado.
      </div>
    );
  }

  return (
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
            />
          </div>
        ))}
    </div>
  );
};

export default SearchContent;
