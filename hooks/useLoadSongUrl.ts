import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Books } from "@/types";

const useLoadSongUrl = (books: Books) => {
  const supabaseClient = useSupabaseClient();

  if (!books) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(books.id);

  return songData.publicUrl;
};

export default useLoadSongUrl;
