import React from "react";

class OneTimeButtonClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // The handler won't be called if the button
        // is disabled, so if we got here, it's safe
        // to trigger the click.
        this.props.onClick();

        // Ok, no more clicking
        this.setState({ clicked: true });
    }

    render() {
        return (
            <button
                onClick={this.handleClick}
                disabled={this.state.clicked}
            >
            You can click me once.
            </button>
        )
    }

}

export default OneTimeButtonClass;