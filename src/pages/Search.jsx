import { useSearchParams } from "react-router-dom"
import Card from "../component/Card"
import UseFetach from "../hooks/UseFetach"
import { useEffect } from "react"

const Search = ({ apiPath }) => {

  const [searchParames] = useSearchParams()
  const queryTerme = searchParames.get("q")

  const { data: movies } = UseFetach(apiPath, queryTerme)


  useEffect(() => {
    document.title = `${queryTerme}/Cinibite`;
  })

  // console.log(movies)
  // console.log(queryTerme)
  // console.log(apiPath)
  return (
    <main className="min-h-screen">
      <section className="max-w-7xl m-auto py-5">
        <p className="text-3xl text-gray-800">

          {movies.length === 0 ? `No resul Found for(${queryTerme})` : `Result for (${queryTerme})`}
        </p>
      </section>
      <section className="max-w-7xl m-auto py-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Search
