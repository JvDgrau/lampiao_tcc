"use client";

import { Books } from "@/types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface SearchContentProps {
  books: Books[];
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
    <div className="flex flex-col gap-y-2 w-full px-6">
      {books.map((books: Books) => (
        <div key={books.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={books} />
          </div>
          <LikeButton songId={books.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
