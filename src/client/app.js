import React, { Component } from "react";
import Titles from "./components/Title.js";
import Posts from "./components/Posts.js";
import Comments from "./components/Comments.js";


class App extends React.Component {

  render() {
    return (
      <div>
        <Titles />

        <Posts />

        <Comments />
      </div>
    );
  }
}

export default App;
