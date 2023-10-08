"use client";

import { Books } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  books: Books[];
}

const PageContent: React.FC<PageContentProps> = ({ books }) => {
  const onPlay = useOnPlay(books);

  if (books.length === 0) {
    return (
      <div className="mt-4 text-neutral-400">
        Cadastre-se e escolha seus livros preferidos.
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
      {books.map((item) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
};

export default PageContent;
