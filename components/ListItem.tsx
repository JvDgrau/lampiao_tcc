"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className=" 
        ml-5
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center
        rounded-md 
        overflow-hidden 
        gap-y-2 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        w-[100px] 
        h-[100px]
        border border-white
    "
    >
      <p className="font-medium truncate">{name}</p>
      <div className="h-[1px] w-full bg-white"></div>
      <span className="font-bold">{10}</span>
    </button>
  );
};

export default ListItem;
