import React, { Component } from "react";

class Navbar extends Component {
    state = {

    };

    render() {
        return (
            <nav class="navbar">
                <ul>
                    <li class="brand">
                        <p>Clicky Game</p>
                    </li>
                    <li class>Click an image to begin!</li>
                    <li>
                        "Score: "
                        {/* {props.score} */}
                        " | Top Score: "
                        "0"
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;