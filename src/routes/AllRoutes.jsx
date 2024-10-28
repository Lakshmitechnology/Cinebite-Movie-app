import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages"


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList apiPath='movie/now_playing' title='home' />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/movies/popular" element={<MovieList apiPath='movie/popular' title='popular' />} />
            <Route path="/movies/top" element={<MovieList apiPath='movie/top_rated' title='top' />} />
            <Route path="/movies/upcomming" element={<MovieList apiPath='movie/upcoming' title='upcoming' />} />
            <Route path="/search" element={<Search apiPath='search/movie' />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}