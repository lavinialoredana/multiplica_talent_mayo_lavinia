import React from "react";
const ColorCard = ({ year, name, color, pantoneValue, colorId }) => {
    const copyColor = (color, id) => {
        navigator.clipboard.writeText(color);
        document.getElementById(id).classList.toggle("visible");

        setTimeout(() => {
            document.getElementById(id).classList.toggle("visible");
        }, 1000);
    };

    return (
        <div
            className="color-card-container border"
            style={{ backgroundColor: color }}
            onClick={() => copyColor(color, colorId)}
        >
            <p> {year} </p>
            <div className="color-code-container">
                <p> {name} </p>
                <h3> {color} </h3>
            </div>
            <h2 className="message-on-hover"> Click to copy</h2>
            <h3 className="message-on-click" id={colorId}>
                Copied!
            </h3>
            <p>{pantoneValue}</p>
        </div>
    );
};
export default ColorCard;
