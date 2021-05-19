import React from "react";
const ColorCard = ({ year, name, color, pantoneValue, colorId }) => {
    const copyColor = (color, id) => {
        navigator.clipboard.writeText(color);
        ToggleDocument(id)

        setTimeout(() => {
            ToggleDocument(id)
        }, 1000);
    };

    function ToggleDocument(id) {
        document.getElementById(id).classList.toggle("visible");
    }

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
