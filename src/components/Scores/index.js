import React, { Component } from "react";
import "./style.css";

class NavScore extends Compnent {
    state = {
        message: "",
        animate: false
    };

    componentDidUpdate({ score, highScore }, prevState) {
        const newState = { animate: true };

        if (score === 0 && highScore === 0) {
            newState.message = "";
        } else if (score === 0 && highScore > 0) {
            newState.message = "incorrect";
        } else {
            newState.message = "correct";
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            this.setState(newState);
        }
    }

    renderMessage = () => {
        switch (this.state.message) {
        case "correct":
            return "You guessed correctly!";
        case "incorrect":
            return "Oh no! You guessed incorrectly!"
        default: 
            return "Click a pup to begin!";
        }
    };

    render() {
        return (
            <li 
                className={this.state.animate ? this.state.message : ""}
                onAnimationEnd={() => this.setState({ animate: false })}
            >
                {this.renderMessage()}
            </li>
        );
    }
}

export default NavScore;