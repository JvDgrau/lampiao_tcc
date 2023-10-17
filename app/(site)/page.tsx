import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import getBooksById from "@/actions/getBooksById";

export const revalidate = 0;

export default async function Home() {
  const books = await getBooksById("romance", 0, 40);

  return (
    <div
      className="
        bg-gray-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="mb-2">
          <h1
            className="
            text-white 
              text-3xl 
              font-semibold
            "
          >
            Bem vindo ao Lampião
          </h1>
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            <ListItem name="Lidos" href="liked" />
            <ListItem name="Lendo" href="liked" />
            <ListItem name="Quero ler" href="liked" />
            <ListItem name="Críticas" href="liked" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Encontre seus livros preferidos
          </h1>
        </div>
        <PageContent books={books} />
      </div>
    </div>
  );
}
