import React from "react";

class House extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: {
                kitchen: true,
                bathroom: false,
                livingRoom: true,
                bedroom: false,
            }
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(room) {
        this.setState(previousState => ({
            rooms: {
                ...previousState.rooms,
                [room]: !previousState.rooms[room]
            }
        }));
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick("kitchen")}>On/Off Switch</button>
                <span>Kitchen light is {this.state.rooms.kitchen ? "on" : "off"} </span><br/>
                <button onClick={() => this.handleClick("bathroom")}>On/Off Switch</button>
                <span>Bathroom light is {this.state.rooms.bathroom ? "on" : "off"} </span><br/>
                <button onClick={() => this.handleClick("livingRoom")}>On/Off Switch</button>
                <span>Living Room light is {this.state.rooms.livingRoom ? "on" : "off"} </span><br/>
                <button onClick={() => this.handleClick("bedroom")}>On/Off Switch</button>
                <span>Bedroom light is {this.state.rooms.bedroom ? "on" : "off"} </span><br/>
            </div>
        );
    }
}

export default House;