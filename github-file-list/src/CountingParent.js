import React from "react";

class CountingParent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        this.handleClickAction = this.handleClickAction.bind(this);
        this.handleResetAction = this.handleResetAction.bind(this);
    }

    handleClickAction(action) {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    handleResetAction(action) {
        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickAction}>Click!</button>
                <button onClick={this.handleResetAction}>Reset Counter.</button>
                <span>Clicked {this.state.count} times</span>
            </div>
        );
    }
}

export default CountingParent;