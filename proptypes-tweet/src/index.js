import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import PropTypes from "prop-types";
import Tail from "./Tail";
import Envelope from "./Envelope";
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
Message.propTypes = {
    text: PropTypes.string
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
Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
};

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}
Time.propTypes = {
    time: PropTypes.string
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
RetweetButton.propTypes = {
    count: PropTypes.number
};

const LikeButton = ({ count }) => {
    return (
        <span className="like-button">
            <i className="fa fa-heart"></i>
            <Count class={"like-button"} count={count} />
        </span>
    )
};
LikeButton.propTypes = {
    count: PropTypes.number
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

const personData = {
    name: "Full Name",
    streetAdress: "123 Fake St.",
    cityStatePostalCode: "Boston, MA 02118"
};

const personData2 = {
    name: "Full Name 2",
    streetAdress: "456 Another St.",
    cityStatePostalCode: "New York City, NY"
};

ReactDOM.render(
    <>
        <Tweet tweet={tweetData} />
        <Tail numberOfElementsToRender={3}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
        </Tail>
        <Envelope fromPerson={personData} toPerson={personData2} />
    </>,
    document.getElementById("root")
);