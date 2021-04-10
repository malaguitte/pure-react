import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const REDDIT_URL = "https://www.reddit.com";

class Reddit extends React.Component {
    constructor(props) {
        super(props);
        const initialState = { id: 1, title: "Loading..." };
        this.state = {
            posts: [initialState]
        }
    }

    componentDidMount() {
        const url = `${REDDIT_URL}/r/${this.props.subreddit}.json`;
        axios.get(url)
            .then(response => {
                const posts = response.data.data.children.map(obj => obj.data); // Extract data...
                this.setState({ posts });
            })
            .catch(err => {
                const errorState = { id: 1, title: `There was an issue. More details: ${err.message}` };
                const posts = [errorState];
                this.setState({ posts });
            });
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h1>{`r/${this.props.subreddit}`}</h1>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Reddit subreddit="ProgrammerHumor"/>,
    document.getElementById("root")
);