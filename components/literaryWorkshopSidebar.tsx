"use client";

import { GiBookshelf } from "react-icons/gi";
import { useUser } from "@/hooks/useUser";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useRouter } from "next/navigation";

const LiteraryWorkshopSidebar = () => {
  const { user } = useUser();
  const subscribeModal = useSubscribeModal();
  const router = useRouter();
  const href = "literaryWorkshop";

  const onClick = () => {
    router.push(href);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div
          className="inline-flex items-center gap-x-2 cursor-pointer "
          onClick={onClick}
        >
          <GiBookshelf className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md hover:text-white">
            Oficina Literária
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiteraryWorkshopSidebar;
