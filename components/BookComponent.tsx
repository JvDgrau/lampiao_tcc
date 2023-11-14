import React, { FC, useState } from "react";
import RatingComponent from "./RatingComponent";
import { useUser } from "@/hooks/useUser";
import { useSessionContext } from "@supabase/auth-helpers-react";

interface Comment {
  name?: string;
  comment?: string;
}

interface BookComponentProps {
  bookId: any;
  bookTitle: string;
  bookThumbnail?: string;
  bookDescription?: string;
  comments?: Comment[];
}

const BookComponent: FC<BookComponentProps> = ({
  bookId,
  bookTitle,
  bookThumbnail,
  bookDescription,
  comments,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const averageRating = 5;
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();

  const truncatedDescription = (desc: string | undefined) => {
    if (desc && desc.length > 150) {
      return `${desc.slice(0, 150)}...`;
    }
    return desc;
  };

  const addBookToUser = async () => {
    if (!user?.id) return;

    try {
      const { data, error } = await supabaseClient.from("user_books").insert([
        {
          user_id: user.id,
          book_id: bookId,
          status: "Reading",
          personal_rating: null,
        },
      ]);

      if (error) throw error;

      alert("Livro adicionado com sucesso!");
    } catch (err) {
      console.error("Erro ao adicionar livro:", err);
      alert("Erro ao adicionar o livro. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <div className="w-1/2 p-8 bg-gradient-to-b to bg-gray-900 from-indigo-700 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full mt-12">
          <img
            src={bookThumbnail}
            alt="Book Thumbnail"
            className="transform scale-125 mb-12 rounded-lg"
          />
          <p className="text-center">{bookTitle}</p>
          <div className="mb-6 flex items-center space-x-2">
            <div className="bg-white px-4 py-1 rounded-md flex items-center space-x-2 mt-6">
              <span className="text-gray-700 font-semibold">MÉDIA GERAL |</span>
              <span className="text-black font-bold">{averageRating}</span>
            </div>
          </div>
          <RatingComponent />
        </div>
      </div>
      <div className="w-1/2 p-8 flex flex-col h-full">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-black mb-2">Sinopse</h2>
            <p className="text-sm font-bold text-[#302D2D] mb-2">
              {showFullDescription
                ? bookDescription
                : truncatedDescription(bookDescription)}
            </p>
            {bookDescription && bookDescription.length > 150 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-indigo-500 hover:underline mt-2"
              >
                {showFullDescription ? "Ver menos" : "Ler mais"}
              </button>
            )}
          </div>
          <div className="bg-[#F4EEE7] flex-grow overflow-y-auto">
            <h2 className="text-xl text-black font-bold mb-2">Comentários</h2>
            {comments?.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          disabled={!user?.id}
          onClick={addBookToUser}
          className={`bg-indigo-200 text-indigo-800 px-8 py-1 border-2 border-indigo-800 rounded-md self-center hover:opacity-75 mt-4 ${
            !user?.id ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-300"
          }`}
        >
          Adicionar Livro
        </button>
      </div>
    </>
  );
};

export default BookComponent;
