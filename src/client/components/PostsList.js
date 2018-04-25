import React from "react";
import axios from "axios";

const postsID = "/posts";
const commentsID = "/comments";
var postsURL = `https://jsonplaceholder.typicode.com${postsID}`;
var commentsURL = `https://jsonplaceholder.typicode.com${commentsID}`;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      expanded: false,
      commentsToShow: 3
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    axios.get(commentsURL).then(res => {
      console.log("comments:", res);
      this.setState({ comments: res.data });
    });
  }

  componentDidMount() {
    axios.get(postsURL).then(res => {
      console.log("posts:", res);
      this.setState({ posts: res.data });
    });
  }

  render() {
    //console.log('VARIABLE WORKING!', postsURL);

    return (
      <div className="container">
        <div className="jumbotron-div col s12">
          <ul className="collection">
            {this.state.posts.slice(0, 10).map(post => (
              <div>
                <div key={post.id}>
                  <li onClick={this.clicked}>
                    <h5>User ID: {post.id}</h5>
                    <p>Post: {post.body}</p>
                  </li>
                </div>
                <div>
                  <ul className="collection">
                    {this.state.comments
                      .filter(comment => comment.postId === post.id)
                      .slice(0, 3)
                      .map(comment => (
                        <li key={comment.id}>
                          <p>Comment ID: {comment.postId}</p>
                          <p>Comment: {comment.body}</p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Posts;
