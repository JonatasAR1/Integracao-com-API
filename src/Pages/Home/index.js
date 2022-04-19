import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { APIKey } from "../../config/APIKey"

import { Container, Movie, MovieList } from "./styles"

export function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // consumir a api...

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])
  
  return (
    <Container>
      <h1>Movies</h1>

      <MovieList>
        {movies.map(movie => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></Link>
              <span>{movie.title}</span>
            </Movie>
          )
        })}
      </MovieList>

    </Container>
  )
}