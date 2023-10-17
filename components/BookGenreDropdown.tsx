"use client";
import { genres } from "@/app/contants";
import React, { useState, useEffect } from "react";

interface Props {
  onGenreChange: (genre: string) => void;
}

function BookGenreDropdown({ onGenreChange }: Props) {
  const [selectedGenre, setSelectedGenre] = useState(genres[0].value);

  useEffect(() => {
    onGenreChange(selectedGenre);
  }, [onGenreChange, selectedGenre]);

  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      {genres.map((genre) => (
        <option key={genre.value} value={genre.value}>
          {genre.label}
        </option>
      ))}
    </select>
  );
}

export default BookGenreDropdown;
