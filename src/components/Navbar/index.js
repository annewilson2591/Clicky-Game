import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <navbar className="navbar">
            <ul>
                <li className="brand">
                    <a href="/">Puppy Clicky Game</a>
                </li>
                <li>
                    Score: {props.score} | Top Score: {props.highScore}
                </li>
            </ul>
        </navbar>
    );
}

export default Navbar;