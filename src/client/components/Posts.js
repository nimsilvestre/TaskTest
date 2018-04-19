import React from "react";
import axios from "axios";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      console.log(res);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div>
        <p>Post Component</p>
        <ul>{this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
      </div>
    );
  }
}

export default Posts;
