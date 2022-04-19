import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { APIKey } from "../../config/APIKey"

import { Container } from "./styles"

export function Details() {
  const { id } = useParams()

  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {

        const movie = {
          id,
          titles: data.title,
          sinopse: data.overview,
          image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
          releaseDate: data.release_date,
        }

        setMovie(movie)
      })
  }, [id])

  return (
    <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.titles}</h1>
          <span><strong>Sinopse:</strong> {movie.sinopse}</span>
          <span className='release-date'>Release date: {movie.releaseDate}</span>
          <Link to="/"><button>Go back</button></Link>
        </div>
      </div>
    </Container>
  )
}