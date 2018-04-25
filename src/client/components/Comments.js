import React from "react";

class Comments extends React.Component {
  render() {
    console.log("passing some props", this.props);
    return (
      <div>
        <h1>CommentsList</h1>
      </div>
    );
  }
}

export default Comments;
