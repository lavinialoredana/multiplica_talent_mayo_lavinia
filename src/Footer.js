import React from "react";
import Button from "./Button";

const Footer = () => {

    return (
        <div className="footer-container">
            <Button 
            btnText = "Anterior"
            />

            <Button 
            btnText = "Siguiente"
            />
        </div>
    );
};

export default Footer;