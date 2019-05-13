import React from "react";
import "./style.css";

function Header() {
    return (
        <header className="header">
            <h1>Dog Clicky Game!</h1>
            <h2>Click on an image to earn points, but don't click any dog more than once!</h2>
        </header>
    );
}

export default Header;