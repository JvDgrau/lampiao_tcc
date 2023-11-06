"use client";

import { MdMenuBook } from "react-icons/md";
import { useUser } from "@/hooks/useUser";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useRouter } from "next/navigation";

const Library = () => {
  const { user } = useUser();
  const subscribeModal = useSubscribeModal();
  const router = useRouter();
  const href = "myLibrary";

  const onClick = () => {
    if (!user) {
      return subscribeModal.onOpen();
    } else {
      router.push(href);
    }
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
    </div>
  );
};

export default Library;
