import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
    state = { on: false };

    render() {
        let wallClass = "wall off";
        if (this.state.on) {
            wallClass = "wall on";
        }
        return (
            <div className={wallClass}>
                <Switch />
                <Switch />
            </div>
        );
    }

    toggle = () => {
        this.setState({ on: !this.state.on });
    }

}

export default App;
