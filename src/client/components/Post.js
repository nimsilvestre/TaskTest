import React from "react";
import { Container, Header } from "semantic-ui-react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComents: false,
      itemsToShow: 3,
      expanded: false
    };
    this.showMoreBtn = this.showMoreBtn.bind(this);
  }

  showMoreBtn() {
    this.state.itemsToShow === 3
      ? this.setState({
          itemsToShow: this.props.comments.length,
          expanded: true
        })
      : this.setState({ itemsToShow: 10, expanded: false });
  }

  render() {
    console.log("Post and Comments:", this.props);

    return (
      <div>
        <div className="jumbotron-div col s12">
          <ul className="collection">
            {this.props.posts.slice(0, 10).map(post => (
              <div>
                <Container
                  text
                  key={post.id}
                  onClick={() => this.setState({ showComments: true })}>
                  <Header as="h1" textAlign="center">
                    Post Id: {post.id}
                  </Header>
                  <p>Post: {post.body}</p>
                </Container>
                <div>
                  <ul className="collection">
                    {this.state.showComments
                      ? this.props.comments
                          .filter(comment => comment.postId === post.id)
                          .slice(0, this.state.itemsToShow)
                          .map(comment => (
                            <li key={comment.id}>
                              <p>Comment ID: {comment.postId}</p>
                              <p>Comment: {comment.body}</p>
                            </li>
                          ))
                      : ""}
                    <button onClick={this.showMoreBtn}>
                      {this.state.expanded ? (
                        <span>Show less</span>
                      ) : (
                        <span>Show more</span>
                      )}
                    </button>
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

export default Post;
