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
    <div
      className="
    flex 
    items-center 
    justify-center 
"
    >
      <button
        onClick={onClick}
        className="
        m-5
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-between
        p-1
        rounded-md 
        overflow-hidden 
        bg-gradient-to-b from-indigo-700
        cursor-pointer 
        transition-transform transform 
        hover:scale-105 
        w-[100px] 
        h-[100px]
        border-2 border-white
    "
      >
        <p className="font-medium text-white mb-1 truncate">{name}</p>
        <div className="bg-white h-[1px] w-3/4 self-stretch mx-3"></div>{" "}
        <span className="font-bold text-indigo-700 bg-white p-1 mt-1 rounded-md">
          {10}
        </span>
      </button>
    </div>
  );
};

export default ListItem;
