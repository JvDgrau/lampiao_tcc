"use client";

import { MdMenuBook } from "react-icons/md";

import { Book } from "@/types";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useOnPlay from "@/hooks/useOnPlay";

import MediaItem from "./MediaItem";

interface LibraryProps {
  books: Book[];
}

const Library: React.FC<LibraryProps> = ({ books }) => {
  const { user, subscription } = useUser();
  const uploadModal = useUploadModal();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();

  const onPlay = useOnPlay(books);

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div
          className="inline-flex items-center gap-x-2 cursor-pointer "
          onClick={onClick}
        >
          <MdMenuBook className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md hover:text-white">
            Sua Biblioteca
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {books.map((item) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
