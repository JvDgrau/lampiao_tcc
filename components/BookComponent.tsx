import React, { FC, useState } from "react";

interface Comment {
  name?: string;
  comment?: string;
}

interface BookComponentProps {
  bookTitle: string;
  bookThumbnail?: string;
  bookDescription?: string;
  comments?: Comment[];
}

const BookComponent: FC<BookComponentProps> = ({
  bookTitle,
  bookThumbnail,
  bookDescription,
  comments,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncatedDescription = (description: string | undefined) => {
    if (!description) return "";
    return description.length > 150
      ? description.substr(0, 147) + "..."
      : description;
  };

  return (
    <>
      <div
        className="w-1/2 p-8 bg-gradient-to-b 
        to bg-gray-900 from-indigo-700  flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={bookThumbnail}
            alt="Book Thumbnail"
            className="transform scale-125 mb-12 rounded-lg"
          />
          <p className="text-center">{bookTitle}</p>
        </div>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div>
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
                className="text-indigo-800 hover:underline mt-2"
              >
                {showFullDescription ? "Ver menos" : "Ler mais"}
              </button>
            )}
          </div>
          <div className="mb-4 bg-[#F4EEE7]">
            <h2 className="text-xl text-black font-bold mb-2">Comentários</h2>
            {comments?.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-indigo-200 text-indigo-800 px-8 py-1 border-2 border-indigo-800 rounded-md self-center hover:opacity-75">
          Adicionar Livro
        </button>
      </div>
    </>
  );
};

export default BookComponent;
