import React from "react";
import { useNavigate, useParams } from "react-router";
import Login from "./Login";
import MoviesByIdInfo from "./MoviesByIdInfo";

function ExploreMovies() {
  let navigate = useNavigate();

  function handleExplore() {
    navigate("/");
  }

  // Movie Id
  const dataId = useParams();

  return (
    <>
      <header>
        <button className="homeMovies" onClick={handleExplore}>
          Home
        </button>
        <Login value="signIn" action="Sign In" />
      </header>
      <MoviesByIdInfo id={dataId.id} />
    </>
  );
}

export default ExploreMovies;
