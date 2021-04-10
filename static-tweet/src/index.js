import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
    return(
        <div className="tweet">
            <Avatar />
            <div className="content">
                <Author /> <Time />
                <Message />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img 
            src="https://gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar">
        </img>
    );
}

function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function Author() {
    return (
        <span className="author">
            <span className="name">
                Author's name.
            </span>
            <span className="handle">
                @username
            </span>
        </span>
    );
}

const Time = () => (<span className="time">3h ago</span>);

const ReplyButton = () => (<i className="fa fa-reply reply-button"></i>);

const RetweetButton = () => (<i className="fa fa-retweet retweet-button"></i>);

const LikeButton = () => (<i className="fa fa-heart like-button"></i>);

const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"></i>);

ReactDOM.render(
    <Tweet />,
    document.getElementById("root")
);