import getBooks from "@/actions/getBooks";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import getBooksById from "@/actions/getBooksById";

export const revalidate = 0;

export default async function Home() {
  const books = await getBooksById();

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
            <ListItem name="Lidos" image="/images/liked.png" href="liked" />
            <ListItem name="Lendo" image="/images/liked.png" href="liked" />
            <ListItem name="Quero ler" image="/images/liked.png" href="liked" />
            <ListItem name="Críticas" image="/images/liked.png" href="liked" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Minha estante</h1>
        </div>
        <PageContent books={books} />
      </div>
    </div>
  );
}
