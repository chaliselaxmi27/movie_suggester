import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import MovieNavBar from "../components/MovieNavBar";
import { Button, Card, Container } from "react-bootstrap";

const ViewMovie = () => {
  const getparams = useParams();
  const getID = getparams.id;
  const [moviedata, setMovieData] = useState({});
  useEffect(() => {
    SingleMovie();
  }, []);

  const SingleMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getID}`
      );
      setMovieData(response.data.singleMovieData);
    } catch (error) {
      alert("not found data");
    }
  };
  return (
    <>
      <MovieNavBar />

      <Container>
        <h1 className="text-info">{moviedata.name}</h1> <br />
        Info: {moviedata.info} <br /> <br />
        <Card body>{moviedata.desc}</Card>
        <br />
        <Card body>
          {" "}
          Image: <br />
          <img
            src={moviedata.image}
            alt="Movie image"
            style={{ height: "200px" }}
          />
        </Card>
        <br />
        <Card body> Rating: {moviedata.rating} </Card> <br />
        <Link to="/">
          <Button className="bg-dark">Go Back!</Button>
        </Link>{" "}
        <br />
        <br />
      </Container>
    </>
  );
};

export default ViewMovie;
