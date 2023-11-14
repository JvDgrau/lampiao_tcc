async function fetchBookThumbnail(bookId: any) {
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const thumbnail = data.volumeInfo?.imageLinks?.thumbnail;
    console.log(
      "🚀 ~ file: getBookThumbnail.ts:8 ~ fetchBookThumbnail ~ thumbnail:",
      thumbnail
    );

    if (thumbnail) {
      return thumbnail;
    } else {
      throw new Error("Thumbnail not found");
    }
  } catch (error) {
    console.error("Erro ao buscar a miniatura do livro:", error);
    return "/path/to/your/placeholder/image.png";
  }
}
export default fetchBookThumbnail;
