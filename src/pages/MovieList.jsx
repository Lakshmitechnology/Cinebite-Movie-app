import Card from "../component/Card"
import UseFetach from "../hooks/UseFetach"
import { useEffect } from "react"




const MovieList = ({ apiPath, title }) => {
  // console.log(apiPath)

  const { data: movies } = UseFetach(apiPath)
  // console.log(movies)

  useEffect(() => {
    document.title = `${title}/Cinibite`;
  })


  return (
    <>
      <main className="min-h-screen">
        <section className="max-w-7xl mx-auto py-7 m-auto">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default MovieList