import React, { Component } from "react";

class Navbar extends Component {
    state = {

    };

    render() {
        return (
            <nav class="navbar">
                <ul>
                    <li class="brand">
                        <a href="">Clicky Game</a>
                    </li>
                    <li class>Click an image to begin!</li>
                    <li>
                        "Score: "
                        "0"
                        " | Top Score: "
                        "0"
                    </li>
                </ul>
            </nav>
        );
    }
}