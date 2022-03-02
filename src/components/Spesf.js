import React from "react";
import "./spesf.css";
import { useParams, useHistory, Link } from "react-router-dom";
const Details = ({ Series }) => {
    const { id } = useParams();

    const history = useHistory();
    const index = 0;

    function handleDetails() {
        history.push("/details");
    }
    const filtred = Series.filter((el) => el.id === Number(id));
    console.log(id, filtred);
    return (
        <div className="details">
            <h3 style={{ color: "grey" }}>{filtred[0].description} </h3>
            {/* {filtred[0].trailerUrl} */}
            <iframe
                width="560"
                height="315"
                src={filtred[0].trailerUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <br />
            <Link to="/">
                <button type="button">go home</button>
            </Link>
        </div>
    );
};
export default Details;
//<video controls>
//<source src={movie.trailerUrl} types="" />
//</video>
//
//
//<h3 style={{ color: "grey" }}>{Series.description}</h3>
//          <video controls>
//            <source src={Series.trailerUrl} types="" />
//      </video>
//<video controls>
//         {filtred.trailerUrl};
//         {/* <source src={filtred[0].trailerUrl} type="video/MP4" /> */}
//   </video>
{
    /* <iframe width="560" height="315" src="https://www.youtube.com/embed/hDNNmeeJs1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
