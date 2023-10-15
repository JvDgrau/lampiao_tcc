import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Book } from "@/types";

const useLoadImage = (books: Book) => {
  const supabaseClient = useSupabaseClient();

  if (!books) {
    return null;
  }

  const { data: imageData } = supabaseClient.storage
    .from("images")
    .getPublicUrl(books.title);

  return imageData.publicUrl;
};

export default useLoadImage;
