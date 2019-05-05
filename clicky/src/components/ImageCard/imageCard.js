import React from "react";
import "./imageCard.css";

function ImageCard(props) {
    return (
        <div className="card">
            <div className="image-container">
                <img src={props.image} />
            </div>
            
            {/* rearrange function here */}
            <span onClick={() => props.rearrangeImage(props.id)} className="rearrange">
            </span>
        </div>
    );
}

export default ImageCard;