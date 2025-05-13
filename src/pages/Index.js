import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MovieNavBar from "../components/MovieNavBar";
import SingleMovie from "../components/SingleMovie";
import { Row } from "react-bootstrap";

const Index = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getdata();
  }, []);
  const [searchMovieText, setSearchMovieText] = useState("");

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://api.dynoacademy.com/test-api/v1/movies"
      );
      setMovies(response.data.moviesData);
    } catch (error) {
      console.log("cannot get data");
    }
  };

  return (
    <>
      <MovieNavBar />
      <div>
        <br />
        <input
          type="text"
          value={searchMovieText}
          placeholder="search movie-name"
          onChange={(e) => setSearchMovieText(e.target.value)}
        />
      </div>
      <br />
      <h3> Recommended Movies:</h3>

      <div style={{ padding: "10px", margin: "5px", background: "#e7e7e7" }}>
        <Row>
          {movies.map((el) => (
            <SingleMovie data={el} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Index;
