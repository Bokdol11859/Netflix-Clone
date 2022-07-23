import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import MovieModal from "./MovieModal/MovieModal";

const Row = ({ title, id, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState([]);
  useEffect(() => {
    fetchMovieData();
  });

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    // console.log(request);
    setMovies(request.data.results);
  };

  const slide = (direction) => {
    console.log(direction);
    if (direction === "left") {
      document.getElementById(id).scrollLeft -= window.innerWidth - 80;
    } else {
      document.getElementById(id).scrollLeft += window.innerWidth + 80;
    }
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="slider">
        <div
          className="slider__arrow-left"
          onClick={() => {
            slide("left");
          }}
        >
          <span className="arrow">{"<"}</span>
        </div>

        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => {
                handleClick(movie);
              }}
            />
          ))}
        </div>

        <div
          className="slider__arrow-right"
          onClick={() => {
            slide("right");
          }}
        >
          <span className="arrow">{">"}</span>
        </div>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
};

export default Row;
