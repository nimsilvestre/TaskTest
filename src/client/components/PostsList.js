import React from "react";
import axios from "axios";
import Post from "./Post.js";

const postsID = "/posts";
const commentsID = "/comments";
var postsURL = `https://jsonplaceholder.typicode.com${postsID}`;
var commentsURL = `https://jsonplaceholder.typicode.com${commentsID}`;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

  componentDidMount() {
    axios.get(postsURL).then(res => {
      console.log("posts:", res);
      this.setState({ posts: res.data });
    });

    axios.get(commentsURL).then(res => {
      console.log("comments:", res);
      this.setState({ comments: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <Post comments={this.state.comments} posts={this.state.posts} />
      </div>
    );
  }
}
export default Posts;
