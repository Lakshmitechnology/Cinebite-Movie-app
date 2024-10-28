import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { options } from "../utils/Options"
import BackupImg from '../assets/BackupImg.jpg'

const MovieDetails = () => {

  const params = useParams()

  const [data, setData] = useState({})

  const { id, original_title, overview, poster_path, vote_average, vote_count, genres } = data

  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : BackupImg;

  // console.log(params)
  useEffect(() => {
    document.title = `${original_title}/Cinibite`;
  })

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)

      const json = await response.json()
      setData(json)
      console.log(json)
    }
    fetchMovie()
  }, [])

  return (
    <main className="min-h-screen">
      <section className="flex justify-around flex-wrap py-5 items-ceneter ">
        <div className="max-w-sm pr-5">
          <img className="rounded" src={image} alt="" />
        </div>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {original_title}
          </h1>
          <p className="text-center lg:text-left">
            {overview}
          </p>
          <p className="my-7 flex flex-wrap justify-center lg:justify-start gap-4 ">
            {genres ? (genres.map((genre) => (
              <span key={genre.id} className="mr-2 border border-gray-700 rounded p-2">{genre.name}</span>
            ))) : ""}
          </p>

          <div className="flex item-center justify-center lg:justify-start">
            <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p>{vote_average}</p>
            <p>{vote_count} Review</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MovieDetails