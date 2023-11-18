"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";
import Hamburger from "hamburger-react";
import { useState } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer();
  const router = useRouter();
  const authModal = useAuthModal();
  const [isOpen, setOpen] = useState(false);

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();

    if (error) {
      toast.error(error.message);
    }
  };

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      className={twMerge(
        `
        relative
        h-fit 
        bg-gradient-to-b 
        from-indigo-700 
        p-6
        `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-end z-100">
        <div className="md:hidden flex-grow">
          <Hamburger
            size={20}
            direction="right"
            color="#ffff"
            toggled={isOpen}
            toggle={handleMenuClick}
          />
          {isOpen && (
            <div className="absolute top-16 left-8 p-4 px-6 bg-white shadow z-10">
              <div className="font-semibold text-indigo-700">Lampião</div>
              <hr />
              <div className="mt-4 text-primary-300">
                <ul>
                  <li>
                    <a href={"/"} className="hover:underline text-gray-800">
                      Página Inicial
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/search"}
                      className="hover:underline text-gray-800"
                    >
                      Pesquisar
                    </a>
                  </li>
                  <li>
                    <a
                      href={"/myLibrary"}
                      className="hover:underline text-gray-800"
                    >
                      Sua Biblioteca
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                    bg-transparent 
                    text-neutral-300 
                    font-medium
                  "
                >
                  Cadastre-se
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-white px-6 py-2"
                >
                  Entrar
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
