/* eslint-disable @next/next/no-img-element */
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
    <div className="flex bg-22490A">
      <div className="flex-1 p-8">
        <img src={bookThumbnail} alt="Book Thumbnail" className="mx-auto" />
      </div>
      <div className="flex-1 bg-white p-8">
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
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Adicionar Livro
        </button>
      </div>
    </div>
  );
};

export default BookComponent;
