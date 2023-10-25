"use client";
import { Book } from "@/types";

interface SearchContentProps {
  books: Book[];
  onBookClick: (book: Book) => void;
}

const SearchContent: React.FC<SearchContentProps> = ({
  books,
  onBookClick,
}) => {
  if (books.length === 0) {
    return (
      <div
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          pr-12
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
          <div key={item.id} onClick={() => onBookClick(item)}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-150 h-220 hover:scale-105 transition-transform duration-300 rounded-lg"
            />
          </div>
        ))}
    </div>
  );
};

export default SearchContent;
