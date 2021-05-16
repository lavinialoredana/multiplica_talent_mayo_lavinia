import React from "react";
import Button from "./Button";

const Footer = ({changePage, totalPage, page}) => {

    return (
        <div className="footer-container">
            <Button 
            btnText = "Anterior"
            isDisabled = { page === 1 ? "disabled" : " " }
            changePage = {changePage}
            totalPage = {totalPage}
            />

            <Button 
            btnText = "Siguiente"
            isDisabled = {page === totalPage ? " disabled" : " " }
            changePage = {changePage}
            totalPage = {totalPage}

            />
        </div>
    );
};
export default Footer;