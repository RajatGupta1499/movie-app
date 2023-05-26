import React from "react";

class MoviesSignOut extends React.Component {
  super()

  signOut = (props) => {
    const request = new Request("/api/me", {
      method: "DELETE",
    });

    fetch(request).then(() => {
      window.location = `/${this.props.location}`;
    });
  };

  render() {
    return (
      <button className="signIn" onClick={this.signOut}>
        Sign Out
      </button>
    );
  }
}

export default MoviesSignOut;
