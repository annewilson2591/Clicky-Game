import React, { Component } from "react";

class Header extends Component {
    state = {

    };

    render() {
        return (
            <header>
                <h1>Clicky Game!</h1>
                <h2>Click on an image to earn points, but don't click any image more than once!</h2>
            </header>
        );
    }
}

export default Header;