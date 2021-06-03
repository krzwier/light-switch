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
                <Switch toggle={this.toggle}/>
                <Switch toggle={this.toggle}/>
            </div>
        );
    }

    toggle = () => {
        this.setState({ on: !this.state.on });
    }

}

export default App;
