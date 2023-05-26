import { useNavigate } from "react-router-dom";
import Rate from "./Rate";

function MoviesOverview(props) {
  let navigate = useNavigate();

  function handleExplore() {
    navigate(`/explore-movies/${props.id}`);
  }

  return (
    <div className="movie-over">
      <h2>Overview</h2>
      <h4>{props.release_date}</h4>
      <p>{props.overview}</p>
      <div className="buttonContainer">
        <Rate value="voteButton" action="Rate" />
        <button className="exploreMovie" onClick={handleExplore}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default MoviesOverview;
