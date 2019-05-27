import React from "react";
import Scores from "../Scores";
import "./style.css";

function NavScores(props) {
    return (
        <nav className="navscore">
            <ul>
                <li className="brand">
                    <a href="/">Clicky Game</a>
                </li>
                <Scores score={props.score} highScore={props.highScore} />
                <li>
                    Score: {props.score} | High Score: {props.highScore}
                </li>
            </ul>
        </nav>
    );
}

export default NavScores;