import React from "react";
import Button from "./Button";

const Footer = ({ changePage, totalPage, page }) => {
    function CreateButton(buttonText, limit) {
        return (
            <Button
                btnText={buttonText}
                isDisabled={page === limit ? "disabled" : " "}
                changePage={changePage}
                totalPage={totalPage}
            />)
    }

    return (
        <div className="footer-container">
            {CreateButton("Anterior", 1)}
            {CreateButton("Siguiente", totalPage)}
        </div>
    );
};
export default Footer;
