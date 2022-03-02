import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import Details from "./Spesf";
const MovieList = ({ Series, search, rate, Details }) => {
    const filterMovies = Series.filter(
        (movie) =>
            movie.name.toLowerCase().includes(search.toLowerCase()) &&
            movie.rate >= rate
    );
    return (
        <div className="movie">
            {filterMovies.map((movie, index) => {
                return <MovieCard movie={movie} key={index} />;
            })}
        </div>
    );
};

export default MovieList;
