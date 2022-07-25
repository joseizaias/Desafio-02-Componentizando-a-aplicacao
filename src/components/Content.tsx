import { useEffect, useState } from "react";

import '../styles/content.scss';

import { api } from "../services/api";

import { MovieProps } from "../interfaces/MoviesProps";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

import { GenreResponseProps } from "../interfaces/GenreResponseProps";

export function Content(props: {selectedGenreId: number}) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const { selectedGenreId } = props

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div className="container">
      <Header title={selectedGenre.title} />
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>

  )
}