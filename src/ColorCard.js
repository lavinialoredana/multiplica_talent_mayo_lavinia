import React from "react";
const ColorCard = ({ year, name, color, pantoneValue }) => {
    return (
        <div className="color-card-container border" style={{ backgroundColor: color }}>
            <p> {year} </p>
            <div className="color-code-container">
                <p> {name} </p>
                <h3> {color} </h3>
            </div>
            <h2 className="message-on-hover"> Click to copy</h2>
            <p>{pantoneValue}</p>
        </div>
    );
};
export default ColorCard;
