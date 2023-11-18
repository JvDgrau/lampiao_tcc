"use client";
import { fanficGenres } from "@/app/contants";
import React, { useState, useEffect } from "react";

interface Props {
  onGenreChange: (genre: string) => void;
}

function FanficsGenreDropdown({ onGenreChange }: Props) {
  const [selectedGenre, setSelectedGenre] = useState(fanficGenres[0].value);

  useEffect(() => {
    onGenreChange(selectedGenre);
  }, [onGenreChange, selectedGenre]);

  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
      className="bg-gray-800 text-white p-1 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:from-indigo-800 focus:border-transparent"
    >
      {fanficGenres.map((genre) => (
        <option key={genre.value} value={genre.value}>
          {genre.label}
        </option>
      ))}
    </select>
  );
}

export default FanficsGenreDropdown;
