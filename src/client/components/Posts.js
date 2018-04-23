import React from "react";
import axios from "axios";

const postsID = "/posts";
const commentsID = "/comments";
const resultPOSTS = 10;
const resultCOMMENTS = 3;

var URL = "https://jsonplaceholder.typicode.com";
var postsURL = `https://jsonplaceholder.typicode.com${postsID}/?_limit=${resultPOSTS}`;
var commentsURL = `https://jsonplaceholder.typicode.com${commentsID}`;

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
    this.clicked = this.clicked.bind(this);
  }
  /*
  clicked() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`+`/`+posts.id+`comments?_limit=10`).then(res => {
      console.log("comments:", res);
      this.setState({ comments: res.data });
    });
  }

  ?_limit=10
  */

  clicked() {
    axios.get(`https://jsonplaceholder.typicode.com${postsID}`).then(res => {
      console.log("comments:", res);
      this.setState({
        comments: res.data
      });
    });
  }

  componentDidMount() {
    axios.get(postsURL).then(res => {
      console.log("posts:", res);
      this.setState({
        posts: res.data
      });
    });
  }

  render() {
    //console.log('VARIABLE WORKING!', postsURL);

    return (
      <div className="container">
        <div className="jumbotron-div col s12">
          <ul className="collection">
            {this.state.posts.map(post => (
              <div>
                <div
                  key={post.id}
                  className="collection-item left-align red lighten-3"
                  onClick={this.clicked}
                >
                  <h5>User ID: {post.id}</h5>
                  <p>Post: {post.body}</p>
                </div>
                <div className="jumbotron-div col s12">
                  <ul className="collection">
                    {this.state.comments.map(comment => (
                      <li
                        key={comment.id}
                        className="collection-item left-align purple lighten-2"
                      >
                        <p>Comment ID: {comment.postId}</p>
                        <p>Post: {comment.body}</p>
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
