"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

import SidebarItem from "./SidebarItem";
import Box from "./Box";
import Library from "./Library";
import { useMemo } from "react";
import Image from "next/image";

interface SidebarProps {
  children: React.ReactNode;
  songs: Song[];
}

const Sidebar = ({ children, songs }: SidebarProps) => {
  const pathname = usePathname();
  const player = usePlayer();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Pesquisar",
        href: "/search",
        active: pathname === "/search",
      },
    ],
    [pathname]
  );

  return (
    <div
      className={twMerge(
        `
        flex 
        h-full
        `,
        player.activeId && "h-[calc(100%-80px)]"
      )}
    >
      <div
        className="
          hidden 
          md:flex 
          flex-col 
          gap-y-2 
          bg-black 
          h-full 
          w-[300px] 
          p-2
        "
      >
        <div className="flex justify-left align-left gap-y-4 px-5 py-4">
          <Image
            className="object-cover"
            width={200}
            height={50}
            src="/images/LampiaoLogo.png"
            alt="Lampiao logo"
          />
        </div>
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full flex flex-col justify-between">
          <Library songs={songs} />
          <div className="flex justify-center items-center mb-4">
            <Image
              width={200}
              height={50}
              src="/images/menina-paginometro.png"
              alt="Lampiao logo"
            />
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
