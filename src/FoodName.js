import React from "react";
import App from "./App";



class FoodName extends App.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Write name of main ingredience"
                />
            </div>
        );
    }
}

export default FoodName;