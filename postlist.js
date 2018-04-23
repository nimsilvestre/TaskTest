class Postlist extends React.Component {
    state = {
        posts: [],
        comments: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            const posts = res.data;
            this.setState({ posts });
        });

        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
            const comments = res.data;
            this.setState({ comments });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron-div col s12">
                    <ul className="collection">
                        {this.state.posts.map(post =>
                            (
                                <div>
                                    <li
                                        key={post.id}
                                        className="collection-item left-align red lighten-3"
                                    >
                                        <h5>User ID: {post.id}</h5>
                                        <p>Post: {post.body}</p>
                                    </li>
                                    <div className="jumbotron-div col s12">
                                        <ul className="collection">
                                            {
                                                this.state.comments.map(comment => (
                                                    <li
                                                        key={comment.id}
                                                        className="collection-item left-align purple lighten-2"
                                                    >
                                                        <p>User ID: {comment.id}</p>
                                                        <p>Post: {comment.body}</p>
                                                    </li>
                                                )
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Postlist name="World" />,
    document.getElementById('container')
);
