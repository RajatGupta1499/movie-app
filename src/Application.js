import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App";
import ExploreMovies from "./components/ExploreMovies";
import UsersApp from "./components/UsersApp";
import UserExploreMovies from "./components/UserExploreMovies";

function Application() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/explore-movies/:id" element={<ExploreMovies />} />
        <Route exact path="/user-profile" element={<UsersApp />} />
        <Route exact path="/user-profile/:id" element={<UserExploreMovies />} />
      </Routes>
    </Router>
  );
}

export default Application;
