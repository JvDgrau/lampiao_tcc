import React, { FC } from "react";

interface Comment {
  name: string;
  comment: string;
}

interface BookComponentProps {
  bookThumbnail?: string;
  bookDescription: string;
  comments: Comment[];
}

const BookComponent: FC<BookComponentProps> = ({
  bookThumbnail,
  bookDescription,
  comments,
}) => {
  return (
    <>
      <div
        className="w-1/2 p-8 bg-gradient-to-b 
      from-green-900 flex items-center justify-center"
      >
        <img src={bookThumbnail} alt="Book Thumbnail" />
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Sinopse</h2>
            <p>{bookDescription}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Comentários</h2>
            {/* {comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="font-medium">{comment.name}</p>
                <p>{comment.comment}</p>
              </div>
            ))} */}
          </div>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded self-end">
          Adicionar Livro
        </button>
      </div>
    </>
  );
};

export default BookComponent;
