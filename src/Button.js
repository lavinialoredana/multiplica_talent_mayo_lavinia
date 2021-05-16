import React from "react";

const Button = ({ btnText, isDisabled, changePage, totalPage }) => {
    return (
        <a onClick={changePage} className={`btn btn-info ${isDisabled}`}>
            {" "}
            {btnText}{" "}
        </a>
    );
};
export default Button;
