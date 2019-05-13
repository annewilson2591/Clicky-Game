import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectDog(props.id)}
                // className={props.score}
            />
                <img alt={props.id} src={props.image} />
        </div>
    </div>
);

export default ImageCard;