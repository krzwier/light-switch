import React, { Component } from "react";

class App extends Component {
    state = { on: true };

    render() {
        let wallClass = "wall off";
        if (this.state.on) {
            wallClass = "wall on";
        }
        return (
            <div className={wallClass}>
                <div className="switch-plate">
                    <div className="screw" />
                    <div className="switch" onClick={this.toggle}>
                        <div className="switch-handle" />
                    </div>
                    <div className="screw" />
                </div>
            </div>
        );
    }

    toggle = () => {
        this.setState({ on: !this.state.on });
    }

}



export default App;
