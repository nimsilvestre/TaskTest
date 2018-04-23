import React, { Component } from "react";
import Posts from "./components/Posts.js";
import Comments from "./components/Comments.js";

class App extends React.Component {
  render() {
    return (
      <div>

        <Posts />

        <Comments />
      </div>
    );
  }
}

export default App;
