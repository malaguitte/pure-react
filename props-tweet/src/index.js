import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./index.css";

function Tweet( {tweet} ) {
    return(
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author author={tweet.author} /> <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar({ hash }) {
    const url = `https://gravatar.com/avatar/${hash}`
    return (
        <img 
            src={url}
            className="avatar"
            alt="avatar">
        </img>
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, username } = author;
    return (
        <span className="author">
            <span className="name">
                {name}
            </span>
            <span className="username">
                @{username}
            </span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}

const ReplyButton = () => (<i className="fa fa-reply reply-button"></i>);

const RetweetButton = ({ count }) => {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet"></i>
            <Count class={"retweet-count"} count={count} />
        </span>
    )
};

const LikeButton = ({ count }) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart"></i>
            <Count class={"like-button"} count={count} />
        </span>
    )
};

const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"></i>);

function Count({ count, className }) {
    return count > 0 
        ? (<span className={className}>{count}</span>)
        : null;    
}

const tweetData = {
    message: "Something about cats",
    gravatar: "xyz",
    author: {
        username: "catperson",
        name: "Cat Person"
    },
    likes: 2,
    retweets: 17,
    timestamp: "2016-07-30 21:24:37"
};

function customValidator(props, propName, componentName) {
    if (props[propName].length !== 3) {
        return new Error(`Invalid prop ${propName} supplied to ${componentName}. Lenght is not 3.`);
    }
}

const CustomTest = ({ myCustomProp }) => {
    return (<span>{myCustomProp}</span>);
}
CustomTest.propTypes = {
    myCustomProp: customValidator
}

ReactDOM.render(
    <Tweet tweet={tweetData} />,
    document.getElementById("root")
);