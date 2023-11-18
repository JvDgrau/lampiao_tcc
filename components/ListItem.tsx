"use client";

import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface ListItemProps {
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, href }) => {
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
    <div className="flex items-center justify-center p-2">
      <button
        onClick={onClick}
        className="
        flex 
        flex-col 
        items-center 
        justify-between 
        p-4 
        rounded-md 
        bg-white
        shadow-md 
        transition-transform transform 
        hover:scale-105 
        w-[120px] 
        h-[120px] 
        border-2 border-white
        cursor-pointer
        relative
      "
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-700 flex items-center justify-center z-10 rounded-t-md">
          <p className="font-medium text-white">{name}</p>
        </div>
        <span className="font-bold text-indigo-700 text-2xl mt-14 z-0">-</span>
      </button>
    </div>
  );
};

export default ListItem;
