import React from "react";
import { useNavigate, useParams } from "react-router";
import UsersMoviesByIdInfo from "./UsersMoviesByIdInfo";
import MoviesSignOut from "./MoviesSignOut";

function UserExploreMovies() {
  let navigate = useNavigate();

  function handleExplore() {
    navigate("/user-profile");
  }

  // Movie Id
  const dataId = useParams();

  return (
    <>
      <header>
        <button className="homeMovies" onClick={handleExplore}>
          Home
        </button>
        <MoviesSignOut location={`explore-movies/${dataId.id}`} />
      </header>
      <UsersMoviesByIdInfo id={dataId.id} />
    </>
  );
}

export default UserExploreMovies;
