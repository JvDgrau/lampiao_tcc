import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Book } from "@/types";

interface UserBook {
  user_book_id: number;
  user_id: string;
  book_id: string;
  status: string;
  personal_rating?: number;
  deleted_at?: string;
}

const getBooksByUserId = async (): Promise<Book[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    console.log(sessionError.message);
    return [];
  }

  const { data, error } = await supabase
    .from("user_books")
    .select("*")
    .eq("user_id", sessionData.session?.user.id);

  if (error) {
    console.log(error.message);
  }
  console.log(data, "Dados vindos da tabela user_books");
  return (data as any) || [];
};

export default getBooksByUserId;
