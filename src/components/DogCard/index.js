import React from "react";
import "./style.css";

function ImageCard(props) {
    return (
        <div 
            role="img"
            aria-label="image-card"
            onClick={() => props.handleClick(props.id)}
            style={{ backgroundImage: `url("${props.image}")`}}
            className={`image-card${props.shake ? " shake" : ""}`}
        />
    );
}

export default ImageCard;