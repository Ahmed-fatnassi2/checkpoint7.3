import React, { useState } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import ReactDOM from "react-dom";
//import ReactDOM from "react-dom";
//import StarRatingComponent from "react-star-rating-component";
import "./App.css";
//import Filter from "./components/Filter.js";
import MovieList from "./components/MovieList";
import NavBar from "./components/Navbar";
import AddMovie from "./components/AddMovie";
import Details from "./components/Spesf";
//import Home from "./components/Home";

const App = () => {
    const [Series, setSeries] = useState([
        {
            name: "Breaking bad",
            rate: 9,
            description:
                "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
            posterUrl:
                "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",

            trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY",

            id: 1,
        },
        {
            name: "Peaky Blinders",
            rate: 8,
            description:
                "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
            posterUrl:
                "https://media.gqmagazine.fr/photos/5eea3b93caa5a09c5304ad89/3:4/w_1692,h_2256,c_limit/peaky%20blinders.jpg",
            trailerUrl: "https://www.youtube.com/embed/oVzVdvGIC7U",

            id: 2,
        },
        {
            name: "The Punisher",
            rate: 7,
            description:
                "After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as The Punisher with only one goal in mind: to avenge them.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqtJs5KBL4RgbazVuF1lsskP5TsNr3XOSg0apBWpHwb4JEPSj8MIDaywGIao6ZZOpTL4&usqp=CAU",
            trailerUrl: "https://www.youtube.com/embed/s4QV6OZdmWY",

            id: 3,
        },
        {
            name: "The Blacklist",
            rate: 8,
            description:
                "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
            posterUrl:
                "https://fr.web.img5.acsta.net/pictures/210/051/21005165_20130808113654378.jpg",
            trailerUrl: "https://www.youtube.com/embed/JGBIimq1I3A",

            id: 4,
        },
    ]);

    const [newMovie, setNewMovie] = useState({
        name: "",
        rate: 1,
        description: "",
        posterUrl: "",
        trailerUrl: "",
        id: 5,
    });

    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };
    const handleShow = () => {
        setShow(true);
    };

    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(1);
    const handleSubmit = () => {
        setSeries([...Series, newMovie]);
        setShow(false);
    };

    return (
        <div className="App">
            <NavBar
                setSearch={setSearch}
                rate={rate}
                setRate={setRate}
                handleShow={handleShow}
            />

            <Switch>
                {show ? (
                    <AddMovie
                        show={show}
                        setShow={setShow}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        newMovie={newMovie}
                    />
                ) : null}
                <Route exact path="/">
                    <MovieList Series={Series} search={search} rate={rate} />
                </Route>

                <Route path="/details/:id">
                    <Details Series={Series} />
                </Route>
            </Switch>
            <footer></footer>
        </div>
    );
};

export default App;
//     <Link to="/test">
//         <div>hrbvnrtj</div>
//   </Link>
// <Route path="/test">
//   <div>test</div>
// </Route>
//

//
//
//<Route exact path="/" component={Home}>
//  <Route path={"home"} component={Home}>
//      <Link to={"/home"}>home </Link>
//   </Route>
//   </Route>
//
//
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/HhesaQXLuRY"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
></iframe>;
