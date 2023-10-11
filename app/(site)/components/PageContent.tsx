/* eslint-disable @next/next/no-img-element */
"use client";

import { Books } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";
import useAuthModal from "@/hooks/useAuthModal";

interface PageContentProps {
  books: Books[];
}

const PageContent: React.FC<PageContentProps> = ({ books }) => {
  const onPlay = useOnPlay(books);
  const { onClose, isOpen } = useAuthModal();

  if (books.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        Cadastre-se e escolha seus livros preferidos.
      </div>
    );
  }
  const onClick = (id: string) => {
    alert(`ID do livro: ${id}`);
  };

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
              onClick={() => onClick(item.id)} // aqui é a mudança
            />
          </div>
        ))}
    </div>
  );
};

export default PageContent;
