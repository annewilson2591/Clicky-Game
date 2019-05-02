import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img alt={props.image} />
            </div>
            
            {/* rearrange function here */}
            <span onClick={() => props.rearrangeImage(props.id)} className="rearrange">
            </span>
        </div>
    );
}

export default ImageCard;