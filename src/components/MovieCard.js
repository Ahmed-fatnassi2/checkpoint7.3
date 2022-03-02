import React from "react";
import { Link, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import StarRatingComponent from "react-star-rating-component";
//import App from "../App";
import Details from "./Spesf";

const MovieCard = ({ movie }) => {
    //const Details = (movie) => {
    //  return (
    //     <div>
    //         <h3>{movie.description}</h3>
    //     <video controls>
    //         <source src={movie.trailerUrl} types="" />
    //      </video>
    //   </div>
    //  );
    // };
    return (
        <div>
            <Link
                to={`/details/${movie.id}`}
                element={<Details movie={movie} />}
            >
                <img src={movie.posterUrl} alt="movie.jpg" width={150} />
            </Link>
            <h3 style={{ color: "white" }}>{movie.name}</h3>

            <StarRatingComponent
                name="rate3"
                editing={false}
                starCount={10}
                value={movie.rate}
            />
        </div>
    );
};

export default MovieCard;
//<h3 style={{ color: "grey" }}>{movie.description}</h3>
//<Link to="details" element={<Details />}>
//       <img src={movie.posterUrl} alt="movie.jpg" width={150} />
//  </Link>
